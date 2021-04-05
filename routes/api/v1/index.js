const express = require('express')

module.exports = () => {
  
  let Router = express.Router({ mergeParams: true })

  /**
   * Setup "Site" routes.
   */
  Router.use('/sites', require('./sites/')())

  /**
   * Setup "Template" routes.
   */
  Router.use('/templates', require('./templates/')())

  /**
   * Setup "Snippet" routes.
   */
  Router.use('/snippets', require('./snippets/')())

  return Router

}