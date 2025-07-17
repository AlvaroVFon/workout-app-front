<script lang="ts" setup>
import type { Athlete } from '@/types/athlete.types'
import DefaultAvatar from '@/components/common/DefaultAvatar.vue'
import MailIcon from '@/components/icons/MailIcon.vue'
import PhoneIcon from '@/components/icons/PhoneIcon.vue'

const { athlete } = defineProps<{
  athlete: Partial<Athlete>
}>()
</script>

<template>
  <div class="flex items-center justify-between mb-8">
    <div class="flex items-center gap-4">
      <DefaultAvatar
        size="lg"
        rounded
      />
      <div>
        <p class="font-bold text-xl">{{ athlete.firstname }}</p>
        <p class="flex items-center gap-2"><MailIcon />{{ athlete.email }}</p>
        <p class="flex items-center gap-2"><PhoneIcon />{{ athlete.phone }}</p>
        <div class="flex items-center gap-2 mt-2">
          <span class="badge badge-success">Calisthenics</span>
          <span class="badge badge-info">Crossfit</span>
        </div>
      </div>
    </div>
  </div>
</template>
