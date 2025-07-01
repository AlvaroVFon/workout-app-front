import { reactive, ref, toRaw } from 'vue'
import type { ObjectSchema } from 'joi'

interface UseFormOptions<T extends Record<string, unknown>> {
  initialValues: T
  schema: ObjectSchema<T>
  onSubmit: (values: T) => Promise<void> | void
}

export function useForm<T extends Record<string, unknown>>(options: UseFormOptions<T>) {
  const values = reactive({ ...options.initialValues }) as T

  const errors = reactive<Record<keyof T, string | null>>(
    Object.keys(options.initialValues).reduce(
      (acc, key) => {
        acc[key as keyof T] = null
        return acc
      },
      {} as Record<keyof T, string | null>,
    ),
  )

  const isSubmitting = ref(false)
  const isTouched = ref(false)

  const validate = (): boolean => {
    const result = options.schema.validate(values, { abortEarly: false })
    const newErrors: Partial<Record<keyof T, string>> = {}

    if (result.error) {
      for (const detail of result.error.details) {
        const key = detail.path[0] as keyof T
        newErrors[key] = detail.message
      }
    }

    for (const key in values) {
      const errorKey = key as keyof T
      ;(errors as Record<string, string | null>)[key] = newErrors[errorKey] ?? null
    }

    return !result.error
  }

  const handleChange = <K extends keyof T>(key: K, value: T[K]) => {
    values[key] = value
    isTouched.value = true
    validate()
  }

  const handleSubmit = async () => {
    isSubmitting.value = true
    const isValid = validate()

    if (isValid) {
      const rawValues = toRaw(values)
      await options.onSubmit(rawValues)
    }

    isSubmitting.value = false
  }

  const resetForm = () => {
    for (const key in options.initialValues) {
      values[key as keyof T] = options.initialValues[key as keyof T]
    }

    for (const key in errors) {
      ;(errors as Record<string, string | null>)[key] = null
    }

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
  }
}
