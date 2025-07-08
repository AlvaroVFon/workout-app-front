<script lang="ts" setup>
import DefaultNavbar from '@/components/common/DefaultNavbar.vue'
import ThemeController from '@/components/common/ThemeController.vue'
import DefaultButton from '@/components/common/DefaultButton.vue'
import { onMounted, watch } from 'vue'
import { useRouter } from 'vue-router'
import { useAuth } from '@/composables/useAuth'
import PowerIcon from '@/components/icons/PowerIcon.vue'

const router = useRouter()
const { logout, isAuthenticated, initializeAuth } = useAuth()

onMounted(() => {
  watch(
    isAuthenticated,
    (val) => {
      if (!val) {
        router.push('/')
      }
    },
    { immediate: true },
  )
})
async function handleLogout() {
  await logout()
  router.push('/')
}
</script>
<template>
  <DefaultNavbar>
    <template #logo>
      <router-link
        to="/dashboard"
        class="text-xl font-bold"
        >Workout Controller</router-link
      >
    </template>
    <template #nav>
      <nav>
        <ThemeController />
        <DefaultButton
          variant="ghost"
          size="sm"
          class="ml-2 hover:text-red-300"
          aria-label="Logout"
          @click="handleLogout"
          ><PowerIcon
        /></DefaultButton>
      </nav>
    </template>
  </DefaultNavbar>
  <main class="bg-base-300 min-h-screen flex items-center justify-center">
    <slot></slot>
  </main>
</template>
