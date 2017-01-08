var gulp=require('gulp');
    browserify=require('browserify');
    babelify= require('babelify');
    source=require('vinyl-source-stream');
    connect=require('gulp-connect');

//定义livereload任务
gulp.task('connect', function () {
  connect.server({
     //地址，可不写，不写的话，默认localhost
    port : 3000, //端口号，可不写，默认8000
    root: './', //当前项目主目录
    livereload: true //自动刷新
  });
});

gulp.task('html',function(){
  gulp.src('./build/*.html')
  .pipe(connect.reload());
})

gulp.task('changeApp', function(){
  return browserify('./source/app.js')
  .transform(babelify,{presets:["react"]})
  .bundle()
  .pipe(source('snapterest.js'))
  .pipe(gulp.dest('./build/'))
  .pipe(connect.reload());
});

gulp.task('watch',function(){
  gulp.watch('./source/app.js',['changeApp']);
  gulp.watch('./build/*.html',['html']);
})

//定义默认任务
gulp.task('default', ['watch', 'connect']);
