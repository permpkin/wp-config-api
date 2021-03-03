const Joi = require('joi');

const schema = Joi.object({

  hide_block_categories: Joi.array(),
  theme_support: Joi.array().items(Joi.alternatives(
  
    Joi.string(),
    Joi.array().items(Joi.string())
    /*
    values ->
      "align-wide",
      "editor-styles",
      "post-formats",
      "post-thumbnails",
      "html5",
      "title-tag",
      "custom-background"
    */
  
  ))

})

module.exports = schema