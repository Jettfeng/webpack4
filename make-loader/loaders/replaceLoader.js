const loaderUtils = require("loader-utils");

module.exports = function(source) {
  console.log(this.query); //{ name: "lee"}
  console.log(this.query.name);
  const options = loaderUtils.getOptions(this); //获取loader的options配置
  console.log(options); //{ name: "lee"}
  console.log(options.name);
  // source：文件内容
  //必须为申明函数，不能为箭头函数,如果为箭头函数，this指向会有问题
  //return source.replace("dell", "dellLee");
  const result = source.replace("dell", "dellLee");
  this.callback(null, result); //个可以同步或者异步调用的可以返回多个结果的函数 等价于return source.replace("dell", "dellLee")
};
