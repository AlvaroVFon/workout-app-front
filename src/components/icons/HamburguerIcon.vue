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
  <div class="swap-off">
    <svg
      :class="`fill-current ${sizeClass} ${props.color}`"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 512 512"
    >
      <path d="M64,384H448V341.33H64Zm0-106.67H448V234.67H64ZM64,128v42.67H448V128Z" />
    </svg>
  </div>
</template>
