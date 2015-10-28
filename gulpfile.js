/* global require */

'use strict';

var gulp = require('gulp');
var rename = require('gulp-rename');
var svgmin = require('gulp-svgmin');
var svgstore = require('gulp-svgstore');

gulp.task('svg', function () {
  return gulp
    .src('_icons/*.svg')
    .pipe(rename({
      prefix: 'shape-'
    }))
    .pipe(svgmin())
    .pipe(svgstore())
    .pipe(rename('icons.html'))
    .pipe(gulp.dest('_includes'));
});
