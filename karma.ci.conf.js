const webpackConfig = require('./webpack.test.config.js');

module.exports = function(config) {
  const customLaunchers = {
    // ChromeBeta: {
    //   base: 'SauceLabs',
    //   platform: 'Windows 10',
    //   browserName: 'chrome',
    //   version: 'beta'
    // },
    // Chrome: {
    //   base: 'SauceLabs',
    //   platform: 'Windows 10',
    //   browserName: 'chrome',
    //   version: 'latest'
    // },
    // Firefox: {
    //   base: 'SauceLabs',
    //   platform: 'Windows 10',
    //   browserName: 'firefox',
    //   version: 'latest'
    // },
    // Edge: {
    //   base: 'SauceLabs',
    //   platform: 'Windows 10',
    //   browserName: 'microsoftedge',
    //   version: 'latest'
    // },
    // InternetExplorer11: {
    //   base: 'SauceLabs',
    //   platform: 'Windows 10',
    //   browserName: 'internet explorer',
    //   version: '11'
    // },
    // Safari10: {
    //   base: 'SauceLabs',
    //   platform: 'macOS 10.15',
    //   browserName: 'safari',
    //   version: '10'
    // },
    Safari9: {
      base: 'SauceLabs',
      platform: 'OS X 10.11',
      browserName: 'safari',
      version: '9'
    },
    Safari8: {
      base: 'SauceLabs',
      platform: 'OS X 10.10',
      browserName: 'safari',
      version: '8'
    }
  };

  const karmaConfig = {
    basePath: '',

    frameworks: [
      'mocha',
      'sinon',
      'webpack'
    ],

    files: [
      'tests/index.js'
    ],

    preprocessors: {
      'tests/index.js': ['webpack', 'sourcemap']
    },

    webpack: webpackConfig,

    webpackMiddleware: {
      noInfo: true,
      stats: 'errors-only'
    },

    reporters: ['mocha', 'saucelabs'],

    mochaReporter: {
      showDiff: true
    },

    port: 9876,

    colors: true,

    logLevel: config.LOG_INFO,

    sauceLabs: {
      testName: 'salte-io/salte-filter',
      tunnelIdentifier: process.env.TRAVIS_JOB_NUMBER,
      startConnect: false
    },

    customLaunchers: customLaunchers,
    browsers: Object.keys(customLaunchers),
    captureTimeout: 0,
    browserNoActivityTimeout: 120000,

    singleRun: true
  };

  config.set(karmaConfig);
};
