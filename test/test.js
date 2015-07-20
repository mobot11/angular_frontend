var chai = require('chai');
var expect = require('chai').expect;
var chaiHttp = require('chai-http');
var app = require('../server.js');

chai.use(chaiHttp);

// describe('/', function() {
// 	it('should respond to a get request', function(done) {
// 		chai.request('localhost:8080')
// 		.get('/')
// 		.end(function (err,res) {
// 			expect(err).to.be.null;
// 			expect(res).to.have.status(200);
// 			expect(res.text).to.eql('{"msg":"root"}');
// 			done();
// 		});
// 	});
// });

describe('/player/:id', function () {
	it('should respond to a get request', function(done) {
		chai.request('localhost:8080')
		.get('/player/:Kobe_Bryant')
		.end(function (err, res) {
			expect(err).to.be.null
			expect(res).to.have.status(200);
			done();
		})
	})
})

describe('/player', function() {
	it('should respond to a post request', function (done) {
		chai.request('localhost:8080')
		.post('/player')
		.send( { name: 'Kobe Bryant',
			height: '6\', 5\"',
			weight: 205,
			team: 'Los Angeles Lakers',
			position: 'guard'
		})
		.end(function (err,res) {
			expect(err).to.be.null;
			expect(res).to.have.status(200);
      expect(res.body).to.eql({ msg: 'new player has been created' })
      done();
		})
	})
})

describe('/player/edit/:id', function() {
	it('should respond to a patch request', function(done) {
		chai.request('localhost:8080')
		.patch('/player/edit/:id')
		.send( {name: 'Kobe Bryant'})
		.end(function (err, res) {
			expect(err).to.be.null;
			expect(res).to.have.status(200);
			expect(res.body).to.eql({ msg: 'player has been edited'});
			done();
		})
	})
})

describe('/player/delete/:id', function () {
	it('should respond to a delete request', function (done) {
		chai.request('localhost:8080')
		.delete('/player/delete/:id')
		.send( {name: 'Kobe Bryant'})
		.end(function (err, res) {
			expect(err).to.be.null;
			expect(res).to.have.status(200);
			expect(res.body).to.eql({ msg: 'player has been deleted'})
			done();
		})
	})
})









