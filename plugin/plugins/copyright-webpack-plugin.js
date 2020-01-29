class CopyrightWebpackPlugin {
  constructor(options) {
    console.log(options);
    console.log("插件被使用了");
  }

  apply(compiler) {
    compiler.hooks.compile.tap(
      "CopyrightWebpackPlugin",
      (compilation) => {
        console.log('compiler');
      }
    );

    //compiler:存放配置相关的内容
    compiler.hooks.emit.tapAsync(
      "CopyrightWebpackPlugin",
      (compilation, cb) => {
        // compilation：存放本次打包的相关内容
        console.log(123123);
        console.log(compilation.assets);
        debugger;
        compilation.assets["copyright.txt"] = {
          //在assets中新增一个copyright.txt文件
          source: function() {
            //文件内容为"copyright by dell lee"
            return "copyright by dell lee";
          },
          size: function() {
            //文件大小为21个字符长度
            return 21;
          }
        };
        cb();
      }
    );
  }
}

module.exports = CopyrightWebpackPlugin;
