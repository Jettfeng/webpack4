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
<p></p>
<p></p>
<p></p>
<p></p>
<p></p>
<p></p>
<p></p>
<p></p>
<p></p>
<p></p>
