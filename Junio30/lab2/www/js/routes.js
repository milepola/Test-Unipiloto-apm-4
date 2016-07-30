angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    
  

      .state('menu.opcion1', {
    url: '/page1',
    views: {
      'side-menu21': {
        templateUrl: 'templates/opcion1.html',
        controller: 'opcion1Ctrl'
      }
    }
  })

  .state('menu.opcion2', {
    url: '/page2',
    views: {
      'side-menu21': {
        templateUrl: 'templates/opcion2.html',
        controller: 'opcion2Ctrl'
      }
    }
  })

  .state('menu.opcion3', {
    url: '/page3',
    views: {
      'side-menu21': {
        templateUrl: 'templates/opcion3.html',
        controller: 'opcion3Ctrl'
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