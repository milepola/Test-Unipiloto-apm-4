angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    
  

      .state('menu.guardar', {
    url: '/page1',
    views: {
      'side-menu21': {
        templateUrl: 'templates/guardar.html',
        controller: 'guardarCtrl'
      }
    }
  })

  .state('menu.mostrar', {
    url: '/page2',
    views: {
      'side-menu21': {
        templateUrl: 'templates/mostrar.html',
        controller: 'mostrarCtrl'
      }
    }
  })

  .state('menu', {
    url: '/side-menu21',
    templateUrl: 'templates/menu.html',
    abstract:true
  })

$urlRouterProvider.otherwise('/side-menu21/page1')

  

});