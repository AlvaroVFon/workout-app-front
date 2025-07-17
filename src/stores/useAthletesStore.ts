import { defineStore } from 'pinia'
import { computed, ref } from 'vue'
import athletesService from '@/services/athletes.service'
import type { Athlete } from '@/types/athlete.types'

export const useAthletesStore = defineStore('athletes', () => {
  const athletes = ref<Partial<Athlete>[]>([])
  const loading = ref(false)
  const error = ref<string | null>(null)
  const page = ref(1)
  const limit = ref(10)
  const total = ref(0)
  const totalPages = ref(0)
  const hasNext = computed(() => page.value < totalPages.value)
  const hasPrev = computed(() => page.value > 1)

  async function fetchAthletes(options: { page?: number; limit?: number } = {}) {
    loading.value = true
    error.value = null
    try {
      const {
        athletes: fetched,
        error: fetchError,
        page: fetchPage,
        limit: fetchLimit,
        total: fetchTotal,
        totalPages: fetchTotalPages,
      } = await athletesService.fetchAthletes(options)
      athletes.value = fetched
      error.value = fetchError
      page.value = fetchPage
      limit.value = fetchLimit
      total.value = fetchTotal
      totalPages.value = fetchTotalPages
    } catch {
      error.value = 'Failed to fetch athletes'
    } finally {
      loading.value = false
    }
  }

  function fetchNextPage() {
    if (hasNext.value) {
      page.value += 1
      fetchAthletes({ page: page.value, limit: limit.value })
    }
  }

  function fetchPreviousPage() {
    if (hasPrev.value) {
      page.value -= 1
      fetchAthletes({ page: page.value, limit: limit.value })
    }
  }

  function fetchPage(pageNumber: number) {
    if (pageNumber > 0 && pageNumber <= totalPages.value) {
      page.value = pageNumber
      fetchAthletes({ page: page.value, limit: limit.value })
    }
  }

  const searchQuery = ref('')
  const filteredAthletes = computed(() => {
    if (!searchQuery.value) return athletes.value
    const q = searchQuery.value.toLowerCase()
    return athletes.value.filter(
      (a) =>
        a.firstname?.toLowerCase().includes(q) ||
        a.lastname?.toLowerCase().includes(q) ||
        a.email?.toLowerCase().includes(q),
    )
  })

  return {
    athletes,
    loading,
    error,
    fetchAthletes,
    fetchNextPage,
    fetchPreviousPage,
    fetchPage,
    page,
    limit,
    total,
    totalPages,
    hasNext,
    hasPrev,
    searchQuery,
    filteredAthletes,
  }
})
