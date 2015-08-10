require('../../app/js/client.js');
require('angular-mocks');

describe('players controller', function() {
	var $ControllerConstructor;
	var $httpBackend;
	var $scope;

	beforeEach(angular.mock.module('playersApp'));

	beforeEach(angular.mock.inject(function($rootScope, $controller) {
		$scope = $rootScope.$new();
		$ControllerConstructor = $controller;
	}));

	it('should be able to create a controller', function() {
		var playersController = $ControllerConstructor('playersController', {$scope: $scope});
		expect(typeof playersController).toBe('object');
		expect(typeof $scope.getAll).toBe('function');
		expect(Array.isArray($scope.players)).toBe(true);
	});

	describe('REST functionality', function() {
		beforeEach(angular.mock.inject(function(_$httpBackend_, $rootScope){
			$httpBackend = _$httpBackend_;
			$scope = $rootScope.$new();
			$ControllerConstructor('playersController', {$scope: $scope});
		}));
  afterEach(function() {
  	$httpBackend.verifyNoOutstandingExpectation();
  	$httpBackend.verifyNoOutstandingRequest();
  });

  it('should make a get request when getAll is called', function() {
  	$httpBackend.expectGET('/api/players').respond(200, [{name: 'test name', _id: 1}]);
  	$scope.getAll();
  	$httpBackend.flush();
  	expect($scope.players.length).toBe(1);
  	expect($scope.players[0].name).toBe('test name');
  	expect($scope.players[0]._id).toBe(1);
  });

  it('should make a post request when create is called', function() {
  	expect($scope.players.length).toBe(0);
  	$httpBackend.expectPOST('/api/players').respond(200, {name: 'test create', _id: 1});
  	$scope.create({name: 'test name'});
  	$httpBackend.flush();
  	expect($scope.players.length).toBe(1);
  	expect($scope.players[0].name).toBe('test create');
  });

  it('should make a put request when update is called', function() {
  	var player = {_id: 1, editing: true};
  	$httpBackend.expectPUT('/api/players/1').respond(200);
  	$scope.update(player);
  	$httpBackend.flush();
  	expect(player.editing).toBe(false);
  });

 it('should make a delete request when destroy is called', function() {
      var player = {_id: 1, name: 'test player'};
      $scope.players = [{name: 'some player', _id: 2}, player, {name: 'another test player', _id: 3}];
      $httpBackend.expectDELETE('/api/players/1').respond(200);
      $scope.destroy(player);
      $httpBackend.flush();
      expect($scope.players.length).toBe(2);
      expect($scope.players.indexOf(player)).toBe(-1);
      expect($scope.players[0].name).toBe('some player');
      expect($scope.players[1].name).toBe('another test player');
    });
	});
});