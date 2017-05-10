var beacons = require('../../app/controllers/beacons.server.controller');

module.exports = function(app) {
	app.route('/beacon/add').post(beacons.create);
	app.route('/beacon/edit').post(beacons.edit);
	app.route('/beacon/del').post(beacons.del);
	app.route('/beacon/list').post(beacons.beacons);
};