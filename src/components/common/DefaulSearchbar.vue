<script setup lang="ts">
import { ref, defineProps, defineEmits } from 'vue'

const props = defineProps<{
  modelValue?: string
  placeholder?: string
  inputClass?: string
}>()

const emit = defineEmits(['update:modelValue', 'search'])

const value = ref(props.modelValue ?? '')

function onInput(e: Event) {
  const val = (e.target as HTMLInputElement).value
  value.value = val
  emit('update:modelValue', val)
}

function onKeyup(e: KeyboardEvent) {
  if (e.key === 'Enter') emit('search', value.value)
}
</script>

<template>
  <label class="input w-full flex items-center gap-2">
    <svg class="h-5 w-5 opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
      <g stroke-linejoin="round" stroke-linecap="round" stroke-width="2.5" fill="none" stroke="currentColor">
        <circle cx="11" cy="11" r="8"></circle>
        <path d="m21 21-4.3-4.3"></path>
      </g>
    </svg>
    <input
      :value="value"
      @input="onInput"
      @keyup="onKeyup"
      :placeholder="placeholder || 'Buscar...'"
      type="search"
      class="grow border-0 outline-none bg-transparent"
      :class="inputClass"
    />
  </label>
</template>
