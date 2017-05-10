var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var BeaconSchema = new Schema({
	uuid: {
		type: String,
		required: true
	},
	major: {
		type: String,
		required: true
	},
	minor: {
		type: String,
		required: true
	},
	alias: {
		type: String,
		required: true
	}
});

mongoose.model('Beacon', BeaconSchema);