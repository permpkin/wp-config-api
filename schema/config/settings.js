const Joi = require('joi');

const Schema = Joi.object({

  hide_block_categories: Joi.array(),
  theme_support: Joi.array().items(Joi.alternatives(
  
    Joi.string().valid('align-wide', 'editor-styles', 'post-formats', 'post-thumbnails', 'html5', 'title-tag', 'custom-background'),
    Joi.array().items(Joi.string())
  
  )),
  allowed_origins: Joi.array().items(Joi.string()).default(['*']),
  disabled_admin_pages: Joi.array().items(Joi.string().valid('dashboard','jetpack','posts','media','pages','comments','appearance','plugins','users','tools','settings')),
  disabled_user_roles: Joi.array().items(Joi.string()),
  image_sizes: Joi.array().items(Joi.object({
    name: Joi.string(),
    width: Joi.number(),
    height: Joi.number(),
    crop: Joi.boolean()
  })),
  shortcodes: Joi.array().items(Joi.string()),
  enable_debugger: Joi.boolean().default(false)

})

module.exports = { Schema }