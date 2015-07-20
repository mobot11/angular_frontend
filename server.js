var express = require('express');
var bodyParser = require('body-parser');
var fs = require('fs');
var routes = require('./routes/routes');

var app = express();
var port = 8080;

app.use(bodyParser.urlencoded({ extended: false}));
app.use(bodyParser.json());

app.use('/player', routes);

app.listen(port,function() {
	console.log('server started on port ' + port);
});