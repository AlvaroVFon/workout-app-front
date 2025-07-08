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

const forgotPasswordSchema = Joi.object({
  email: emailSchema,
}).messages({
  'object.unknown': 'Invalid field(s) provided',
})

const resetPasswordSchema = Joi.object({
  code: Joi.string().length(6).required().label('Code'),
  password: passwordSchema,
  passwordConfirmation: Joi.string()
    .valid(Joi.ref('password'))
    .required()
    .label('Password Confirmation')
    .messages({
      'any.only': 'Password confirmation does not match',
      'string.empty': 'Password confirmation is required',
    }),
})

export { emailSchema, passwordSchema, loginSchema, forgotPasswordSchema, resetPasswordSchema }
