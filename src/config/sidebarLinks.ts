import HomeIcon from '@/components/icons/HomeIcon.vue'
import ChartIcon from '@/components/icons/ChartIcon.vue'
import DumbbellIcon from '@/components/icons/DumbbellIcon.vue'
import ProfileIcon from '@/components/icons/ProfileIcon.vue'
import type { Component } from 'vue'

export type Link = {
  label: string
  to: { name: string }
  icon: Component
}

export const sidebarLinks: Link[] = [
  {
    label: 'Home',
    to: { name: 'login' },
    icon: HomeIcon,
  },
  {
    label: 'Stats',
    to: { name: 'stats' },
    icon: ChartIcon,
  },
  {
    label: 'Atlethes',
    to: { name: 'athletes' },
    icon: DumbbellIcon,
  },
  {
    label: 'Profile',
    to: { name: 'profile' },
    icon: ProfileIcon,
  },
]
