var gulp = require('gulp');
var merge = require('merge2');
var concat = require('gulp-concat');
var csso = require('gulp-csso');
var uncss = require('gulp-uncss');

var css = gulp.src('build/assets/css/main.css');
gulp.task('default', function() {
    return css
        .pipe(concat('main.css'))
        .pipe(uncss({
            html: [
            'build/*.html'
            ],
            ignore: [
                ".fade",
                ".fade.in",
                ".collapse",
                ".collapse.in",
                ".navbar-collapse.in",
                ".collapsing",
                ".alert-danger",
                /\.open/,
                /clndr/,
                /popover/
           ],
            timeout: 1000
        }))
        .pipe(csso())
        .pipe(gulp.dest('./out'));
});

