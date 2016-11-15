require.config({
  baseUrl: '',
  paths: {
    'angular': 'node_modules/angular/angular',
    'uiRouter': 'node_modules/angular-ui-router/release/angular-ui-router',
    'ocLazyLoad': 'node_modules/ocLazyLoad/dist/ocLazyLoad',

    'app': 'shell/application'
  },
  shim: {
    'angular': {
      exports: 'angular'
    },
    'uiRouter': {
      deps: ['angular']
    },
    'ocLazyLoad': {
      deps: ['angular']
    }
  }

});

require(['app'], function(app) {
  app.bootstrap();
});
