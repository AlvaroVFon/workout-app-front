<script lang="ts" setup generic="T">
import TableHeader from './TableHeader.vue'
import TableRow from './TableRow.vue'
import DefaultPagination from '../DefaultPagination.vue'
import type { Pagination } from '@/types/common/pagination.types'

type TableProps<T> = {
  columns: { label: string; key: keyof T }[]
  rows: T[]
  onRowClick?: (row: T) => void
  paginate?: boolean
  pagination?: Pagination
}

const props = defineProps<TableProps<T>>()
</script>

<template>
  <div class="overflow-x-auto">
    <table class="table">
      <!-- headers-->
      <TableHeader :columns="props.columns" />
      <tbody>
        <!-- rows  -->
        <TableRow
          v-for="(row, rowIdx) in props.rows"
          :key="rowIdx"
          :row="row"
          :columns="props.columns"
          :onRowClick="props.onRowClick"
        />
      </tbody>
    </table>
  </div>
  <div class="pagination-container">
    <DefaultPagination
      v-if="props.paginate && props.pagination"
      :limit="props.pagination.limit"
      :total="props.pagination.total"
      :totalPages="props.pagination.totalPages"
      :page="props.pagination.page"
      :hasNext="props.pagination.page < props.pagination.totalPages"
      :hasPrev="props.pagination.page > 1"
      :onPageChange="props.pagination.onPageChange"
    />
  </div>
</template>

<style scoped>
.pagination-container {
  margin-top: 4rem;
  display: flex;
  justify-content: center;
}
</style>
