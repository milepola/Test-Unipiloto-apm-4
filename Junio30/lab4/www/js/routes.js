angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    
  

      .state('page', {
    url: '/page1',
    templateUrl: 'templates/page.html',
    controller: 'pageCtrl'
  })

  .state('opcion1', {
    url: '/page2',
    templateUrl: 'templates/opcion1.html',
    controller: 'opcion1Ctrl'
  })

  .state('opcion2', {
    url: '/page3',
    templateUrl: 'templates/opcion2.html',
    controller: 'opcion2Ctrl'
  })

  .state('opcion3', {
    url: '/page4',
    templateUrl: 'templates/opcion3.html',
    controller: 'opcion3Ctrl'
  })

  .state('opcion4', {
    url: '/page5',
    templateUrl: 'templates/opcion4.html',
    controller: 'opcion4Ctrl'
  })

$urlRouterProvider.otherwise('/page1')

  

});