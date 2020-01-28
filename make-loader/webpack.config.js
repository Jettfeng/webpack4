const path = require("path");

module.exports = {
  mode: "development",
  entry: {
    main: "./src/index.js"
  },
  module: {
    rules: [
      {
        test: /\.js/,
        // use: [path.resolve(__dirname, "./loaders/replaceLoader.js")]
        use: [
          {
            loader: path.resolve(__dirname, "./loaders/replaceLoader.js"),
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
