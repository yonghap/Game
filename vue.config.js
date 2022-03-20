const path = require('path')

module.exports = {
	configureWebpack : {
		resolve : {
			extensions : ['.js','.vue','.json'],
			alias : {
				'vue$': 'vue/dist/vue.esm-bundler.js',
				'@' : path.resolve('src')
			}
		}
	},
	outputDir: '../public',
	publicPath:'/Game'
}
