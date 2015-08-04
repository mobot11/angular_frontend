'use strict';

process.env.MONGOLAB_URI = 'mongodb://localhost/';
require('../server');

var mongoose = require('mongoose');
var chai = require('chai');
var chaihttp = require('chai-http');
chai.use(chaihttp);
var expect = chai.expect;

var Player = require('../models/Player');

describe('player REST api', function() {

  after(function(done) {
    mongoose.connection.db.dropDatabase(function() {
      done();
    });
  });

  it('should be able to create a new player', function(done) {
    chai.request('localhost:3000')
      .post('/api/players')
      .send({name: 'test player'})
      .end(function(err, res) {
        expect(err).to.eql(null);
        expect(res.body.name).to.eql('test player');
        expect(res.body).to.have.property('_id');
        done();
      });
  });

  it('should get an array of players', function(done) {
    chai.request('localhost:3000')
    .get('/api/players')
    .end(function(err, res) {
      expect(err).to.eql(null);
      expect(typeof res.body).to.eql('object');
      expect(Array.isArray(res.body)).to.eql(true);

      done(); 
    });
  });

  describe('needs an existing player to work with', function() {
    beforeEach(function(done) {
      var testPlayer = new Player({name: 'test player'});
      testPlayer.save(function(err, data) {
        if(err) throw err;

        this.testPlayer = data;
        done();
      }.bind(this));
    });

    it('should be able to make a player in a beforeEach block', function() {
      expect(this.testPlayer.name).to.eql('test player');
      expect(this.testPlayer).to.have.property('_id');
    });

    it('should update a player', function(done) {
      var id = this.testPlayer._id;
      chai.request('localhost:3000')
      .put('/api/players/' + id)
      .send({name: 'here is a new player'})
      .end(function(err, res) {
        expect(err).to.eql(null);
        expect(res.body.msg).to.eql('success');
        done();
      });
    });

    it('should be able to delete a player', function(done) {
      chai.request('localhost:3000')
        .delete('/api/players/' + this.testPlayer._id)
        .end(function(err, res) {
          expect(err).to.eql(null);
          expect(res.body.msg).to.eql('success');
          done();
        });
    });
  })
})










