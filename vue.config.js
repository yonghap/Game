const path = require('path')

module.exports = {
	configureWebpack : {
		resolve : {
			extensions : ['.js','.vue','.json'],
			alias : {
				'@' : path.resolve('src')
			}
		}
	},
	outputDir: '../public',
	indexPath: 'game.html'
}
