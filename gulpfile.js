// Create gulp variables
var gulp	= require('gulp');
var rename	= require('gulp-rename');
var bower	= require('main-bower-files');
var filter	= require('gulp-filter');
var replace	= require('gulp-replace');

// JavaScript Task
gulp.task('js', function() {

	var jsfilter = filter('*.js');

	return gulp.src(bower())

		.pipe(jsfilter)

		.pipe(gulp.dest('js'))

});

// SCSS Task
gulp.task('scss', function() {

	var scssfilter = filter('*.scss');

	return gulp.src(bower())

		.pipe(scssfilter)

		.pipe(gulp.dest('_sass'))

});

// All Tasks
gulp.task('default', ['js', 'scss']);