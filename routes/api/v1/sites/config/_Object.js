module.exports = (req, res, config, original) => {

  if (original !== false)
  {
  
    // TODO: validate url

    return config.concat(original).unique()
  
  } else {
    
    return config;

  }

}