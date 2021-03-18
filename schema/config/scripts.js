const Joi = require('joi');
const { GetKey } = require('../meta')

const Schema = Joi.object({
  
  key: Joi.string().default((parent, helpers)=>{return GetKey()}),
  
  source: Joi.string().required(),
  dependencies: Joi.array().items(Joi.alternatives().try(Joi.string(), Joi.object({
    id: Joi.string(),
    version: Joi.string()
  }))),
  version: Joi.string(),
  location: Joi.array().items(Joi.string().valid('front', 'back', 'all')).required(),
  footer: Joi.boolean(),

})

module.exports = { Schema }