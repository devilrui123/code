const mongoose = require('mongoose')

const Schema = mongoose.Schema
// 4.2创建Schema对象
const schemaObj = new Schema(
    {
        username: {
            rype: String,
            required: true,

        },
        age: {
            type: Number,
            required: true,
        },
        gender: {
            type: String,
            required: true,
        },
        info: {
            type: Date,
            efault: Date.now(),
        },
    },
    // 如果协商new Schema的第二个参数，就可以指定集合名叫什么，就不会自动加s了
    { collection: 'user' }
)
// const modelObj = mongoose.model(集合名，Schema对象)
// 注意：如果集合名没有s，mongoose会自动加s
const modelObj = mongoose.model('user', schemaObj)
module.exports = modelObj