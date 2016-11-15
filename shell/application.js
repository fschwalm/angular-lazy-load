define([
  './shell/main-module',
  './shell/configuration/providers/oc-lazy-load',
  './shell/configuration/providers/url-router',
  './shell/configuration/states/home-state',
  './shell/configuration/states/module1-state',
  './shell/configuration/states/module2-state',
], function(app) {

  app.bootstrap = function() {
    angular.bootstrap(document, ['mainModule']);
  };

  return app;
});
