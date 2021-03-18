const Joi = require('joi');

const schema = Joi.object({
  
  origins: require('./origins'),
  styles: Joi.array().items(require('./styles')),
  scripts: Joi.array().items(require('./scripts')),
  fields: Joi.array().items(require('./fields')),
  types: Joi.array().items(require('./types')),
  taxonomies: Joi.array().items(require('./taxonomies')),
  blocks: Joi.array().items(require('./blocks')),
  pages: Joi.array().items(require('./pages')),
  actions: Joi.array().items(require('./actions')),
  settings: Joi.array().items(require('./settings'))

})

module.exports = schema