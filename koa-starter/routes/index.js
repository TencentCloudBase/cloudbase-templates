const Router = require('koa-router')

const router = new Router()

router.get('/', async (ctx, next) => {
    ctx.body = 'Index Page'
    ctx.status = 200
    return next()
})

router.get('/home', async (ctx, next) => {
    ctx.body = 'Home Page'
    ctx.status = 200
    return next()
})

module.exports.router = router