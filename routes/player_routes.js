var Player = require('../models/Player');
var bodyParser = require('body-parser');

module.exports = function(router) {
	router.use(bodyParser.json());
	router.get('/players', function(req,res) {
		Player.find({},function (err,data) {
			if (err) {
				console.log(err);
				return res.status(500).json({msg: 'internal server error'})
			}
			res.json(data);
		});
	});

router.post('/players', function (req, res) {
	var newPlayer = new Player(req.body);
	newPlayer.save(function (err,data) {
		if (err) {
			console.log(err);
			return res.status(500).json({msg: 'internal server error'})
		}
		res.json(data);
	});
});

router.put('/players/:id', function (req, res) {
	var playerId = req.params.id;
	// console.log(req.params);
	// console.log(req.body);
	Player.findOneAndUpdate({_id: playerId}, req.body, function(err,data) {
		if(err) {
			console.log(err);
			res.status(500).json({msg: 'Internal Server Error'})
		}
		if(data) {
			res.json({msg: 'player was updated'})
		}
	})
});

router.delete('/players/:id', function (req, res) {
	Player.remove({'_id': req.params.id}, function(err,data) {
		if (err) {
			console.log(err);
			return res.status(500).json({msg: 'internal server error'})
		}
		res.json({msg: 'success'});
	});
});
};



