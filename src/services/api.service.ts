import { parameters } from '@/config/parameters'
import type { ApiResponse } from '@/types/api.types'
import axios from 'axios'
import type { AxiosHeaders, AxiosInstance } from 'axios'

class ApiService {
  private readonly apiUrl: string = parameters.apiUrl
  private axiosInstance: AxiosInstance

  constructor() {
    this.axiosInstance = axios.create({
      baseURL: this.apiUrl,
      timeout: 10000,
      headers: {
        'Content-Type': 'application/json',
      },
    })
  }

  async get<T = unknown>(url: string, headers?: AxiosHeaders): Promise<ApiResponse<T>> {
    const response = await this.axiosInstance.get(url, {
      headers: {
        ...headers,
      },
    })
    return response.data
  }

  async post<T = unknown>(
    url: string,
    data?: unknown,
    headers?: AxiosHeaders,
  ): Promise<ApiResponse<T>> {
    const response = await this.axiosInstance.post(url, data, { headers: { ...headers } })
    return response.data
  }

  async patch<T = unknown>(
    url: string,
    data: unknown,
    headers?: AxiosHeaders,
  ): Promise<ApiResponse<T>> {
    const response = await this.axiosInstance.patch(url, data, { headers: { ...headers } })
    return response.data
  }

  async delete<T = unknown>(url: string, headers: AxiosHeaders): Promise<ApiResponse<T>> {
    const response = await this.axiosInstance.delete(url, { headers: { ...headers } })
    return response.data
  }
}

export default new ApiService()
