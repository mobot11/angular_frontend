'use strict';

module.exports = function(app) {
	require('./directives/player_form_directive')(app);
	require('./controllers/players_controller')(app);
};