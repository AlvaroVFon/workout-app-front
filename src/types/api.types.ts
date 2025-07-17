export interface ApiResponse<T> {
  statusCode: number
  message: string
  data: T
}

export interface PaginatedResponse<T> {
  statusCode: number
  message: string
  data: Data<T>
}

export interface Data<T> {
  documents: T[]
  page: number
  limit: number
  totalPages: number
  total: number
}

export interface ApiError {
  statusCode: number
  message: string
  error?: string
}
