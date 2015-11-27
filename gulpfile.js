var gulp = require('gulp');
var babel = require('gulp-babel');
var sass = require('gulp-sass');
var webpack = require("webpack");
var eslint = require('gulp-eslint');
var path = require('path');
var childProcess = require('child_process');

require('babel/register');

gulp.task('build-babel', function() {
  var fs = require('fs');
  var config = JSON.parse(fs.readFileSync('./.babelrc'));
  return gulp.src('src/**/*.js')
    .pipe(babel(config))
    .pipe(gulp.dest('lib/'));
});

gulp.task('build-sass', function() {
  return gulp.src('src/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./lib/'));
});

function getBinPath(name) {
  if(process.platform === 'win32') name += '.cmd';
  return path.resolve(__dirname, 'node_modules/.bin/', name);
}

function runNpmCmd(cmdName, args, options, callback) {
  if(!Array.isArray(args)) {
    callback = options;
    options = args;
    args = [];
  }
  if(typeof options !== 'object') {
    callback = options;
    options = {};
  }
  options = Object.assign({}, options, {stdio: 'inherit'});
  var cp = childProcess.spawn(getBinPath(cmdName), args, options);
  cp.on('close', function() { callback && callback(); });
  cp.on('error', function(err) { callback && callback(err); });
}

gulp.task('webpack:build-minimize', function(callback) {
  runNpmCmd('webpack', ['-p'], callback);
});

gulp.task('webpack:build', function(callback) {
  runNpmCmd('webpack', callback);
});

gulp.task('dist', ['webpack:build', 'webpack:build-minimize']);

gulp.task('lint', function() {
  return gulp.src('src/**/*.js')
    .pipe(eslint())
    .pipe(eslint.format())
    .pipe(eslint.failAfterError());
});

gulp.task('test', function(callback) {
  runNpmCmd('karma', ['start', '--single-run'], callback);
});

gulp.task('test-coverage', function(callback) {
  var options = {env: {'COVERAGE': true}};
  runNpmCmd('karma', ['start', '--single-run'], options, callback);
});

gulp.task('test-watch', function(callback) {
  runNpmCmd('karma', ['start'], callback);
});
