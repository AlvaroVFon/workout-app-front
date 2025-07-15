import type { RouteRecordRaw } from 'vue-router'

export const authRoutes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'login',
    component: () => import('../views/auth/LoginView.vue'),
    meta: { requiresGuest: true },
  },
  {
    path: '/signup',
    name: 'signup',
    component: () => import('../views/auth/RegisterView.vue'),
    meta: { requiresGuest: true },
  },
  {
    path: '/signup-verify/:uuid',
    name: 'signup-verify',
    component: () => import('../views/auth/SignupVerifyView.vue'),
    meta: { requiresGuest: true },
  },
  {
    path: '/forgot-password',
    name: 'forgot-password',
    component: () => import('../views/auth/ForgotPasswordView.vue'),
  },
  {
    path: '/reset-password/:token',
    name: 'reset-password',
    component: () => import('../views/auth/ResetPasswordView.vue'),
  },
]
