// 注意 require('koa-router') 返回的是函数
const router = require('koa-router')()
const user = require('./routes/user')

module.exports = app => {
    user(router)

    app.use(router.routes())
    	.use(router.allowedMethods())
}
