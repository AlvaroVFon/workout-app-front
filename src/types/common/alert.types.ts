export interface AlertProps {
  message: string
  type?: 'success' | 'error' | 'info' | 'warning'
  size?: 'sm' | 'md' | 'lg' | 'xl'
  duration?: number
  showCloseButton?: boolean
  onClose?: () => void
}
