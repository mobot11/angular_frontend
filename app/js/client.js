require('angular/angular');

var playerApp = angular.module('playerApp', []);

var playerController = playerApp.controller('playerController', ['$scope', function($scope) {
	$scope.greeting = 'welcome to my NBA players App!'
	$scope.alertGreeting = function() {
    
	}
}])
