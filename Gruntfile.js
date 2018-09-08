module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    uglify: {
      build: {
        src: 'js/global.js',
        dest: 'js/global.min.js'
      }
    },

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

      // shell: {
      //     jekyllBuild: {
      //         command: 'jekyll build'
      //     },
      //     jekyllServe: {
      //         command: 'jekyll serve'
      //     }
      // },

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

      watch: {
        sass: {
          files: ['_sass/minima.scss'],
          tasks: ['sass', 'cssmin'],
          options: {
            livereload: true,
          },
        },

        cssmin: {
          files: ['css/*.css'],
          tasks: ['cssmin']
        },

        // sites: {
        //     files: [
        //       "index.html",
        //       "_layouts/*.html",
        //       "_includes/*.html",
        //       "_config.yml",
        //       "_posts/*.md"
        //     ],
        //     tasks: ['shell:jekyllBuild', 'shell:jekyllServe'],
        //     options: {
        //       interrupt: true,
        //       atBegin: true,
        //       livereload: true
        //     },
        // },
      },

  });

  // Load the plugin that provides the "uglify" task.
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-shell');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-watch');

  // Default task(s).
  grunt.registerTask('default', ['watch']);

};