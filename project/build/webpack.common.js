const path = require("path");
const fs = require("fs");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const AddAssetHtmlWebpackPlugin = require("add-asset-html-webpack-plugin"); //插入静态资源插件
const webpack = require("webpack");

const makePlugins = configs => {
  const plugins = [
    new CleanWebpackPlugin() //构建前清理dist文件夹
  ];

  Object.keys(configs.entry).forEach(item => {
    plugins.push(
      new HtmlWebpackPlugin({
        template: "src/index.html",
        filename: `${item}.html`,
        chunks: ["runtime", "vendors", item]
      })
    );
  });

  const files = fs.readdirSync(path.resolve(__dirname, "../dll"));
  console.log(files);
  files.forEach(file => {
    if (/.*\.dll.js/.test(file)) {
      plugins.push(
        new AddAssetHtmlWebpackPlugin({
          //将dll中的js文件挂在到html文件上
          filepath: path.resolve(__dirname, "../dll", file)
        })
      );
    }
    if (/.*\.mainfest.json/.test(file)) {
      plugins.push(
        new webpack.DllReferencePlugin({
          manifest: path.resolve(__dirname, "../dll", file)
        })
      );
    }
  });

  return plugins;
};

const plugins = [
  new HtmlWebpackPlugin({
    template: "src/index.html",
    filename: "index.html",
    chunks: ["runtime", "vendors", "main"]
  }),
  new HtmlWebpackPlugin({
    template: "src/index.html",
    filename: "list.html",
    chunks: ["runtime", "vendors", "list"]
  })
];

const configs = {
  entry: {
    index: "./src/index.js",
    list: "./src/list.js",
    detail:'./src/detail.js'
  },
  resolve: {
    extensions: [".js", ".jsx"],
    mainFiles: ["index", "child"] //同一个文件夹下，index.js优先于child.js
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        // exclude: /node_modules/,
        include: path.resolve(__dirname, "../src"),
        use: [
          {
            loader: "babel-loader" //只是帮助识别js文件，把es6翻译成es5还需要@babel/preset-env
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

configs.plugins = makePlugins(configs);

module.exports = configs;
