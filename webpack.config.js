var webpack = require('webpack');

module.exports = {
	devtool: 'inline-source-map',
	entry: [
		'webpack-hot-middleware/client',
		'./client/client.js'
	],
	output: {
		path: require("path").resolve('./dist'),
		filename: 'bundle.js',
		publicPath: '/'
	},
	plugins: [   
		new webpack.optimize.OccurenceOrderPlugin(),
		new webpack.HotModuleReplacementPlugin(),
		new webpack.NoErrorsPlugin()
	],
	module: {
		// where you define certain tasks you wanna do
		// like compile es6、jsx thing
		// when you load a file,you want to do something
		loaders: [
			{
				test: /\.js$/,  //what file we want to handle
				loader: 'babel-loader', 
				exclue: /node_modules/,
				query:{  
					presets: ['react','es2015','react-hmre']
				} 
			}
		]

	}
}