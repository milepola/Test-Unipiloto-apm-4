angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    
  

      .state('tabsController.opcion1', {
    url: '/page2',
    views: {
      'tab1': {
        templateUrl: 'templates/opcion1.html',
        controller: 'opcion1Ctrl'
      }
    }
  })

  .state('tabsController.opcion2', {
    url: '/page3',
    views: {
      'tab2': {
        templateUrl: 'templates/opcion2.html',
        controller: 'opcion2Ctrl'
      }
    }
  })

  .state('tabsController.opcion3', {
    url: '/page4',
    views: {
      'tab3': {
        templateUrl: 'templates/opcion3.html',
        controller: 'opcion3Ctrl'
      }
    }
  })

  .state('tabsController', {
    url: '/page1',
    templateUrl: 'templates/tabsController.html',
    abstract:true
  })

$urlRouterProvider.otherwise('/page1/page2')

  

});