const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const webpack = require("webpack");
const merge = require("webpack-merge");
const devConfig = require("./webpack.dev");
const prodConfig = require("./webpack.prod");

const commonConfig = {
  entry: {
    main: "./src/index.js"
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [
          {
            loader: "babel-loader" //只是帮助识别js文件，把es6翻译成es5还需要@babel/preset-env
          },
          {
            loader: "imports-loader?this=>window" //使用imports-loader，并且this指向window
          }
        ]
      },
      {
        test: /\.(jpg|png|gif)$/,
        use: {
          loader: "url-loader",
          options: {
            name: "[name]_[hash].[ext]",
            outputPath: "images/",
            limit: 10240 //图片小于10240打包成base64，大于等于10240kb，打包到dist目录下的images目录下
          }
        }
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "src/index.html"
    }),
    new CleanWebpackPlugin(), //构建前清理dist文件夹
    new webpack.ProvidePlugin({
      $: "jquery", //如果模块里面引用了$,改模块自动引入jquery
      _: "lodash",
      _join: ["lodash", "join"] //_join代码lodash里面的join方法
    })
  ],
  optimization: {
    runtimeChunk: {
      name: "runtime"
    },
    usedExports: true, //tree shaking,production环境默认函数有效
    splitChunks: {
      chunks: "all", //所有模块 async只打包异步 模块，如果没有配置该选项，会默认chunks:'async'=>支队异步代码进行分割
      cacheGroups: {
        vendors: {
          test: /[\\/]node_modules[\\/]/,
          priority: -10,
          name: "vendors"
        }
      }
    }
  },
  performance: false,
  output: {
    filename: "[name].js",
    chunkFilename: "[name].chunk.js", //非入口js文件
    path: path.resolve(__dirname, "../dist") //__dirname指的是webpack.config.js(默认配置文件)文件所在的目录
  }
};

module.exports = env => {
  console.log(env)
  if (env && env.production) {
    //线上环境
    return merge(commonConfig, prodConfig);
  } else {
    return merge(commonConfig, devConfig);
  }
};
