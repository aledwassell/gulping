const gulp = require('gulp'),
      gutil = require('gulp-util'),
      coffee = require('gulp-coffee'),
      concat = require('gulp-concat'),
      pug = require('gulp-pug'),
      sass = require('gulp-sass'),
      browserify = require('gulp-browserify'),
      connect = require('gulp-connect');

const sassSources = ['sass/*.sass'];
const pugSources = ['pug/*.pug'];

const jsSource = [
  'js/box.js',
  'js/iss.js'
]

gulp.task('css', () => {
  return gulp.src(sassSources)
    .pipe(sass())
    .pipe(gulp.dest('public/css'))
    .pipe(connect.reload())
})

gulp.task('html', () => {
  return gulp.src(pugSources)
    .pipe(pug())
    .pipe(gulp.dest('public'))
    .pipe(connect.reload())
})

gulp.task('js', function(){
  gulp.src(jsSource)
    .pipe(concat('script.js'))
    .pipe(browserify())
    .pipe(gulp.dest('public/js'))
    .pipe(connect.reload())
})

gulp.task('watch', () => {
  gulp.watch(pugSources, ['html']);
  gulp.watch(sassSources, ['css']);
  gulp.watch(jsSource, ['js']);
})

gulp.task('connect', () => {
  connect.server({
    root: 'public',
    livereload: true
  });
})

gulp.task('default', ['html', 'css', 'connect', 'js']);
