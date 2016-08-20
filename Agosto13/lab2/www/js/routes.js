angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    
  

      .state('menu.productos', {
    url: '/page1',
    views: {
      'side-menu21': {
        templateUrl: 'templates/productos.html',
        controller: 'productosCtrl'
      }
    }
  })

  .state('menu.detalles', {
    url: '/page2',
    views: {
      'side-menu21': {
        templateUrl: 'templates/detalles.html',
        controller: 'detallesCtrl'
      }
    }
  })

  .state('menu.registro', {
    url: '/page3',
    views: {
      'side-menu21': {
        templateUrl: 'templates/registro.html',
        controller: 'registroCtrl'
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