const Joi = require('joi');
const { GetKey } = require('../meta')

const Schema = Joi.object({
  
  key: Joi.string().default((parent, helpers)=>{return GetKey()}),

  type: Joi.string().valid('option', 'comments', 'menu', 'settings', 'pages', 'themes', 'links', 'users', 'management', 'media'),
  page_title: Joi.string(),
  menu_title: Joi.string(),
  menu_slug: Joi.string(),
  capability: Joi.string(),
  position: Joi.number(),
  icon_url: Joi.string(),
  callback: Joi.string()

  // SETTINGS TYPESET
  // title: Joi.string(),
  // priority: Joi.number(),
  // capability: Joi.string(),
  // description: Joi.string(),
  // settings: Joi.array().items(Joi.object({
  //   label: Joi.string(),
  //   default: Joi.string(),
  //   type: Joi.string(),
  //   capability: Joi.string(),
  //   transport: Joi.string(),
  //   input_type: Joi.string(),
  //   priority: Joi.number()
  // }))

})

module.exports = { Schema }