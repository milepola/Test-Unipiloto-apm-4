angular.module('app.services', ['ngResource'])

.service('productService', ['$resource', function($resource){
     this.item_detailPerfil = $resource('http://138.68.0.83:7070/api/v1/user/profile/:email');
     this.item_signout = $resource('http://138.68.0.83:7070/api/v1/user/sign-up');
     this.item_deleteaccount = $resource('http://138.68.0.83:7070/api/v1/user/delete/:email', {email:'@email'},
     {
         delete:{
             method:'DELETE',
         interceptor:{
             response:function (param) {
                 var result=param.resource;
                 result.$status=param.status;
                 return result;
             }
         }
         }

     });
}]);