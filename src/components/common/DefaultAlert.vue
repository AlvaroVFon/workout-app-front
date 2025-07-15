<script lang="ts" setup>
import { computed } from 'vue'
import type { AlertProps } from '@/types/common/alert.types'
const { type = 'error', message = 'Alert message', size = 'md' } = defineProps<AlertProps>()

const alertClass = computed(() => {
  return {
    neutral: 'alert-neutral',
    error: 'alert-error',
    warning: 'alert-warning',
    info: 'alert-info',
    success: 'alert-success',
  }[type]
})

const sizeClass = computed(() => {
  const sizes = {
    sm: 'w-4 h-4',
    md: 'w-5 h-5',
    lg: 'w-6 h-6',
    xl: 'w-8 h-8',
  }
  return sizes[size]
})
</script>

<template>
  <div
    role="alert"
    :class="`alert ${alertClass}`"
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      :class="`${sizeClass} shrink-0 stroke-current`"
      fill="none"
      viewBox="0 0 24 24"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
      />
    </svg>
    <span>{{ message }}</span>
  </div>
</template>
