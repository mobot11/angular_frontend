var mongoose = require('mongoose');
var Schema = mongoose.Schema;
mongoose.connect(process.env.MONGOLAB_URI || 'mongodb://localhost');

console.log('creating connection to the database');

var playerSchema = new Schema({
	name: String, 
  height: String,
  weight: Number,
  team: String,
  position: String
});


// var kobeBryant = new Player({
// 	name: 'Kobe Bryant',
// 	height: '6\', 5\"',
// 	weight: 205,
// 	team: 'Los Angeles Lakers',
// 	position: 'guard'
// })

var Player = mongoose.model('Player', playerSchema);

// kobeBryant.save(function (err) {
//   if(err) throw err;
//   console.log('Kobe Bryant has been saved!')
// })

module.exports = Player;