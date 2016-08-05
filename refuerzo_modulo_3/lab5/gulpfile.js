var gulp = require('gulp'),
    uglify = require('gulp-uglify'),
    htmlmin = require('gulp-htmlmin');


gulp.task('uglify', function(){
	gulp.src('js/*.js')
		.pipe(uglify())
		.pipe(gulp.dest('build/'))
});

gulp.task('htmlmin', function(){
	gulp.src('views/*.html')
		.pipe(htmlmin({collapseWhitespace:true}))
		.pipe(gulp.dest('build/'))
});

gulp.task('default', ['uglify','htmlmin'], function(){
  
});