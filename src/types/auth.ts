export interface User {
  id: string
  email: string
  name: string
  avatar?: string
  createdAt: string
  updatedAt: string
}

export interface LoginCredentials extends Record<string, unknown> {
  email: string
  password: string
}

export interface RegisterCredentials extends Record<string, unknown> {
  email: string
  password: string
}

export interface AuthState {
  user: User | null
  token: string | null
  refreshToken: string | null
  isAuthenticated: boolean
  isLoading: boolean
  error: string | null
}

export interface AuthTokens {
  token: string
  refreshToken: string
}

export interface LoginResponse {
  user: User
  token: string
  refreshToken: string
}

export interface RegisterResponse {
  user: User
  token: string
  refreshToken: string
}
