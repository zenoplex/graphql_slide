import gulp        from 'gulp';
import runSequence from 'run-sequence';
import config      from '../config';
import browserSync from 'browser-sync';

gulp.task('pre-build', (callback) => {
  runSequence(
    'clean',
    'lint',
    ['jade', 'sass', 'copy', 'images:build', 'fonts', 'webpack:build'],
    callback
  );
});

gulp.task('build', ['pre-build']);

gulp.task('build:server', ['pre-build'], () => {
  browserSync({
    server: config.dist.html
  });
});
