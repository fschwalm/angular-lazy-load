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
      .state('module2', {
        url: '/module2',
        templateUrl: 'module2/module2.html',
        resolve: {
          load: function($ocLazyLoad) {

            return $ocLazyLoad.load({
              name: 'module2',
              files: ['module2/module.js']
            });
          }
        }
      });
  }

});
