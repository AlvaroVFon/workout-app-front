<script lang="ts" setup generic="T">
interface Column {
  key: keyof T
  label?: string
}

const props = defineProps<{
  row: T
  columns: Column[]
  onRowClick?: (row: T) => void
}>()

function handleClick() {
  if (props.onRowClick) {
    props.onRowClick(props.row)
  }
}
</script>

<template>
  <tr
    class="hover:bg-base-200"
    @click="handleClick"
  >
    <td
      v-for="(column, colIdx) in props.columns"
      :key="colIdx"
    >
      {{ props.row[column.key] }}
    </td>
    <slot />
  </tr>
</template>
