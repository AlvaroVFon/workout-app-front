export interface ApiResponse<T = unknown> {
  statusCode: number
  message: string
  data: T
}

export interface ApiError {
  statusCode: number
  message: string
  error?: string
}
