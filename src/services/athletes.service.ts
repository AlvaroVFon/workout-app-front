import { useFetch } from '@/composables/useFetch'
import { useAuthStore } from '@/stores/useAuthStore'
import type { Athlete } from '@/types/athlete.types'
import type { Data } from '@/types/api.types'
import { parameters } from '@/config/parameters'

class AthletesService {
  async fetchAthletes({
    page = 1,
    limit = parameters.paginationLimit,
  }: {
    page?: number
    limit?: number
  }) {
    const query = `page=${page ?? 1}&limit=${limit}`

    const { fetchData, data, error } = useFetch<Athlete>(`/athletes?${query}`, {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${useAuthStore().token}`,
      },
    })

    await fetchData()

    const athletesData = data.value as Data<Athlete> | undefined
    const athletes = athletesData?.documents ?? []

    return {
      athletes,
      error: error.value,
      page: page,
      limit: limit,
      total: athletesData?.total ?? 0,
      totalPages: athletesData?.totalPages ?? 0,
    }
  }
}

export default new AthletesService()
