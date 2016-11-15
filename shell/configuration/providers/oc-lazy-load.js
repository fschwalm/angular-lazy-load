define([
  'angular',
  'ocLazyLoad'
], function(angular, ocLazyLoad) {

  angular
    .module('mainModule')
    .config(Config);

  Config.$inject = ['$ocLazyLoadProvider'];

  function Config($ocLazyLoadProvider) {
    $ocLazyLoadProvider.config({
      loadedModules: ['mainModule'],
      asyncLoader: require
    });
  }

});
