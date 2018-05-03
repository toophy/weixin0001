var request = require('request');

module.exports = async (ctx, next) => {
  // 通过 Koa 中间件进行登录态校验之后
  // 登录信息会被存储到 ctx.state.$wxInfo
  // 具体查看：
    console.log(`[ext] get baidu.com`)

    await function () {
      console.log(`[ext] get baidu.com1`)
      request('http://www.baidu.com', function (error, response, body) {
        console.log(`[ext] get baidu.com2`)
        if (!error && response.statusCode == 200) {
          ctx.state.data = body
          console.log(body)
        } else {
          console.log(`[ext] get baidu.com3`)
          console.log(error)
        }
      })
    }()
    console.log(`[ext] get baidu.com6`)
}
