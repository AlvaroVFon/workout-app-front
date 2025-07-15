<script lang="ts" setup>
import { useForm } from '@/composables/useForm'
import { useSignup } from '@/composables/useSignup'
import DefaultForm from '@/components/common/DefaultForm.vue'
import DefaultInput from '@/components/common/DefaultInput.vue'
import DefaultButton from '@/components/common/DefaultButton.vue'
import DefaultAlert from '@/components/common/DefaultAlert.vue'
import HashIcon from '@/components/icons/HashIcon.vue'
import { codeSchema } from '@/schemas/register.schema'
import { useRoute, useRouter } from 'vue-router'

const route = useRoute()
const router = useRouter()

const { uuid } = route.params

const initialValues = {
  code: '',
}

async function onSubmit(formData: typeof initialValues) {
  try {
    await verifySignup(formData.code, uuid as string)
    if (success.value) {
      setTimeout(() => {
        router.push({ name: 'login' })
      }, 1000)
    }
  } catch (err) {
    error.value = 'Verification failed. Please try again.'
    throw err
  }
}

const { verifySignup, error, success } = useSignup()
const { values, handleSubmit, handleChange, isSubmitting, errors } = useForm({
  initialValues,
  schema: codeSchema,
  onSubmit,
})
</script>

<template>
  <DefaultForm
    title="Verify Signup"
    :handleSubmit="handleSubmit"
  >
    <DefaultInput
      :model-value="values.code"
      @update:model-value="handleChange('code', $event)"
      placeholder="Enter your verification code"
      type="text"
      size="md"
      :Icon="HashIcon"
    />

    <DefaultButton
      :is-loading="isSubmitting"
      :label="'Verify Code'"
      type="submit"
      class="w-full mt-4"
    />

    <DefaultAlert
      v-if="errors.code || error"
      :message="errors.code || error || ''"
      class="w-96 text-red-400"
      type="neutral"
    />
  </DefaultForm>
</template>
