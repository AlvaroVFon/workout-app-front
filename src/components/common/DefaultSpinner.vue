<script lang="ts" setup>
import type { SpinnerProps } from '@/types/common/spinner.types'
const { variant = 'primary', size = 'md', text = 'Loading...' } = defineProps<SpinnerProps>()

const spinnerClass = `loading loading-spinner text-${variant} text-${size}`
</script>

<template>
  <span>{{ text }}</span>
  <span :class="spinnerClass"> </span>
</template>
