<script lang="ts" setup>
import { onMounted } from 'vue'
import DefaultSearchbar from '@/components/common/DefaultSearchbar.vue'
import DefaultButton from '@/components/common/DefaultButton.vue'
import AthleteTable from '@/components/athletes/AthleteTable.vue'
import { useAthletesStore } from '@/stores/useAthletesStore'

const athletesStore = useAthletesStore()

onMounted(() => {
  athletesStore.fetchAthletes()
})
</script>

<template>
  <h1 class="text-3xl font-bold text-center mb-12">Athletes</h1>
  <div class="w-full flex gap-3">
    <DefaultButton
      variant="primary"
      label="+ Add Athlete"
    />
    <DefaultSearchbar
      v-model="athletesStore.searchQuery"
      placeholder="Search athletes..."
      class="mb-6"
    />
  </div>
  <div
    v-if="!athletesStore.loading && !athletesStore.athletes.length"
    class="text-gray-500"
  >
    <p class="text-center">Please add athlethes to see them listed here</p>
  </div>
  <div v-if="athletesStore.loading">
    <p class="text-center animate-pulse">Loading athletes...</p>
  </div>
  <div v-else>
    <AthleteTable :athletes="athletesStore.filteredAthletes" />
  </div>
  <div
    v-if="athletesStore.error"
    class="text-red-500"
  >
    {{ athletesStore.error }}
  </div>
</template>
