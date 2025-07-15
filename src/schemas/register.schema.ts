import Joi from 'joi'
import type { RegisterCredentials } from '../types/auth'
import { emailSchema, passwordSchema } from './login.schema'
import { parameters } from '@/config/parameters'

const codeLength = parameters.codeLength

const roleSchema = Joi.string().valid('user').default('user')
const codeSchema = Joi.object({
  code: Joi.string().length(codeLength).required(),
}).required()

const registerSchema = Joi.object<RegisterCredentials>({
  email: emailSchema,
  password: passwordSchema,
  role: roleSchema,
})

export { registerSchema, codeSchema }
