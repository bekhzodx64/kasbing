const config = {
	mode: 'production',
	entry: {
		index: './src/js/index.js',
		professionDetail: './src/js/profession-detail.js',
		// contacts: './src/js/contacts.js',
		// about: './src/js/about.js',
	},
	output: {
		filename: '[name].bundle.js',
	},
	module: {
		rules: [
			{
				test: /\.css$/,
				use: ['style-loader', 'css-loader'],
			},
		],
	},
}

module.exports = config
