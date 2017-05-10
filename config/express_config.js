var express = require('express');
var morgan = require('morgan');
var compress = require('compression');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');
var config = require('./config');
var session = require('express-session');

module.exports = function() {
	var app = express();

	if(process.env.NODE_ENV === 'development') {
		app.use(morgan('dev'));
	} else if(process.env.NODE_ENV === 'production') {
		app.use(compress());
	}

	app.use(bodyParser.urlencoded({
		extended: true
	}));

	app.use(bodyParser.json());
	app.use(methodOverride());

	app.use(session({
		saveUninitialized: true,
		resave: true,
		secret: config.sessionSecret
	}));

	app.set('views', './app/views');
	app.set('view engine', 'jade');

	require('../app/routes/index.server.routes.js')(app);
	require('../app/routes/beacon.server.routes.js')(app);
	require('../app/routes/user.server.routes.js')(app);
	app.use(express.static('./static'));
	return app;
}