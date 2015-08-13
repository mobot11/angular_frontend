module.exports = function(app) {
	app.directive('dummyDirective', function() {
		return {
			restrict: 'CA',
			replace: true,
			template: '<section><h2>{{greeting}}</h2><input type="text" data-ng-model="greeting"></section>'
		};
	});
};

//replace will replace whatever element we put it on with template