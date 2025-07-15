<script lang="ts" setup>
import { reactive, ref } from 'vue'
import { useRouter } from 'vue-router'
import { useForm } from '@/composables/useForm'
import { forgotPasswordSchema } from '@/schemas/login.schema'
import apiService from '@/services/api.service'
import MailIcon from '@/components/icons/MailIcon.vue'
import DefaultInput from '@/components/common/DefaultInput.vue'
import DefaultButton from '@/components/common/DefaultButton.vue'
import DefaultAlert from '@/components/common/DefaultAlert.vue'
import { Endpoint } from '@/utils/endpoints.enum'

const router = useRouter()
const error = ref<string | null>(null)

const initialValues = reactive({
  email: '',
})

async function onSubmit(formData: typeof initialValues) {
  try {
    const response = await apiService.post(Endpoint.FORGOT_PASSWORD, formData)
    if (response.statusCode === 204) {
      router.push({ name: 'login' })
    }
  } catch {
    error.value = 'An error occurred while sending the reset password email.'
  }
}

const { values, errors, handleSubmit, handleChange, isSubmitting, success } = useForm({
  initialValues,
  schema: forgotPasswordSchema,
  onSubmit,
})

const { title } = defineProps<{
  title: string
}>()
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
      <DefaultButton
        variant="primary"
        size="md"
        label="Send Code"
        :loading="isSubmitting"
        type="submit"
      />
      <DefaultAlert
        v-if="errors.email"
        type="neutral"
        :message="errors.email"
        class="w-96 text-red-400"
      />
      <DefaultAlert
        v-if="!errors.email && !isSubmitting && success"
        type="info"
        message="You'll receive an email with instructions to reset your password."
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
