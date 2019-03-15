const {series, src, dest, watch, parallel} = require('gulp');
const cleanCSS = require('gulp-clean-css');
const cleanHTML = require('gulp-htmlmin');
const devServer = require("browser-sync").create();
const autoprefixer = require('gulp-autoprefixer');
 


 

function reloadDevServer (done){
    devServer.reload();
    done();
}
function startDevServer(done){
    devServer.init({
        server:{
            baseDir:'./build/'
        },
        port:4545
    });
    done();
}


function bundleHTML(){
    return src('./src/*.html')
    .pipe(cleanHTML({ collapseWhitespace: true }))
    .pipe(dest('./build/'))
    .pipe(devServer.stream())
}
function bundleCSS (){
   return  src('./src/css/style.css')
   .pipe(autoprefixer({
    browsers: ['last 2 versions'],
    cascade: false
}))
   .pipe(cleanCSS({compatibility: 'ie8'}))
   .pipe(dest('./build/css/'))
   .pipe(devServer.stream())


}

function watchFiles(){
    watch("./src/css/**/*", bundleCSS);
    watch("./src/*.html", bundleHTML);
}
 
const bundle = series( bundleCSS, bundleHTML)
const watcher =  parallel(watchFiles, startDevServer);
exports.watcher = watcher
exports.default = series(bundleCSS, bundleHTML, watcher)


