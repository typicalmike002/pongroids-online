module.exports = (karma) => {
    karma.set({
        basePath: __dirname,
        port: 9278,
        singleRun: false,
        autoWatch: true,
        logLevel: karma.LOG_INFO, // karma.LOG_DEBUG || karma.LOG_INFO
        frameworks: ['phantomjs-shim', 'jasmine'],
        browsers: ['PhantomJS'],
        reporters: ['progress', 'coverage'],
        webpack: require('./../public/webpack.config.js'),
        preprocessors: {
            './../public/js/modules/main.js': ['webpack'],
            './test-bundle.js': ['babel', 'webpack', 'coverage']
        },
        coverageReporter: {
            type: 'text'
        },
        babelPreprocessor: {
            options: {
                presets: ['es2015'],
                sourceMap: 'inline'
            }
        },
        files: [
            './../public/js/modules/main.js',
            './test-bundle.js'
        ]
    })
};