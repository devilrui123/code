
(async function () {
    // 1.引入mongoose
    const mongoose = require('mongoose')
    try {
        // 2。链接数据库
        await mongoose.connect('mongodb://127.0.0.1:27017/web0323mgs', {

            useNewUrlParser: true,
            useUnifiedTopology: true,
        })
        // 3.这里的代码可以执行表示数据库链接成功
        console.log('数据库链接成功');
        // 4.创建约束对象（Schema）
        // 4.1获取Schema构造函数
        const Schema = mongoose.Schema
        // 4.2创建Schema对象
        const schemaObj = new Schema(
            {
                username: {
                    type: String,
                    required: true,
                },
                age: {
                    type: Number,
                    require: true,
                },
                info: {
                    type: Schema.Types.Mixed,
                    default: '暂无',
                },
                register_date: {
                    type: Date,
                    default: Date.now(),
                },
            },
            // 如果协商new Schema的第二个参数，就可以指定集合名叫什么，就不会自己加s了
            { collection: 'user' }
        )
        // 5.创建model对象（集合）
        // const modelObj = mongoose.model(集合名,Schema对象)
        // 注意：如果集合名没有s，nibgiise会自动加s
        const modelObj = mongoose.model('user', schemaObj)

        // 6.利用model对象，对数据库进行增删改查
        // 添加
        /* const promiseObj = modelObj.create(
            {
                username: '1s',
                age: '18',
                gender: '女',
            }
        )       
        console.log(promiseObj,'abcdefg');

 */ 

    } catch (error) {
        // 如何数据库链接失败，或数据库链接成功之后，后面的代码出现错误，都会进入到这个catch中
        console.log(error);
    }
})()


