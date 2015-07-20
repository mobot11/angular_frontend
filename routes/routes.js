var express = require('express');
var bodyParser = require('body-parser');
var fs = require('fs');
var router = express.Router();
var Player = require('../models/models.js');


router.get('/:id',function (req, res) {
	var name = req.params.id;
	var propName = name.replace(/_/g, "");
	var idName = propName.slice(1, propName.length);
	var playerData;
	console.log(idName);
	Player.findOne({_id: idName }, function(err, player) {
		if (err) return handleError(err);
		else {
      console.log(player + ' has been sent');
      res.json(player);
		}
	});
});
router.post('/', function (req, res) {
	var name = req.body.name;
	var height = req.body.height;
	var team = req.body.team;
	var weight = req.body.weight;
	var position = req.body.position;
	var objName = name.replace(/\s+/g, '');
	var idName = name.replace(/\s+/g, '');
	objName = new Player ({
		_id: idName,
		name: name,
		height: height,
		weight: weight,
		team: team,
		position: position
	});
  
  Player.findOneAndUpdate({_id: idName}, objName, {upsert: true}, function(err, player) {
  	if(err) return handleError(err);
  	res.json({msg: 'sucessfully saved'});
  });
});

router.patch('/edit/:id', function (req, res) {
	var name = req.params.id;
	var propName = name.replace(/_/g, " ");
	var idName = propName.slice(1, propName.length);
	var data = req.body;
	console.log(data);
	Player.findOneAndUpdate({'name': idName }, data, function(err, player) {
		if (err) return handleError(err);
		else {
      console.log(name +   ' has been updated');
      res.json({msg: "player has been edited"});
		}
	});
});

router.delete('/delete/:id', function (req, res) {
	var name = req.params.id;
	var propName = name.replace(/_/g, " ");
	var idName = propName.slice(1, propName.length);
	console.log(idName);
	Player.findOne({'name': idName }, function(err, player) {
		if (err) {
			return handleError(err);
		}
		  {
      player.remove(function (err) {
      	if (err) {
      		throw err;
      	}
      	res.json({msg: 'player has been deleted'});
      });
		}
	});
});

module.exports = router;