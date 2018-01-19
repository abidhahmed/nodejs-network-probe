'use strict'

const Koa = require('koa')
const Router = require('koa-router')
const probe = require('./lib/ping')

const app = new Koa()
const router = new Router()

router.get('/ping/:ip', async (ctx, next) => {
  try {
    ctx.body = await probe.ping(ctx.params.ip)
  } catch (err) {
    ctx.status = err.status || 500
    ctx.body = err.message
    ctx.app.emit('error', err, ctx)
  }
})

app
  .use(router.routes())
  .listen(3000)
