"use strict";

// Requires
const express         = require('express');
const mongoose        = require('mongoose');
const app             = express();
const http 			  = require("http").Server(app);
const port            = process.env.PORT || 1337;
const morgan          = require('morgan');
const bodyParser      = require('body-parser');
const methodOverride  = require('method-override');

// MongoDB config
//const dbString 	      = "mongodb://127.0.0.1/angular-concepts";
//const dbString 		=  "mongodb://int_heroku_ben:Sixteen16@ds023550.mlab.com:23550/heroku_r1j6hfp6";

// Mongo Connect

/*
mongoose.connect(dbString, (err, res) => {
	if (err) console.log("error connecting to " + dbString + " with error -> " + err);
	else console.log ('Succeeded connecting to: ' + dbString);
});

*/

// Expose the jspm packages + config as well as the client front-end
app.use('/jspm_packages',  express.static(__dirname + '/jspm_packages'));
app.use("/config.js", express.static(__dirname + "/config.js"));
app.use(express.static(__dirname + "/client"));

// Allow headers / datatypes etc to be set
app.use(bodyParser.json());                                     // parse application/json
app.use(bodyParser.urlencoded({extended: true}));               // parse application/x-www-form-urlencoded
app.use(bodyParser.text());                                     // allows bodyParser to look at raw text
app.use(bodyParser.json({ type: 'application/vnd.api+json'}));  // parse application/vnd.api+json as json
app.use(methodOverride());

// Routes
// ------------------------------------------------------
//require('./backend/routes.js')(app);

// Start
// -------------------------------------------------------
http.listen(port, () => {

	console.log("Server is alive on port " + port);

})