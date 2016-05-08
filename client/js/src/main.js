/* this is the main reference point for the app, all stuff is effectively pulled into here, and then bundled with jspm */

// library imports
import angular from "angular";
import $ from "jquery";
import material from "materialize-css";

// services
/*
import allParksSrv from "./services/all-parks.service.js";
*/

// controllers
import MainCtrl from "./controllers/main.controller.js";

// directives

import calendarModule from "./directives/calendar-module.directive.js";
import profileModule from "./directives/profile-module.directive.js";



// filters


// GO!
angular.module("CalendarApp", [])
	.controller("MainCtrl", MainCtrl)
	.directive("calendarModule", calendarModule)
	.directive("profileModule", profileModule)



