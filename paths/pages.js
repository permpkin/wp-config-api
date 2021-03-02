const schema = require('../schema/pages');

module.exports = (req, res, config, original) => {

  if (original !== false)
  {

    var errors = [];

    var result = schema.validate(config);

    if ("error" in result) {
      errors.push(result.error.message)
    };

    req.errors = errors;

    if (errors.length > 0) {
      
      return false;

    } else {

      var originalItemIndex = original.findIndex(el => {
        return el.key === config.key
      });

      if (originalItemIndex >= 0) {

        original[originalItemIndex] = {...original[originalItemIndex], ...config}

      } else {

        original[original.length] = config

      }

      return original;

    }

  } else {
    
    return config;

  }

}