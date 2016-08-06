angular.module('app.controllers', ['ngCordova'])
  
.controller('guardarCtrl', ['$scope', '$stateParams', '$cordovaDevice', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams,$cordovaDevice,$state) {
$scope.SaveInformation = function () {
    localStorage.setItem('device',JSON.stringify($cordovaDevice.getDevice()));
    localStorage.setItem('cordova',JSON.stringify($cordovaDevice.getCordova()));
    localStorage.setItem('model',JSON.stringify($cordovaDevice.getModel()));
    localStorage.setItem('platform',JSON.stringify($cordovaDevice.getPlatform()));
    localStorage.setItem('uuid',JSON.stringify($cordovaDevice.getUUID()));
    localStorage.setItem('version',JSON.stringify($cordovaDevice.getVersion()));
}

}])
   
.controller('mostrarCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams,$cordovaDevice) {
$scope.device = localStorage.getItem('device');
$scope.cordova = localStorage.getItem('cordova');
$scope.model = localStorage.getItem('model');
$scope.platform = localStorage.getItem('platform');
$scope.uuid = localStorage.getItem('uuid');
$scope.version = localStorage.getItem('version');

}])
    