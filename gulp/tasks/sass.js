import gulp      from 'gulp';
import sass      from 'gulp-sass';
import please    from 'gulp-pleeease';
import plumber   from 'gulp-plumber';
import notify    from 'gulp-notify';
import sourcemap from 'gulp-sourcemaps';
import bs        from 'browser-sync';
import neat      from 'node-neat';
import config    from '../config';

gulp.task('sass', () => {
  gulp
    .src(config.src.css)
    .pipe(plumber({
      errorHandler: notify.onError('<%= error.message %>')
    }))
    .pipe(sourcemap.init())
    .pipe(sass({
      includePaths: neat.with(
        './node_modules/sanitize.css',
        './node_modules/reveal.js/css'
      )
    }))
    .pipe(please({
      minifier: false
    }))
    .pipe(sourcemap.write())
    .pipe(gulp.dest(config.dist.css))
    .pipe(bs.stream())
  ;
});
