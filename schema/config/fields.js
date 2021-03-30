const Joi = require('joi');
const { GetKey } = require('../meta')

const Schema = Joi.object().keys({
  
  key: Joi.string().default((parent, helpers)=>{return GetKey('group_')}),

  title: Joi.string().required(),
  description: Joi.string(),
  location: Joi.array().items(
    Joi.array()
  ),
  menu_order: Joi.string(),
  position: Joi.string(),
  style: Joi.string(),
  label_placement: Joi.string(),
  hide_on_screen: Joi.array().items(Joi.string()),
  fields: Joi.array().items(Joi.object().keys({
    key: Joi.string().default((parent, helpers)=>{return GetKey('field_')}),
    label: Joi.string(),
    name: Joi.string(),
    type: Joi.string(),
    description: Joi.string(),
  })).required()

})


const SchemaDoc = {
  label: "Custom Field Group",
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
    object_type: {
      // group: 'Relation',
      label: 'Object Type',
      description: `(array) (Required) Array of object types with which the field group should be associated.`,
      type: 'string[]',
      required: true
    },
    title: {
      label: 'Title',
      description: `(string) Visible in metabox handle`,
      type: 'text',
      required: true,
      placeholder: 'My Field Group'
    },
    description: {
      label: 'Description',
      description: `(string) A short descriptive summary of what the field group is for.`,
      type: 'textarea',
      placeholder: 'My descriptive summary...',
      default: ''
    },
    location: {
      label: 'Location',
      description: `(array) An array containing 'rule groups' where each 'rule group' is an array containing 'rules'. 
      Each group is considered an 'or', and each rule is considered an 'and'.`,
      type: 'string[]'
    },
    menu_order: {
      label: 'Menu Order',
      description: `(int) Field groups are shown in order from lowest to highest. Defaults to 0`,
      type: 'text',
      placeholder: '0'
    },
    position: {
      label: 'Position',
      description: `(string) Determines the position on the edit screen. Defaults to normal. Choices of 'acf_after_title', 'normal' or 'side'`,
      type: 'select',
      options: [
        'normal',
        // 'acf_after_title',
        'after_title',
        'side'
      ]
    },
    style: {
      label: 'Style',
      description: `(string) Determines the metabox style. Defaults to 'default'. Choices of 'default' or 'seamless'`,
      type: 'select',
      options: [
        'default',
        'seamless'
      ]
    },
    label_placement: {
      label: 'Label Placement',
      description: `(string) Determines where field labels are places in relation to fields. Defaults to 'top'. 
      Choices of 'top' (Above fields) or 'left' (Beside fields)`,
      type: 'select',
      options: [
        'top',
        'left'
      ]
    },
    hide_on_screen: {
      label: 'Hide on Screen',
      description: `(array) An array of elements to hide on the screen`,
      type: 'string[]'
    },
    fields: {
      label: 'Fields',
      description: `(array) An array of fields`,
      type: 'repeater',
      repeater: 'fields',
      required: true,
      columns: [
        { label: "Key", key: "key", type: "key" },
        { label: "Description", key: "description" }
      ],
    }
  },
  table: {
    columns: [
      { label: "Key", key: "key", type: "key" },
      { label: "Title", key: "title" },
      { label: "Description", key: "description" },
    ]
  }
}

module.exports = { Schema, SchemaDoc }