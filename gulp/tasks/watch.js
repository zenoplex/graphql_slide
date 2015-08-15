import gulp        from 'gulp';
import browserSync from 'browser-sync';
import config      from '../config';
import runSequence from 'run-sequence';
import path from 'path';

import webpack from 'webpack';
import WebpackDevServer from 'webpack-dev-server';
import webpackConfig from '../../webpack.config';

let webpackServerStart = () => {
  new WebpackDevServer(webpack(webpackConfig), {
    contentBase:        path.resolve(__dirname, '../../dist/'),
    publicPath:         '/js/',
    hot:                true,
    historyApiFallback: true,
    noInfo:             false,
    stats:              {colors: true}
  })
    .listen(8080, '0.0.0.0', (err) => {
      if (err) { console.error(err); }
      console.log('webpack-dev-server listening at localhost:8080');
    });
};

gulp.task('pre-watch', (callback) => {
  runSequence(
    'lint',
    ['jade', 'sass', 'copy', 'images', 'fonts', 'webpack'],
    callback
  );
});

gulp.task('watch', ['pre-watch'], () => {
  browserSync({
    proxy: '0.0.0.0:8080',
    port:  3000
  });

  webpackServerStart();

  gulp.watch(config.watch.html, ['jade']);
  gulp.watch(config.watch.data, ['jade']);
  gulp.watch(config.watch.css, ['sass']);
  gulp.watch(config.watch.images, ['images']);
  gulp.watch(config.watch.fonts, ['fonts']);
});

gulp.task('default', ['watch']);
