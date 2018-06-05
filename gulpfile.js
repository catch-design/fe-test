'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');
var cleanCSS = require('gulp-clean-css');
var concat = require('gulp-concat');

gulp.task('sass', function () {
 return gulp.src('assets/sass/**/*.scss')
   .pipe(sass())
   .pipe(concat('style.css'))
   .pipe(cleanCSS())
   .pipe(gulp.dest('assets/css/'));
});

gulp.task('sass:watch', function () {
  gulp.watch('assets/sass/**/*.scss', ['sass']);
});

gulp.task('default', [ 'sass', 'sass:watch' ]);
