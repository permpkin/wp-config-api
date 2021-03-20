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

module.exports = (req, res, config, original) => {

  if (original !== false)
  {
  
    // TODO: validate url

    return config.concat(original).unique()
  
  } else {
    
    return config;

  }

}