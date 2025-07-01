<script setup lang="ts">
import { IconProps } from '@/types/common/icon.types'
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
    <path
      d="M2.586 17.414A2 2 0 0 0 2 18.828V21a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h1a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h.172a2 2 0 0 0 1.414-.586l.814-.814a6.5 6.5 0 1 0-4-4z"
    />
    <circle
      cx="16.5"
      cy="7.5"
      r=".5"
      :fill="colorClass"
    />
  </svg>
</template>
