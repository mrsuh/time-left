module.exports = function (grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        less: {
            production: {
                options: {
                    paths: ["style"]
                },
                files: {
                    'style/common.css': 'style/common.less'
                }
            }
        },
        uglify: {
            target: {
                files: {
                    'js/common.min.js': ['js/common.js']
                }
            }
        },
        cssmin: {
            target: {
                files: {
                    'style/common.min.css': ['style/common.css']
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-uglify');

    grunt.registerTask('build', [
        'less:production',
        'cssmin',
        'uglify'
    ]);
};