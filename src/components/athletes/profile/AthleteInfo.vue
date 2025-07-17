<script lang="ts" setup>
import type { Athlete } from '@/types/athlete.types'
import DefaultButton from '@/components/common/DefaultButton.vue'
const props = defineProps<{
  athlete: Partial<Athlete>
}>()
</script>

<template>
  <div class="text-center text-xl font-bold">Personal Info</div>
  <div class="p-4">
    <p>Name: {{ props.athlete.firstname }}</p>
    <p>Lastname: {{ props.athlete.lastname }}</p>
    <p>Email: {{ props.athlete.email }}</p>
    <p>idDocument: {{ props.athlete.idDocument }}</p>
    <p>Phone: {{ props.athlete.phone }}</p>
  </div>
  <div class="divider text-xl font-bold">Goals</div>
  <div class="p-4">
    <p
      v-for="(goal, index) in athlete.goals"
      :key="index"
    >
      <span class="font-bold">Goal {{ index + 1 }}:</span> {{ goal }}
    </p>
  </div>
  <div class="divider text-xl font-bold">Notes</div>
  <div class="p-4">
    <p v-if="athlete.notes">{{ athlete.notes }}</p>
  </div>
  <div class="flex justify-end">
    <DefaultButton
      variant="warning"
      @click="$router.push({ name: 'athletes.edit', params: { id: athlete.id } })"
    >
      Edit Profile
    </DefaultButton>
  </div>
</template>
