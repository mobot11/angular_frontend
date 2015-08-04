var gulp = require('gulp');
var webpack = require('gulp-webpack');
var jshint = require('gulp-jshint');
var concat = require('gulp-concat');

gulp.task('lint', function () {
	return gulp.src(['./*.js', './models/*.js', './routes/*.js','./test/*.js'])
	           .pipe(jshint())
	           .pipe(jshint.reporter('jshint-stylish'));
});

gulp.task('webpack:dev', function() {
	return gulp.src('app/js/client.js')
	.pipe(webpack({
		output: {
			filename: 'bundle.js'
		}
	}))
	.pipe(gulp.dest('build/'));
//creates a build folder that we will statically serve to clients
})

gulp.task('copy', function() {
	return gulp.src('app/**/*.html')
	.pipe(gulp.dest('build/'));
	//index.html will load all of our client side assets
});

gulp.task('build', ['webpack:dev', 'copy']);
gulp.task('default', ['build']);