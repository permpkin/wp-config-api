const schema = require('../schema/overrides');

module.exports = (req, res, config, original) => {

  console.log(config, "END")

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
      
      return {...original, ...config};

    }

  } else {
    
    return config;

  }

}