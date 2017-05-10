var Beacon = require('mongoose').model('Beacon');

exports.create = function(req, res, next) {
	var beacon = new Beacon(req.body);

	beacon.save(function(err) {
		if(err) {
			res.json({result : 1});
			return next(err);
		} else {
			res.json({result : 0});
		}
	});
};

exports.edit = function(req, res, next) {
	Beacon.findByAndUpdate(req.beacon._id, req.body, function(err, beacon) {
		if(err) {
			return next(err);
		} else {
			res.json(beacon);
		}
	})
};

exports.del = function(req, res, next) {
	Beacon.remove({
		"_id" : req._id
	}, function(err, beacon) {
		if(err) {
			return next(err);
		} else {
			res.json({result : 0});
		}
	})
};

exports.list = function(req, res, next) {
	Beacon.find(function(err, beacons) {
		if(err) {
			return next(err);
		} else {
			res.json(beacons);
		}
	});
};

exports.beacons = function(req, res, next) {
	Beacon.findOne({
		"_id" : _id
	}, function(err, users) {
		if(err) {
			res.json({ "result" : 1 });
			return next(err);
		} else {
			res.json({ "result" : 0, "beacons" : users.beacons });
		}
	});
};