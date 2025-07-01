<script lang="ts" setup>
import type { CardProps } from '@/types/common/card.types'
import MailIcon from '@/components/icons/MailIcon.vue'
import KeyIcon from '@/components/icons/KeyIcon.vue'
import DefaultInput from '@/components/common/DefaultInput.vue'
import DefaultButton from '@/components/common/DefaultButton.vue'
import DefaultAlert from '@/components/common/DefaultAlert.vue'
import { loginSchema } from '@/schemas/login.schema'
import { useForm } from '@/composables/useForm'
import { useAuth } from '@/composables/useAuth'
import type { LoginCredentials } from '@/types/auth'

const { title } = defineProps<CardProps>()
const { login, clearError } = useAuth()

const initialValues: LoginCredentials = {
  email: '',
  password: '',
}

const onSubmit = async (formData: LoginCredentials) => {
  try {
    clearError()
    await login(formData)
    // Redireccionar después del login exitoso
    // router.push('/dashboard')
  } catch (err) {
    console.error('Login failed:', err)
  }
}

const { values, errors, handleChange, handleSubmit, isSubmitting } = useForm({
  initialValues,
  schema: loginSchema,
  onSubmit,
})
</script>

<template>
  <form
    @submit.prevent="handleSubmit"
    class="card bg-base-100 shadow-xl min-w-96 items-center"
  >
    <div class="card-body">
      <h1 class="text-center font-bold text-4xl mb-4 w-96">{{ title }}</h1>
      <DefaultInput
        :model-value="values.email"
        @update:model-value="handleChange('email', $event)"
        placeholder="Enter your email"
        type="email"
        size="md"
        :Icon="MailIcon"
      />
      <DefaultInput
        placeholder="Enter your password"
        :model-value="values.password"
        @update:model-value="handleChange('password', $event)"
        type="password"
        size="md"
        :Icon="KeyIcon"
      />
      <DefaultButton
        variant="primary"
        size="md"
        label="Login"
        :loading="isSubmitting"
        type="submit"
      />
      <DefaultAlert
        v-if="errors.email || errors.password"
        type="error"
        :message="errors.email || errors.password || ''"
        class="w-96"
      />
      <p class="text-center text-sm text-gray-500 mt-4">
        Don't have an account?
        <router-link
          to="/register"
          class="text-primary"
          >Register</router-link
        >
      </p>
    </div>
  </form>
</template>
