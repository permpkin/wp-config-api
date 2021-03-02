const Joi = require('joi');

const schema = Joi.object({
  
  key: Joi.string().required(),
  source: Joi.string().required(),
  insert: Joi.array().items(Joi.string().valid('front', 'back')).required(),
  footer: Joi.boolean(),
  dependencies: Joi.array().items(Joi.string()),
  version: Joi.string()

})

module.exports = schema