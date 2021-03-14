const Joi = require('joi');

const schema = Joi.object({
  
  key: Joi.string().required(),
  label: Joi.string(),
  description: Joi.string(),
  labels: Joi.object({
    name: Joi.string(),
    singular_name: Joi.string(),
    menu_name: Joi.string(),
    name_admin_bar: Joi.string(),
  }),
  supports: Joi.array().items(Joi.string()),
  menu_icon: Joi.string(),
  heirarchical: Joi.boolean(),
  public: Joi.boolean(),
  show_ui: Joi.boolean(),
  show_in_menu: Joi.boolean(),
  menu_position: Joi.number(),
  show_in_admin_bar: Joi.boolean(),
  show_in_nav_menus: Joi.boolean(),
  show_in_rest: Joi.boolean(),
  can_export: Joi.boolean(),
  has_archive: Joi.boolean(),
  exclude_from_search: Joi.boolean(),
  publicly_queryable: Joi.boolean(),
  rewrite: Joi.boolean(),
  delete_with_user: Joi.boolean(),
  capability_type: Joi.string(),
  hierarchical: Joi.boolean(),
  "@styles": Joi.array().items(require('./styles')),
  "@scripts": Joi.array().items(require('./scripts')),
  "@fields": Joi.array().items(require('./fields')),
  "@options": Joi.array().items(require('./options'))

})

module.exports = schema