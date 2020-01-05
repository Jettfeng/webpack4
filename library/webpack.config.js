const path = require("path");
module.exports = {
  mode: "production",
  entry: "./src/index.js",
  externals: 'lodash', //打包过程中遇到lodash，不将lodash打包进library
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "library.js",
    library: "root", //通过script标签形式引入，将library挂在到window对象上 window.library
    libraryTarget: "umd" //window/this:如果为this或windos相当于全局挂在，一般为umd //为了让 library 和其他环境兼容（可以使用esModule，COMMON.js或AMD等模块语法引入使用）
  }
};
