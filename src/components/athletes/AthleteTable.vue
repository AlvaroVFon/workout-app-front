<script lang="ts" setup>
import DefaultTable from '@/components/common/table/DefaultTable.vue'
import type { Athlete } from '@/types/athlete.types'
import { useRouter } from 'vue-router'
import { useAthletesStore } from '@/stores/useAthletesStore'

const athletesStore = useAthletesStore()

const router = useRouter()
const props = defineProps<{
  athletes: Partial<Athlete>[]
}>()

const headersBlackList = ['id', '_id', '__v', 'goals', 'idDocument', 'phone', 'notes', 'coach']

const getColumns = (athletes: Partial<Athlete>[]) => {
  if (athletes.length === 0) return []

  return Object.keys(athletes[0])
    .filter((key) => headersBlackList.indexOf(key) === -1)
    .map((key) => ({
      key: key as keyof (typeof athletes)[0],
      label: key.charAt(0).toUpperCase() + key.slice(1),
    }))
}

const handleRowClick = (athlete: Partial<Athlete>) => {
  router.push({ name: 'athlete', params: { id: athlete._id } })
}
</script>
<template>
  <DefaultTable
    :columns="getColumns(props.athletes)"
    :rows="props.athletes"
    :onRowClick="handleRowClick"
    :paginate="athletesStore.totalPages > 1"
    :pagination="{
      page: athletesStore.page,
      limit: athletesStore.limit,
      total: athletesStore.total,
      totalPages: athletesStore.totalPages,
      hasNext: athletesStore.hasNext,
      hasPrev: athletesStore.hasPrev,
      onPageChange: athletesStore.fetchPage,
    }"
  />
</template>
