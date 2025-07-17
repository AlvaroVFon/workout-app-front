<script lang="ts" setup>
import { defineAsyncComponent } from 'vue'
import { useRoute } from 'vue-router'
import { useAthletesStore } from '@/stores/useAthletesStore'
import DefaultContainer from '@/components/common/DefaultContainer.vue'
import AthleteProfileHeader from '@/components/athletes/profile/AthleteProfileHeader.vue'
import DefaultTabs from '@/components/common/DefaultTabs.vue'
import type { Athlete } from '@/types/athlete.types'

const route = useRoute()
const athletesStore = useAthletesStore()
const athleteId = route.params.id
const AthleteInfo = defineAsyncComponent(
  () => import('@/components/athletes/profile/AthleteInfo.vue'),
)
const AthleteStats = defineAsyncComponent(
  () => import('@/components/athletes/profile/AthleteStats.vue'),
)

const athlete: Partial<Athlete> | undefined = athletesStore.athletes.find(
  (a) => a._id === athleteId,
)
</script>

<template>
  <div v-if="athlete">
    <h1 class="text-3xl font-bold text-center mb-12">Detalle atleta</h1>
    <DefaultContainer :max="{ base: '1/2', sm: '3/4', lg: '2xl' }">
      <!--Tabs-->
      <!-- name of each tab group should be unique -->
      <AthleteProfileHeader :athlete="athlete" />
      <DefaultTabs
        :tabs="[
          { label: 'Perfil', content: AthleteInfo, props: { athlete } },
          { label: 'Estadísticas', content: AthleteStats, props: { stats: athlete } },
          { label: 'Historial de entrenamientos', content: 'TAB de historial de entrenamientos' },
          { label: 'Más...', content: 'TAB de más...' },
        ]"
        name="athlete-tabs"
      />
    </DefaultContainer>
  </div>
  <div v-else>
    <p class="text-red-500">No se encontró el atleta.</p>
  </div>
</template>
