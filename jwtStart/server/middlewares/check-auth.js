const jwt = require('jsonwebtoken') // 验证令牌
const { jwtKey } = require('../config')

module.exports = (ctx, next) => {
  try {
    const token = ctx.headers.authorization
    const decoded = jwt.verify(token, jwtKey)
    ctx.user = decoded
  } catch (error) {
    ctx.status = 401
    ctx.body = {
      message: 'Auth failed.'
    }
    console.log(error)
    return
  }

  next()
}
