angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    
  

      .state('menu', {
    url: '/Page1',
    templateUrl: 'templates/menu.html',
    controller: 'menuCtrl'
  })

  .state('opcion1', {
    url: '/page2',
    templateUrl: 'templates/opcion1.html',
    controller: 'opcion1Ctrl'
  })

  .state('opciN2', {
    url: '/page3',
    templateUrl: 'templates/opciN2.html',
    controller: 'opciN2Ctrl'
  })

  .state('opciN3', {
    url: '/page4',
    templateUrl: 'templates/opciN3.html',
    controller: 'opciN3Ctrl'
  })

$urlRouterProvider.otherwise('/Page1')

  

});