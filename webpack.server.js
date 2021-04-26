const path = require('path');

module.exports = {
	//inform webpack it's bundling for nodeJS not for browser, because by default, webpack assumes you are building a bundle to be executed inside a browser
	target: 'node',
	//set root file of our server app(entry point)
	entry: './src/index.js',

	//tell webpack where to put output file generated
	output: {
		filename: 'bundle.js',
		path: path.resolve(__dirname, 'build'),
	},
	//tell webpack to run babel on every file it runs thru
	module: {
		rules: [
			{
				//tell babel to run thru files has js in their extension
				test: /\.js?$/,
				loader: 'babel-loader',
				//tell babel not to run files in certain dir
				exclude: /node_modules/,
				options: {
					presets: [
						'react', //will take all jsx and turn to normal js function calls
						'stage-0', //handle async
						['env', { targets: { browsers: ['last 2 versions'] } }],
					],
				},
			},
		],
	},
};
