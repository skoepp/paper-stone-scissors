/**
 *
 * File    :
 * Project : puzzle
 *
 * Created by Stephan Koepp on 11/22/13.
 * Copyright 2013 Stephan Koepp. All rights reserved.
 *
 */

module.exports = function(grunt) {

    'use strict';

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        clean: {
            dist: ['src/main/webapp/dist/**/*']
        },

        jshint: {
            options: {
                jshintrc: '.jshintrc'
            },
            gruntfile: {
                src: 'Gruntfile.js'
            },
            src: {
                src: ['src/resources/js/*.js']
            },
            test: {
                src: ['src/test/jasmine/specs/**/*.js']
            }
        },

        concat: {
            options: {},
            puzzle: {
                src: [
                    'src/resources/vendor/jquery/jquery.min.js',
                    'src/resources/js/card.js'
                ],
                dest: 'src/resources/js/<%= pkg.name %>.js'
            }
        },

        uglify: {
            options: {
                report: 'min'
            },
            puzzle: {
                src: ['<%= concat.puzzle.dest %>'],
                dest: 'src/main/webapp/dist/js/<%= pkg.name %>.min.js'
            }
        },

        recess: {
            options: {
                compile: true
            },
            puzzle: {
                options: {
                    compress: true
                },
                src: ['src/resources/less/puzzle.less'],
                dest: 'src/main/webapp/dist/css/<%= pkg.name %>.min.css'
            }
        },

        karma: {
            options: {
                configFile: 'karma.conf.js'
            },

            test: {
                browsers: ['PhantomJS']
            },

            watch: {
                singleRun: false,
                browsers: ['PhantomJS']
            }
        },

        watch: {
            src: {
                files: '<%= jshint.src.src %>',
                tasks: ['jshint:src', 'karma:test']
            },
            test: {
                files: '<%= jshint.test.src %>',
                tasks: ['jshint:test', 'karma:test']
            },
            recess: {
                files: 'src/resources/less/**/*.less',
                tasks: ['recess']
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-karma');
    grunt.loadNpmTasks('grunt-recess');

    // JS distribution task.
    grunt.registerTask('dist-js', ['concat', 'uglify']);

    // CSS distribution task.
    grunt.registerTask('dist-css', ['recess']);

    // Full distribution task.
    grunt.registerTask('dist', ['clean', 'dist-css', 'dist-js']);

    grunt.registerTask('karma-t', ['karma:test']);
    grunt.registerTask('karma-w', ['karma:watch']);

};
