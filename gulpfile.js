// Create gulp variables
var gulp	= require('gulp');
var bower	= require('main-bower-files');

// Default Task
gulp.task('default', function() {

	return gulp.src(bower())

		.pipe(gulp.dest('js'))

});
