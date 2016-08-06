var webpack 			= require('webpack'),
	fs 					= require('fs'),
	path 				= require('path'),
	ExtractTextPlugin   = require('extract-text-webpack-plugin'),
	autoprefixer		= require('autoprefixer'),
	mqpacker			= require('css-mqpacker'),
	cssnano				= require('cssnano'),
	environment 		= process.env.NODE_ENV || 'development';

module.exports = {
	debug: true,
	entry: './public/js/modules/main.js',
	output: {
		path: path.join(__dirname, '/js/'),
		filename: environment === 'minify' ? 
			'bundle.min.js' : 'bundle.js'
	},
	module: {
		loaders: [
			{ 
				test: /\.js$/, 
				loader: 'babel'
			},
			{ 
				test: /\.scss$/, 
				loader: ExtractTextPlugin.extract(
					'style',
					'css?sourceMap!postcss-loader!sass?sourceMap'
				)
			}
		]
	},

	postcss: environment === 'minify' ? [
		autoprefixer({ browsers: ['last 2 versions'] }),
		mqpacker(),
		cssnano({ discardComments: { removeAll: true }})
	] : [
		autoprefixer({ browsers: ['last 2 versions'] }),
		mqpacker()
	],

	plugins: environment === 'minify' ? [
		new webpack.optimize.UglifyJsPlugin({
			compress: { warnings: false },
			output: { comments: false }
		}),
		new ExtractTextPlugin("../css/style.min.css")
	] : [
		new ExtractTextPlugin("../css/style.css")
	]
};