var server    = require('webpack-dev-server');
var config    = require('./webpack.config.js');
var webpack    = require('webpack');

var devConfig  = Object.create(config);
devConfig.watch = true;

var compiler = webpack(devConfig);

webserver = new server( compiler, { } );

webserver.listen(9000, '0.0.0.0', function () { });

console.log('Running on port 9000');


var express = require('express');
var app = express();
app.use(express.static('dist'));
app.get('/', function (req, res) {
    res.sendFile('index.html');
});
var port = process.env.PORT || 3000;
var server = app.listen(port, function () {
    var host = server.address().address;
    console.log('Fit.io app listening at: ', port);
});