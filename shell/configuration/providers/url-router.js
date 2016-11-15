define([
  'angular',
  'uiRouter'
], function(angular) {

  angular
    .module('mainModule')
    .config(Config);

  Config.$inject = ['$urlRouterProvider'];

  function Config($urlRouterProvider) {
    $urlRouterProvider.otherwise('/home');
  }

});
