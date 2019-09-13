const path = require('path')
module.exports = {
    mode:'development',//默认production，production会对代码进行压缩
    entry: {
        main: './src/index.js'
    },
    // entry: './src/index.js', 简写
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist') //__dirname指的是webpack.config.js(默认配置文件)文件所在的目录
    }
}