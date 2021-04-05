const express = require('express')
// const { UpdateMeta, GetMeta, GetAppMeta, GetKey } = require('../../../../../schema/meta')
// const ObjectValidator = require(`./_ObjectArray.js`);

module.exports = () => {
  
  let Router = express.Router({ mergeParams: true })

  /**
   * @description return templates used in current site
   */
  Router.get('/', (req, res, next) => {

    // return environment variables for site
    res.send([]);

  })

  return Router

}