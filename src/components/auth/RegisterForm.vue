<script lang="ts" setup>
import { useRouter } from 'vue-router'
import DefaultForm from '../common/DefaultForm.vue'
import DefaultInput from '@/components/common/DefaultInput.vue'
import DefaultButton from '@/components/common/DefaultButton.vue'
import DefaultAlert from '@/components/common/DefaultAlert.vue'
import MailIcon from '@/components/icons/MailIcon.vue'
import KeyIcon from '@/components/icons/KeyIcon.vue'
import type { RegisterCredentials } from '@/types/auth'
import { registerSchema } from '@/schemas/register.schema'
import { useForm } from '@/composables/useForm'
import { useSignup } from '@/composables/useSignup'

const router = useRouter()

const initialValues: RegisterCredentials = {
  email: '',
  password: '',
}

const onSubmit = async (formData: RegisterCredentials) => {
  try {
    await signup(formData)

    if (success.value) {
      setTimeout(() => {
        router.push({ name: 'login' })
      }, 3000)
    }
  } catch {
    error.value = 'Registration failed. Please try again.'
  }
}

const { signup, error, isLoading, success } = useSignup()
const { values, errors, handleChange, handleSubmit, isSubmitting } = useForm({
  initialValues,
  schema: registerSchema,
  onSubmit,
})
</script>

<template>
  <DefaultForm
    title="Register"
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
      :model-value="values.password"
      @update:model-value="handleChange('password', $event)"
      placeholder="Enter your password"
      type="password"
      size="md"
      :Icon="KeyIcon"
    />

    <DefaultButton
      type="submit"
      variant="primary"
      size="md"
      label="Register"
      :loading="isSubmitting || isLoading"
    />

    <DefaultAlert
      v-if="Object.values(errors).some((error) => error) || error"
      type="neutral"
      :message="Object.values(errors).find((error) => error) || error || ''"
      class="w-96 text-red-400"
    />

    <DefaultAlert
      v-if="success"
      type="info"
      message="Registration successful! Please check your email to verify your account."
      class="w-96"
    />

    <p class="text-center text-sm text-gray-500 mt-4">
      Already have an account?
      <router-link
        :to="{ name: 'login' }"
        class="text-primary"
        >Login</router-link
      >
    </p>
  </DefaultForm>
</template>
