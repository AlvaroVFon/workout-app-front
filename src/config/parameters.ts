import Joi from 'joi'

const parametersSchema = Joi.object({
  apiUrl: Joi.string().required(),
  codeLength: Joi.number().integer().min(1).default(6),
})

const envVars = {
  apiUrl: import.meta.env.VITE_API_URL,
  codeLength: import.meta.env.VITE_CODE_LENGTH,
}

const { error, value: validatedParameters } = parametersSchema.validate(envVars)

if (error) {
  throw new Error(`Invalid configuration parameters: ${error.message}`)
}

const parameters = {
  apiUrl: validatedParameters.apiUrl,
  codeLength: validatedParameters.codeLength,
}

export { parameters }
