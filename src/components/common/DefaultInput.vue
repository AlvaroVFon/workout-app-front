<script setup lang="ts">
import { computed } from 'vue'

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
      :class="`${sizeClasses} ${props.className || ''}`"
      :type="props.type"
      :placeholder="props.placeholder"
      :value="props.modelValue"
      @input="emit('update:modelValue', $event.target.value)"
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

/* Para navegadores no-webkit */
input:autofill {
  background-color: transparent !important;
  color: inherit !important;
}
</style>
