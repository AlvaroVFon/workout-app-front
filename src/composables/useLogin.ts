import { ref, computed } from 'vue'
import type { LoginCredentials, User, LoginResponse } from '@/types/auth'
import apiService from '@/services/api.service'
import { useLocalStorage } from '@/composables/useLocalStorage'
import { Endpoint } from '@/utils/endpoints.enum'
import { ErrorMessage } from '@/utils/errors.enum'

const user = ref<User | null>(null)
const token = ref<string | null>(null)
const refreshToken = ref<string | null>(null)
const isLoading = ref(false)
const success = ref(false)
const error = ref<string | null>(null)

export function useLogin() {
  const storage = useLocalStorage()
  const isAuthenticated = computed(() => !!token.value)

  const login = async (credentials: LoginCredentials): Promise<void> => {
    try {
      isLoading.value = true
      error.value = null

      const response = await apiService.post<LoginResponse>(Endpoint.LOGIN, credentials)

      if (response.statusCode !== 200 || !response.data?.token) {
        error.value = ErrorMessage.INVALID_CREDENTIALS
        success.value = false
        return
      }

      await manageLoginValues(response.data)
      success.value = true
    } catch {
      error.value = ErrorMessage.INVALID_CREDENTIALS
      isLoading.value = false
      success.value = false
    } finally {
      isLoading.value = false
    }
  }

  const logout = async () => {
    setLogoutValues()
  }

  const initializeAuth = () => {
    const { token: savedToken, refreshToken: savedRefreshToken, user: savedUser } = getLoginValues()

    if (savedToken && savedRefreshToken && savedUser) {
      token.value = savedToken
      refreshToken.value = savedRefreshToken
      user.value = JSON.parse(savedUser)
    }
  }

  const clearError = () => {
    error.value = null
  }

  const manageLoginValues = async (loginResponse: LoginResponse) => {
    await setLoginValues(loginResponse)
    await storageLoginValues(loginResponse)
  }

  const getLoginValues = (): {
    token: string | null
    refreshToken: string | null
    user: string | null
  } => {
    return {
      token: storage.get('token'),
      refreshToken: storage.get('refresh_token'),
      user: storage.get('user'),
    }
  }

  const setLoginValues = async (loginValues: LoginResponse) => {
    const {
      user: userFromResponse,
      token: tokenFromResponse,
      refreshToken: refreshTokenFromResponse,
    } = loginValues

    user.value = userFromResponse
    token.value = tokenFromResponse
    refreshToken.value = refreshTokenFromResponse
  }

  const unsetLoginValues = () => {
    user.value = null
    token.value = null
    refreshToken.value = null
  }

  const setLogoutValues = () => {
    unsetLoginValues()
    unsetStorageLoginValues()
  }

  const storageLoginValues = async (loginValues: LoginResponse) => {
    const { user: userData, token: accessToken, refreshToken: newRefreshToken } = loginValues

    storage.set('token', accessToken)
    storage.set('refresh_token', newRefreshToken)
    storage.set('user', JSON.stringify(userData))
  }

  const unsetStorageLoginValues = () => {
    storage.remove('token')
    storage.remove('refresh_token')
    storage.remove('user')
  }

  return {
    user: computed(() => user.value),
    token: computed(() => token.value),
    refreshToken: computed(() => refreshToken.value),
    isAuthenticated,
    isLoading: computed(() => isLoading.value),
    error: computed(() => error.value),
    login,
    logout,
    initializeAuth,
    clearError,
  }
}
