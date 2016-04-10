module.exports = function (grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        less: {
            production: {
                options: {
                    paths: ["style"]
                },
                files: [
                    {
                        expand: true,
                        cwd: 'style/',
                        src: ['*.less'],
                        dest: 'style/',
                        ext: '.css'
                    }
                ]
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-less');

    grunt.registerTask('build', [
        'less:production'
    ]);
};