
const { defineConfig } = require('@vue/cli-service')

module.exports = defineConfig({
	pluginOptions: {
		electronBuilder: {
			// 解决element ui字体在electron打包后无法显示得问题
			customFileProtocol: "./",
			builderOptions:{
				win: {
                    "target": [
                        "nsis"
                    ],
                  icon: './static/icons/256x256.ico'
                }
			}
		}
	}
})


