
"use strict";

module.exports = function (grunt) {

  grunt.initConfig({

    svg2png: {
      fallback: {
        options: {
          subdir: "png"
        },
        files: [{
          expand: true,
          cwd: "test/svg",
          src: ["**/*.svg"]
        }]
      },
      retina: {
        options: {
          widths : [128],
          baseWidth : [64],
          subdir: "png_2x",
          limit: 5
        },
        files: [{
          expand: true,
          cwd: "test/svg",
          src: ["**/*.svg"]
        }]
      }
    },

    simplemocha: {
      test: {
        src: "test/*.js"
      }
    },

    clean: {
      test: ["test/svg/png", "test/svg/png_2x"]
    }

  });

  grunt.loadTasks("tasks");
  grunt.loadNpmTasks("grunt-contrib-clean");
  grunt.loadNpmTasks("grunt-simple-mocha");

  grunt.registerTask("default", ["clean", "svg2png", "simplemocha", "clean"]);

};
