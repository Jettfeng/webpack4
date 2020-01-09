<h2>2-3 Webpack的正确安装方式</h2>
<p>1.全局安装：npm install webpack webpack-cli -g</p>
<p>2.本地安装:npm install webpack webpack-cli --save-dev</p>
<p>查看版本：npx webpack -v</p>
<h2>2-4 使用Webpack的配置文件</h2>
<p>1、运行npx webpack时，webpack根据webpack.config.js配置文件进行打包</p>
<p>2、如果配置文件不是默认的webpack.config.js，例如：配置文件是webpackconfig.js，需运行npx webpack --config webpackconfig.js进行打包</p>
<p>3、在package.json里配置scripts "bundle": "webpack"，当运行npm run bundle时，首先查找该工程里面是否有webpack命令，如果没有，再去查找全局的webpack</p>
<p>4.webpack运行方式，全局安装：webpack index.js；局部安装（没配置scripts）：npx webpack；局部安装（配置了scripts，例如"bundle": "webpack"）：npm run bundle</p>
<h2>2-5 浅析 Webpack 打包输出内容</h2>
<h2>3-1 什么是 loader</h2>
<p>安装file-loader：npm install file-loader -D</p>
<h2>3-2 使用 Loader 打包静态资源（图片篇）</h2>
<p>安装url-loader：npm install url-loader -D</p>
<p>url打包后，图片默认为base64</p>
<h2>3-3 使用 Loader 打包静态资源（样式篇 - 上）</h2>
<p>安装style-loader, css-loader：npm install style-loader css-loader -D</p>
<h2>3-4 使用 Loader 打包静态资源（样式篇 - 下）</h2>
<p>安装sass-loader：npm install sass-loader node-sass --save-dev</p>
<p>安装postcss-loader：npm i -D postcss-loader</p>
<p>安装autoprefixer：npm install autoprefixer -D,使用autoprefixer时最好设置一下package.json里面的browserslist，如果浏览器版本比较新，不会自动添加前缀</p>
<h2>3-5 使用 plugins 让打包更便捷</h2>
<p>安装html-webpack-plugin：npm install --save-dev html-webpack-plugin</p>
<p>html-webpack-plugin:会在打包结束后自动生产一个html文件，并把打包后的js自动引入到这个html中</p>
<p>安装clean-webpack-plugin：npm install --save-dev clean-webpack-plugin</p>
<p>clean-webpack-plugin：构建前清理 /dist 文件夹</p>
<h2>3-6 Entry 与 Output 的基础配置</h2>
<h2>3-7 SourceMap 的配置</h2>
<h2>3-8 使用 WebpackDevServer 提升开发效率</h2>
<p>在package.json里面加上--watch，每当代码有变动时，自动重新打包</p>
<p>安装webpack-dev-server：npm install webpack-dev-server --save-dev</p>
<p>安装在中间件：npm install --save-dev express webpack-dev-middleware</p>
<h2>3-9 Hot Module Replacement 热模块更新（1）</h2>
<h2>3-10 Hot Module Replacement 热模块更新（2）</h2>
<h2>3-11 使用 Babel 处理 ES6 语法（1）</h2>
<p>安装babel-loader @babel/core：npm install --save-dev babel-loader @babel/core</p>
<p>安装@babel/preset-env（把es6翻译成es5）：npm install @babel/preset-env --save-dev</p>
<p>安装@babel/polyfill（弥补低版本浏览器不支持的一些方法）：npm install --save @babel/polyfill</p>
<p>Babel默认只转换新的JavaScript句法（syntax），而不转换新的API，比如Iterator、Generator、Set、Maps、Proxy、Reflect、Symbol、Promise等全局对象，
以及一些定义在全局对象上的方法（比如Object.assign）都不会转码。
举例来说，ES6在Array对象上新增了Array.from方法。Babel就不会转码这个方法。如果想让这个方法运行，必须使用babel-polyfill，为当前环境提供一个垫片。</p>
<h2>3-12 使用 Babel 处理 ES6 语法（2）</h2>
<p>安装@babel/plugin-transform-runtime：npm install --save-dev @babel/plugin-transform-runtime</p>
<p>安装@babel/runtime：npm install --save @babel/runtime</p>
<p>"plugins": [["@babel/plugin-transform-runtime", {</p>
<p>"corejs": 2,</p>
<p>"helpers": true,</p>
<p>"regenerator": true,</p>
<p>"useESModules": false</p>
<p>}]]</p>
<p>如果将babel-loader配置corejs该了，比如corejs：2，则需要额外安装：npm install --save @babel/runtime-corejs2</p>
<h2>3-13 Webpack 实现对React框架代码的打包</h2>
<p>安装react相关：npm install react react-dom --save</p>
<p>安装@babel/preset-react：npm install --save-dev @babel/preset-react</p>
<h2>4-1 Tree Shaking 概念详解</h2>
<p>webpack.config.js配置：</p>
<p>optimization: {</p>
<p> usedExports: true</p>
<p>}</p>
<p>除了配置webpack.config.js还需要配置package.json,不然不会生效，package.json配置如下</p>
<p>"sideEffects": false</p>
<h2>4-2 Develoment 和 Production 模式的区分打包</h2>
<p>安装webpack-merge：npm install --save-dev webpack-merge</p>
<h2>4-3 Webpack 和 Code Splitting（1）</h2>
<p>安装lodash：npm install lodash --save</p>
<h2>4-4 Webpack 和 Code Splitting（2）</h2>
<p>安装@babel/plugin-syntax-dynamic-import：npm install --save-dev @babel/plugin-syntax-dynamic-import</p>
<h2>4-5 SplitChunksPlugin 配置参数详解（1）</h2>
<h2>4-6 SplitChunksPlugin 配置参数详解（2）</h2>
<h2>4-7 Lazy Loading 懒加载，Chunk 是什么？</h2>
<h2>1.把--profile --json > stats.json添加到打包命令中"dev-build": "webpack --profile --json > stats.json --config ./build/webpack.dev.js"，打包后根目录下有个stats.josn文件，是对打包过程的描述</h2>
<p>2.打开https://webpack.github.io/analyse/，选择跟目录下的stats.josn文件</p>
<h2>4-9 CSS 文件的代码分割</h2>
<p>安装MiniCssExtractPlugin:npm install --save-dev mini-css-extract-plugin(暂不支持热更新，适用于打包生产环境)</p>
<p>npm install --save-dev optimize-css-assets-webpack-plugin(压缩css)</p>
<h2>4-10 Webpack 与浏览器缓存( Caching )</h2>
<h2>4-11 Shimming 的作用</h2>
<h2>4-12 环境变量的使用方法</h2>
<p> "build": "webpack --env.production --config ./build/webpack.common.js"</p>
<p> --env.production:向全局变量env传入production，默认为true</p>
<p>也可以这样写：</p>
<p>"build": "webpack --env.production --config ./build/webpack.common.js"</p>
<p>"build": "webpack --env production --config ./build/webpack.common.js"，webpack.common.js里面的
<p>module.exports = env => {</p>
<p>if (env && env.production) {</p>
<p>return merge(commonConfig, prodConfig);</p>
<p> } else {</p>
<p>return merge(commonConfig, devConfig);</p>
<p> }</p>
<p>}</p>
<p>需要改成：</p>
<p>module.exports = production => {</p>
<p>if (production) {</p>
<p>return merge(commonConfig, prodConfig);</p>
<p> } else {</p>
<p>return merge(commonConfig, devConfig);</p>
<p> }</p>
<p>}</p>
<p>或者："build": "webpack --env.production=abc --config ./build/webpack.common.js"</p>
<p>module.exports = env => {</p>
<p>if (env&&env.production === abc) {</p>
<p>return merge(commonConfig, prodConfig);</p>
<p> } else {</p>
<p>return merge(commonConfig, devConfig);</p>
<p> }</p>
<p>}</p>
<h2>5-1 Library 的打包</h2>
<p>安装webpack，webpack-cli:npm install webpack webpack-cli --save-dev</p>
<h2>5-2 PWA 的打包配置</h2>
<p>安装http-server：npm install http-server --save-dev</p>
<p>安装workbox-webpack-plugin：npm install workbox-webpack-plugin --save-dev</p>
<h2>5-3 TypeScript 的打包配置</h2>
<p>安装webpack:npm install webpack webpack-cli --save-dev</p>
<p>安装ts-loader:npm install --save-dev typescript ts-loader</p>
<h2>5-4 使用 WebpackDevServer 实现请求转发</h2>
<h2>5-5 WebpackDevServer 解决单页面应用路由问题</h2>
<p>1.安装react-router-dom：npm install react-router-dom --save</p>
<h2>5-6 EsLint 在 Webpack 中的配置（1）</h2>
<p>1.安装eslint：npm install eslint --save-dev</p>
<h2>5-8 webpack 性能优化(1)</h2>
<p></p>