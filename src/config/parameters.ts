import Joi from 'joi'

const parametersSchema = Joi.object({
  apiUrl: Joi.string().required(),
})

const parameters = {
  apiUrl: import.meta.env.VITE_API_URL,
}

const { error, value: validatedParameters } = parametersSchema.validate(parameters)

if (error) {
  throw new Error(`Invalid configuration parameters: ${error.message}`)
}

export { validatedParameters }
