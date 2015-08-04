var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var playerSchema = new Schema({
	name: String, 
  height: String,
  weight: Number,
  team: String,
  position: String
});

module.exports = mongoose.model('Player', playerSchema);