module.exports = function(app) {
	app.directive('dummyDirective', function() {
		return {
			restrict: 'CA',
			template: '<h2>Dummy Directive</h2>'
		};
	});
};