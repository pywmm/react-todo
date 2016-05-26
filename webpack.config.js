module.exports = {
	devtool: 'inline-source-map'
	entry: ['./client/client.js'],
	output: {
		path: './dist',
		filename: 'bundle.js',
		publicPath: '/'
	},
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
					presets: ['react','es2015']
				} 
			}
		]

	}
}