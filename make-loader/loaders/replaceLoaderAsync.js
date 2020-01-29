const loaderUtils = require("loader-utils");

module.exports = function(source) {
  const options = loaderUtils.getOptions(this); //获取loader的options配置

  // 如果有异步操作，需要调用this.async
  const callback = this.async();

  setTimeout(() => {
    const result = source.replace("dell", "dellLeeAsync");
    callback(null, result);
  }, 1000);
};
