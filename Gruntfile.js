module.exports = function(grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        less:{
            development: {
                files:{
                    'main.css': 'main.less'
                }
            }
        }
    })

    grunt.loadNpmTasks('grunt-contrib-less');
}