<script setup lang="ts">
import { defineProps, defineEmits, computed } from 'vue'

type Props = {
  modelValue?: string
  placeholder?: string
  type?: string
  size?: 'sm' | 'md' | 'lg' | 'xl'
  className?: string
  Icon: object
}

const props = defineProps<Props>()
const emit = defineEmits(['update:modelValue'])

const sizeClasses = computed(() => {
  const sizes = {
    sm: 'input-sm',
    md: 'input-md',
    lg: 'input-lg',
    xl: 'input-xl',
  }
  return sizes[props.size || 'md']
})
</script>
<template>
  <label class="input">
    <component :is="props.Icon" />
    <input
      :class="`input ${sizeClasses} ${props.className || ''}`"
      :type="props.type"
      :placeholder="props.placeholder"
      :value="props.modelValue"
      @input="emit('update:modelValue', $event.target.value)"
    />
  </label>
</template>
