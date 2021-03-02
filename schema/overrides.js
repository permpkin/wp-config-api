const Joi = require('joi');

const schema = Joi.object({

  hide_block_categories: Joi.array(),
  test_key: Joi.string(),

})

module.exports = schema