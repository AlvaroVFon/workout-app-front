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
    :stroke="props.color"
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round"
    :class="`lucide lucide-chart-column-big-icon lucide-chart-column-big ${sizeClass}`"
  >
    <path d="M3 3v16a2 2 0 0 0 2 2h16" />
    <rect
      x="15"
      y="5"
      width="4"
      height="12"
      rx="1"
    />
    <rect
      x="7"
      y="8"
      width="4"
      height="9"
      rx="1"
    />
  </svg>
</template>
