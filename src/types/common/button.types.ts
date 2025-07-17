import type { Component } from 'vue'

export type ButtonVariant =
  | 'primary'
  | 'secondary'
  | 'accent'
  | 'neutral'
  | 'ghost'
  | 'link'
  | 'success'
  | 'warning'
  | 'error'

export type ButtonSize = 'xs' | 'sm' | 'md' | 'lg'

export interface ButtonProps {
  label?: string
  variant?: ButtonVariant
  size?: ButtonSize
  disabled?: boolean
  loading?: boolean
  type?: 'button' | 'submit' | 'reset'
  Icon?: Component
}
