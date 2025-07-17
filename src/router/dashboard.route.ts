import type { RouteRecordRaw } from 'vue-router'

export const dashboardRoutes: RouteRecordRaw = {
  path: '/dashboard',
  name: 'dashboard',
  component: () => import('../views/dashboard/DefaultDashboardView.vue'),
  meta: { requiresAuth: true },
  children: [
    {
      path: 'stats',
      name: 'stats',
      component: () => import('../views/dashboard/stats/StatsView.vue'),
      meta: { requiresAuth: true },
    },
    {
      path: 'athletes',
      name: 'athletes',
      component: () => import('../views/dashboard/athletes/AthletesView.vue'),
      meta: { requiresAuth: true },
    },
    {
      path: 'athletes/:id',
      name: 'athlete',
      component: () => import('../views/dashboard/athletes/AthleteView.vue'),
      meta: { requiresAuth: true },
      props: true,
    },
    {
      path: 'profile',
      name: 'profile',
      component: () => import('../views/dashboard/profile/ProfileView.vue'),
      meta: { requiresAuth: true },
    },
  ],
}
