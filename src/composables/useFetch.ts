import { ref } from 'vue'
import apiService from '@/services/api.service'
import type { ApiResponse, PaginatedResponse } from '@/types/api.types'
import type { AxiosRequestConfig } from 'axios'
import type { Data } from '@/types/api.types'

export function useFetch<T>(url: string, options: AxiosRequestConfig = {}) {
  const data = ref<T | Data<T> | null>(null)
  const error = ref<string | null>(null)
  const loading = ref<boolean>(false)
  const response = ref<ApiResponse<T> | PaginatedResponse<T> | null>(null)

  const fetchData = async () => {
    try {
      loading.value = true
      const res = await apiService.get<T>(url, options)
      response.value = res
      data.value = res.data
    } catch (err) {
      error.value = err instanceof Error ? err.message : 'An error occurred'
    } finally {
      loading.value = false
    }
  }

  return {
    fetchData,
    response,
    data,
    error,
    loading,
  }
}
