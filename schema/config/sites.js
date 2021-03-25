const Joi = require('joi');

const Schema = Joi.object().keys({
  
  key: Joi.string().default((parent, helpers)=>{return GetKey()}),
  
  name: Joi.string().required(),
  url: Joi.array().items(Joi.string()),
  "@config": Joi.object().default({}),

})

const SchemaDoc = {
  label: "Sites",
  documentation: '#',
  isSingular: true,
  schema: {
    name: {
      // group: 'Labels',
      label: 'Name',
      description: `(string) (Required) Name of the site. Should be unique.`,
      type: 'text',
      required: true,
      placeholder: 'My Website',
      default: ''
    },
    url: {
      // group: 'Labels',
      label: 'Url(s)',
      description: `(string[]) (Optional) Full URL of the site, optionaly add multiple if required.`,
      type: 'string[]',
      placeholder: 'https://example.com',
      default: ''
    },
  }
}

module.exports = { Schema, SchemaDoc }