<script lang="ts" setup>
import { computed } from 'vue'
import { ButtonProps } from '@/types/common/button.types'
const {
  label = 'Click Me',
  variant = '',
  size = 'md',
  disabled = false,
} = defineProps<ButtonProps>()

const className = computed(() => {
  const base = 'btn'
  const variantClass = {
    primary: 'btn-primary',
    secondary: 'btn-secondary',
    accent: 'btn-accent',
    neutral: 'btn-neutral',
    ghost: 'btn-ghost',
    link: 'btn-link',
  }[variant]

  const sizeClass = {
    xs: 'btn-xs',
    sm: 'btn-sm',
    md: 'btn-md',
    lg: 'btn-lg',
  }[size]

  return `${base} ${variantClass} ${sizeClass}`
})
</script>

<template>
  <button
    :class="className"
    :disabled="disabled"
    @click="$emit('click')"
  >
    {{ label }}
  </button>
</template>
