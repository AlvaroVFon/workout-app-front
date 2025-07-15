import type { RouteRecordRaw } from 'vue-router'

export const dashboardRoutes: RouteRecordRaw = {
  path: '/dashboard',
  name: 'dashboard',
  component: () => import('../views/dashboard/DefaultDashboardView.vue'),
  meta: { requiresAuth: true },
  children: [
    {
      path: 'athletes',
      name: 'athletes',
      component: () => import('../views/dashboard/athlethes/AthletesView.vue'),
      meta: { requiresAuth: true },
    },
    {
      path: 'profile',
      name: 'profile',
      component: () => import('../views/dashboard/profile/ProfileView.vue'),
      meta: { requiresAuth: true },
    },
  ],
}
