const Joi = require('joi');

const schema = Joi.array().items(Joi.alternatives(
  
  Joi.string(),
  Joi.array().items(Joi.string())

))

module.exports = schema