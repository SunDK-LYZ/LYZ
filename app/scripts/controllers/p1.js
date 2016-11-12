angular.module("App").controller("p1",function($scope,$http){
	$http({
		method:"get",
		url:"http://www.somenote.cn:1602/list1"
	}).success(function(e){
		$scope.data=e[0].content;
	})
})