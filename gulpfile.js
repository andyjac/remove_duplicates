var gulp = require('gulp');
var jshint = require('gulp-jshint');
var plumber = require('gulp-plumber');
var mocha = require('gulp-mocha');

gulp.task('lint', function() {
  return gulp.src('./lib/*.js')
    .pipe(plumber())
    .pipe(jshint({
      node: true,
      globals: {
        describe: true,
        it: true,
        before: true,
        beforeEach: true,
        after: true,
        afterEach: true
      }
    }))
    .pipe(jshint.reporter('jshint-stylish'))
    .pipe(jshint.reporter('fail'));
});

gulp.task('test', ['lint'], function() {
  return gulp.src('./test/*test.js')
    .pipe(mocha())
    .once('error', function(err) {
      console.log(err);
      process.exit(1);
    })
    .once('end', function() {
      process.exit();
    })
});

gulp.task('default', ['test']);
