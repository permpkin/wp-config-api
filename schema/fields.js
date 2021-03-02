const Joi = require('joi');

const schema = Joi.object({
  
  key: Joi.string(),
  title: Joi.string().required(),
  fields: Joi.array().items(Joi.object({
    key: Joi.string(),
    label: Joi.string(),
    name: Joi.string(),
    type: Joi.string()
  })).required(),
  location: Joi.array().items(
    Joi.array()
  ),

})

module.exports = schema