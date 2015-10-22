import gulp   from 'gulp';
import config from '../config';

gulp.task('copy', () => {
  gulp
    .src(['./node_modules/reveal.js/plugin/**/*'])
    .pipe(gulp.dest(config.dist.html + '/plugin'))
  ;
});
