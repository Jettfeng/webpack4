// import './style.css'
// var btn = document.createElement('button')
// btn.innerHTML = '新增'
// document.body.appendChild(btn)
// btn.onclick = function () {
//     var div = document.createElement('div')
//     div.innerHTML = 'item'
//     document.body.appendChild(div)
// }

import counter from './counter'
import number from './number'
counter()
number()
// 本质上HMR都需要这么写，但是，引入css文件不需要这么写，因为css-loader已经实现了该功能
if(module.hot){
    module.hot.accept('./number',()=>{ //如果number文件发生了变化，执行回调函数
        document.body.removeChild(document.getElementById('number'))
     number()
    })
}