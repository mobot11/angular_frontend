var gulp = require('gulp');
var jshint = require('gulp-jshint');
var concat = require('gulp-concat');

gulp.task('lint', function () {
	return gulp.src(['./*.js', './models/*.js', './routes/*.js','./test/*.js'])
	           .pipe(jshint())
	           .pipe(jshint.reporter('jshint-stylish'));
});