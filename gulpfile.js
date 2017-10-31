var gulp = require('gulp');
var concat = require('gulp-concat'),
    uglify = require('gulp-uglify'),
    rename = require('gulp-rename'),
    sourcemaps = require('gulp-sourcemaps'),
    sass = require('gulp-sass'),
    webserver = require('gulp-webserver'),
    livereload = require('gulp-livereload');


var src = 'app/src';
var dist = 'app/dist';
var paths = {
    js : src + '/js/**/*.js',
    scss : src + '/css/scss/**/*.scss',
    html : src + '/**/*.html'
};


//////// sass 옵션 설정 ////////
var sassOptions = {
    //outputStyle: "compressed",
    outputStyle: "compact",
    indentType : "tab"
};
//////////////////////////////



////////// 웹서버 실행 //////////
gulp.task('webserver', function () {
    return gulp.src('app/dist') 
        .pipe(webserver({
            host: '0.0.0.0',
            port: 8000,
            livereload: true
        }));
});
//////////////////////////////



////////// js 압축 //////////
gulp.task('combine:js', function(){ 
    return gulp.src(paths.js)                                   
       .pipe(concat('test.js')) //하나로 합치기
       .pipe(gulp.dest(dist + '/js')) //합친 파일 보내기
       .pipe(uglify()) //압축하기
       .pipe(rename('test.min.js')) //압축한 파일 min으로 생성
       .pipe(gulp.dest(dist + '/js')) //압축한 파일 보내기
       .pipe(livereload());
});
//////////////////////////////



///////// css 컴파일 /////////
gulp.task('compile:scss', function(){
    return gulp.src(paths.scss)
       .pipe(sass(sassOptions).on('error',sass.logError)) //scss 문법 오류 발생 시 watch가 중단되지 않도록 함
       .pipe(sourcemaps.init()) // 소스맵 초기화(소스맵 생성)
       .pipe(sourcemaps.write('/', {addComment: false})) //생성한 소스맵을 현재 폴더에 생성하고 주석 없앰
       .pipe(gulp.dest(dist+'/css'))
       .pipe(livereload());
});
//////////////////////////////



////////// html 복사 //////////
gulp.task('move:html',function(){
    return gulp.src(paths.html)
       .pipe(gulp.dest(dist))
       .pipe(livereload());
});
//////////////////////////////



///////// watch 업무 /////////
gulp.task('watch', function(){
    livereload.listen();
    gulp.watch(paths.html, ['move:html']);
    gulp.watch(paths.js, ['combine:js']);
    gulp.watch(paths.scss, ['compile:scss']);
	gulp.watch(dist + '/**').on('change', livereload.changed);
});
//////////////////////////////



///////// default 정의 /////////
gulp.task('default', ['webserver', 'move:html', 'combine:js', 'compile:scss', 'watch']);
//////////////////////////////