import gulp   from 'gulp';
import config from '../config';

gulp.task('copy', () => {
  gulp
    .src(config.src.root + '/*.{xml,json}')
    .pipe(gulp.dest(config.dist.html))
  ;
});
