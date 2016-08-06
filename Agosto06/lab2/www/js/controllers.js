angular.module('app.controllers', ['ngCordova'])
  
.controller('guardarCtrl',  ['$scope', '$stateParams', '$cordovaNetwork',// The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $rootScope, $cordovaNetwork) {

$scope.getcordovaNetwork = function(){
		$scope.getNetwork = $cordovaNetwork.getNetwork()

    $scope.isOnline = $cordovaNetwork.isOnline()

    $scope.isOffline = $cordovaNetwork.isOffline()
	}


}])
   

    