const path = require('path')
module.exports = {
    mode: 'development',//默认production，production会对代码进行压缩
    entry: {
        main: './src/index.js'
    },
    // entry: './src/index.js', 简写
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
                test: /\.css$/,
                use: ['style-loader', 'css-loader'] //分别用到style-loader和css-loader,css-loader处理css文件；style-loader将编译后的css插入head
            },
            {
                test: /\.scss$/,
                use: ['style-loader', 'css-loader', 'postcss-loader', 'sass-loader'] //sass-loader将scss编译成css
            }
        ]
    },
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist') //__dirname指的是webpack.config.js(默认配置文件)文件所在的目录
    }
}