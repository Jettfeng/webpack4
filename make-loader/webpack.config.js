const path = require("path");

module.exports = {
  mode: "development",
  entry: {
    main: "./src/index.js"
  },
  resolveLoader: {
    modules: ["node_modules", "./loaders"] //引入loader现在node_modules里面找，没有的话，再在 ./loaders目录下查找
  },
  module: {
    rules: [
      {
        test: /\.js/,
        // use: [path.resolve(__dirname, "./loaders/replaceLoader.js")]
        use: [
          {
            loader: "replaceLoader",
            options: {
              //options会传递给loader函数，在loader函数的this.query参数里面可以拿到options参数
              name: "lee"
            }
          },
          {
            loader: "replaceLoaderAsync",
            options: {
              //options会传递给loader函数，在loader函数的this.query参数里面可以拿到options参数
              name: "lee"
            }
          }
        ]
      }
    ]
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].js"
  }
};
