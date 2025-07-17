import { parameters } from '@/config/parameters'
import type { ApiResponse } from '@/types/api.types'
import axios from 'axios'
import type { AxiosInstance, AxiosRequestConfig } from 'axios'

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

  async get<T = unknown>(url: string, options: AxiosRequestConfig = {}): Promise<ApiResponse<T>> {
    const response = await this.axiosInstance.get(url, options)
    return response.data
  }

  async post<T = unknown>(
    url: string,
    data?: unknown,
    options: AxiosRequestConfig = {},
  ): Promise<ApiResponse<T>> {
    const response = await this.axiosInstance.post(url, data, options)
    return response.data
  }

  async patch<T = unknown>(
    url: string,
    data: unknown,
    options: AxiosRequestConfig = {},
  ): Promise<ApiResponse<T>> {
    const response = await this.axiosInstance.patch(url, data, options)
    return response.data
  }

  async delete<T = unknown>(
    url: string,
    options: AxiosRequestConfig = {},
  ): Promise<ApiResponse<T>> {
    const response = await this.axiosInstance.delete(url, options)
    return response.data
  }
}

export default new ApiService()
