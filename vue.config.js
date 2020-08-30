module.exports = {
	filenameHashing: false,
	productionSourceMap: false,
	css: {
		extract: true
	},
	devServer: {
		proxy: {
			'/api': {
				target: 'http://localhost:3000',
				ws: false,
				changeOrigin: true
			}
		}
	},
	chainWebpack: config => {
		config.plugins
			.delete('split-vendor')
			.delete('prefetch')
			.delete('preload')

		config.optimization.splitChunks(false)
	}
}
