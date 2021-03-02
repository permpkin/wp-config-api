const schema = require('../schema/supports');

module.exports = (req, res, config, original) => {

  if (original !== false)
  {
    var errors = [];

    var result = schema.validate(config);

    if ("error" in result) {
      errors.push(result.error.message)
    }

    req.errors = errors;

    if (errors.length > 0) {
      
      return false;

    } else {
      
      return config.concat(original).unique()

    }

  } else {
    
    return config;

  }

}