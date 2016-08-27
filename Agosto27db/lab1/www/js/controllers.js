angular.module('app.controllers', ['ngCordova'])
  
.controller('pageCtrl', ['$scope', '$stateParams', '$cordovaSQLite',// The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams, $cordovaSQLite) {



$scope.createInfo = function(fieldt){


  console.log("data" + fieldt);

  var db = $cordovaSQLite.openDB({ name: "test.db", location: "default" });
      console.log("antes");


      var create_table = 'CREATE TABLE IF NOT EXISTS test_table2 (fieldt)';
      var insert_table = "INSERT INTO test_table2 (fieldt) VALUES (?);";
      // Crear Tabla
      $cordovaSQLite.execute(db, create_table, []).then(function(res){
        console.log("create table: " + res);
      }, function(err){
        console.error(err);
      });
      // Insertar Tabla
      $cordovaSQLite.execute(db, insert_table, [fieldt]).then(function(res){
        console.log("insert: " + res);
      }, function(err){
        console.error(err);
      });
    };

    // Consultar Tabla
    $scope.getInfo = function(){

  var db = $cordovaSQLite.openDB({ name: "test.db", location: "default" });


      var query = "SELECT * FROM test_table2;";
      $cordovaSQLite.execute(db, query, []).then(function(res){
        console.log("insert: " + res.rows.item(0));
        console.log("insert2: " + res.rows.item(0).fieldt);
        $scope.info = res.rows.item(0);
        console.log("insert3: " + $scope.info.fieldt);
      }, function(err){
        console.error(err);
      });
    };

}])
 