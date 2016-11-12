'use strict';

/**
 * @ngdoc overview
 * @name App
 * @description
 * # App
 *
 * Main module of the application.
 */
angular
  .module('App', ["ui.router"]).config(function($stateProvider,$urlRouterProvider){
  	$urlRouterProvider.when("","/p1");
  	$stateProvider.state("p1",{
		url:"/p1",
		templateUrl:"views/p1.html",
		controller:"p1"
	}).state("p2",{
		url:"/p2",
		templateUrl:"views/p2.html",
		controller:"p2"
	})
  });
