require('babel-core/register');
require("babel-polyfill");
var mongoose       = require('mongoose');
var express  = require('express');
var app      = express();
var bodyParser = require('body-parser');
var router = require('./app/routes');

var CONFIG = require('./app/DBconfig.json');

var options = { server: { socketOptions: { keepAlive: 300000, connectTimeoutMS: 30000 } },
                replset: { socketOptions: { keepAlive: 300000, connectTimeoutMS : 30000 } } };

var mongodbUri = CONFIG.dbconfig;

mongoose.connect(mongodbUri, options);

mongoose.connection.on('connected', function () {
  console.log('database connected to ' + CONFIG.dbconfig);
});

mongoose.connection.on('error',function (err) {
  console.log('database connection error: ' + err);
});

mongoose.connection.on('disconnected', function () {
  console.log('database disconnected');
});

app.use('/api/v1', router);

app.get('*', function(req, res) {
    res.send("sadads", 200); // load the single view file (angular will handle the page changes on the front-end)
});

app.listen(process.env.PORT || 3000);
console.log("App listening on port 3000");
