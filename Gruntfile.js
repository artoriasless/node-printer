module.exports = function gruntTask(grunt) {
  grunt.initConfig({
    gyp: {
      ia32: {
        command: 'rebuild',
        options: {
          arch: 'ia32',
        },
      },
      x64: {
        command: 'rebuild',
        options: {
          arch: 'x64',
        },
      },
    },
    'nw-gyp': {
      ia32: {
        command: 'rebuild',
        options: {
          arch: 'ia32',
        },
      },
      x64: {
        command: 'rebuild',
        options: {
          arch: 'x64',
        },
      },
    },
    copy: {
      ia32: {
        files: [
          {
            src: 'build/Release/node_printer.node',
            dest: 'lib/binding/napi-' + process.platform + '-ia32/node_printer.node',
          },
        ],
      },
      x64: {
        files: [
          {
            src: 'build/Release/node_printer.node',
            dest: 'lib/binding/napi-' + process.platform + '-x64./node_printernode',
          },
        ],
      },
    },
  });

  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-node-gyp');
  grunt.loadNpmTasks('grunt-nw-gyp');
  grunt.loadNpmTasks('grunt-contrib-copy');

  grunt.registerTask('build-nw-ia32', ['nw-gyp:ia32', 'copy:ia32']);

  grunt.registerTask('build-ia32', ['gyp:ia32', 'copy:ia32']);

  grunt.registerTask('build-x64', ['gyp:x64', 'copy:x64']);

  grunt.registerTask('build-nw-x64', ['nw-gyp:x64', 'copy:x64']);

  grunt.registerTask('build', ['build-ia32', 'build-x64']);

  grunt.registerTask('build-nw', ['build-nw-ia32', 'build-nw-x64']);
};
