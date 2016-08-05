angular.module('lab1c', [])
              .controller('lab1cController', function($scope){
              	$scope.link_image = "http://dummyimage.com/200x200/000/34ffddaa";
              	
                 $scope.ChangeImage = function(){
                     if($scope.link_image == "http://dummyimage.com/200x200/000/34ffddaa")
		   			    $scope.link_image  = "http://dummyimage.com/200x300/000/34ffddaa";
                    else
		   			    $scope.link_image  = "http://dummyimage.com/200x200/000/34ffddaa";
		   		};
              });