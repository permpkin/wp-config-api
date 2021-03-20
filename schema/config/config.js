const Joi = require('joi');

const Schema = Joi.object().keys({
  
  styles: Joi.array().items(require('./styles').Schema),
  scripts: Joi.array().items(require('./scripts').Schema),
  fields: Joi.array().items(require('./fields').Schema),
  types: Joi.array().items(require('./types').Schema),
  taxonomies: Joi.array().items(require('./taxonomies').Schema),
  blocks: Joi.array().items(require('./blocks').Schema),
  pages: Joi.array().items(require('./pages').Schema),
  actions: Joi.array().items(require('./actions').Schema),
  settings: Joi.array().items(require('./settings').Schema)

})

module.exports = { Schema }