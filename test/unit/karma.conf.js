var webpack = require('webpack')
var webpackConf = require("../../webpack.test.config.js")

module.exports = function(config) {
    config.set({
        basePath: '',
        frameworks: ['mocha', 'sinon-chai'],
        files: [
          'test/unit/**/*.spec.js'
        ],
        exclude: [
        ],
        preprocessors: {
          'test/unit/**/*.spec.js': ['webpack','sourcemap']
        },
        reporters: ['spec', 'coverage'],
        port: 9876,
        colors: true,
        logLevel: config.LOG_INFO,
        autoWatch: true,
        browsers: ['Chrome'],
        singleRun: false,
        concurrency: Infinity,
        webpack: webpackConf,
        client: {
            mocha: {
                timeout: 4000
            }
        }
    })
}