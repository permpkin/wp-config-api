const Joi = require('joi');

const schema = Joi.object({

  hide_block_categories: Joi.array(),
  theme_support: Joi.array().items(Joi.alternatives(
  
    Joi.string(),
    Joi.array().items(Joi.string())
  
  ))

})

module.exports = schema