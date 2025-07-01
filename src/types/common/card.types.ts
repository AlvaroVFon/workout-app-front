export interface CardProps {
  title: string
  description?: string
  imageUrl?: string
  linkUrl?: string
  onClick?: () => void
  class?: string | string[] | Record<string, boolean>
  isLoading?: boolean
  disabled?: boolean
}

export interface CardEmits {
  (e: 'click'): void
  (e: 'action', actionIndex: number): void
}
