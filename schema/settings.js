const Joi = require('joi');

const schema = Joi.object({
  
  key: Joi.string().required(),
  title: Joi.string(),
  priority: Joi.number(),
  capability: Joi.string(),
  description: Joi.string(),
  settings: Joi.array().items(Joi.object({
    label: Joi.string(),
    default: Joi.string(),
    type: Joi.string(),
    capability: Joi.string(),
    transport: Joi.string(),
    input_type: Joi.string(),
    priority: Joi.number()
  }))

})

module.exports = schema