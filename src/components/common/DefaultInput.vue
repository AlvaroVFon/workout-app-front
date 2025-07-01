<script setup lang="ts">
import { computed } from 'vue'

type Props = {
  modelValue: string
  placeholder?: string
  type?: 'text' | 'email' | 'password'
  size?: 'sm' | 'md' | 'lg' | 'xl'
  className?: string
  Icon?: object
}

const { size = 'md', Icon, className = '', type = 'text', placeholder = '' } = defineProps<Props>()
const emit = defineEmits(['update:modelValue'])

const sizeClasses = computed(() => {
  const sizes = {
    sm: 'input-sm',
    md: 'input-md',
    lg: 'input-lg',
    xl: 'input-xl',
  }
  return sizes[size]
})
</script>
<template>
  <label class="input w-full">
    <component :is="Icon" />
    <input
      :class="`${sizeClasses} ${className || ''}`"
      :type="type"
      :placeholder="placeholder"
      :value="modelValue"
      @input="emit('update:modelValue', ($event.target as HTMLInputElement).value)"
    />
  </label>
</template>

<style scoped>
input:-webkit-autofill,
input:-webkit-autofill:hover,
input:-webkit-autofill:focus,
input:-webkit-autofill:active {
  -webkit-box-shadow: 0 0 0 30px var(--color-base-100) inset !important;
  -webkit-text-fill-color: inherit !important;
}

input:autofill {
  background-color: transparent !important;
  color: inherit !important;
}
</style>
