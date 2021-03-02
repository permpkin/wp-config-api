const Joi = require('joi');

const schema = Joi.object({
  
  key: Joi.string().required(),
  title: Joi.string().required(),
  description: Joi.string(),
  icon: Joi.string(),
  category: Joi.object({
    slug: Joi.string(),
    title: Joi.string(),
    icon: Joi.string(),
  }),
  align: Joi.string().required(),
  "@styles": Joi.array().items(require('./styles')),
  "@scripts": Joi.array().items(require('./scripts')),
  "@fields": Joi.array().items(require('./fields')),

})

module.exports = schema