import type { Schema, ValidationError } from 'joi'

export function validateSchema<T>(
  data: T,
  schema: Schema,
): { value: T; errors?: Partial<ValidationError>[] } {
  const errors = []
  const { value, error } = schema.validate(data, { abortEarly: false })
  for (const err of error?.details || []) {
    errors.push(err)
  }
  return { value, errors }
}
