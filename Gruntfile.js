'use strict';

module.exports = function(grunt) {
  grunt.initConfig({
    pkg: {
      name: 'grunt-jekyll-pages'
    },

    pages: {
      options: {
        src: 'test/app'
      },
      actual: {
        options: {
          dest: 'test/actual'
        }
      },
      expected: {
        options: {
          dest: 'test/expected'
        }
      }
    },

    mochaTest: {
      options: {
        reporter: 'list'
      },
      src: 'test/test.js'
    },
    jshint: {
      options: {
        jshintrc: '.jshintrc'
      },
      files: {
        src: ['Gruntfile.js', 'tasks/*.js', 'test/*.js']
      }
    }
  });

  grunt.loadTasks('tasks');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-mocha-test');

  grunt.registerTask('test-plugin', ['jshint', 'pages:expected', 'mochaTest']);
  grunt.registerTask('default', 'test-plugin');
};