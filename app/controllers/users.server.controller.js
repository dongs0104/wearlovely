var User = require('mongoose').model('User');
var Beacon = require('mongoose').model('Beacon');

exports.create = function(req, res, next) {
	var user = new User(req.body);

	user.save(function(err) {
		if(err) {
			res.json({"result" : 1});
			return next(err);
		} else {
			res.json({"result" : 0});
		}
	});
};

exports.login = function(req, res, next) {
	var user = new User(req.body);

	User.findOne({
		"useremail" : user.useremail,
		"password" : user.password
	}, function(err, users) {
		if(err) {
			res.json({ "result" : 1 });
			return next(err);
		} else {
			res.json({ "result" : 0, "user" : users });
		}
	});
};

exports.updateBeacon = function(req, res, next) {
	var b = new Beacon(req.body.beacon);

	User.update({
		"_id" : req.body._id
	}, {"$push" : {"beacons" : {"_id":b._id, "uuid":b.uuid, "major":b.major, "minor":b.minor,"alias":b.alias}}},
	function(err, users) {
		if(err) {
			res.json({ "result" : 1 });
			return next(err);
		} else {
			res.json({ "result" : 0 });
		}
	});
}

exports.deleteBeacon = function(req, res, next) {
	var b = new Beacon(req.body.beacon);

	User.update({
		"_id" : req.body._id
	}, {"$pull" : {"beacons" : {"_id":b._id, "uuid":b.uuid, "major":b.major, "minor":b.minor,"alias":b.alias}}},
	function(err, users) {
		if(err) {
			res.json({ "result" : 1 });
			return next(err);
		} else {
			res.json({ "result" : 0 });
		}
	});
}

exports.view = function(req, res, next) {
	User.find(function(err, users) {
		if(err) {
			return next(err);
		} else {
			res.json(users);
		}
	});
};

exports.blist = function(req, res, next) {
	User.findOne({
		"_id" : req.body._id
	}, function(err, user) {
		if(err) {
			res.json({ "result" : 1 });
			return next(err);
		} else {
			res.json({ "result" : 0, "beacons" : user.beacons });
		}
	});
}