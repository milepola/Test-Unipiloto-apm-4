angular.module('initial_spi.controllers', [])

.controller('mobileController', function($scope, $http){
	$scope.mobile_message = 'Algún Mensaje';

    var url = "js/data_mobile.json";
              	$http.get(url).success(function(response){

              		console.log(response);
              		
              		$scope.Operators = response;
              	});

})

.controller('smartphoneController', function($scope, $http){
	$scope.smartphone_message = 'Otro Mensaje';

    var url = "js/data_smartphone.json";
              	$http.get(url).success(function(response){

              		console.log(response);
              		
              		$scope.Brands = response;
              	});
})

.controller('formularioController', function($scope){

	$scope.reset = function(){
		$scope.firstname = '';
		$scope.email = '',
		$scope.age = '';
	}

	$scope.reset();
});;