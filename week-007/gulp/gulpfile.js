const {src, dest} = require('gulp');
var criticalCss = require('gulp-penthouse');

  function  myCSS () {
    return  src('./src/css/style.css')
        .pipe(criticalCss({
            out: 'critical.css',
            url: 'http://localhost',
            width: 1300,
            height: 900,
            strict: true,
            userAgent: 'Mozilla/5.0 (compatible; Googlebot/2.1; +http://www.google.com/bot.html)'
        }))
        .pipe( dest('./dist/css/'));
}

const test = myCSS
exports.default = test
