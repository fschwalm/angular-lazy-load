define([
  'angular',
  'uiRouter',
  'ocLazyLoad'
], function(angular) {

  angular
    .module('mainModule')
    .config(Config);

  Config.$inject = ['$stateProvider'];

  function Config($stateProvider) {
    $stateProvider
      .state('module1', {
        url: '/module1',
        templateUrl: 'module1/module1.html',
        resolve: {
          load: function($ocLazyLoad) {

            return $ocLazyLoad.load({
              name: 'module1',
              files: ['module1/module.js', 'module1/service1.js'],
              /**
               *
               * This it will only load the files of this module in serie.
               * If you have multiple modules that you want to load in serie (because they depend on each other),
               * you need to use the param serie globally like this:
               *
               */
              serie: true
            });
          }
        }
      });
  }

});
