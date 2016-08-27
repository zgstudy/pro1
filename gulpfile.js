'use strict';

/* 工具模块 */
var gulp = require('gulp'),
    sass = require('gulp-sass'),
    sourcemaps = require('gulp-sourcemaps');

var src = {
    scss: 'src/sass/**/*.scss'
}

var dest = {
    scss: 'src/css/'
}

gulp.task('sass', function() {
    return gulp.src(src.scss)
        .pipe(sourcemaps.init())
        .pipe(sass({ outputStyle: 'expanded' }).on('error', sass.logError))
        .pipe(sourcemaps.write())
        .pipe(gulp.dest(dest.scss));
});

gulp.task('sass-compressed', function() {
    return gulp.src(src.scss)
        .pipe(sourcemaps.init())
        .pipe(sass({ outputStyle: 'compressed' }).on('error', sass.logError))
        .pipe(sourcemaps.write())
        .pipe(gulp.dest(dest.scss));
});

gulp.task('sass:watch', function() {
    gulp.watch(src.scss, ['sass']);
    // gulp.watch(src.scss, ['sass-compressed']);
});

// var watcher = gulp.watch('js/**/*.js', ['uglify','reload']);
// watcher.on('change', function(event) {
//   console.log('File ' + event.path + ' was ' + event.type + ', running tasks...');
// });
