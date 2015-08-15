import gulp   from 'gulp';
import config from '../config';

gulp.task('fonts', () => {
  gulp
    .src(config.src.fonts)
    .pipe(gulp.dest(config.dist.fonts));
});
