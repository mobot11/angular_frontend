var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var playerSchema = new Schema({
	name: String, 
  height: String,
  team: String,
});

module.exports = mongoose.model('Player', playerSchema);