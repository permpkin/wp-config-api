const Joi = require('joi');

const schema = Joi.object({

  hide_block_categories: Joi.array()

})

module.exports = schema