const merge = require('webpack-merge')
const commonConfig = require('./webpack.common.js')

const prodConfig = {
    mode: 'production',//'production',//默认production，production会对代码进行压缩
    devtool: 'cheap-module-source-map' //配置source-map，如果关闭source-map，当打包后的文件有报错后，只提错误在打包后文件中的位置
}

module.exports = merge(commonConfig, prodConfig) 