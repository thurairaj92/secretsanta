var app = angular.module('secretsanta', [])
app.controller('mainCtrl', function($scope, $http){
	$scope.inputs = {
		email : "",
		pass : ""
	}

	$scope.errorMessage = "";

	$scope.register = function(){
		$http({
			method: "POST",
			url: "/register",
			data: $scope.inputs,
			headers : {'Content-Type': 'application/json'} 
		}).success(function(response){
			if(response.status == "ERROR"){
				$scope.errorMessage = response.message;
			}else{
				$scope.active = true;
			}
		})
	}

	$scope.login = function(){
		$http({
			method: "POST",
			url: "/login",
			data: $scope.inputs,
			headers : {'Content-Type': 'application/json'} 
		}).success(function(response){
			if(response.status == "ERROR"){
				$scope.errorMessage = response.message;
			}else{
				$scope.active = true;
			}
		})
	}

	$scope.mysanta = function(){
		$http({
			method: "POST",
			url: "/getMySecretSanta",
			headers : {'Content-Type': 'application/json'} 
		}).success(function(response){
			if(response.status == "ERROR"){
				$scope.errorMessage = response.message;
			}else{
				$scope.secretsanta = response.data;
				$scope.open = true;
			}
		})
	}


	$scope.active = false;
	$scope.open = false;
	$scope.secretsanta = "";


})