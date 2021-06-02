const express = require('express')
const app = express()

app.use(function (request, response, next) {
    require.a = 1
    response.a = 1
    console.log('中间件1');
    next()
})

app.use(function (request, response, next) {
    require.a = 2
    response.a = 2
    console.log('中间件2');
    next()
})

app.get('/rest', (req, res) => {
    console.log(req.a);
    console.log(req.b);
    console.log(res.a);
    console.log(res.b);
    res.send('get-ok')
})
app.post('/text', (req, res) => {
    console.log(req.body);
    res.send('post-ok')
})

app.listen(5000, () => {
    console.log('ok');
})