var webpack 			= require('webpack'),
	path 				= require('path'),
	ExtractTextPlugin   = require('extract-text-webpack-plugin'),
	autoprefixer		= require('autoprefixer'),
	environment 		= process.env.NODE_ENV || 'development';

module.exports = {
	debug: true,
	entry: './public/js/modules/main.js',
	output: {
		path: path.join(__dirname, 'public/js/'),
		filename: environment === 'production' ? 
			'bundle.min.js' : 'bundle.js'
	},
	module: {
		loaders: [
			{ 
				test: /\.js$/, 
				loader: 'babel', 
				include: __dirname + '/public/js/modules/' 
			},
			{ 
				test: /\.scss$/, 
				loader: ExtractTextPlugin.extract(
					'style',
					'css?sourceMap!postcss-loader!group-css-media-queries!sass?sourceMap'
				)
			}
		]
	},

	postcss: [ autoprefixer({ browsers: ['last 2 versions'] }) ],	

	plugins: environment === 'production' ? [
		new webpack.optimize.UglifyJsPlugin({
			compress: { warnings: true }
		}),
		new ExtractTextPlugin("../css/style.css")
	] : [
		new ExtractTextPlugin("../css/style.css")
	]
};