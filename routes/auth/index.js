const express = require('express')
const Passport = require('passport');
const Url = require('url');
const Util = require('util');
const QueryString = require('querystring');

module.exports = () => {

  let Router = express.Router({ mergeParams: true })

  // Perform the login, after login Auth0 will redirect to callback
  Router.get('/login', Passport.authenticate('auth0', {
    
    scope: 'openid email profile'

  }), (req, res) => {
    
    res.redirect('/');

  });

  // Perform the final stage of authentication and redirect to previously requested URL or '/user'
  Router.get('/api/callback', (req, res, next) => {

    Passport.authenticate('auth0', (err, user, info) => {
      
      if (err) { return next(err); }
      
      if (!user) { return res.redirect('/login'); }

      req.logIn(user, (err) => {

        if (err) { return next(err); }
        
        const returnTo = req.session.returnTo;
        
        delete req.session.returnTo;

        res.redirect(returnTo || '/');

      });

    })(req, res, next);

  });

  // Router.get('/user', SecureRoute, (req, res, next) => {
    
  //   const { _raw, _json, ...userProfile } = req.user;
    
  //   res.send(userProfile);

  // });

  // Perform session logout and redirect to homepage
  Router.get('/logout', (req, res) => {

    req.logout();

    var returnTo = 'https://' + req.hostname;
    
    var logoutURL = new Url.URL(
      Util.format('https://%s/v2/logout', process.env.AUTH0_DOMAIN)
    );
    
    var searchString = QueryString.stringify({
      client_id: process.env.AUTH0_CLIENT_ID,
      returnTo: returnTo
    });
    
    logoutURL.search = searchString;

    res.redirect(logoutURL);

  });

  return Router

}