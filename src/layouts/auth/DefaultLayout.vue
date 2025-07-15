<script lang="ts" setup>
import DefaultNavbar from '@/components/common/DefaultNavbar.vue'
import ThemeController from '@/components/common/ThemeController.vue'
</script>
<template>
  <DefaultNavbar>
    <template #logo>
      <router-link
        :to="{ name: 'login' }"
        class="btn btn-ghost text-xl"
      >
        Workout Controller
      </router-link>
    </template>
    <template #nav>
      <nav class="flex items-center space-x-4">
        <ThemeController />
      </nav>
    </template>
  </DefaultNavbar>
  <main class="bg-base-300 min-h-screen flex items-center justify-center">
    <slot></slot>
  </main>
</template>
