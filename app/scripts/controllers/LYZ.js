angular.module("lyz",[]).directive("t",function(){
	return{
		restrict:"ECAM",
		template:'<div><div><ul><li ng-repeat="x in fn">{{x.title}}</li></ul><ul ng-repeat="x in fn3"><li><img ng-src="{{x.img}}" /></li></ul></div><div><ul><li ng-repeat="i in fn2">{{i.title}}</li></ul><ul ng-repeat="x in fn3"><li><img ng-src="{{x.img}}" /></li></ul></div></div>',
		scope:{fn:'=dd',fn2:'=ddd',fn3:'=dddd'},
	}
}).service("geudata",function($http){
	return{
		ajax:function(url,method,callback){
			$http({
				url:url,
				method:method
			}).success(function(e){
				callback(e)
			})
		}
	}
})
