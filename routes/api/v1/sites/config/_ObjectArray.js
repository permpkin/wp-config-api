module.exports = (schema, req, res, config, original) => {

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

        original[originalItemIndex] = {...original[originalItemIndex], ...result.value}

        return { value: original, index: originalItemIndex }

      } else {

        original[original.length] = result.value

        return { value: original, index: original.length - 1 }

      }

    }

  } else {

    var result = schema.validate(config);
    
    return { value: [result.value], index: 0 };

  }

}