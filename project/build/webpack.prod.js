const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const merge = require('webpack-merge')
const commonConfig = require('./webpack.common.js')

const prodConfig = {
    mode: 'production',//'production',//默认production，production会对代码进行压缩
    devtool: 'cheap-module-source-map', //配置source-map，如果关闭source-map，当打包后的文件有报错后，只提错误在打包后文件中的位置
    module: {
        rules: [
            {
                test: /\.scss$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    {
                        loader: 'css-loader',
                        options: {
                            importLoaders: 2
                        }
                    },
                    'sass-loader',
                    'postcss-loader'
                ]
            },
            {
                test: /\.css$/,
                use: [MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader']
            }
        ]
    },
    optimization: {
        minimizer: [
            new OptimizeCSSAssetsPlugin({})
        ]
    },
    plugins: [
        new MiniCssExtractPlugin({ //需要修改package.json里面的sideEffects，无效
            filename: "[name].[hash:5].css",//index.html引用走filename，不直接被index.htmlchunkFilename
            chunkFilename: "[id].chunk.css"
        })
    ]
}

module.exports = merge(commonConfig, prodConfig) 