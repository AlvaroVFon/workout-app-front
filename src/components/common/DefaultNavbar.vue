<script lang="ts" setup>
import ThemeController from '@/components/common/ThemeController.vue'
</script>
<template>
  <div class="navbar bg-base-100 shadow-sm flex justify-between items-center px-4">
    <router-link
      to="/"
      class="btn btn-ghost text-xl"
      >daisyUI</router-link
    >
    <nav class="flex items-center space-x-4">
      <ThemeController />
    </nav>
  </div>
</template>
