
//引用
const express = require('express')
// 创建对象
const app = express()
// 处理静态资源中间件
app.use(express.static('./public'))

// 开启服务器
app.listen(5000,(err)=>{
    if(err) console.log('服务器启动失败',err);
    else console.log('服务器启动成功');
})