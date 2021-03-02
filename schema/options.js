const Joi = require('joi');

const schema = Joi.object({
  
  key: Joi.string().required(),
  page_title: Joi.string(),
  menu_title: Joi.string(),
  menu_slug: Joi.string(),
  capability: Joi.string(),
  icon_url: Joi.string(),
  parent_slug: Joi.string(),
  post_id: Joi.string(),
  redirect: Joi.boolean(),
  autoload: Joi.boolean(),
  update_button: Joi.string(),
  updated_message: Joi.string(),
  position: Joi.number()

})

module.exports = schema