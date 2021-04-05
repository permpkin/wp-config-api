const express = require('express')
const { UpdateMeta, GetMeta, GetAppMeta, UpdateAppMeta, GetKey } = require('../../../../schema/meta')

module.exports = () => {

  let Router = express.Router({ mergeParams: true })

  /**
   * List "Sites" for current user.
   */
   Router.get('/', (req, res) => {

    GetMeta(req.user)
      .then(meta => {

        // return user sites.
        res.status(200).send(meta?.sites || [])

      })

  })

  /**
   * Return site schema fields
   */
   Router.get('/schema', (req, res) => {

    // send key schema
    var { SchemaDoc } = require(`../../../../schema/config/sites`)

    res.json(SchemaDoc)

  })

  /**
   * Add new "Site"
   */
  Router.post('/', (req, res) => {

    GetMeta(req.user)
      .then(meta => {

        var UpdatedMeta = meta?.sites || []

        var objectInsert = {}

        if (req.body?.name) objectInsert.name = req.body?.name
        if (req.body?.url) objectInsert.url = req.body?.url

        var SiteMeta = {
          key: GetKey(),
          ...objectInsert,
          environment: {
            name: "Development",
            "@keys": {}
          },
          "@config": {}
        }

        UpdatedMeta.push(SiteMeta)

        meta['sites'] = UpdatedMeta

        UpdateMeta(req.user, meta)
          .then(() => {

            // return user sites.
            res.status(200).send(SiteMeta)

          })

      })

  })

  /**
   * @description return current root environment values
   */
  Router.get('/environment', (req, res, next) => {

    var environment = res.locals.meta.sites[res.locals.siteIndex]['environment'];

    // return environment variables for site
    res.send({
      name: environment.name,
      "@keys": {
        ...res.locals.meta.environment ?? {},
        ...environment['@keys'] ?? {}
      }
    });

  })

  /**
   * @description update current root environment values
   */
  Router.post('/environment', (req, res, next) => {

    var envPost = {}
    
    Object.keys(req.body).forEach(key => {

      return envPost[key.replace(/[^\w\.\-]/g, "")] = req.body[key];

    })

    res.locals.meta['environment'] = {
      ...res.locals.meta['environment'],
      ...envPost
    }

    UpdateMeta(req.user, res.locals.meta)
      .then(() => {

        // return the updated field
        res.status(200).json(res.locals.meta['environment']);

      })

  })

  Router.use('/:siteKey', (req, res, next) => {

    GetMeta(req.user)
      .then(meta => {

        const SiteMeta = meta?.sites || []

        // if sites are empty, return 404
        if (SiteMeta.length === 0) return res.sendStatus(404);

        const ItemIndex = SiteMeta.findIndex(item => {
          return item.key === req.params.siteKey
        })

        // if key is not found, return 404
        if (ItemIndex < 0) return res.sendStatus(404);

        // inject site into locals
        res.locals.meta = meta
        res.locals.siteIndex = ItemIndex

        next()

      })

  })

  /**
   * Update "Site"
   */
  Router.patch('/:siteKey', (req, res) => {

    var objectUpdate = {}

    if (req.body?.name) objectUpdate.name = req.body?.name
    if (req.body?.url) objectUpdate.url = req.body?.url

    var SiteMeta = {
      ...res.locals.meta.sites[res.locals.siteIndex],
      ...objectUpdate
    }

    res.locals.meta.sites[res.locals.siteIndex] = SiteMeta

    UpdateMeta(req.user, res.locals.meta)
      .then(() => {

        // return user sites.
        res.status(200).send(SiteMeta)

      })

  })

  /**
   * Add new "Site"
   */
  Router.delete('/:siteKey', (req, res) => {
    
    res.locals.meta.sites.splice(res.locals.siteIndex, 1)

    UpdateMeta(req.user, res.locals.meta)
      .then(() => {

        // return user sites.
        res.status(200).send(res.locals.meta.sites)

      })

  })

  /**
   * Setup "Config" routes.
   */
  Router.use('/:siteKey/config', require('./config/')())

  /**
   * Setup "Environment" routes.
   */
  Router.use('/:siteKey/environment', require('./environment')())

  /**
   * Setup "Seed" routes.
   */
  Router.use('/:siteKey/seeds', require('./seeds')())

  /**
   * Setup "Plugin" routes.
   */
  Router.use('/:siteKey/plugins', require('./plugins')())

  /**
   * Setup "Templates" routes.
   */
  Router.use('/:siteKey/templates', require('./templates')())

  return Router

}