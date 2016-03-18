var express = require('express');
var router = express.Router();
var models = require('../models');
import { graphql } from 'graphql';
import bodyParser from 'body-parser';



/* GET home page. */
router.get('/', function(req, res, next) {
  console.log(req.user);
  res.render('index', {user: req.user});
});

module.exports = router;
