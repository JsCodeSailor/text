// var str = require('./app.js'); //引入一个新的文件
// document.body.innerHTML="<div>"+str+"</div>";

// define(["./app.js"],function(str){
//  document.body.innerHTML="<div>"+str+"</div>"
// }) //和上面的写法一模一样

var str = require('./app'); //引入一个新的文件
require('./css/reset');
require('./css/style');//从右到左执行,先找到css文件，在执行style
document.body.innerHTML="<div>"+str+"</div>";