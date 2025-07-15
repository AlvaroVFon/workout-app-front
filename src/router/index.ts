import { createRouter, createWebHistory } from 'vue-router'
import { useAuthStore } from '@/stores/useAuthStore'
import { authRoutes } from './auth.route'
import { dashboardRoutes } from './dashboard.route'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [...authRoutes, dashboardRoutes],
})

router.beforeEach((to, from, next) => {
  const authStore = useAuthStore()
  if (authStore.token && !authStore.isAuthenticated) {
    authStore.initializeAuth()
  }

  if (to.meta.requiresAuth && !authStore.isAuthenticated) {
    next('/')
  } else if (to.meta.requiresGuest && authStore.isAuthenticated) {
    next('/dashboard')
  } else {
    next()
  }
})

export default router
