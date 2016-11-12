angular.module("App").controller("p2",function($scope,$http){
	$http({
		method:"get",
		url:"http://www.somenote.cn:1602/list2"
	}).success(function(e){
		$scope.data=e[0].content;
	})
})