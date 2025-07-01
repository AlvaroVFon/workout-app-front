import Joi from 'joi'
import type { RegisterCredentials } from '../types/auth'
import { emailSchema, passwordSchema } from './login.schema'

const nameSchema = Joi.string().min(2).max(50).required().label('Name')
const lastNameSchema = Joi.string().min(2).max(50).required().label('Last Name')
const idDocumentSchema = Joi.string().min(5).max(20).required().label('ID Document')
const countrySchema = Joi.string().min(2).max(50).required().label('Country')
const roleSchema = Joi.string().valid('user').default('user')

const registerSchema = Joi.object<RegisterCredentials>({
  email: emailSchema,
  password: passwordSchema,
  passwordConfirm: Joi.string()
    .valid(Joi.ref('password'))
    .required()
    .label('Password Confirmation')
    .messages({
      'any.only': 'Password confirmation does not match',
    }),
  name: nameSchema,
  lastName: lastNameSchema,
  idDocument: idDocumentSchema,
  country: countrySchema,
  role: roleSchema,
})

export { registerSchema }
