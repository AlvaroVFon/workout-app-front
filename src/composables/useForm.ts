import { reactive, ref, toRaw } from 'vue'
import type { ObjectSchema } from 'joi'

interface UseFormOptions<T extends Record<string, unknown>> {
  initialValues: T
  schema: ObjectSchema<T>
  onSubmit: (values: T) => Promise<void> | void
}

export function useForm<T extends Record<string, unknown>>(options: UseFormOptions<T>) {
  const values = reactive({ ...options.initialValues }) as T
  const errors = reactive<Record<keyof T, string | null>>(initErrors(options.initialValues))
  const success = ref(false)
  const isSubmitting = ref(false)
  const isTouched = ref(false)

  function initErrors(initialValues: T): Record<keyof T, string | null> {
    return Object.keys(initialValues).reduce(
      (acc, key) => {
        acc[key as keyof T] = null
        return acc
      },
      {} as Record<keyof T, string | null>,
    )
  }

  function setErrors(newErrors: Partial<Record<keyof T, string>>) {
    for (const key in values) {
      const errorKey = key as keyof T
      ;(errors as Record<string, string | null>)[key] = newErrors[errorKey] ?? null
    }
  }

  function validate(): boolean {
    const { error } = options.schema.validate(values, { abortEarly: false })
    const newErrors: Partial<Record<keyof T, string>> = {}

    if (error) {
      for (const detail of error.details) {
        const key = detail.path[0] as keyof T
        newErrors[key] = detail.message
      }
    }

    setErrors(newErrors)
    return !error
  }

  function handleChange<K extends keyof T>(key: K, value: T[K]) {
    values[key] = value
    isTouched.value = true
    validate()
  }

  async function handleSubmit() {
    isSubmitting.value = true
    const isValid = validate()

    if (isValid) {
      try {
        await options.onSubmit(toRaw(values))
        success.value = true
      } catch (err) {
        success.value = false
        isSubmitting.value = false
        throw err
      }
    }

    isSubmitting.value = false
    success.value = isValid
  }

  function resetForm() {
    Object.assign(values, options.initialValues)
    setErrors({})
    isTouched.value = false
  }

  return {
    values,
    errors,
    isSubmitting,
    isTouched,
    handleChange,
    handleSubmit,
    resetForm,
    success,
  }
}
