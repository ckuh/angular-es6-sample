(function() {
  'use strict';
  angular
  .module('myApp.config',[])
    .config(config);
    function config ($stateProvider, $urlRouterProvider, $httpProvider) {
      $stateProvider
        .state('home', {
          url: '/home',
          auth: false,
          templateUrl: '../pages/myApp.home/templates/home.html',
          controller: 'HomeController as vm'
        });
      $urlRouterProvider
        .otherwise('/');
    }
})();
