<script lang="ts" setup>
import CloseIcon from '@/components/icons/CloseIcon.vue'
import DefaultSideBarLink from '@/components/common/DefaultSidebarLink.vue'
import type { Link } from '../../config/sidebarLinks'
const { links } = defineProps<{ links: Link[] }>()
</script>
<template>
  <div class="drawer-side">
    <label
      for="my-drawer"
      aria-label="close sidebar"
      class="drawer-overlay"
    ></label>
    <ul class="menu bg-base-200 text-center min-h-full w-80 p-4">
      <DefaultSideBarLink
        v-for="link in links"
        :key="link.label"
        :link="link"
      />
      <div class="flex justify-center items-center mt-4">
        <label
          for="my-drawer"
          class="btn btn-circle hover:btn-primary drawer-overlay lg:hidden"
        >
          <CloseIcon />
        </label>
      </div>
    </ul>
  </div>
</template>
