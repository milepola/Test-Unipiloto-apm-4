angular.module('app.services', ['ngResource'])

.service('productService', ['$resource', function($resource){
     this.item_detailPerfil = $resource('http://private-bcbaa-productapp.apiary-mock.com/user/profile/:id');
     this.item_signout = $resource('http://private-bcbaa-productapp.apiary-mock.com/user/sign-out/:id');
     this.item_deleteaccount = $resource('http://private-bcbaa-productapp.apiary-mock.com/user/delete/:id');
}]);