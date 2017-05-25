module.exports = {
  dist: {
    options: {
      // postcss - cssnano will minify later
      style: 'expanded'
    },
    files: {
      'assets/css/app.css': 'assets/css/stylesheets/manifest.scss'
    }
  }
}