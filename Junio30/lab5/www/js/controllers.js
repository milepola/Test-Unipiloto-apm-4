angular.module('app.controllers', [])
  
.controller('loginCtrl', function($scope, $state) {
    $scope.goToPage = function(_nameuser, _pwduser){
		localStorage.setItem('nameuser', _nameuser);
		localStorage.setItem('pwduser', _pwduser);
		$state.go('page');
    }
})
   
.controller('pageCtrl', function($scope) {

$scope.nameuser = localStorage.getItem('nameuser');
	$scope.pwduser = localStorage.getItem('pwduser');
})
 