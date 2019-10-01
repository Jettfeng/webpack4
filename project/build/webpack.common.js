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
            chunks: 'all',//所有模块 async只打包异步 模块
            minSize: 30000,//引入的苦大于30000字节（30kb）才做代码分割
            // maxSize: 50000,//50kb,lodash 1mb,会对lodash进行拆分，拆分成多个maxSize要求的，一般不配置
            minChunks: 1,//代码至少被用了多少次才进行代码分割
            maxAsyncRequests: 5,//超过5个不做代码分割
            maxInitialRequests: 3,
            automaticNameDelimiter: '~',//打包的模块和入口名之间的连接
            name: true,//可以在cacheGroups对打包后的文件名进行修改
            cacheGroups: {//缓存组
                vendors: {
                    test: /[\\/]node_modules[\\/]/,
                    priority: -10,
                    filename: 'vendors.js' //默认打包结果为vendors-lodash，如果配置了filename，那么，所有从node_modules模块引入的模块都会打包到一起，名字为 vendors
                },
                default: {
                    // minChunks: 2,
                    priority: -20,
                    reuseExistingChunk: true,//当chunks引用了已经存在的被抽离的chunks时不会新创建一个chunk而是复用chunk
                    filename: 'common.js'
                }
            }
        }
    },
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, '../dist') //__dirname指的是webpack.config.js(默认配置文件)文件所在的目录
    }
}