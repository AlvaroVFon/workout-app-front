import Joi from 'joi'
import type { LoginCredentials } from '../types/auth'

const emailSchema = Joi.string()
  .pattern(/^[\w.-]+@([\w-]+\.)+[\w-]{2,4}$/)
  .required()
  .label('Email')
  .messages({
    'string.pattern.base': 'Invalid email format',
    'string.empty': 'Email is required',
    'any.required': 'Email is required',
  })
const passwordSchema = Joi.string().min(6).required().label('Password')

const loginSchema = Joi.object<LoginCredentials>({
  email: emailSchema,
  password: passwordSchema,
})

export { emailSchema, passwordSchema, loginSchema }
