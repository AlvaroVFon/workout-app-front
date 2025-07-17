<script lang="ts" setup>
import DefaultDrawer from '@/components/common/DefaultDrawer.vue'
import ThemeController from '@/components/common/ThemeController.vue'
import DefaultButton from '@/components/common/DefaultButton.vue'
import DefaultNavbar from '@/components/common/DefaultNavbar.vue'
import { onMounted } from 'vue'
import { useRouter } from 'vue-router'
import { useAuthStore } from '@/stores/useAuthStore'
import PowerIcon from '@/components/icons/PowerIcon.vue'
import HamburguerIcon from '@/components/icons/HamburguerIcon.vue'
import DefaultDrawerSideBar from '@/components/common/DefaultDrawerSideBar.vue'
import DefaultContainer from '@/components/common/DefaultContainer.vue'
import { sidebarLinks } from '@/config/sidebarLinks.ts'

const router = useRouter()
const { logout, isAuthenticated } = useAuthStore()

onMounted(() => {
  if (!isAuthenticated) {
    router.push({ name: 'login' })
  }
})

async function handleLogout() {
  logout()
  router.push({ name: 'login' })
}
</script>
<template>
  <DefaultDrawer>
    <template #navbar>
      <DefaultNavbar>
        <template #logo>
          <div class="flex items-center gap-5 join-item">
            <label
              for="my-drawer"
              class="lg:hidden"
            >
              <HamburguerIcon />
            </label>
            <router-link
              :to="{ name: 'dashboard' }"
              class="text-xl font-bold"
              >Workout Controller</router-link
            >
          </div>
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
    </template>
    <template #sidebar>
      <DefaultDrawerSideBar :links="sidebarLinks" />
    </template>
    <template #content>
      <DefaultContainer max="3/4">
        <router-view />
      </DefaultContainer>
    </template>
  </DefaultDrawer>
</template>
