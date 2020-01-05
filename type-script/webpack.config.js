const path = require("path");

module.exports = {
  mode:'production',
  entry: "./src/index.tsx",
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: /node_modules/ //如果文件来自node_modules文件夹，不适用loader对其进行处理
      }
    ]
  },
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist")
  }
};
