<script lang="ts" setup>
import type { Link } from '@/config/sidebarLinks'
const { link } = defineProps<{ link: Link }>()
</script>
<template>
  <li :key="link.label">
    <router-link :to="link.to"> <component :is="link.icon" /> {{ link.label }}</router-link>
  </li>
</template>
