var gulp = require('gulp');
var sass = require('gulp-sass')(require('sass'));
var rename = require('gulp-rename');
var autoprefixer = require('gulp-autoprefixer');
var cssnano = require('gulp-cssnano');

gulp.task('output-css', function() {
  return gulp.src('starability-scss/**/*.scss')
  .pipe(sass({outputStyle: 'expanded'}))
  .pipe(autoprefixer())
  .pipe(rename({
    dirname: 'starability-css',
    prefix: 'starability-',
  }))
  .pipe(gulp.dest('./'))
  .pipe(rename({
    dirname: 'starability-minified',
    suffix: '.min'
  }))
  .pipe(cssnano())
  .pipe(gulp.dest('./'));
});

gulp.task('watch', function() {
  gulp.watch('starability-scss/**/*.scss', ['output-css']);
});

gulp.task('default',  gulp.series('output-css'));
