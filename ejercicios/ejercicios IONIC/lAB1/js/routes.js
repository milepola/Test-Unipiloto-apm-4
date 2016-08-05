angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    
  

      .state('oPCIONES', {
    url: '/page1',
    templateUrl: 'templates/oPCIONES.html',
    controller: 'oPCIONESCtrl'
  })

  .state('rEGISTRO', {
    url: '/page3',
    templateUrl: 'templates/rEGISTRO.html',
    controller: 'rEGISTROCtrl'
  })

  .state('iNGRESO', {
    url: '/page4',
    templateUrl: 'templates/iNGRESO.html',
    controller: 'iNGRESOCtrl'
  })

  .state('cAMBIARCONTRASEA', {
    url: '/page5',
    templateUrl: 'templates/cAMBIARCONTRASEA.html',
    controller: 'cAMBIARCONTRASEACtrl'
  })

  .state('dETALLESCIUDAD', {
    url: '/page6',
    templateUrl: 'templates/dETALLESCIUDAD.html',
    controller: 'dETALLESCIUDADCtrl'
  })

$urlRouterProvider.otherwise('/page1')

  

});