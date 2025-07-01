export type ButtonVariant = 'primary' | 'secondary' | 'accent' | 'neutral' | 'ghost' | 'link'

export type ButtonSize = 'xs' | 'sm' | 'md' | 'lg'

export interface ButtonProps {
  label?: string
  variant?: ButtonVariant
  size?: ButtonSize
  disabled?: boolean
  loading?: boolean
  type?: 'button' | 'submit' | 'reset'
}
