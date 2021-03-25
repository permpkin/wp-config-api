const express = require('express')
const { UpdateMeta, GetMeta, GetAppMeta, UpdateAppMeta, GetKey } = require('../../../../schema/meta')

module.exports = () => {

  let Router = express.Router({ mergeParams: true })

  /**
   * List "Sites" for current user.
   */
   Router.get('/', (req, res) => {

    GetAppMeta(req.user)
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

    GetAppMeta(req.user)
      .then(meta => {

        var UpdatedMeta = meta?.sites || []

        var objectInsert = {}

        if (req.body?.name) objectInsert.name = req.body?.name
        if (req.body?.url) objectInsert.url = req.body?.url

        var SiteMeta = {
          key: GetKey(),
          ...objectInsert,
          "@config": {}
        }

        UpdatedMeta.push(SiteMeta)

        meta['sites'] = UpdatedMeta

        UpdateAppMeta(req.user, meta)
          .then(() => {

            // return user sites.
            res.status(200).send(SiteMeta)

          })

      })

  })

  Router.use('/:siteKey', (req, res, next) => {

    GetAppMeta(req.user)
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

    UpdateAppMeta(req.user, res.locals.meta)
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

    UpdateAppMeta(req.user, res.locals.meta)
      .then(() => {

        // return user sites.
        res.status(200).send(res.locals.meta.sites)

      })

  })

  /**
   * Setup "Config" routes.
   */
  Router.use('/:siteKey/config', require('./config/')())

  return Router

}