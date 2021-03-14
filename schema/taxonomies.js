const Joi = require('joi');

// TODO: replace this, it's just a clone of types
const schema = Joi.object({
  
  key: Joi.string().required(),
  
  object_type: Joi.array().items(Joi.string()),
  labels: Joi.object({
    name: Joi.string(),
    singular_name: Joi.string(),
    menu_name: Joi.string(),
    name_admin_bar: Joi.string(),
  }),
  description: Joi.string(),
  public: Joi.boolean(),
  publicly_queryable: Joi.boolean(),
  hierarchical: Joi.boolean(),
  show_ui: Joi.boolean(),
  show_in_menu: Joi.boolean(),
  show_in_nav_menus: Joi.boolean(),
  show_in_rest: Joi.boolean(),
  rest_base: Joi.string(),
  rest_controller_class: Joi.string(),
  show_tagcloud: Joi.boolean(),
  show_in_quick_edit: Joi.boolean(),
  show_admin_column: Joi.boolean(),
  meta_box_cb: Joi.string(),
  meta_box_sanitize_cb: Joi.string(),
  capabilities: Joi.array().items(Joi.string()), // TODO: update to match
  rewrite: Joi.any(
    Joi.boolean(),
    Joi.object({
      slug: Joi.string(),
      with_front: Joi.boolean(),
      hierarchical: Joi.boolean(),
      ep_mask: Joi.number(),
    })
  ),
  query_var: Joi.string(),
  update_count_callback: Joi.string(),
  default_term: Joi.any(
    Joi.string(),
    Joi.object({
      name: Joi.string(),
      slug: Joi.string(),
      description: Joi.string()
    })
  ),
  sort: Joi.boolean(),
  args: Joi.array().items(Joi.string())

})

module.exports = schema