module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    // Uglify
    uglify: {
      build: {
        src: 'js/*.js',
        dest: 'js/*.min.js'
      }
    },

    // POSTCSS
    postcss: {
      options: {
        map: true, // inline sourcemaps

        processors: [
          require('autoprefixer')({browsers: 'last 2 versions'}), // add vendor prefixes
          require('cssnano')() // minify the result
        ]
      },
      dist: {
        src: 'css/*.css'
      }
    },

    // SASS
    sass: {
      dist: {
        options: {
          style: 'compressed'
        },
        files: {
          'css/main.css': '_sass/minima.scss',
        }
      }
    },

    // CSSMin 
    cssmin: {
      target: {
        options: {
          keepSpecialComments: 0,
          check: 'gzip',
        },
        files: [{
          expand: true,
          cwd: 'css',
          src: ['*.css', '!*.min.css'],
          dest: 'css',
          ext: '.min.css'
        }]
      }
    },

    // Grunt WATCH
    watch: {
      sass: {
        files: ['_sass/minima.scss'],
        tasks: ['sass'],
        options: {
          livereload: true,
        },
      },

      postcss: {
          files: ['css/*.css'],
          tasks: ['postcss']
      },
    },
  });

  // Load the plugin that provides the "uglify" task.
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-shell');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-postcss');
  grunt.loadNpmTasks('grunt-contrib-watch');

  // Default task(s).
  grunt.registerTask('default', ['sass', 'postcss']);

};