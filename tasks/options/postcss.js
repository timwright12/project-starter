module.exports = {
  options: {
    map: true, // inline sourcemaps

    processors: [
      require('autoprefixer')({
        browsers: 'last 3 versions'
      })
    ]
  },
  dist: {
    src: 'assets/css/*.css'
  }
}