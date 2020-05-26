const serverless = require('serverless-http');
const Koa = require('koa');
const { router } = require('./routes/');

const app = new Koa();

app.use(router.routes());

const handler = serverless(app);
module.exports.main = async (event, context) => {
  const result = await handler(event, context);
  return result;
};