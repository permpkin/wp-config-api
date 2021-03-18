const express = require('express')
const { UpdateMeta, GetMeta, GetAppMeta, UpdateAppMeta, GetKey } = require('../../../../../schema/meta')
const ObjectValidator = require(`./_ObjectArray.js`);

module.exports = () => {
  
  let Router = express.Router({ mergeParams: true })

  /**
   * @description return current @config value
   */
  Router.get('/', (req, res, next) => {

    // return @config for site
    res.send(res.locals.meta.sites[res.locals.siteIndex]['@config']);

  })

  /**
   * Inject config file into request model
   */
  Router.use((req, res, next) => {

    // if we have the config, assign it the to request class
    req.config = res.locals.meta.sites[res.locals.siteIndex]['@config'];

    req.modified = false;

    next();

  });

  /**
   * Upsert config key by :type
   */
  Router.post('/settings', (req, res) => {

    req.errors = [];

    // is the body object empty?
    if (Object.entries(req.body).length <= 0) return res.sendStatus(400);

    // include the :type validator
    var Validator = require(`./settings.js`);
    
    // validate the body
    var Result = Validator(req, res, req.body);

    // if the result has not failed
    if (Result !== false) {

      req.modified = true;

      req.config.settings = Result;

      res.locals.meta.sites[res.locals.siteIndex]['@config'] = req.config

      UpdateAppMeta(req.user, res.locals.meta)
        .then(() => {

          // return the updated json fields (by :type)
          res.status(200).json(req.config.settings);

        })


    } else {

      // where there errors?
      if (req.errors.length > 0) {

        // return json errors
        res.status(400).json({errors: req.errors})

      } else {

        // not modified
        res.sendStatus(304);

      }

    };

  });

  var Paths = [
    'settings',
    'blocks',
    'fields',
    'pages',
    'scripts',
    'styles',
    'taxonomies',
    'actions',
    'roles',
    'types'
  ];

  /**
   * Check if :type is a valid request.
   */
  Router.use('/:type', (req, res, next) => {

    if (Paths.indexOf(req.params.type) < 0) return res.sendStatus(404);

    next()

  })

  /**
   * Return config key fields by :type
   */
  Router.get('/:type', (req, res) => {

    if (Paths.indexOf(req.params.type) >= 0) {

      // send key array value or empty array
      res.send((req.params.type in req.config) ? req.config[req.params.type] : (req.params.type == 'settings' ? {} : []));

    } else {
      
      res.sendStatus(404);

    }

  })

  /**
   * Upsert config key by :type
   */
  Router.post('/:type', (req, res) => {

    req.errors = [];

    // is the body object empty?
    if (Object.entries(req.body).length <= 0) return res.sendStatus(400);

    var Schema = require(`../../../../../schema/config/${req.params.type}`)
    
    // validate the body
    var Result = ObjectValidator(Schema, req, res, req.body, req.params.type in req.config ? req.config[req.params.type] : false);

    // if the result has not failed
    if (Result !== false) {

      req.modified = true;

      req.config[req.params.type] = Result.value;

      res.locals.meta.sites[res.locals.siteIndex]['@config'] = req.config

      UpdateAppMeta(req.user, res.locals.meta)
        .then(() => {

          // return the updated json fields (by :type)
          res.status(200).json(req.config[req.params.type][Result.index]);

        })


    } else {

      // where there errors?
      if (req.errors.length > 0) {

        // return json errors
        res.status(400).json({errors: req.errors})

      } else {

        // not modified
        res.sendStatus(304);

      }

    };

  });

  /**
   * Delete the entry by key
   */
  Router.delete('/:type/:key', (req, res) => {

    req.errors = [];
    
    var Target = req.config[req.params.type];
    
    if (Array.isArray(Target)) {

      if (!Target.filter((o) => o.hasOwnProperty(req.params.key)).length == 0) return res.send(404);

      // remove array item by key

      req.config[req.params.type] = Target.filter((v) => v.key != req.params.key)

    } else {

      if (!(req.params.key in req.config[req.params.type])) return res.send(404);

      // remove object key

      delete req.config[req.params.type][req.params.key]

    }

    res.locals.meta.sites[res.locals.siteIndex]['@config'] = req.config

    UpdateAppMeta(req.user, res.locals.meta)
      .then(() => {

        // return the updated json fields (by :type)
        res.status(200).json(req.config[req.params.type]);

      })

  })

  return Router

}