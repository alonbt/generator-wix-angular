'use strict';

var express = require('express');
var bodyParser = require('body-parser');
var session = require('express-session');

var app = express();
app.use(bodyParser.json());
app.use(session({
  secret: 'yoba',
  cookie: {httpOnly: false}
}));

app.use(function (req, res, next) {
  req.session.resources = req.session.resources || [];

  res.setHeader('Cache-Control', 'no-cache, no-store, must-revalidate');
  res.setHeader('Pragma', 'no-cache');
  res.setHeader('Expires', 0);
  return next();
});

app.route('/server-artifact-id/resource')
  .get(function (req, res) {
    res.send({resources: req.session.resources});
  })
  .post(function (req, res) {
    req.session.resources.push(req.body);
    res.send({});
  });

app.listen(process.argv[2] || 3000);
console.log('listening...');
