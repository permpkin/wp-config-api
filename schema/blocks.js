const Joi = require('joi');

const schema = Joi.object({
  
  key: Joi.string().required(),
  name: Joi.string().required(),
  title: Joi.string(),
  description: Joi.string(),
  icon: Joi.string(),
  category: Joi.object({
    slug: Joi.string(),
    title: Joi.string(),
    icon: Joi.string(),
  }),
  keywords: Joi.array(),
  post_types: Joi.array(),
  align: Joi.string(), // add default
  "@styles": Joi.array().items(require('./styles')),
  "@scripts": Joi.array().items(require('./scripts')),
  "@fields": Joi.array().items(require('./fields')),

})

module.exports = schema