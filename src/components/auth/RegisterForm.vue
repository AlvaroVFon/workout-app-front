<script lang="ts" setup>
import DefaultInput from '@/components/common/DefaultInput.vue'
import DefaultButton from '@/components/common/DefaultButton.vue'
import DefaultAlert from '@/components/common/DefaultAlert.vue'
import UserIcon from '@/components/icons/UserIcon.vue'
import MailIcon from '@/components/icons/MailIcon.vue'
import KeyIcon from '@/components/icons/KeyIcon.vue'
import IdIcon from '../icons/IdIcon.vue'
import EarthIcon from '../icons/EarthIcon.vue'
import type { CardProps } from '@/types/common/card.types'
import type { RegisterCredentials } from '@/types/auth'
import { registerSchema } from '@/schemas/register.schema'
import { useForm } from '@/composables/useForm'
import { useAuth } from '@/composables/useAuth'

const { title } = defineProps<CardProps>()
const { register, clearError } = useAuth()

const initialValues: RegisterCredentials = {
  name: '',
  lastName: '',
  email: '',
  password: '',
  passwordConfirm: '',
  idDocument: '',
  role: 'user',
  country: '',
}

const onSubmit = async (formData: RegisterCredentials) => {
  try {
    clearError()
    await register(formData)
    // Redireccionar después del registro exitoso
    // router.push('/dashboard')
  } catch (err) {
    console.error('Registration failed:', err)
  }
}

const { values, errors, handleChange, handleSubmit, isSubmitting } = useForm({
  initialValues,
  schema: registerSchema,
  onSubmit,
})
</script>

<template>
  <form
    @submit.prevent="handleSubmit"
    class="card bg-base-100 shadow-xl min-w-96 items-center"
  >
    <div class="card-body">
      <h1 class="text-center font-bold text-4xl mb-4">{{ title }}</h1>
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

      <DefaultInput
        :model-value="values.passwordConfirm"
        @update:model-value="handleChange('passwordConfirm', $event)"
        placeholder="Confirm your password"
        type="password"
        size="md"
        :Icon="KeyIcon"
      />
      <DefaultInput
        :model-value="values.name"
        @update:model-value="handleChange('name', $event)"
        placeholder="Enter your name"
        type="text"
        size="md"
        :Icon="UserIcon"
      />
      <DefaultInput
        :model-value="values.lastName"
        @update:model-value="handleChange('lastName', $event)"
        placeholder="Enter your last name"
        type="text"
        size="md"
        :Icon="UserIcon"
      />
      <DefaultInput
        :model-value="values.idDocument"
        @update:model-value="handleChange('idDocument', $event)"
        placeholder="Insert your ID document"
        type="text"
        size="md"
        :Icon="IdIcon"
      />
      <DefaultInput
        :model-value="values.country"
        @update:model-value="handleChange('country', $event)"
        placeholder="Enter your country"
        type="text"
        size="md"
        :Icon="EarthIcon"
      />
      <DefaultButton
        type="submit"
        variant="primary"
        size="md"
        label="Register"
        :loading="isSubmitting"
      />
      <DefaultAlert
        v-if="Object.values(errors).some((error) => error)"
        type="error"
        :message="Object.values(errors).find((error) => error) || ''"
        class="w-96"
      />
      <p class="text-center text-sm text-gray-500 mt-4">
        Already have an account?
        <router-link
          to="/"
          class="text-primary"
          >Login</router-link
        >
      </p>
    </div>
  </form>
</template>
