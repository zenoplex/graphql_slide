import gulp        from 'gulp';
import jade        from 'gulp-jade';
import data        from 'vinyl-yaml-data';
import extend      from 'deep-extend-stream';
import plumber     from 'gulp-plumber';
import notify      from 'gulp-notify';
import {reload}    from 'browser-sync';
import config      from '../config';

let locals = {};

gulp.task('data', (callback) => {
  gulp
    .src(config.src.data)
    .pipe(data())
    .pipe(extend(locals).on('finish', () => {
      callback();
    }))
  ;
});

gulp.task('_jade', ['data'], () => {
  gulp
    .src(config.src.html)
    .pipe(plumber({
      errorHandler: notify.onError('<%= error.message %>')
    }))
    .pipe(jade({
      locals,
      pretty: true
    }))
    .pipe(gulp.dest(config.dist.html))
  ;
});

gulp.task('jade', ['_jade'], reload);
