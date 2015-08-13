module.exports = function(app) {
	app.controller('playersController', ['$scope', 'RESTResource', function($scope, resource) {
		$scope.players = [];
		$scope.errors = [];
		$scope.playerArray = [];
		var Player = new resource('players');

		$scope.getAll = function() {
      Player.getAll(function(err, data) {
      	if (err) return $scope.errors.push({msg: 'error getting players'});
        $scope.players = data;
        $scope.playerArray = angular.copy($scope.players);
      });
		};

		$scope.create = function(player) {
			$scope.newPlayer = null;
			Player.save(player, function(err, data) {
        if (err) return $scope.errors.push({msg: 'could not save player' + player.name});
				$scope.players.push(data)
			});
		};

		$scope.destroy = function(player) {
      Player.destroy(player, function(err, data) {
      if (err) return $scope.errors.push({msg: 'could not delete player: ' + player.name })	
		  $scope.players.splice($scope.players.indexOf(player), 1);
      })
		
		};
		$scope.update = function(player) {
      Player.update(player, function(err, data) {
      	if(err) return $scope.errors.push({msg: 'could not update: ' + player.name});
				$scope.playerArray = angular.copy($scope.players);
				player.editing = false;
      });
		};

		$scope.cancel = function(player) {
			player.editing = false;
			$scope.players = angular.copy($scope.playerArray);
		}
	}]);
};





