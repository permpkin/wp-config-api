const Joi = require('joi');

const Schema = Joi.object().keys({

  hide_block_categories: Joi.array(),
  theme_support: Joi.array().items(
    Joi.string().valid('align-wide', 'editor-styles', 'post-formats', 'post-thumbnails', 'html5', 'title-tag', 'custom-background'),
  ),
  allowed_origins: Joi.array().items(Joi.string()).default(['*']),
  disabled_admin_pages: Joi.array().items(Joi.string().valid('dashboard','jetpack','posts','media','pages','comments','appearance','plugins','users','tools','settings')),
  disabled_user_roles: Joi.array().items(Joi.string()),
  image_sizes: Joi.array().items(Joi.object().keys({
    name: Joi.string(),
    width: Joi.number(),
    height: Joi.number(),
    crop: Joi.boolean()
  })),
  shortcodes: Joi.array().items(Joi.string()),
  enable_debugger: Joi.boolean().default(false)

})

const SchemaDoc = {
  label: "Settings",
  documentation: '#',
  isSingular: true,
  supportsTemplates: true,
  schema: {
    hide_block_categories: {
      // group: 'Labels',
      label: 'Hide Block Categories',
      description: `List Block categories to hide from the admin interface.`,
      type: 'string[]',
      required: false
    },
    theme_support: {
      // TODO: swap for multiselect
      label: 'Theme Support',
      description: `Register theme support for various features.`,
      type: 'string[]',
      required: false
    },
    allowed_origins: {
      label: 'Allowed Origins',
      description: `Define site origins allowed to access this site.`,
      type: 'string[]',
      required: false
    },
    disabled_admin_pages: {
      label: 'Disabled Admin Pages',
      description: `Define admin pages to disable for users.`,
      type: 'string[]',
      required: false
    },
    disabled_user_roles: {
      label: 'Disabled User Roles',
      description: `Define user_roles to disable for users.`,
      type: 'string[]',
      required: false
    },
    image_sizes: {
      label: 'Image Sizes',
      description: `Enabled default Image sizes.`,
      type: 'string[]',
      required: false
    },
    enable_debugger: {
      label: 'Enable Debugger',
      description: `Enable PHP Debugger in DEV mode.`,
      type: 'boolean',
      default: false
    }
  }
}

module.exports = { Schema, SchemaDoc }