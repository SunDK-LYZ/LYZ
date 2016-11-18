'use strict';

/**
 * @ngdoc overview
 * @name App
 * @description
 * # App
 *
 * Main module of the application.
 */
var app=angular.module('App', ["lyz"]);
app.controller("b",function($scope,$http,geudata){
	geudata.ajax("http://www.somenote.cn:1510/test","get",function(e){
		$scope.data=e
	})
	geudata.ajax2("http://www.somenote.cn:1510/test2","get",function(e){
		$scope.data2=e
	})
	geudata.ajax3("http://www.somenote.cn:1510/aut","get",function(e){
		$scope.data3=e
	})
	
	/*$http({
		method:"get",
		url:"http://www.somenote.cn:1510/test"
	}).success(function(e){
		console.log(e)
		$scope.data=e
	})
	$http({
		method:"get",
		url:"http://www.somenote.cn:1510/test2"
	}).success(function(e){
		console.log(e)
		$scope.data2=e
	})
	$http({
		method:"get",
		url:"http://www.somenote.cn:1510/aut"
	}).success(function(e){
		console.log(e)
		$scope.data3=e
	})*/
})
