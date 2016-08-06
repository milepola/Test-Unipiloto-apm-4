angular.module('app.controllers', ['ngCordova'])
  
.controller('guardarCtrl',  ['$scope', '$stateParams', '$cordovaDeviceOrientation',// The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $rootScope, $cordovaDeviceOrientation) {

$scope.getDeviceOrientation = function(){
		
    $cordovaDeviceOrientation.getCurrentHeading().then(function(result) {
       $scope.magneticHeading = result.magneticHeading;
       $scope.trueHeading = result.trueHeading;
       $scope.accuracy = result.headingAccuracy;
       $scope.timeStamp = result.timestamp;
    }, function(err) {
      alert('Algo salio mal ', err);
    });
  
	}


}])
   

    