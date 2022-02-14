'use strict'
const gulp = require('gulp'),
    sass = require('gulp-sass')(require('sass')),
    postcss = require('gulp-postcss'),
    concat = require('gulp-concat'),
    autoprefix = require('autoprefixer');


const main = {
    dir: `build/css/`,
    source: `src/scss/`,
};

/**
 * Generate CSS style
 */
const _css = (src, outputName, useSass = true) => {
    return gulp
        .src(src)
        .pipe(sass({
            outputStyle: 'expanded', // expanded compressed compact nested
        }).on('error', sass.logError))
        .pipe(concat(`${outputName}.css`))
        .pipe(gulp.dest(main.dir))
};

/**
 * Generate new style from 'source' dir
 */
const css = () => {
    return _css(main.source + 'cookieConsent.scss', "cookieConsent");
};


exports.default = css;
