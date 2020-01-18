const path = require("path");
const webpack = require('webpack')

module.exports = {
  mode: "production",
  entry: {
    vendors: ["lodash"],  //对第三方模块单独进行打包
    react:["react", "react-dom"],
    jquery:["jquery"]
  },
  output: {
    filename: "[name].dll.js",
    path: path.resolve(__dirname, "../dll"),
    library:'[name]'
  },
  plugins: [
    new webpack.DllPlugin({ //生成mainfest映射文件
      name:"[name]", //跟output中的library保持一致
      path:path.resolve(__dirname,'../dll/[name].mainfest.json')
    })
  ]
};
