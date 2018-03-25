const cors = require('koa2-cors')
const json = require('./json')
// const logger = require('./logger')
const koaJwt = require('koa-jwt')
// const secret = require('../config').secret
const gzip = require('./gzip')
const bodyParser = require('koa-bodyparser')
// const errorHandler = require('./error-handler')

module.exports = (app) => {
  // app.use(errorHandler())
  // app.use(logger())
  app.use((ctx, next) => {
    ctx.set('Access-Control-Allow-Origin', '*')
    // if (ctx.request.header.host.split(':')[0] === 'localhost' || ctx.request.header.host.split(':')[0] === '127.0.0.1') {
    //   ctx.set('Access-Control-Allow-Origin', '*')
    // } else {
    //   ctx.set('Access-Control-Allow-Origin', SystemConfig.HTTP_server_host)
    // }
    ctx.set('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept')
    ctx.set('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE, OPTIONS')
    ctx.set('Access-Control-Allow-Credentials', true) // 允许带上 cookie
    return next()
  })
  app.use(gzip())
  app.use(cors())
  // app.use(koaJwt({secret}).unless({path: [
  //   /^\/user/, 
  //   /^\/performence/,
  //    /^\/article/, 
  //    /^\/error/,
  //    /^\/classify$/,
  //    /^\/tag$/,
  // ]}))
  app.use(bodyParser())
  app.use(json())
}
