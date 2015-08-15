import gulp from 'gulp';
import webpack from 'webpack';
import notify from 'gulp-notify';

let pack = (config, callback) => {
  webpack(config, (err, stats) => {

    if (err) {
      console.error(stats);
      notify(err);
    }

    callback();
  });
};

gulp.task('webpack', callback => {
  pack(require('../../webpack.config'), callback);
});

gulp.task('webpack:build', callback => {
  pack(require('../../webpack.config.production'), callback);
});
