module.exports = (DISABLE_AUTH) => {

  return (req, res, next) => {

    if (process.env?.DISABLE_AUTH)
    {

      req.user = require(`${process.env.PWD}/debug-user.js`)

      res.locals.user = req.user;

      return next()

    }

    res.locals.user = req.user;

    next();

  };

};