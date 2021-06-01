// 1.引入mongoose
const mongoose = require('mongoose')
// 2.链接数据库
module.exports = mongoose.connect('mongodb://127.0.0.1:2701/web0323mgs'),
{
    useNewUrlParser: true,
    useUnifiedTopology: true,
}
