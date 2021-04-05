const express = require('express')
const { UpdateMeta, GetMeta, GetAppMeta, UpdateAppMeta, GetKey } = require('../../../../schema/meta')

module.exports = () => {

  let Router = express.Router({ mergeParams: true })

  /**
   * List "snippets" for current user.
   */
   Router.get('/', (req, res) => {

    // TODO: search list of user snippets
    // return user sites.
    res.status(200).send([])

  })

  /**
   * Search "snippets".
   */
   Router.get('/:name', (req, res) => {

    // TODO: search snippets by type
    // return user sites.
    res.status(200).send([])

  })

  return Router

}