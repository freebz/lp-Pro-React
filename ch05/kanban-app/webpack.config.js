module.exports = {
    entry: [
	'./source/App.js'
    ],
    output: {
	path: __dirname,
	filename: "bundle.js"
    },
    module: {
	loaders: [{
	    test: /\.jsx?$/,
	    loader: 'babel',
	    exclude: /node_modules/
	}]
    },
    devServer: {
	contentBase: "./public",
	colors: true,
	historyApiFallback: true,
	inline: true
    }
};
