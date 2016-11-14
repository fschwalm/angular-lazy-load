(function() {

  var gulp = require('gulp');
  var browserSync = require('browser-sync').create();

  /* Task registry */
  gulp.task('browser-sync', function() {
    browserSync.init({
      server: {
        baseDir: '../',
        middleware: [
          function(req, res, next) {
            res.setHeader('Access-Control-Allow-Origin', '*');
            res.setHeader('Access-Control-Allow-Headers', '*');
            next();
          }
        ]
      },
      startPath: 'angular-lazy-load'
    });

    gulp.watch([
      'angular-lazy-load/**/*.html',
      'angular-lazy-load/**/*.js',
      'angular-lazy-load/**/*.css'
    ]).on('change', browserSync.reload);
  });
  
}());