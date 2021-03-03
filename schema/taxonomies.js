const Joi = require('joi');

// TODO: replace this, it's just a clone of types
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
  can_export: Joi.boolean(),
  has_archive: Joi.boolean(),
  exclude_from_search: Joi.boolean(),
  publicly_queryable: Joi.boolean(),
  rewrite: Joi.boolean(),
  delete_with_user: Joi.boolean(),
  capability_type: Joi.string(),
  hierarchical: Joi.boolean()

})

module.exports = schema