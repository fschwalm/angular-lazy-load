define([
  'angular',
  'uiRouter',
], function(angular) {

  angular
    .module('mainModule')
    .config(Config);

  Config.$inject = ['$stateProvider'];

  function Config($stateProvider) {
    $stateProvider
      .state('home', {
        url: '/home',
        templateUrl: 'shell/home.html'
      });
  }

});
