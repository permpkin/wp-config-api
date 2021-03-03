const Joi = require('joi');

const schema = Joi.object({
  
  key: Joi.string().required(),
  name: Joi.string().required(),
  title: Joi.string(),
  description: Joi.string(),
  icon: Joi.string(),
  category: Joi.object({
    slug: Joi.string(),
    title: Joi.string(),
    icon: Joi.string(),
  }),
  keywords: Joi.array(),
  post_types: Joi.array(),
  supports: Joi.array(),
  mode: Joi.string(),
  align: Joi.string(), // add default
  example: Joi.object(),
  "@styles": Joi.array().items(require('./styles')),
  "@scripts": Joi.array().items(require('./scripts')),
  "@fields": Joi.array().items(require('./fields')),

})

const schemaDescribe = {
  documentation: 'https://www.advancedcustomfields.com/resources/acf_register_block_type/',
  name: 'Block',
  schema: {
    key: {
      // group: 'Labels',
      label: 'Key',
      description: `(String) A unique identifier for internal purposes.`,
      type: 'text',
      required: true
    },
    name: {
      // group: 'Labels',
      label: 'Name',
      description: `(String) A unique name that identifies the block (without namespace). For example ‘testimonial’. Note: A block name can only contain lowercase alphanumeric characters and dashes, and must begin with a letter.`,
      type: 'text',
      required: true
    },
    title: {
      // group: 'Labels',
      label: 'Title',
      description: `(String) The display title for your block. For example ‘Testimonial’.`,
      type: 'text',
      required: true
    },
    description: {
      // group: 'Labels',
      label: 'Description',
      description: `(String) (Optional) This is a short description for your block.`,
      type: 'text',
      required: true
    },
    category: {
      // group: 'Labels',
      label: 'Category',
      description: `(String) Blocks are grouped into categories to help users browse and discover them. The core provided categories are [ common | formatting | layout | widgets | embed ]. Plugins and Themes can also register custom block categories.`,
      type: 'text',
      required: true
    },
    icon: {
      // group: 'Labels',
      label: 'Icon',
      description: `(String|Array) (Optional) An icon property can be specified to make it easier to identify a block. These can be any of WordPress’ Dashicons, or a custom svg element.`,
      type: 'text',
      required: true,
      /*
      // Specifying a dashicon for the block
      'icon' => 'book-alt',

      // Specifying a custom HTML svg for the block
      'icon' => '<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path fill="none" d="M0 0h24v24H0V0z" /><path d="M19 13H5v-2h14v2z" /></svg>',

      // Specifying colors
      'icon' => array(
        // Specifying a background color to appear with the icon e.g.: in the inserter.
        'background' => '#7e70af',
        // Specifying a color for the icon (optional: if not set, a readable color will be automatically defined)
        'foreground' => '#fff',
        // Specifying a dashicon for the block
        'src' => 'book-alt',
      ),
      */
    },
    keywords: {
      label: 'Keywords',
      description: `(Array) (Optional) An array of search terms to help user discover the block while searching.`,
      type: 'text'
    },
    post_types: {
      label: 'Post Types',
      description: `(Array) (Optional) An array of post types to restrict this block type to.`,
      type: 'text'
    },
    mode: {
      label: 'Mode',
      description: `(String) (Optional) The display mode for your block. Available settings are “auto”, “preview” and “edit”. Defaults to “preview”. auto: Preview is shown by default but changes to edit form when block is selected. preview: Preview is always shown. Edit form appears in sidebar when block is selected. edit: Edit form is always shown.

      Note. When in “preview” or “edit” modes, an icon will appear in the block toolbar to toggle between modes.`,
      type: 'text'
    },
    align: {
      label: 'Align',
      description: `(String) (Optional) The default block alignment. Available settings are “left”, “center”, “right”, “wide” and “full”. Defaults to an empty string.`,
      type: 'text'
    },
    //
    //
    //
    //
    supports: {
      label: 'Supports',
      description: `(Array) (Optional) An array of features to support. All properties from the JavaScript block supports documentation may be used. The following options are supported:`,
      type: 'text'
    },
    example: { // TODO
      label: 'Example Data',
      description: `(Array) (Optional) An array of structured data used to construct a preview shown within the block-inserter. All values entered into the ‘data’ attribute array will become available within the block render template/callback via $block['data'] or get_field().`,
      type: 'text'
    }
  }
}

module.exports = schema