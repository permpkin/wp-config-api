const Joi = require('joi');
const { GetKey } = require('../meta')

const schema = Joi.object({
  
  key: Joi.string().default((parent, helpers)=>{return GetKey()}),
  
  name: Joi.string().required(),
  display_name: Joi.string().required(),
  capabilities: Joi.object()

})

module.exports = schema