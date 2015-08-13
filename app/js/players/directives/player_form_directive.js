'use strict';

module.exports = function(app) {
	app.directive('playerFormDirective', function () {
    return{
    	restrict: 'AC',
    	replace: true,
    	templateUrl: '/js/players/templates/player_form_template.html',
    	scope: {
    		save: '&',
    		buttonText: '@',
    		labelTextOne: '@',
    		labelTextTwo: '@',
    		labelTextThree: '@',
    		player: '='
    	}
    }
	});
};