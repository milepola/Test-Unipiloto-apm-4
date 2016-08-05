angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    
  

      .state('tabsController.registroHoras', {
    url: '/page3',
    views: {
      'tab2': {
        templateUrl: 'templates/registroHoras.html',
        controller: 'registroHorasCtrl'
      }
    }
  })

  .state('tabsController.resumenHoras', {
    url: '/page4',
    views: {
      'tab3': {
        templateUrl: 'templates/resumenHoras.html',
        controller: 'resumenHorasCtrl'
      }
    }
  })

  .state('tabsController', {
    url: '/page1',
    templateUrl: 'templates/tabsController.html',
    abstract:true
  })

  .state('tabsController.iNGRESO', {
    url: '/page2',
    views: {
      'tab1': {
        templateUrl: 'templates/iNGRESO.html',
        controller: 'iNGRESOCtrl'
      }
    }
  })

  .state('tabsController.rEGISTRO', {
    url: '/page6',
    views: {
      'tab1': {
        templateUrl: 'templates/rEGISTRO.html',
        controller: 'rEGISTROCtrl'
      }
    }
  })

$urlRouterProvider.otherwise('/page1/page6')

  

});