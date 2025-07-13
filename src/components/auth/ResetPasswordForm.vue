<script lang="ts" setup>
import { useRouter, useRoute } from 'vue-router'
import { reactive } from 'vue'
import { useForm } from '@/composables/useForm'
import apiService from '@/services/api.service'
import DefaultInput from '@/components/common/DefaultInput.vue'
import DefaultButton from '@/components/common/DefaultButton.vue'
import DefaultAlert from '@/components/common/DefaultAlert.vue'
import KeyIcon from '@/components/icons/KeyIcon.vue'
import HashIcon from '@/components/icons/HashIcon.vue'
import { resetPasswordSchema } from '@/schemas/login.schema'
import { Endpoint } from '@/utils/endpoints.enum'

const { title } = defineProps<{
  title: string
}>()

const router = useRouter()
const route = useRoute()

const token = route.params.token
const initialValues = reactive({
  password: '',
  passwordConfirmation: '',
  code: '',
})

const onSubmit = async (formData: typeof initialValues) => {
  const data = { password: formData.password, code: formData.code }
  await apiService.post(`${Endpoint.RESET_PASSWORD}/${token}`, data)
  if (success) {
    setTimeout(() => {
      router.push({ name: 'login' })
    }, 3000)
  }
}

const { values, errors, handleChange, handleSubmit, isSubmitting, success } = useForm({
  initialValues,
  schema: resetPasswordSchema,
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
        :model-value="values.code"
        @update:model-value="handleChange('code', $event)"
        placeholder="Enter your reset code"
        type="text"
        size="md"
        :Icon="HashIcon"
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
        :model-value="values.passwordConfirmation"
        @update:model-value="handleChange('passwordConfirmation', $event)"
        placeholder="Confirm your password"
        type="password"
        size="md"
        :Icon="KeyIcon"
      />

      <DefaultButton
        variant="primary"
        size="md"
        label="Confirm"
        :loading="isSubmitting"
        type="submit"
      />

      <DefaultAlert
        v-if="errors.password || errors.passwordConfirmation || errors.code"
        type="neutral"
        :message="errors.password || errors.passwordConfirmation || errors.code || ''"
        class="w-96 text-red-400"
      />
      <DefaultAlert
        v-if="!errors.password && !isSubmitting && success"
        type="info"
        message="Password reset successfully. You can now log in."
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
    </div>
  </form>
</template>
