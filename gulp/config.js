module.exports = {
  watch: {
    html:   './src/jade/**/*.jade',
    css:    './src/sass/**/*',
    js:     './src/js/**/*',
    fonts:  './src/fonts/**/*',
    images: './src/images/**/*',
    data:   './data/**/*.yaml'
  },
  src:   {
    root:       './src',
    html:       './src/jade/pages/**/*.jade',
    css:        './src/sass/**/*.scss',
    js:     {
      main:     './src/js/app.js',
      all:      './src/js/**/*.js'
    },
    fonts:      './src/fonts/**/*',
    images:     './src/images/**/*',
    data:       './data/**/*.yaml',
    styleguide: './src/sass/styleguide.md'
  },
  dist:  {
    html:       './dist',
    css:        './dist/css',
    js:         './dist/js',
    jsFileName: 'bundle.js',
    fonts:      './dist/fonts',
    images:     './dist/images',
    styleguide: './styleguide'
  }
};
