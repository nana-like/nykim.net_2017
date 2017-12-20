
// 모듈 호출
var gulp = require('gulp');
var concat = require('gulp-concat'),
    uglify = require('gulp-uglifyes'),
    rename = require('gulp-rename'),
    minifyhtml = require('gulp-minify-html'),
    imagemin = require('gulp-imagemin'),
    sourcemaps = require('gulp-sourcemaps'),
    sass = require('gulp-sass'),
    webserver = require('gulp-webserver'),
    browserSync = require('browser-sync').create();
   // livereload = require('gulp-livereload');


// 경로 변수
var src = 'app/src';
var dist = 'app/dist';
var jsSource = 'app/src/js_src';
var paths = {
    js: src+'/js_src/**/*.js',
    scss: src+'/css/scss/**/*.scss',
    html: src+'/**/*.html',
    image: src+'/images/**/*'
}


// SASS 옵션
var sassOptions = {
    outputStyle: "compressed",
    indentType : "tab"
};





// 웹서버 실행
/*
gulp.task('webserver', function () {
    return gulp.src('app/src') 
        .pipe(webserver({
            host: '0.0.0.0',
            port: 8000,
            livereload: true
        }));
});
*/





// HTML 압축
gulp.task('minify-html',function(){
     return gulp.src(paths.html)
                .pipe(minifyhtml())
                .pipe(gulp.dest(dist))
                .pipe(browserSync.stream());
               // .pipe(livereload());
});






// SASS 컴파일
gulp.task('compile-scss',function(){
     return gulp.src(paths.scss)
                .pipe(sourcemaps.init({loadMaps: true}))
                .pipe(sass(sassOptions))
                .pipe(sourcemaps.write('./'))
                .pipe(gulp.dest(src+'/css'))
                .pipe(gulp.dest(dist+'/css'))
                .pipe(browserSync.stream());
              //  .pipe(livereload());
});






// JS 합치기
gulp.task('combine-vendor.js',function(){
     return gulp.src([ 
                    jsSource+'/vendor/jquery-3.2.1.js', 
                    jsSource+'/vendor/TweenMax.min.js', 
                    jsSource+'/vendor/salvattore.min.js',
                    jsSource+'/vendor/lazyload.min.js',
                    jsSource+'/vendor/swiper.min.js'
                ])
                .pipe(concat('vendor.js'))
                .pipe(gulp.dest(dist+'/js'))
                .pipe(gulp.dest(src+'/js'));
    
});


gulp.task('combine-all.js',function(){
     return gulp.src([ 
                    jsSource+'/all/common.js',
                    jsSource+'/all/header.js',
                    jsSource+'/all/footer.js',
                    jsSource+'/all/scroll.js'
                ])
                .pipe(concat('all.js'))
                .pipe(gulp.dest(dist+'/js'))
                .pipe(gulp.dest(src+'/js'))
                .pipe(rename({suffix:'.min'}))
                .pipe(uglify())
                .pipe(gulp.dest(src+'/js'))
                .pipe(gulp.dest(dist+'/js'))
                .pipe(browserSync.stream());
    
    
});


gulp.task('combine-home.js',function(){
     return gulp.src([ 
                    jsSource+'/all/visual.js',
                    jsSource+'/work-item.js'
                ])
                .pipe(concat('home.js'))
                .pipe(gulp.dest(dist+'/js'))
                .pipe(gulp.dest(src+'/js'))
                .pipe(rename({suffix:'.min'}))
                .pipe(uglify())
                .pipe(gulp.dest(src+'/js'))
                .pipe(gulp.dest(dist+'/js'))
                .pipe(browserSync.stream());
    
    
});



gulp.task('copy-font',function(){
    return gulp.src(src+'/font/**/*')
                .pipe(gulp.dest(dist+'/font'));
});

// 이미지 압축
/*
gulp.task('minify-image',function(){
    return gulp.src(paths.image)
               .pipe(imagemin())
                .pipe(gulp.dest(dist+'/images'))
                .pipe(livereload());
});
*/




gulp.task('browserSync', function () { 
    return browserSync.init({

        server: {
            baseDir: "app/dist"
        }
    }); 
});


// watch 업무
gulp.task('watch',function(){
    //livereload.listen();
    gulp.watch(paths.html, {interval:1000},  ['minify-html']);
    gulp.watch(paths.scss,  ['compile-scss']);
    gulp.watch(paths.js, {interval:1000},  ['combine-home.js']);
    gulp.watch(paths.js, {interval:1000},  ['combine-all.js']);
    gulp.watch(paths.image, {interval:1000},  ['minify-image']);
    //gulp.watch('app/src/**/*').on('change', browserSync.reload);
});






// default 정의
gulp.task('default', [ 'minify-html', 'compile-scss', 'combine-all.js', 'combine-vendor.js', 'combine-home.js', 'copy-font', /*'minify-image',*/ 'browserSync',  'watch' ]);


