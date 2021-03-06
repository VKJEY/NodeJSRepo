var path = require('path');

module.exports = function (config) {
    config.set({
        frameworks: [
            'jasmine',
            "openui5",
            "requirejs",
            "browserify",
            "mocha"
        ],
        openui5: {
            path: "https://sapui5.hana.ondemand.com/resources/sap-ui-core.js",
            useMockServer: false
        },

        client: {
            openui5: {
                config: {
                    theme: 'sap_bluecrystal',
                    libs: 'sap.m,sap.bpm',
                    resourceRoots: {
                        "sap.bpm": "base/target/sap/bpm"
                    }
                }
            },
            mocha: {
                // change Karma's debug.html to the mocha web reporter
                reporter: 'html',
        
                // require specific files after Mocha is initialized
                //require: [require.resolve('bdd-lazy-var/bdd_lazy_var_global')],
        
                // custom ui, defined in required file above
                //ui: 'bdd-lazy-var/global',
              }
        },

        "browserify": {
            "debug": true,
            "transform": ["browserify-istanbul"]
        },
        reporters: ["progress", 'dots', "growl", "mocha", 'coverage', 'kjhtml'],
        coverageReporter: {
            includeAllSources: true,
            dir: 'coverage/',
            reporters: [{
                    type: "html",
                    subdir: "html"
                },
                {
                    type: 'text-summary'
                }
            ],
            instrumenterOptions: {
                istanbul: {
                    noCompact: true
                }
            }
        },
        files: [
            //'load_req_lib.js',
            "test-main.js",
            "target/sap/bpm/*.js",
            'src/*.js',
            'test/*.js',
            /*{pattern:"target/sap/bpm/*.js",included: false},
            {pattern:'src/*.js',included: false},
            {pattern:'test/*.js', included: false}*/
        ],

        preprocessors: {
            'test/*.js': ['browserify'],
            'src/*.js': ['browserify']
        },

        browsers: ['Chrome'],

        autoWatch: true,

        plugins: [
            'karma-jasmine',
            'karma-firefox-launcher',
            'karma-chrome-launcher',
            'karma-coverage',
            'karma-openui5',
            'karma-requirejs',
            'browserify-istanbul',
            "karma-browserify",
            "karma-mocha",
            "karma-jasmine-html-reporter",
            "karma-mocha-reporter",
            "karma-growl-reporter"
        ]
    });
};