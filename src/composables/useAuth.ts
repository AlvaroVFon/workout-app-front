import { ref, computed } from 'vue'
import type { LoginCredentials, RegisterCredentials, User } from '@/types/auth'

const user = ref<User | null>(null)
const token = ref<string | null>(null)
const isLoading = ref(false)
const error = ref<string | null>(null)

export function useAuth() {
  const isAuthenticated = computed(() => !!token.value)

  const login = async (credentials: LoginCredentials) => {
    try {
      isLoading.value = true
      error.value = null

      console.log('Logging in with:', credentials)

      await new Promise((resolve) => setTimeout(resolve, 2000))

      const mockUser: User = {
        id: '1',
        email: credentials.email,
        name: 'Test User',
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
      }

      const mockToken = 'mock-jwt-token'

      user.value = mockUser
      token.value = mockToken

      localStorage.setItem('auth_token', mockToken)
      localStorage.setItem('user', JSON.stringify(mockUser))

      return { user: mockUser, token: mockToken }
    } catch (err) {
      error.value = err instanceof Error ? err.message : 'Login failed'
      throw err
    } finally {
      isLoading.value = false
    }
  }

  const register = async (credentials: RegisterCredentials) => {
    try {
      isLoading.value = true
      error.value = null

      // Simular llamada a API
      console.log('Registering with:', credentials)

      // TODO: Reemplazar con llamada real a la API
      await new Promise((resolve) => setTimeout(resolve, 2000))

      // Simular respuesta exitosa
      const mockUser: User = {
        id: '1',
        email: credentials.email,
        name: `${credentials.name} ${credentials.lastName}`,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
      }

      const mockToken = 'mock-jwt-token'

      user.value = mockUser
      token.value = mockToken

      // Guardar en localStorage
      localStorage.setItem('auth_token', mockToken)
      localStorage.setItem('user', JSON.stringify(mockUser))

      return { user: mockUser, token: mockToken }
    } catch (err) {
      error.value = err instanceof Error ? err.message : 'Registration failed'
      throw err
    } finally {
      isLoading.value = false
    }
  }

  const logout = () => {
    user.value = null
    token.value = null
    error.value = null

    localStorage.removeItem('auth_token')
    localStorage.removeItem('user')
  }

  const initializeAuth = () => {
    const savedToken = localStorage.getItem('auth_token')
    const savedUser = localStorage.getItem('user')

    if (savedToken && savedUser) {
      try {
        token.value = savedToken
        user.value = JSON.parse(savedUser)
      } catch {
        // Si hay error al parsear, limpiar storage
        logout()
      }
    }
  }

  const clearError = () => {
    error.value = null
  }

  return {
    // Estado
    user: computed(() => user.value),
    token: computed(() => token.value),
    isAuthenticated,
    isLoading: computed(() => isLoading.value),
    error: computed(() => error.value),

    // Métodos
    login,
    register,
    logout,
    initializeAuth,
    clearError,
  }
}
