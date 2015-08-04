var mongoose = require('mongoose');
var express = require('express');
var app = express();



app.use(express.static(__dirname + '/build'));

var playerRoutes = express.Router();

mongoose.connect(process.env.MONGOLAB_URI || 'mongodb://localhost');
console.log('creating connection to the database');

require('./routes/player_routes')(playerRoutes);

app.use('/api', playerRoutes);

app.listen(process.env.PORT || 3000, function() {
	console.log('server running on port ' + (process.env.PORT || 3000));
})