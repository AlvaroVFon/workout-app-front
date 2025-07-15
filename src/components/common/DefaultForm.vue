<script lang="ts" setup>
const { title, handleSubmit } = defineProps<{ title: string; handleSubmit: () => Promise<void> }>()
</script>
<template>
  <form
    @submit.prevent="handleSubmit"
    class="card bg-base-100 shadow-xl min-w-96 items-center"
  >
    <div class="card-body">
      <h1 class="text-center font-bold text-4xl mb-4 w-96">{{ title }}</h1>
      <slot />
    </div>
  </form>
</template>
