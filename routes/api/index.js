const express = require('express')

module.exports = () => {

  let Router = express.Router({ mergeParams: true })

  return Router

}