import { defineStore } from 'pinia'
import type { AuthState, LoginCredentials, LoginResponse } from '@/types/auth'
import apiService from '@/services/api.service'
import { getLoginValues, storageLoginValues, unStorageLoginValues } from '@/helpers/auth.helper'

export const useAuthStore = defineStore('auth', {
  state: (): AuthState => ({
    user: null,
    token: null,
    refreshToken: null,
    isAuthenticated: false,
    isLoading: false,
    error: null,
  }),
  actions: {
    initializeAuth() {
      const { token, refreshToken, user } = getLoginValues()
      if (token && refreshToken && user) {
        this.token = token
        this.refreshToken = refreshToken
        this.user = JSON.parse(user)
        this.isAuthenticated = true
      }
    },
    async login(credentials: LoginCredentials) {
      this.isLoading = true
      this.error = null
      try {
        const response = await apiService.post<LoginResponse>('/auth/login', credentials)
        if (response.statusCode !== 200) {
          this.user = null
          this.token = null
          this.refreshToken = null
          this.isAuthenticated = false
          this.error = 'Invalid credentials'
          return
        }
        const { user, token, refreshToken } = response.data
        this.user = user
        this.token = token
        this.refreshToken = refreshToken
        this.isAuthenticated = true
        storageLoginValues(response.data)
      } catch {
        this.user = null
        this.token = null
        this.refreshToken = null
        this.isAuthenticated = false
        this.error = 'Invalid credentials'
      } finally {
        this.isLoading = false
      }
    },
    logout() {
      this.user = null
      this.token = null
      this.refreshToken = null
      this.isAuthenticated = false
      unStorageLoginValues()
    },
  },
  getters: {
    isLoggedIn: (state) => !!state.token,
  },
})
