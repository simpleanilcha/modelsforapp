var gulp = require ('gulp');
var sass = require ('gulp-sass');
var uglify = require ('gulp-uglify');
var browserSync = require ('browser-sync').create();
var rename = require ('gulp-rename');
var minifyCss = require ('gulp-minify-css');



// gulp task for sass
gulp.task('sass', function(){
	gulp.src('components/scss/**/*.scss')
	.pipe(sass({
		sourceComments: 'map',
  		sourceMap: 'sass',
  		outputStyle: 'nested'
	})
	.on('error', sass.logError))
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

// Uglify bootstrap js with .min.js rename
gulp.task('uglifyJs', function(){
	return gulp.src(['components/libs/bootstrap/dist/js/bootstrap.js', 'components/libs/jquery/dist/jquery.js', 'components/libs/wow/dist/wow.js', 'components/libs/smooth-scroll/dist/js/smooth-scroll.js'])
	.pipe(rename({
		suffix: ".min",
		extname: ".js"
	}))
	.pipe(uglify())
	.pipe(gulp.dest('builds/development/js'))
});

// Minify css
gulp.task('minifyCss', function(){
	return gulp.src(['components/libs/bootstrap/dist/css/bootstrap.css', 'components/libs/wow/css/libs/animate.css'])
	.pipe(rename({
		suffix: ".min",
		extname: ".css"
	}))
	.pipe(minifyCss({compatibility: 'ie8'}))
	.pipe(gulp.dest('builds/development/css'));

});

// Run 'uglifyJs' and 'minifyCss' task at once
gulp.task('build', ['uglifyJs', 'minifyCss']);

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