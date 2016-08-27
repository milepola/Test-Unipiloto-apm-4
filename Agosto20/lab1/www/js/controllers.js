angular.module('app.controllers', ['ngCordova'])
  
.controller('nuevoProductoCtrl', ['$scope', '$stateParams', 'productService','$cordovaDialogs',// The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams, productService, $cordovaDialogs) {



$scope.getRegisterProduct = function(){
  
  var data = {
        "name": $scope.name,
        "type": $scope.type,
        "quantity": $scope.quantity,
        "price": $scope.price
    };

   


		$cordovaDialogs.confirm('Creando Producto', 'Confirma creación del producto ' + $scope.name , ['Ok','Cancel'])
		    .then(function(buttonIndex) {
		      // no button = 0, 'OK' = 1, 'Cancel' = 2
		      var btnIndex = buttonIndex;
              //localStorage.setItem('confirm','EL USUARIO SELECCIONO LA OPCION' + btnIndex);
              if(btnIndex == 1)
                {
                    productService.item_create.save(data, function(data){

                    $scope.data = data;

                    console.log($scope.data);
                });}
            else{console.log('OPCION 2');}

    		});
	};

}])
    