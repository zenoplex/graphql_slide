import gulp   from 'gulp';
import del    from 'del';
import config from '../config';

let options = {
  options: {
    force: true
  }
};

gulp.task('clean', () => {
  del.sync(config.dist.html, options);
});
