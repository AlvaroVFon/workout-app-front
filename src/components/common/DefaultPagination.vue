<script lang="ts" setup>
import { computed } from 'vue'
import type { Pagination } from '@/types/common/pagination.types'

const props = defineProps<Pagination>()
const isPaginated = computed(() => props.total > props.limit)

const pagesToShow = computed(() => {
  const pages = []
  if (props.page > 1) pages.push(props.page - 1)
  pages.push(props.page)
  if (props.page < props.totalPages) pages.push(props.page + 1)
  return pages
})
</script>

<template>
  <div
    class="join"
    v-if="isPaginated"
  >
    <button
      class="join-item btn"
      :disabled="!props.hasPrev"
      @click="props.onPageChange(1)"
    >
      First
    </button>

    <button
      class="join-item btn"
      :disabled="!props.hasPrev"
      @click="props.onPageChange(props.page - 1)"
    >
      Prev
    </button>

    <button
      v-for="page in pagesToShow"
      :key="page"
      class="join-item btn"
      :class="{ 'btn-primary': page === props.page }"
      @click="page !== props.page && props.onPageChange(page)"
    >
      {{ page }}
    </button>

    <button
      class="join-item btn"
      :disabled="!props.hasNext"
      @click="props.onPageChange(props.page + 1)"
    >
      Next
    </button>

    <button
      class="join-item btn"
      :disabled="!props.hasNext"
      @click="props.onPageChange(props.totalPages)"
    >
      Last
    </button>
  </div>
</template>
