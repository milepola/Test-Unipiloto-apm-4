angular.module('app.controllers', ['app.services','ngCordova'])
  
.controller('perfilCtrl', ['$scope', '$stateParams', 'productService','$cordovaDialogs',// The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams,productService, $cordovaDialogs) {

productService.item_detailPerfil.get({id: 1}, function(data){
        $scope.item = data;
        console.log($scope.item);
    });

$scope.getSignOut = function(){
  
  $cordovaDialogs.confirm('Confirmar cerrar la sesion', 'Cerrar Sesion' , ['Ok','Cancel'])
		    .then(function(buttonIndex) {
		      // no button = 0, 'OK' = 1, 'Cancel' = 2
		      var btnIndex = buttonIndex;
              if(btnIndex == 1)
              {
                productService.item_signout.get({id: 1}, function(data){
                        $scope.item = data;
                        console.log($scope.item);
                    });
              }
              else
                console.log('OPCION 2');

    		});

  
		
	};


    $scope.getDeleteAccount = function(){
  
  $cordovaDialogs.confirm('Eliminación de Informacion', 'Eliminar Cuenta' , ['Ok','Cancel'])
		    .then(function(buttonIndex) {
		      // no button = 0, 'OK' = 1, 'Cancel' = 2
		      var btnIndex = buttonIndex;
              if(btnIndex == 1)
              {
                productService.item_deleteaccount.delete({id: 1}, function(data){
                        
                        console.log('BORRO REGISTRO');
                    });
              }
              else
                console.log('OPCION 2');

    		});

  
		
	};


}])
      
.controller('editarPerfilCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])
 