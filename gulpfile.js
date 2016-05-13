var gulp = require ('gulp');
var sass = require ('gulp-sass');
var uglify = require ('gulp-uglify');
var browserSync = require ('browser-sync').create();


// gulp task for sass
gulp.task('sass', function(){
	gulp.src('components/scss/**/*.scss')
	.pipe(sass().on('error', sass.logError))
	.pipe(gulp.dest('builds/development/css'))

	// browserSync will watch changes and reload on save
	.pipe(browserSync.stream());

});

// gulp task for uglify
gulp.task('compress', function(){
	return gulp.src ('components/scripts/*.js')
	.pipe(uglify())
	.pipe(gulp.dest('builds/development/js'));
});


// Watching files
gulp.task('watch', function(){

	// Define server for browserSync
	browserSync.init({
		server: {
			baseDir: "builds/development/"
		}
	});

	gulp.watch('components/scss/**/*.scss', ['sass']);
	gulp.watch('components/scripts/*.js', ['compress']);

	// Watch html changes and reload browser on save
	gulp.watch('builds/**/*.html').on('change', browserSync.reload);
});

// Run these tasks as default
gulp.task('default', ['watch']);