<script setup lang="ts">
import { KeyIcon } from '@heroicons/vue/24/outline'
import { KeyIcon as KeyIconSolid } from '@heroicons/vue/24/solid'
import { computed } from 'vue'

interface Props {
  size?: 'sm' | 'md' | 'lg' | 'xl'
  solid?: boolean
  class?: string
}

const props = withDefaults(defineProps<Props>(), {
  size: 'md',
  solid: false,
  class: '',
})

const sizeClasses = computed(() => {
  const sizes = {
    sm: 'h-4 w-4',
    md: 'h-5 w-5',
    lg: 'h-6 w-6',
    xl: 'h-8 w-8',
  }
  return sizes[props.size]
})

const iconClasses = computed(() => {
  return `${sizeClasses.value} ${props.class}`
})
</script>
<template>
  <KeyIconSolid
    v-if="solid"
    :class="iconClasses"
  />
  <KeyIcon
    v-else
    :class="iconClasses"
  />
</template>
