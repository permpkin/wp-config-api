const Joi = require('joi');
const { GetKey } = require('../meta')

const Schema = Joi.object().keys({
  
  key: Joi.string().default((parent, helpers)=>{return GetKey('group_')}),

  label: Joi.string().required(),
  type: Joi.string().required()
  // description: Joi.string(),
  // location: Joi.array().items(
  //   Joi.array()
  // ),
  // menu_order: Joi.string(),
  // position: Joi.string(),
  // style: Joi.string(),
  // label_placement: Joi.string(),
  // hide_on_screen: Joi.array().items(Joi.string()),
  // fields: Joi.array().items(Joi.object().keys({
  //   key: Joi.string().default((parent, helpers)=>{return GetKey('field_')}),
  //   label: Joi.string(),
  //   name: Joi.string(),
  //   type: Joi.string()
  // })).required()

})


const SchemaDoc = {
  label: "Custom Field",
  documentation: 'https://developer.wordpress.org/reference/functions/register_post_type/',
  supportsTemplates: true,
  schema: {
    key: {
      // group: 'Labels',
      label: 'Key',
      description: `(string) Unique identifier for field group.`,
      type: 'text',
      prefix: 'group_', // Must begin with 'group_'
      required: true,
      placeholder: 'my-field-group'
    },
    label: {
      label: 'Label',
      description: `(string) Visible in metabox handle`,
      type: 'text',
      required: true,
      placeholder: 'My Field Group'
    },
    type: {
      label: 'Type',
      description: `(string) Type of field`,
      type: 'select',
      options: [
        'text',
        'image',
        'checkbox'
      ] // TODO: finish this off
    }
  },
  table: {
    columns: [
      { label: "Key", key: "key", type: "key" },
      { label: "Label", key: "label" },
      { label: "Type", key: "type" },
    ]
  }
}

module.exports = { Schema, SchemaDoc }