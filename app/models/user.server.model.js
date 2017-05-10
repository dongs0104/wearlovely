var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var Beacon = mongoose.model('Beacon');

var UserSchema = new Schema({
	username: {
		type: String,
		required: true
	},
	useremail: {
		type: String,
		required: true
	},
	password: {
		type: String,
		required: true
	},
	beacons: [{
		"_id":{type: String, required:true},
		"uuid":{type: String,required:true},
		"major":{type: String,required:true},
		"minor":{type: String,required:true},
		"alias":{type: String,required:true}
	}]
});

mongoose.model('User', UserSchema);