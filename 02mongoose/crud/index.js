(
    async function () {
        // 需求等到数据库链接成功，再执行后面代码
        const db = require('../db')
        await db
        // 引入model
        // 注意由于model文件夹的文件名叫index，所以文件名可以忽略
        const modelObj =require('../model')
        modelObj.create({
            username:'xxx',
            age:'30',
            gender:'男',
        })
    })()
 