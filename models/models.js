var mongoose = require('mongoose');
var Schema = mongoose.Schema;
mongoose.connect(process.env.MONGOLAB_URI || 'mongodb://localhost');

console.log('creating connection to the database');

var playerSchema = new Schema({
	_id: String,
	name: String, 
  height: String,
  weight: Number,
  team: String,
  position: String
});

var Player = mongoose.model('Player', playerSchema);

module.exports = Player;