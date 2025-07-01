<script lang="ts" setup>
import DefaultNavbar from '@/components/common/DefaultNavbar.vue'
</script>
<template>
  <DefaultNavbar />
  <main class="bg-base-300 min-h-screen flex items-center justify-center">
    <slot></slot>
  </main>
</template>
