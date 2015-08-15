import gulp     from 'gulp';
import eslint   from 'gulp-eslint';
import notify   from 'gulp-notify';
import config   from '../config';

gulp.task('lint', () => {
  return gulp
    .src(config.src.js.all)
    .pipe(eslint())
    .pipe(eslint.format())
    .pipe(eslint.failAfterError())
    .on('error', notify.onError((err) => {
      return err.name + ' : ' + err.message;
    }))
    ;
});
