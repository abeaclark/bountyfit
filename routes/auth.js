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
        console.log(profile)

        if (user) {
          var userData = profile._json.user
          var name_array = userData.fullName.split(' ')
          user.fitbitAuthToken = accessToken;
          user.firstName = name_array[0];
          user.lastName = name_array[1];
          user.avatar = userData.avatar;
          user.age = userData.age;
          user.gender = userData.gender;
          user.save();
        }
        return done(null, user);
      })
  }));


router.get('/fitbit',
  passport.authenticate('fitbit', { scope: ['activity','heartrate','location','profile'] }
));

router.get( '/fitbit/callback', passport.authenticate( 'fitbit', {
        successRedirect: '/',
        failureRedirect: '/auth/fitbit/failure'
}));

router.get('/fitbit/success', function(req, res, next) {
  res.send(req.user)
});

router.get('/fitbit/failure', function(req, res, next) {
  res.send(req.err)
});

module.exports = router;