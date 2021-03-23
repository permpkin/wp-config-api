const Joi = require('joi');
const { GetKey } = require('../meta')

const Schema = Joi.object().keys({
  
  key: Joi.string().default((parent, helpers)=>{return GetKey()}),
  
  source: Joi.string().required(),
  dependencies: Joi.array().items(Joi.alternatives(
    Joi.string(),
    Joi.object({
      id: Joi.string(),
      version: Joi.string()
    })
  )),
  version: Joi.string(),
  location: Joi.array().items(Joi.string().valid('front', 'back', 'all')).required(),
  footer: Joi.boolean(),

})

const SchemaDoc = {
  label: "Scripts",
  documentation: 'https://developer.wordpress.org/reference/functions/wp_register_script/',
  supportsTemplates: true,
  schema: {
    key: {
      // group: 'Labels',
      label: 'Key',
      description: `(string) (Required) Name of the script. Should be unique.`,
      type: 'text',
      required: true,
      placeholder: 'my-custom-script',
      default: ''
    },
    source: {
      // group: 'Labels',
      label: 'Source',
      description: `(string) (Optional) Full URL of the script, or path of the script relative to the WordPress root directory.`,
      type: 'text',
      required: true,
      placeholder: 'https://example.com/some-script.js',
      default: ''
    },
    dependencies: {
      // group: 'Labels',
      label: 'Depends On',
      description: `(string[]) (Optional) An array of registered script handles this script depends on.
      Default value: array()`,
      type: 'string[]',
      default: []
    },
    version: {
      // group: 'Labels',
      label: 'Version',
      description: `(string|bool|null) (Optional) String specifying script version number, if it has one, which is added to the URL as a query string for cache busting purposes. If version is set to false, a version number is automatically added equal to current installed WordPress version. If set to null, no version is added.`,
      type: 'text',
      placeholder: '1.0.0',
      default: ''
    },
    location: {
      // group: 'Labels',
      label: 'Location',
      description: `(string[]) (Optional) An array of areas to inject this script. Available values are 'front', 'back' or 'both'.
      Default value: array('front')`,
      type: 'string[]',
      default: ["front"]
    },
    footer: {
      // group: 'Labels',
      label: 'In Footer',
      description: `(boolean) (Optional) determine whether to inject this script into the header or footer area.
      Default value: array('front')`,
      type: 'boolean',
      default: false
    }
  },
  table: {
    columns: [
      { label: "Key", key: "key", type: "key" },
      { label: "Source", key: "source" },
      { label: "Dependencies", key: "dependencies", type: "dependency[]" },
      { label: "Version", key: "version" },
      { label: "Location", key: "location", type: "string[]" },
      { label: "Footer", key: "footer", type: "boolean" }
    ]
  }
}

module.exports = { Schema, SchemaDoc }