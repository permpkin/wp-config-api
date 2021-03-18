const Joi = require('joi');
const { GetKey } = require('../meta')

const schema = Joi.object({
  
  key: Joi.string().default((parent, helpers)=>{return GetKey()}),

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
  supports: Joi.array(),
  mode: Joi.string(),
  align: Joi.string(), // add default
  example: Joi.object(),
  "@styles": Joi.array().items(require('./styles')),
  "@scripts": Joi.array().items(require('./scripts')),
  "@fields": Joi.array().items(require('./fields')),

})

module.exports = schema