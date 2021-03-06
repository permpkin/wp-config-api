const Joi = require('joi');

const schema = Joi.object({
  
  key: Joi.string().required(),
  source: Joi.string().required(),
  dependencies: Joi.array().items(Joi.string()),
  version: Joi.string(),
  location: Joi.array().items(Joi.string().valid('front', 'back', 'all')).required(),
  footer: Joi.boolean(),

})

module.exports = schema