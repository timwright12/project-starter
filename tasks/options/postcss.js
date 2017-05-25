module.exports = {
  options: {

    map: {
      inline: false,
      annotation: 'assets/css/'
    },

    processors: [
      require("postcss-cssnext")(),
      require('cssnano')({ autoprefixer: false }),
      require("postcss-custom-media")()
    ]
  },
  dist: {
    src: 'assets/css/*.css'
  }
}