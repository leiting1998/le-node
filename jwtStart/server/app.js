var json = require('koa-json');
const Koa = require('koa');
const { port } = require('./config');
const router = require('./routers/user.router')
const bodyparser = require('koa-bodyparser');

const app = new Koa();

app
  .use(bodyparser())
  .use(json())
  .use(router.routes())
  .use(router.allowedMethods());

app.listen(port, () =>
    console.log(`✅  The server is running at http://localhost:${ port }/`)
);

module.exports = app;