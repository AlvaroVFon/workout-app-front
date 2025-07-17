<script lang="ts" setup>
import { ref, watch, type Component } from 'vue'

const props = defineProps<{
  tabs: { label: string; content: string | Component; props?: Record<string, any> }[]
  name: string
  initial?: number
  tabsClass?: string
  tabContentClass?: string
}>()

const selected = ref(props.initial ?? 0)
watch(
  () => props.initial,
  (v) => {
    if (v !== undefined) selected.value = v
  },
)

function selectTab(idx: number) {
  selected.value = idx
}
</script>

<template>
  <div :class="['tabs tabs-lift', props.tabsClass]">
    <template
      v-for="(tab, idx) in props.tabs"
      :key="tab.label"
    >
      <input
        type="radio"
        :name="props.name"
        class="tab"
        :aria-label="tab.label"
        :checked="selected === idx"
        @change="selectTab(idx)"
      />
      <div
        class="tab-content bg-base-100 border-base-300 p-6"
        :class="props.tabContentClass"
        v-show="selected === idx"
      >
        <component
          v-if="typeof tab.content === 'object' || typeof tab.content === 'function'"
          :is="tab.content"
          v-bind="tab.props"
        />
        <span v-else>{{ tab.content }}</span>
      </div>
    </template>
  </div>
</template>
