'use strict';

var express = require('express');
var app = express();
var redirects = require('./vhosts.json');

redirects.forEach(function(redirect) {
  console.log(redirect.host);
  var app = require(redirect.app);
  app.use(express.vhost(redirect.host, app));
});

app.listen(3000);