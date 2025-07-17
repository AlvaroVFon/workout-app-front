<script lang="ts" setup>
const props = defineProps<{
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | string
  bgClass?: string
  textClass?: string
  rounded?: boolean
  placeholder?: string
  src?: string
  alt?: string
}>()

const sizeClass =
  {
    xs: 'w-6 text-xs',
    sm: 'w-10 text-sm',
    md: 'w-16 text-xl',
    lg: 'w-24 text-3xl',
    xl: 'w-32 text-4xl',
    '2xl': 'w-40 text-5xl',
  }[props.size || 'lg'] ||
  props.size ||
  'w-24 text-3xl'

const bg = props.bgClass || 'bg-neutral'
const text = props.textClass || 'text-neutral-content'
const rounded = props.rounded !== false ? 'rounded-full' : ''
const placeholder = props.placeholder || 'D'
</script>

<template>
  <div class="avatar avatar-placeholder">
    <div :class="[bg, text, sizeClass, rounded]">
      <template v-if="props.src">
        <img
          :src="props.src"
          :alt="props.alt || 'avatar'"
        />
      </template>
      <template v-else>
        <span>{{ placeholder }}</span>
      </template>
    </div>
  </div>
</template>
