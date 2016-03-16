var express = require('express');
var router = express.Router();
var FitbitApiClient = require("fitbit-node")

var client = new FitbitApiClient(process.env.fitbit_client_id, process.env.fitbit_client_secret);

console.log(client.getAccessToken)

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});


router.get("/authorize", function (req, res) {
    res.redirect(client.getAuthorizeUrl('activity heartrate location nutrition profile settings sleep social weight', 'http://localhost:3000/callback'));
});

router.get("/callback", function (req, res) {
    client.getAccessToken(req.query.code, 'http://localhost:3000/callback').then(function (result) {
        client.get("/profile.json", result.access_token).then(function (results) {
            res.send(results[0]);
        });
    }).catch(function (error) {
        res.send(error);
    });
});

module.exports = router;
