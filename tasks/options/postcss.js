module.exports = {
  options: {

    map: {
      inline: false,
      annotation: 'assets/css/'
    },

    processors: [
      require('autoprefixer')({
          browsers: 'last 2 versions'
       }),
      require('cssnano')()
    ]
  },
  dist: {
    src: 'assets/css/*.css'
  }
}