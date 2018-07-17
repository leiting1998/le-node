const Koa = require('koa')
const mongoose = require('mongoose')
const router = require('./routes/users.router')
const { port, connexionString } = require('./config')
const bodyParser = require('koa-bodyparser')

const logger = require('koa-logger')
const cors = require('koa2-cors') // Allow cross domain requests

mongoose.connect(connexionString, { useNewUrlParser: true })
mongoose.connection.on('error', console.error)

const app = new Koa()

app
  .use(bodyParser())
  .use(logger())
  .use(cors())
  .use(router.routes())
  .use(router.allowedMethods())

app.listen(port, () =>
  console.log(`✅  The server is running at http://localhost:${port}/`)
)
module.exports = app
