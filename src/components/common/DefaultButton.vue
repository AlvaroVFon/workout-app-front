<script lang="ts" setup>
import { computed } from 'vue'
import type { ButtonProps } from '@/types/common/button.types'
import DefaultSpinner from '@/components/common/DefaultSpinner.vue'

const {
  label,
  variant = 'primary',
  size = 'md',
  disabled = false,
  loading = false,
  type = 'button',
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
    success: 'btn-success',
    warning: 'btn-warning',
    error: 'btn-error',
  }[variant]

  const sizeClass = {
    xs: 'btn-xs',
    sm: 'btn-sm',
    md: 'btn-md',
    lg: 'btn-lg',
  }[size]

  return `${base} ${variantClass} ${sizeClass}`
})

const spinnerSize = computed(() => {
  const sizeMap = {
    xs: 'xs' as const,
    sm: 'xs' as const,
    md: 'sm' as const,
    lg: 'md' as const,
  }
  return sizeMap[size]
})
</script>

<template>
  <button
    :type="type"
    :class="className"
    :disabled="disabled || loading"
    @click="$emit('click')"
  >
    <DefaultSpinner
      v-if="loading"
      :size="spinnerSize"
      variant="neutral"
    />
    <span v-if="label && !loading">{{ label }}</span>
    <slot v-if="!loading" />
  </button>
</template>
