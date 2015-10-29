/* global require */

'use strict';

var gulp = require('gulp');
var rename = require('gulp-rename');
var svgmin = require('gulp-svgmin');
var svgstore = require('gulp-svgstore');
var imageop = require('gulp-image-optimization');

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

gulp.task('svg:minify', function () {
  return gulp
    .src('img/*.svg')
    .pipe(svgmin())
    .pipe(gulp.dest('img'));
});

gulp.task('img', function () {
  return gulp
    .src(['img/*.png','img/*.jpg','img/*.gif','img/*.jpeg'])
    .pipe(imageop({
      optimizationLevel: 5,
      progressive: true,
      interlaced: true
    }))
    .pipe(gulp.dest('img'));
});
