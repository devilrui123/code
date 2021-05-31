/*
node是什么

node是一个运行js的平台



如何在node平台上自习一个js文件
myProject/src/app.js
打开命令窗口：.../myProject>

1.cd进入到js路径下，node app.js
2.在myProject路径下 node stc/js/app.js

在node中如何一个js文件，以及如何导出

node中默认实现了comonjs
导入：
require（"）
1.如果引入的是一个自定义的js文件，需要写路径
2.如果引入的是一个第三方的魔抗，直接写模块名
3.如果引入的是内置的魔抗，直接写模块名
可以狐狸跃后缀名.js
返回的是对应模块，导出的几个，并且当引入一个模块的时候，这个模块就会被执行

导出
module.exports = exports ={}
module.exports 和exports都可以用来导出代码
但是当他们指向不同的时候，就一module.exports为准

npm是什么？npm由那些组成？
npm 是一个包管理工具，用来帮助我们下载，移除，搜索包
npm包括两部分，1.一个工具，2.网站

npm常用的指令
初始化一个包：nom init -y 包名不能用中文，有大写，和其他包重名

package.json
dependencies 记录了生产环境下依赖的包，最终会打包
devDEpendencies:记录了开发环境下依赖的包，最终不会打包
下载包
npm i 包名 下载指定包的最新版
npm i 包名@x.x.x.x下载指定包的指定版本
npm i 包名 包名 包名 同时下载多个包
npm i 包名 -D/--save-day 将包下载到开发环境
npm i 包名 --save下载到生成环境，不谢--save也是下载到生产环境

npm i 包名 -g 下载到全局

全局包：下载c盘的一个指定路径（不是js库，而是工具cnpm，yarn，apidoc。。。）
本地包，在当前小码的node_modules文件夹中（其实就是一些js文件）

npm i 根据package.json和package-lock.json 下载当前向你们的所有的依赖包时

package.json  和package-lock.json的区别
package.json中只记录了我们开发中自己下载的包，并且信息相对简单

package-lock.json中还记录了我们下的包的依赖包，并且有详细的信息（下载地址，指定的版本号）


*/