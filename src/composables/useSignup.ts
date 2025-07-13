import type { RegisterCredentials } from '@/types/auth'
import { ref } from 'vue'
import apiService from '@/services/api.service'
import { Endpoint } from '@/utils/endpoints.enum'
import axios from 'axios'

export function useSignup() {
  const isLoading = ref(false)
  const error = ref<string | null>(null)
  const success = ref(false)

  async function signup(signupCredentials: RegisterCredentials) {
    try {
      isLoading.value = true
      await apiService.post(Endpoint.SIGNUP, signupCredentials)

      success.value = true
      isLoading.value = false
    } catch (err) {
      if (axios.isAxiosError(err) && err.response?.status === 409) {
        error.value = `Email ${signupCredentials.email} already exists.`
      }
      isLoading.value = false
      success.value = false
    } finally {
      isLoading.value = false
    }
  }

  async function verifySignup(code: string, uuid: string) {
    try {
      isLoading.value = true
      await apiService.post(`${Endpoint.SIGNUP_VERIFY}/${uuid}`, { code })
      success.value = true
    } catch {
      error.value = 'Invalid verification code or UUID.'
    } finally {
      isLoading.value = false
    }
  }

  return {
    signup,
    verifySignup,
    isLoading,
    error,
    success,
  }
}
