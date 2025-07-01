<script setup lang="ts">
import type { IconProps } from '@/types/common/icon.types'
import { computed } from 'vue'

const props = defineProps<IconProps>()

const sizeClass = computed(() => {
  const sizes = {
    sm: 'w-4 h-4',
    md: 'w-5 h-5',
    lg: 'w-6 h-6',
    xl: 'w-8 h-8',
  }
  return sizes[props.size || 'md']
})

const colorClass = computed(() => {
  return props.color || 'currentColor'
})
</script>
<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    :stroke="colorClass"
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round"
    :class="`lucide lucide-mail-icon lucide-mail ${sizeClass}`"
  >
    <path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7" />
    <rect
      x="2"
      y="4"
      width="20"
      height="16"
      rx="2"
    />
  </svg>
</template>
