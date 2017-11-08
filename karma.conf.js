var path = require('path');
var isparta = require('isparta');

module.exports = function (config) {
	config.set({

		browsers: ['Chrome'],

		singleRun: true,

		autoWatchBatchDelay: 50,

		browserNoActivityTimeout: 30000,

		frameworks: ['mocha'],

		files: [
			'tests.webpack.js'
		],

		preprocessors: {
			'tests.webpack.js': ['webpack', 'sourcemap'],
			'index.js': ['coverage']
		},

		reporters: ['progress', 'coverage'],

		coverageReporter: {
			dir: 'dist/coverage/',
			reporters: [
				{type: 'html'},
				{type: 'text-summary'}
			],
			includeAllSources: true,
			instrumenters: {isparta: isparta},
			instrumenter: {
				'**/*.js': 'isparta',
				'**/*.jsx': 'isparta'
			},
			instrumenterOptions: {
				isparta: {
					embedSource: true,
					noAutoWrap: true
				}
			}
		},

		webpack: {
			devtool: 'inline-source-map',
			module: {
				preLoaders: [
					{test: /\.js$/, exclude: /(test|test\.js|node_modules)/, loader: 'isparta'}
				],
				loaders: [
					{test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader'}
				]
			}
		},

		webpackServer: {
			noInfo: true
		}

	});
};
