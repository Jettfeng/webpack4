const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require("clean-webpack-plugin")

module.exports = {
    entry: {
        main: './src/index.js'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: "babel-loader"//只是帮助识别js文件，把es6翻译成es5还需要@babel/preset-env
            },
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
        new CleanWebpackPlugin() //构建前清理dist文件夹
    ],
    optimization: {
        splitChunks: {
            chunks: 'all'//所有模块 async只打包异步 模块，如果没有配置该选项，会默认chunks:'async'=>支队异步代码进行分割
        }
    },
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, '../dist') //__dirname指的是webpack.config.js(默认配置文件)文件所在的目录
    }
}