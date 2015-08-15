import gulp     from 'gulp';
import imagemin from 'gulp-imagemin';
import pngquant from 'imagemin-pngquant';
import mozjpeg  from 'imagemin-mozjpeg';

import config   from '../config';

/**
 * images task core
 *
 * @param   {boolean} optimize
 * @returns {*}       gulp
 */
let task = (optimize) => {
  let src = gulp.src(config.src.images);

  if (optimize) {
    src
      .pipe(imagemin({
        progressive: true,
        svgoPlugins: [
          {removeViewBox: false}
        ],
        use: [pngquant(), mozjpeg()]
      }))
      .pipe(gulp.dest(config.dist.images));
  } else {
    src
      .pipe(gulp.dest(config.dist.images));
  }

  return src;
};

gulp.task('images', () => {
  task(false);
});

gulp.task('images:build', () => {
  task(true);
});
