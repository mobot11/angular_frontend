module.exports = function(app) {
	app.controller('playersController', ['$scope', '$http', function($scope, $http) {
		$scope.players = [];
		$scope.errors = [];
		$scope.playerArray = [];

		$scope.getAll = function() {
			$http.get('/api/players')
			.then(function(res) {
        $scope.players = res.data;
        angular.copy($scope.players, $scope.playerArray);
			}, function(res) {
				$scope.errors.push({msg: 'could not retrieve players'});
				console.log(res.data);
			})
		}

		$scope.create = function(player) {
			$scope.newPlayer = null;
			$http.post('/api/players', player)
			.then(function(res) {
				$scope.players.push(res.data);
			}, function(res) {
				console.log(res);
				$scope.errors.push(res.data)
			});
		};
		$scope.destroy = function(player) {
			$http.delete('/api/players/' + player._id)
			.then(function(res) {
				$scope.players.splice($scope.players.indexOf(player), 1);
			}, function(res) {
				console.log(res.data);
				$scope.errors.push(res.data)
			});
		};
		$scope.update = function(player) {
			$http.put('/api/players/' + player._id, player)
			.then(function(res) {
				player.editing = false;
			}, function(res) {
				player.editing = false;
				console.log(res.data);
			});
		};

		$scope.cancel = function(player) {
			player.editing = false;
			// var myForm = player._id + "form";
			// console.log(myForm);
			// $scope.myForm.name.$rollbackViewValue();
			// $scope.myForm.height.$rollbackViewValue();
			// $scope.myForm.team.$rollbackViewValue();
			$scope.players = angular.copy($scope.playerArray);
		}
	}]);
};





