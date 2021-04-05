const express = require('express')
// const { UpdateMeta, GetMeta, GetAppMeta, GetKey } = require('../../../../../schema/meta')
// const ObjectValidator = require(`./_ObjectArray.js`);

module.exports = () => {
  
  let Router = express.Router({ mergeParams: true })

  /**
   * @description return current environment values (merged with root)
   */
  Router.get('/', (req, res, next) => {

    var environmentValue = {
      ...res.locals.meta.environment ?? {},
      ...res.locals.meta.sites[res.locals.siteIndex]['environment']['@keys'] ?? {}
    };

    var environment = Object.keys(environmentValue).map(key => {
      
      return { key, value: environmentValue[key], root: res.locals.meta?.environment?.hasOwnProperty(key) && !res.locals.meta.sites[res.locals.siteIndex]['environment']['@keys']?.hasOwnProperty(key) }

    });

    // return environment variables for site
    res.send({ 
      name: environment.name,
      "@keys": environment
    });

  })

  /**
   * @description update current environment values (merged with root)
   */
  Router.post('/', (req, res, next) => {

    var envPost = {}
    
    Object.keys(req.body).forEach(key => {

      return envPost[key.replace(/[^\w\.\-]/g, "")] = req.body[key];

    })

    res.locals.meta.sites[res.locals.siteIndex]['environment'] = {
      ...res.locals.meta.sites[res.locals.siteIndex]['environment'],
      ...envPost
    }

    UpdateMeta(req.user, res.locals.meta)
      .then(() => {

        // return the updated field
        res.status(200).json(res.locals.meta.sites[res.locals.siteIndex]['environment']);

      })

  })

  return Router

}