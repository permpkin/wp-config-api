const express = require('express');

const App = express();

const Port = process.env.PORT || 3000;

const File = require('fs');

const NodeCache = require( "node-cache" );

const ConfigSchema = require('./schema/config');

const ttl = 900

const ConfigCache = new NodeCache({
  ttl: ttl,
  maxKeys: 1024
});

const { v4: uuidv4 } = require('uuid')

Array.prototype.unique = () => {
  var a = this.concat();
  for(var i=0; i<a.length; ++i) {
      for(var j=i+1; j<a.length; ++j) {
          if(a[i] === a[j])
              a.splice(j--, 1);
      }
  }

  return a;
};

var Paths = [
  'blocks',
  'fields',
  'options',
  'origins',
  'overrides',
  'pages',
  'scripts',
  'settings',
  'styles',
  'taxonomies',
  'types'
];

/**
 * Add JSON parser
 */
App.use(express.json());

/**
 * Add acccess headers
 */
App.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", '*');
  res.header('Access-Control-Allow-Methods', 'GET,POST,DELETE,OPTIONS,HEAD');
  res.header("Access-Control-Allow-Headers", 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});

/**
 * Respond to base route
 */
App.get('/', (req, res) => res.sendStatus(200))

/**
 * Get current config defaults.
 */
App.get('/default', (req, res) => {

  // TODO: replace with joi defaults.
  // return default config json
  res.json({
    'overrides': {
      hide_block_categories: [],
      theme_support: []
    },
    'blocks': [],
    'fields': [],
    'options': [],
    'origins': [],
    'pages': [],
    'scripts': [],
    'settings': [],
    'styles': [],
    'taxonomies': [],
    'types': []
  })

})

/**
 * Inject config json for modification.
 */
App.post('/init', (req, res) => {

  if (!Object.keys(req.body).length) return res.sendStatus(400);

  var errors = [];

  var result = ConfigSchema.validate(req.body);

  if ("error" in result) {
    errors.push(result.error.message)
  };

  if (errors.length > 0) {

    // return json errors
    res.status(400).json({errors: errors})

  } else {

    var cKeyId = uuidv4();

    // store config.
    var keySet = ConfigCache.set(cKeyId, req.body, ttl)
    
    if (keySet)
      res.status(200).send({
        key: cKeyId
      })
    else
      res.sendStatus(400)

  }


})

/**
 * Inject config file into request model
 */
App.use('/:ckey/*', (req, res, next) => {

  // if key is not valid return 404.
  if (req.params.ckey.length !== 36) return res.sendStatus(404);

  // attempt to grab the cached config.
  var ckey = ConfigCache.get(req.params.ckey);

  // return 404 if key is not found.
  if (ckey == undefined) return res.sendStatus(404);

  // if we have the config, assign it the to request class
  req.config = ckey;

  req.modified = false;

  next();

});

/**
 * Check if :type is a valid request.
 */
App.use('/:ckey/:type', (req, res, next) => {

  if (Paths.indexOf(req.params.type) < 0) return res.sendStatus(404);

  next()

})

/**
 * Return config key fields by :type
 */
App.get('/:ckey/:type', (req, res) => {

  if (Paths.indexOf(req.params.type) >= 0) {
    
    res.send(req.config[req.params.type]);

  } else {
    
    res.sendStatus(404);

  }

})

/**
 * Update/Insert config key by :type
 */
App.post('/:ckey/:type', (req, res) => {

  req.errors = [];

  // is the body object empty?
  if (Object.entries(req.body).length <= 0) return res.sendStatus(400);

  // include the :type validator
  var Validator = require(`./paths/${req.params.type}.js`);
  
  // validate the body
  var Result = Validator(req, res, req.body, req.params.type in req.config ? req.config[req.params.type] : false);

  // if the result has not failed
  if (Result !== false) {

    req.modified = true;

    req.config[req.params.type] = Result;

    // update @config json
    ConfigCache.set(req.params.ckey, req.config, ttl)

    // return the updated json fields (by :type)
    res.status(200).json(req.config[req.params.type]);

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
App.delete('/:ckey/:type/:key', (req, res) => {

  req.errors = [];
  
  var Target = req.config[req.params.type];
  
  if (Array.isArray(Target)) {

    if (!Target.filter((o) => o.hasOwnProperty(req.params.key)).length == 0) return res.send(404);

    // remove array item by key

    req.config[req.params.type] = Target.filter((v) => v.key != req.params.key)

    if (req.config[req.params.type].length == 0) delete req.config[req.params.type];

  } else {

    if (!(req.params.key in req.config[req.params.type])) return res.send(404);

    // remove object key

    delete req.config[req.params.type][req.params.key]

    if (Object.keys(req.config[req.params.type]).length < 0) delete req.config[req.params.type];

  }
  
  // override key value
  ConfigCache.set(req.params.ckey, req.config, ttl)

  if (req.params.type in req.config) {

    // send updated config key result.
    res.status(200).send(req.config[req.params.type]);

  } else {

    // send empty config key result.
    res.status(200).send(null);

  }

})

/**
 * Start listening for connections.
 */
App.listen(Port, () => {
  
  console.log(`Listening on :${Port}`);

})