const Joi = require('joi');
const { GetKey } = require('../meta')

const schema = Joi.object({
  
  key: Joi.string().default((parent, helpers)=>{return GetKey('group_')}),

  title: Joi.string().required(),
  fields: Joi.array().items(Joi.object({
    key: Joi.string().default((parent, helpers)=>{return GetKey('field_')}),
    label: Joi.string(),
    name: Joi.string(),
    type: Joi.string()
  })).required(),
  location: Joi.array().items(
    Joi.array()
  ),

})

module.exports = schema