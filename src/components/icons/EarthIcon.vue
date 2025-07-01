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
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    :stroke="props.color"
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round"
    :class="['lucide', 'lucide-earth-icon', 'lucide-earth', sizeClass]"
  >
    <path d="M21.54 15H17a2 2 0 0 0-2 2v4.54" />
    <path
      d="M7 3.34V5a3 3 0 0 0 3 3a2 2 0 0 1 2 2c0 1.1.9 2 2 2a2 2 0 0 0 2-2c0-1.1.9-2 2-2h3.17"
    />
    <path d="M11 21.95V18a2 2 0 0 0-2-2a2 2 0 0 1-2-2v-1a2 2 0 0 0-2-2H2.05" />
    <circle
      cx="12"
      cy="12"
      r="10"
    />
  </svg>
</template>
