<script setup lang="ts">
import { computed } from 'vue'

interface Props {
  max?: 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl' | '4xl'
  centered?: boolean
}

const props = defineProps<Props>()

const maxWidthClass = computed(() => {
  return {
    sm: 'max-w-sm',
    md: 'max-w-md',
    lg: 'max-w-lg',
    xl: 'max-w-xl',
    '2xl': 'max-w-2xl',
    '3xl': 'max-w-3xl',
    '4xl': 'max-w-4xl',
  }[props.max ?? '3xl']
})
</script>

<template>
  <div
    class="w-full px-4 sm:px-6 lg:px-8 mx-auto"
    :class="[maxWidthClass, centered && 'min-h-screen flex flex-col items-center justify-center']"
  >
    <slot />
  </div>
</template>
