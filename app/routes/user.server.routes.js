var users = require('../../app/controllers/users.server.controller');

module.exports = function(app) {
	app.route('/user').post(users.create).get(users.view);
	app.route('/login').post(users.login);
	//app.route('/user/blist').post(users.blist);
	app.route('/user/beaconadd').post(users.updateBeacon);
	app.route('/user/beacondel').post(users.deleteBeacon);
};