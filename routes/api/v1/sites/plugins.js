const express = require('express')
// const { UpdateMeta, GetMeta, GetAppMeta, GetKey } = require('../../../../../schema/meta')
// const ObjectValidator = require(`./_ObjectArray.js`);

module.exports = () => {
  
  let Router = express.Router({ mergeParams: true })

  // TODO: search composer.json for plugins (recognised) compare versions

  /**
   * @description return current environment values (merged with root)
   */
  Router.get('/', (req, res, next) => {

    // return environment variables for site
    res.send(res.locals.meta.sites[res.locals.siteIndex]?.plugins || []);

  })

  return Router

}