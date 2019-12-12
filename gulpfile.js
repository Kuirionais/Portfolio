let gulp = require('gulp');
let sass = require('gulp-sass');
let minifyCSS = require('gulp-clean-css');
// let uglify = require('gulp-uglify');
let rename = require('gulp-rename');
let changed = require('gulp-changed');
let browserSync = require('browser-sync').create();


let SCSS_SRC = './src/Assets/scss/**/*.scss';
let SCSS_DEST = './src/Assets/css';


function style(){
    return gulp.src(SCSS_SRC)
    .pipe(sass().on('error', sass.logError))
    .pipe(minifyCSS())
    .pipe(rename({ suffix: '.min'}))
    .pipe(changed(SCSS_DEST))
    .pipe(gulp.dest(SCSS_DEST))
    .pipe(browserSync.stream());
};

exports.style = style;


function watch(){
    browserSync.init({
        server: {
            baseDir: './'
        },
       startPath: "/public"
    });
    gulp.watch(SCSS_SRC, style);
    gulp.watch('./public/*.html').on('change', browserSync.reload);
};

gulp.task('default',  gulp.series(watch))

exports.watch = watch;
