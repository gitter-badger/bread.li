// Create gulp variables
var gulp	= require('gulp');
var rename	= require('gulp-rename');
var bower	= require('main-bower-files');

// JavaScript task
gulp.task('default', function() {

	return gulp.src(bower())

		.pipe(gulp.dest('js'))

});
