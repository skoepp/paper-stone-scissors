/**
 *
 * File    : karma.conf.js
 * Project : puzzle
 *
 * Created by Stephan Koepp on 11/22/13.
 * Copyright 2013 Stephan Koepp. All rights reserved.
 *
 */

module.exports = function (config) {

    'use strict';

    config.set({

        // base path, that will be used to resolve files and exclude
        basePath: 'src/',


        // frameworks to use
        frameworks: ['jasmine'],


        // list of files / patterns to load in the browser
        files: [
            'resources/js/extensions.js',
            'resources/js/figureType.js',
            'resources/js/figure.js',
            'resources/js/figureFactory.js',
            'resources/js/gameResultModel.js',
            'test/jasmine/specs/**/*.js'
        ],


        // list of files to exclude
        exclude: [],


        preprocessors: {
            'resources/js/*.js': 'coverage'
        },

        coverageReporter: {
            type: 'html',
            dir: '../coverage/'
        },

        // test results reporter to use
        // possible values: 'dots', 'progress', 'junit', 'growl', 'coverage'
        reporters: ['dots', 'coverage'],


        // web server port
        port: 9876,


        // enable / disable colors in the output (reporters and logs)
        colors: true,


        // level of logging
        // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
        logLevel: config.LOG_INFO,


        // enable / disable watching file and executing tests whenever any file changes
        autoWatch: true,


        // Start these browsers, currently available:
        // - Chrome
        // - ChromeCanary
        // - Firefox
        // - Opera
        // - Safari (only Mac)
        // - PhantomJS
        // - IE (only Windows)
        browsers: ['PhantomJS'],


        // If browser does not capture in given timeout [ms], kill it
        captureTimeout: 60000,


        // Continuous Integration mode
        // if true, it capture browsers, run tests and exit
        singleRun: true
    });
};
