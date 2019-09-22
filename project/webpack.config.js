
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require("clean-webpack-plugin")
const webpack = require('webpack')

module.exports = {
    mode: 'development',//默认production，production会对代码进行压缩
    devtool: 'inline-source-map', //配置source-map，如果关闭source-map，当打包后的文件有报错后，只提错误在打包后文件中的位置
    entry: {
        main: './src/index.js'
    },
    devServer: {
        contentBase: './dist',
        open: true,
        // hot: true, //模块热更新
        //hotOnly: true //浏览器不自动刷新
    },
    module: {
        rules: [
            {
                test: /\.(jpg|png|gif)$/,
                use: {
                    loader: 'url-loader',
                    options: {
                        name: '[name]_[hash].[ext]',
                        outputPath: 'images/',
                        limit: 10240 //图片小于10240打包成base64，大于等于10240kb，打包到dist目录下的images目录下
                    }
                }
            },
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
        new HtmlWebpackPlugin({
            template: 'src/index.html'
        }),
        new CleanWebpackPlugin(), //构建前清理dist文件夹
        // new webpack.HotModuleReplacementPlugin() HMR
    ],
    output: {
        publicPath: '/',
        filename: '[name].js',
        path: path.resolve(__dirname, 'dist') //__dirname指的是webpack.config.js(默认配置文件)文件所在的目录
    }
}