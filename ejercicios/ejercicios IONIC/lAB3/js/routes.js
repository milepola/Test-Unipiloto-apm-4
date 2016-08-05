angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    
  

      .state('tabsController.cAMBIOCONTRASEA', {
    url: '/page4',
    views: {
      'tab3': {
        templateUrl: 'templates/cAMBIOCONTRASEA.html',
        controller: 'cAMBIOCONTRASEACtrl'
      }
    }
  })

  .state('tabsController', {
    url: '/page1',
    templateUrl: 'templates/tabsController.html',
    abstract:true
  })

  .state('tabsController.iNGRESAR', {
    url: '/page2',
    views: {
      'tab1': {
        templateUrl: 'templates/iNGRESAR.html',
        controller: 'iNGRESARCtrl'
      }
    }
  })

  .state('tabsController.rEGISTRAR', {
    url: '/page3',
    views: {
      'tab2': {
        templateUrl: 'templates/rEGISTRAR.html',
        controller: 'rEGISTRARCtrl'
      }
    }
  })

  .state('hOME', {
    url: '/page7',
    templateUrl: 'templates/hOME.html',
    controller: 'hOMECtrl'
  })

$urlRouterProvider.otherwise('/page1/page4')

  

});