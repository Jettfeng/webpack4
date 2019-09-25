const webpack = require('webpack')
const merge = require('webpack-merge')
const commonConfig = require('./webpack.common.js')

const devConfig = {
    mode: 'development',//'production',//默认production，production会对代码进行压缩
    devtool: 'inline-source-map', //配置source-map，如果关闭source-map，当打包后的文件有报错后，只提错误在打包后文件中的位置
    devServer: {
        contentBase: './dist',
        open: true,
        hot: true, //模块热更新
        //hotOnly: true //浏览器不自动刷新,默认报错的时候HMR会重新刷新页面
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin() //HMR
    ],
    optimization: { //tree shaking,production环境默认函数有效
        usedExports: true
    }
}

module.exports = merge(commonConfig, devConfig)