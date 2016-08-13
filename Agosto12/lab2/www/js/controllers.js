angular.module('app.controllers', ['ngCordova'])
  
.controller('pageCtrl', ['$scope', '$stateParams', '$cordovaDialogs','$cordovaGeolocation',// The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams, $cordovaDialogs,$cordovaGeolocation) {

$scope.getAlert = function(){
		$cordovaDialogs.alert('Este es un mensaje informativo', 'Informacion', 'OK')
		    .then(function() {
               localStorage.setItem('alert','EL USUARIO SE INFORMO');
		    });
		};

	$scope.getConfirm = function(){
		$cordovaDialogs.confirm('Seleccione una opcion', 'Informacion', ['SI','NO'])
		    .then(function(buttonIndex) {
		      // no button = 0, 'OK' = 1, 'Cancel' = 2
		      var btnIndex = buttonIndex;
              localStorage.setItem('confirm','EL USUARIO SELECCIONO LA OPCION' + btnIndex);

    		});
	};

  
     $scope.getPrompt = function(){
     	$cordovaDialogs.prompt('Escriba su nombre', 'Informacion', ['Borrar','Registrar'], 'Nombre completo')
		    .then(function(result) {
		      var input = result.input1;
		      // no button = 0, 'OK' = 1, 'Cancel' = 2
		      var btnIndex = result.buttonIndex;
              localStorage.setItem('prompt','EL USUARIO SELECCIONO LA OPCION [' + btnIndex + '] Y EL MENSAJE ES: ' + input);

    	});
     };

$scope.getCordovaGeolocation = function(){
		var posOptions = {frequency : 1000, timeout: 3000};
		  $cordovaGeolocation
		    .getCurrentPosition(posOptions)
		    .then(function (position) {
			      $scope.lat  = position.coords.latitude
			      $scope.long = position.coords.longitude
			      console.log(position.coords);
		    }, function(err) {
		    	console.log(err);
		    });
		}


}])
 