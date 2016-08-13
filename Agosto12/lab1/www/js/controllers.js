angular.module('app.controllers', ['ngCordova'])
  
.controller('dispositivoCtrl', ['$scope', '$stateParams', '$cordovaDevice',// The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams,$cordovaDevice) {
    $scope.getDispositivo = function(){
    $scope.device = JSON.stringify($cordovaDevice.getDevice());
    $scope.cordova = $cordovaDevice.getCordova();
    $scope.model = $cordovaDevice.getModel();
    $scope.platform = $cordovaDevice.getPlatform();
    $scope.uuid = $cordovaDevice.getUUID();
    $scope.version = $cordovaDevice.getVersion();
}
}])
   
.controller('acelerometroCtrl', ['$scope', '$stateParams', '$cordovaDeviceMotion',// The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams,$cordovaDeviceMotion) {

	$scope.getAcelerometro = function(){
		$cordovaDeviceMotion.getCurrentAcceleration().then(function(result) {
		      $scope.x = result.x;
		      $scope.y = result.y;
		      $scope.z = result.z;
		      $scope.timeStamp = result.timestamp;
	    }, function(err) {
	      alert('Algo salio mal ', err);
	    });
	}

}])
   
.controller('redCtrl', ['$scope', '$stateParams', '$cordovaNetwork',// The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams, $cordovaNetwork) {
$scope.getRed = function(){
		$scope.getNetwork = $cordovaNetwork.getNetwork();

    $scope.isOnline = $cordovaNetwork.isOnline();

    $scope.isOffline = $cordovaNetwork.isOffline();
	}

}])
      
.controller('brujulaCtrl', ['$scope', '$stateParams', '$cordovaDeviceOrientation',// The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams, $cordovaDeviceOrientation) {

$scope.getBrujula = function(){
		
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
 