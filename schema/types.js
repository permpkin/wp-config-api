const Joi = require('joi');

const schema = Joi.object({
  
  key: Joi.string().required(),

  label: Joi.string(),
  labels: Joi.object({
    name: Joi.string(),
    singular_name: Joi.string(),
    menu_name: Joi.string(),
    name_admin_bar: Joi.string(),
  }),
  description: Joi.string(),
  public: Joi.boolean(),
  heirarchical: Joi.boolean(),
  exclude_from_search: Joi.boolean(),
  publicly_queryable: Joi.boolean(),
  show_ui: Joi.boolean(),
  show_in_menu: Joi.boolean(),
  show_in_nav_menus: Joi.boolean(),
  show_in_admin_bar: Joi.boolean(),
  show_in_rest: Joi.boolean(),
  rest_base: Joi.string(),
  rest_controller_class: Joi.string(),
  menu_position: Joi.number(),
  menu_icon: Joi.string(),
  capability_type: Joi.string(),
  capabilities: Joi.array().items(Joi.string()),
  map_meta_cap: Joi.boolean(),
  supports: Joi.array().items(Joi.string()),
  register_meta_box_cb: Joi.string(),
  taxonomies: Joi.array().items(Joi.string()),
  has_archive: Joi.boolean(),
  rewrite: Joi.boolean(),
    // { slug:string, with_front:bool, feeds:bool, pages:bool, ep_mask:int }
  query_var: Joi.any(
    Joi.string(),
    Joi.boolean()
  ),
  can_export: Joi.boolean(),
  delete_with_user: Joi.boolean(),
  template: Joi.array().items(Joi.string()), // replace with @blocks[]
  template_lock: Joi.string().valid('all', 'insert'),

  "@styles": Joi.array().items(require('./styles')),
  "@scripts": Joi.array().items(require('./scripts')),
  "@fields": Joi.array().items(require('./fields')),
  "@options": Joi.array().items(require('./options'))

})

module.exports = schema