<script setup lang="ts">
import { computed } from 'vue'

interface ResponsiveMax {
  base?: string
  sm?: string
  md?: string
  lg?: string
  xl?: string
  '2xl'?: string
}

interface Props {
  max?: string | ResponsiveMax
  centered?: boolean
  class?: string
}

const props = defineProps<Props>()

const maxWidthClass = computed(() => {
  if (typeof props.max === 'string') {
    return props.max
  }
  if (typeof props.max === 'object' && props.max !== null) {
    return [
      props.max.base && `max-w-${props.max.base}`,
      props.max.sm && `sm:max-w-${props.max.sm}`,
      props.max.md && `md:max-w-${props.max.md}`,
      props.max.lg && `lg:max-w-${props.max.lg}`,
      props.max.xl && `xl:max-w-${props.max.xl}`,
      props.max['2xl'] && `2xl:max-w-${props.max['2xl']}`,
    ]
      .filter(Boolean)
      .join(' ')
  }
  return 'max-w-full'
})
</script>

<template>
  <div
    class="w-full p-4 sm:px-6 lg:px-8 mx-auto"
    :class="[
      maxWidthClass,
      centered && 'min-h-screen flex flex-col items-center justify-center',
      props.class,
    ]"
  >
    <slot />
  </div>
</template>
