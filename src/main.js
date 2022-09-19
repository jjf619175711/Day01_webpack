import $ from 'jquery'
// 引入css文件
import './css/index.css'
// 引入less文件
import './less/index.less'

$('ul li:odd').css('color', 'pink')
$('ul li:even').css('color', 'yellow')

// 引入图片
import imgObj from './assets/1.gif'
let htmlStr = document.createElement('img')
htmlStr.src = imgObj
document.body.appendChild(htmlStr)

// 引入字体图标
import './assets/fonts/iconfont.css'
let theI = document.createElement('i')
theI.className = 'iconfont icon-qq'
document.body.appendChild(theI)

// 书写高版本的js语法
const fn = ()=>{
    console.log('我是箭头函数');
}
console.log(fn);