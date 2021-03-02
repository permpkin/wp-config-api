const Joi = require('joi');

const schema = Joi.object({
  
  key: Joi.string().required(),
  page_title: Joi.string(),
  menu_title: Joi.string(),
  menu_slug: Joi.string(),
  capability: Joi.string(),
  position: Joi.number(),
  icon_url: Joi.string(),
  callback: Joi.string()

})

module.exports = schema