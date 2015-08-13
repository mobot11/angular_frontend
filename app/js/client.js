require('angular/angular');
require('./services/services');
require('./directives/directives');

var playersApp = angular.module('playersApp', ['services', 'directives'])

require('./players/players')(playersApp);
