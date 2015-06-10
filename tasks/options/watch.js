module.exports = {
  options: {
    livereload: true,
  },
  scripts: {
    files: ['assets/js/app.js'],
    tasks: ['jshint', 'concat', 'uglify'],
    options: {
      spawn: false,
    }
  },
  css: {
    files: ['assets/css/stylesheets/*/*', 'assets/css/stylesheets/*.scss'],
    tasks: ['sass', 'cssmin'],
    options: {
      spawn: false,
    }
  },
  images: {
    files: ['assets/images/**/*.{png,jpg,gif}', 'assets/images/*.{png,jpg,gif}'],
    tasks: ['imagemin'],
    options: {
      spawn: false,
    }
  },
  html:{
    files: ['./**/*.html'],
    tasks: [],
    options: {
      spawn: false
    }
  },
}