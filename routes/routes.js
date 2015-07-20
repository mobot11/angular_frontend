var express = require('express');
var bodyParser = require('body-parser');
var fs = require('fs');
var router = express.Router();
var Player = require('../models/models.js').Player


router.get('/:id',function (req, res) {
	res.json({msg: 'get request completed'})
})
router.post('/', function (req, res) {
	var name = req.body.name;
	var height = req.body.height;
	var team = req.body.team;
	var weight = req.body.weight;
	var position = req.body.position;
	var objName = name.replace(/\s+/g, '');
	objName = new Player ({
		name: name,
		height: height,
		weight: weight,
		team: team,
		position: position
	})
	objName.save(function (err) {
  if(err) throw err;
  console.log(objName.name + ' has been saved!')
})
	res.json({msg: 'new player has been created'});
})

router.patch('/edit/:id', function (req, res) {
	var data = req.body;
	console.log(data);
	res.json({msg: 'player has been edited'});
})

router.delete('/delete/:id', function (req, res) {
	var name = req.name;
	console.log(name);
	res.json({msg: 'player has been deleted'});
})

module.exports = router;