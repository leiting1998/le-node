module.exports = function crossOrigin () {
  return async function (ctx, next) {
    ctx.set('Access-Control-Allow-Origin', '*')

    if (ctx.method === 'OPTIONS') {
      ctx.set('Access-Control-Allow-Methods', '*')
      ctx.set('Access-Control-Allow-Headers', 'Content-Type')
    }

    try { await next() } catch (err) { throw err }
  }
}
