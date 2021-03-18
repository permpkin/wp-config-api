const Joi = require('joi');
const { GetKey } = require('../meta')

const Schema = Joi.object({
  
  key: Joi.string().default((parent, helpers)=>{return GetKey()}),
  
  theme_support: Joi.array().items(Joi.alternatives(
  
    Joi.string().valid('align-wide', 'editor-styles', 'post-formats', 'post-thumbnails', 'html5', 'title-tag', 'custom-background'),
    Joi.array().items(Joi.string())
  
  )),
  allowed_origins: Joi.array().items(Joi.string()),
  shortcodes: Joi.array().items(Joi.string())

})

module.exports = { Schema }