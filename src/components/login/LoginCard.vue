<script lang="ts" setup>
import { ref } from 'vue'
import { CardProps } from '@/types/common/card.types'
import MailIcon from '@/components/icons/MailIcon.vue'
import KeyIcon from '@/components/icons/KeyIcon.vue'
import DefaultInput from '@/components/common/DefaultInput.vue'
import DefaultButton from '@/components/common/DefaultButton.vue'
const { title } = defineProps<CardProps>()
const email = ref('')
const password = ref('')

function handleLogin() {}
</script>

<template>
  <form
    @submit.prevent="handleLogin"
    class="card bg-base-100 shadow-xl min-w-96 items-center"
  >
    <div class="card-body">
      <h1 class="text-center font-bold text-4xl mb-4">{{ title }}</h1>
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
        variant="primary"
        size="md"
        label="Login"
      />
      <p class="text-center text-sm text-gray-500 mt-4">
        Don't have an account?
        <a
          href="/register"
          class="text-primary"
          >Register</a
        >
      </p>
    </div>
  </form>
</template>
