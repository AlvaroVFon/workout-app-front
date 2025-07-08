import { ref, computed } from 'vue'
import type {
  LoginCredentials,
  RegisterCredentials,
  User,
  LoginResponse,
  RegisterResponse,
} from '@/types/auth'
import apiService from '@/services/api.service'
import { useLocalStorage } from '@/composables/useLocalStorage'

const user = ref<User | null>(null)
const token = ref<string | null>(null)
const refreshToken = ref<string | null>(null)
const isLoading = ref(false)
const error = ref<string | null>(null)

export function useAuth() {
  const storage = useLocalStorage()
  const isAuthenticated = computed(() => !!token.value)

  const login = async (credentials: LoginCredentials): Promise<void> => {
    try {
      isLoading.value = true
      error.value = null

      const response = await apiService.post<LoginResponse>('/auth/login', credentials)

      if (response.statusCode !== 200 || !response.data?.token) {
        error.value = 'Invalid credentials'
        user.value = null
        token.value = null
        refreshToken.value = null
        return
      }

      const { user: userData, token: accessToken, refreshToken: newRefreshToken } = response.data

      user.value = userData
      token.value = accessToken
      refreshToken.value = newRefreshToken

      storage.set('token', accessToken)
      storage.set('refresh_token', newRefreshToken)
      storage.set('user', JSON.stringify(userData))
    } catch {
      error.value = 'Invalid credentials'
    } finally {
      isLoading.value = false
    }
  }

  const register = async (credentials: RegisterCredentials) => {
    try {
      isLoading.value = true
      error.value = null

      const response = await apiService.post<RegisterResponse>('/auth/register', credentials)

      if (response.statusCode !== 200 && response.statusCode !== 201) {
        error.value = response.message || 'Registration failed'
        return { success: false }
      }

      const { user: userData, token: accessToken, refreshToken: newRefreshToken } = response.data

      user.value = userData
      token.value = accessToken
      refreshToken.value = newRefreshToken

      storage.set('token', accessToken)
      storage.set('refresh_token', newRefreshToken)
      storage.set('user', JSON.stringify(userData))

      return { success: true, user: userData, token: accessToken, refreshToken: newRefreshToken }
    } catch (err) {
      error.value = err instanceof Error ? err.message : 'Registration failed'
      throw err
    } finally {
      isLoading.value = false
    }
  }

  const logout = async () => {
    user.value = null
    token.value = null
    refreshToken.value = null
    error.value = null

    storage.remove('token')
    storage.remove('refresh_token')
    storage.remove('user')
  }

  const initializeAuth = () => {
    const savedToken = storage.get('token')
    const savedRefreshToken = storage.get('refresh_token')
    const savedUser = storage.get('user')

    if (savedToken && savedRefreshToken && savedUser) {
      try {
        token.value = savedToken
        refreshToken.value = savedRefreshToken
        user.value = JSON.parse(savedUser)
      } catch {
        logout()
      }
    }
  }

  //TODO: implement this logic when backend supports token refresh
  const refreshAuthToken = async () => {
    try {
      if (!refreshToken.value) {
        throw new Error('No refresh token available')
      }

      const response = await apiService.post<{ token: string; refreshToken: string }>(
        '/auth/refresh',
        {
          refreshToken: refreshToken.value,
        },
      )

      if (response.statusCode !== 200) {
        throw new Error('Failed to refresh token')
      }

      const { token: newToken, refreshToken: newRefreshToken } = response.data

      token.value = newToken
      refreshToken.value = newRefreshToken

      storage.set('token', newToken)
      storage.set('refresh_token', newRefreshToken)
    } catch (err) {
      logout()
      throw err
    }
  }

  const clearError = () => {
    error.value = null
  }

  return {
    user: computed(() => user.value),
    token: computed(() => token.value),
    refreshToken: computed(() => refreshToken.value),
    isAuthenticated,
    isLoading: computed(() => isLoading.value),
    error: computed(() => error.value),
    login,
    register,
    logout,
    initializeAuth,
    refreshAuthToken,
    clearError,
  }
}
