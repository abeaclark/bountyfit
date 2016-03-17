var express = require('express');
var router = express.Router();
var passport = require('passport')
var FitbitStrategy = require( 'passport-fitbit-oauth2' ).FitbitOAuth2Strategy;
var models = require('../models');

passport.use(new FitbitStrategy(
  {
    clientID:     process.env.fitbit_client_id,
    clientSecret: process.env.fitbit_client_secret,
    callbackURL: "http://localhost:3000/auth/fitbit/callback"
  },
  function(accessToken, refreshToken, profile, done) {
    models.user.findOrCreate({where: {fitbitID: profile.id}})
      .spread(function(user) {
        console.log(user.get({
          plain: true
        }))
      })
    // console.log(created)
  }));



//     findOrCreate({where: {fitbitId: String(profile.id)}, defaults: {username: 'defaultUserName'} }, function (err, user) {
//       return done(err, user);
//     });
//   }
// ));

router.get('/fitbit', passport.authenticate('fitbit', { scope: ['activity','heartrate','location','profile']}));

router.get('/fitbit/callback',
  passport.authenticate('fitbit', { successRedirect: '/',
                                      failureRedirect: '/' }));


module.exports = router;