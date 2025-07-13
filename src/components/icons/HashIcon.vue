<script setup lang="ts">
import type { IconProps } from '@/types/common/icon.types'
import { computed } from 'vue'

const props = withDefaults(defineProps<IconProps>(), {
  size: 'md',
  color: 'currentColor',
})

const sizeClass = computed(() => {
  const sizes = {
    sm: 'w-4 h-4',
    md: 'w-5 h-5',
    lg: 'w-6 h-6',
    xl: 'w-8 h-8',
  } as const
  return sizes[props.size]
})
</script>

<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    :stroke="color"
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round"
    :class="`lucide lucide-hash-icon lucide-hash ${sizeClass}`"
  >
    <line
      x1="4"
      x2="20"
      y1="9"
      y2="9"
    />
    <line
      x1="4"
      x2="20"
      y1="15"
      y2="15"
    />
    <line
      x1="10"
      x2="8"
      y1="3"
      y2="21"
    />
    <line
      x1="16"
      x2="14"
      y1="3"
      y2="21"
    />
  </svg>
</template>
