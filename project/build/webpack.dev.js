const webpack = require('webpack')
// const merge = require('webpack-merge')
// const commonConfig = require('./webpack.common.js')

const devConfig = {
    mode: 'development',//'production',//默认production，production会对代码进行压缩
    devtool: 'cheap-module-source-map', //配置source-map，如果关闭source-map，当打包后的文件有报错后，只提错误在打包后文件中的位置
    devServer: {
        contentBase: './dist',
        open: true,
        hot: true, //模块热更新
        //hotOnly: true //浏览器不自动刷新,默认报错的时候HMR会重新刷新页面
    },
    module: {
        rules: [
            {
                test: /\.scss$/,
                use: ['style-loader', 'css-loader', 'postcss-loader', 'sass-loader'] //sass-loader将scss编译成css
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader', 'postcss-loader']
            }
        ]
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin() //HMR
    ],
    output: {
      filename: "[name].js",
      chunkFilename: "[name].js" //非入口js文件
    }
}

module.exports = devConfig