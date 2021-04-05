const express = require('express')
const { UpdateMeta, GetMeta, GetAppMeta, UpdateAppMeta, GetKey } = require('../../../../schema/meta')

module.exports = () => {

  let Router = express.Router({ mergeParams: true })

  /**
   * List "Templates" for current user.
   */
   Router.get('/', (req, res) => {

    // TODO: search list of user templates
    // return user sites.
    res.status(200).send([])

  })

  /**
   * Search "Templates".
   */
   Router.get('/:searchString', (req, res) => {

    // TODO: search list of user templates
    // return user sites.
    res.status(200).send([])

  })

  /**
   * Add new "Template"
   */
  Router.post('/', (req, res) => {

    // return result.
    res.status(200).send({})

  })

  return Router

}