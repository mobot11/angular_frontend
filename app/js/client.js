require('angular/angular');

var playersApp = angular.module('playersApp', [])

require('./players/players')(playersApp);
