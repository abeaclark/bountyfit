var gulp = require('gulp');
var source = require('vinyl-source-stream');
var browserify = require('browserify');
var reactify = require('reactify');
var babelify = require('babelify');


gulp.task('js', function(){
    browserify('./components/router.jsx')
        .transform(babelify, {presets: ["es2015", "react"]})
        .bundle()
        .pipe(source('app.js'))
        .pipe(gulp.dest('public/javascripts/build/'));
});

gulp.task('watch', function() {
    gulp.watch("components/*.jsx", ["js"])
})

gulp.task('default', ['js', 'watch']);