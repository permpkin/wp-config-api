const express = require('express');

const App = express();

const Port = process.env.PORT || 5000;

const Session = require('express-session');

const Cors = require('cors')

const DotEnv = require('dotenv')

const FileStore = require('session-file-store')(Session);

// Load environment variables from .env
DotEnv.config()

const CorsOpts = Cors({
  origin: [process.env.URL, 'https://wp-factory-api.au.ngrok.io', 'http://localhost:3000'],
  optionsSuccessStatus: 200 
})

// Use default CORS
App.use(CorsOpts)
App.options('*', CorsOpts);

// const { InitUserMeta, UpdateAppMeta } = require('./schema/meta')

// Define static folder.
App.use(express.static('assets'))

// Use "Pug" view engine.
App.set('view engine', 'pug')

// FIX: storing sessions local ./sesssion/*.json
App.use(Session({
  store: new FileStore({
    //
  }),
  secret: process.env.SESSION_SECRET,
  cookie: {
    sameSite: false
  },
  resave: false,
  saveUninitialized: true
}));

/**
 * Add JSON parser
 */
App.use(express.json());

if (!process.env?.DISABLE_AUTH) {

  // Load Passport
  const Passport = require('passport');
  const Auth0Strategy = require('passport-auth0');

  // Configure Passport to use Auth0
  Passport.use(new Auth0Strategy(
    {
      domain: process.env.AUTH0_DOMAIN,
      clientID: process.env.AUTH0_CLIENT_ID,
      clientSecret: process.env.AUTH0_CLIENT_SECRET,
      callbackURL: `${process.env.AUTH0_CALLBACK_URL}/api/callback`
    },
    (accessToken, refreshToken, extraParams, profile, done) => {
      // accessToken is the token to call Auth0 API (not needed in the most cases)
      // extraParams.id_token has the JSON Web Token
      // profile has all the information from the user

      // InitUserMeta(profile.id.substring(6, profile.id.length))
      //   .then(value => {

      //     UpdateAppMeta(profile, )

      //     console.log('value', value)

      //   })

      return done(null, profile);
    }
  ));

  App.use(Passport.initialize());

  App.use(Passport.session());

  // Store and retrieve user data from the session
  Passport.serializeUser((user, done) => {
    // console.log('>>>Serial', user)
    done(null, user);
  });
  Passport.deserializeUser((user, done) => {
    // console.log('>>>Deserial', user)
    done(null, user);
  });

  // Auth Routes
  App.use(require('./routes/auth/')())

}

// User Middleware
App.use(require('./routes/auth/middleware/user')())

// Secure Route Middleware
const SecureRoute = require('./routes/auth/middleware/secure')

// Secure API Route Middleware
const SecureApiRoute = require('./routes/auth/middleware/secure-api')

/**
 * Load API Routes
 * @description load api routes.
 */
process.env.API_ROUTES.split(',').forEach(segment => {
  
  // setup api route
  App.use(`/api/v${segment}`, SecureApiRoute, require(`./routes/api/v${segment}/`)())

})

/**
 * Base route
 * @description check auth state, supply SPA if logged in.
 */
App.get('/', SecureRoute, (req, res) => {

  // list user meta
  // res.status(200).send({
  //   displayName: req.user.displayName,
  //   name: req.user.name,
  //   picture: req.user.picture,
  //   verified: req.user._json.email_verified,
  //   plan: null
  // })

  res.render('index', { title: 'Hey', message: 'Hello there!' })

})

/**
 * Start listening for connections.
 */
App.listen(Port, () => {
  
  console.log(`Listening on :${Port}`);

})