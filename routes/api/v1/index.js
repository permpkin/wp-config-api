const express = require('express')

module.exports = () => {
  
  let Router = express.Router({ mergeParams: true })

  /**
   * Setup "Site" routes.
   */
  Router.use('/sites', require('./sites/')())

  return Router

}