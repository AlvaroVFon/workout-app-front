<script lang="ts" setup>
import MailIcon from '@/components/icons/MailIcon.vue'
import KeyIcon from '@/components/icons/KeyIcon.vue'
import DefaultInput from '@/components/common/DefaultInput.vue'
import DefaultButton from '@/components/common/DefaultButton.vue'
import DefaultAlert from '@/components/common/DefaultAlert.vue'
import DefaultForm from '@/components/common/DefaultForm.vue'
import { loginSchema } from '@/schemas/login.schema'
import { useForm } from '@/composables/useForm'
import { useAuthStore } from '@/stores/useAuthStore'
import { useRouter } from 'vue-router'
import type { LoginCredentials } from '@/types/auth'

const router = useRouter()

const initialValues: LoginCredentials = {
  email: '',
  password: '',
}

const authStore = useAuthStore()

const onSubmit = async (formData: LoginCredentials) => {
  await authStore.login(formData)
  if (!authStore.error) {
    router.push({ name: 'dashboard' })
  }
}

const { values, errors, handleChange, handleSubmit, isSubmitting } = useForm({
  initialValues,
  schema: loginSchema,
  onSubmit,
})
</script>

<template>
  <DefaultForm
    title="Login"
    :handleSubmit="handleSubmit"
  >
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
    <router-link
      :to="{ name: 'forgot-password' }"
      class="text-neutral hover:text-primary duration-300 text-sm text-right mb-2"
      >Forgot password?</router-link
    >
    <DefaultButton
      variant="primary"
      size="md"
      label="Login"
      :loading="isSubmitting || authStore.isLoading"
      type="submit"
    />
    <DefaultAlert
      v-if="errors.email || errors.password || authStore.error"
      type="neutral"
      :message="errors.email || errors.password || authStore.error || ''"
      class="w-96 text-red-400"
    />
    <p class="text-center text-sm text-gray-500 mt-4">
      Don't have an account?
      <router-link
        :to="{ name: 'signup' }"
        class="text-primary"
        >Register</router-link
      >
    </p>
  </DefaultForm>
</template>
