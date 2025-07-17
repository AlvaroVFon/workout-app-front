<script setup lang="ts">
type TableHeaderProps = {
  columns: { label: string }[]
}

const { columns } = defineProps<TableHeaderProps>()
</script>

<template>
  <thead>
    <tr>
      <th
        v-for="column in columns"
        :key="column.label"
        class="text-left"
      >
        {{ column.label }}
      </th>
    </tr>
  </thead>
</template>
