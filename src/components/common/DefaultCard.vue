<script lang="ts" setup>
import { defineProps } from 'vue'
import { CardProps } from '@/types/common/card.types'
import MailIcon from '@/components/icons/MailIcon.vue'
import KeyIcon from '@/components/icons/KeyIcon.vue'
import DefaultInput from '@/components/common/DefaultInput.vue'
import DefaultButton from '@/components/common/DefaultButton.vue'
const { title } = defineProps<CardProps>()
</script>

<template>
  <form class="card bg-base-100 shadow-xl min-w-96 flex items-center justify-center">
    <div class="card-body">
      <h1>{{ title }}</h1>
      <DefaultInput
        v-model="email"
        placeholder="Enter your email"
        type="email"
        size="md"
        :Icon="MailIcon"
      />
      <DefaultInput
        v-model="password"
        placeholder="Enter your password"
        type="password"
        size="md"
        :Icon="KeyIcon"
      />
      <DefaultButton
        label="Login"
        variant=""
        size="md"
        @click="$emit('login')"
      />
    </div>
  </form>
</template>
