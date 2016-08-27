angular.module('app.services', ['ngResource'])

.service('productService', ['$resource', function($resource){
     this.item_create = $resource('http://138.68.0.83:7070/api/v1/product/create');
     
}]);