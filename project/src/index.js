import _ from 'lodash'
console.log(_.join(['a', 'b', 'c'], '***'));
// 此处省略10万行业务逻辑
console.log(_.join(['a', 'b', 'c'], '***'));

// 第一种方式
// 首次访问页面时，加载main.js，（2mb）
// 当业务逻辑发生变化时，又要加载2mb的内容


// 第二种方式
// main.js拆分成lodash.js(1mb) ,main.js(1mb)
// 当业务逻辑发生变化时，只要加载main.js即可(1mb)

function getComponent() {
    return import('lodash').then(({ default: _ }) => {
        var element = document.createElement('div')
        element.innerHTML = _.join(['Dell', 'Lee'], '-')
        return element
    })
}

getComponent().then(element => {
    document.body.appendChild(element)
})

// 代码分割和webpack无关
// webpack实现代码分割，两种方式
// 1.同步代码：只需要在webpack.common.js中做optimization的配置即可
// 2.异步代码（import）：异步代码，无需做任何配置，会自动进行代码分割，放置到新的文件中