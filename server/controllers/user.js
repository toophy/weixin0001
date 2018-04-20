var request = require('request');


module.exports = async.series({
          one: function (callback) {
            request('http://www.baidu.com', function (error, response, body) {
              if (!error && response.statusCode == 200) {
                callback(null, body)
              }
            })
          },
          two: function(){
          }
        }, function (err, results) {
          ctx.state.data['ext'] = results
        })


// module.exports = async (ctx, next) => {
//     // 通过 Koa 中间件进行登录态校验之后
//     // 登录信息会被存储到 ctx.state.$wxInfo
//     // 具体查看：
//     if (ctx.state.$wxInfo.loginState === 1) {
//         // loginState 为 1，登录态校验成功
//         ctx.state.data = ctx.state.$wxInfo.userinfo

//         console.log(`[ext] get baidu.com`)
        
//         async.series({
//           one: function (callback) {
//             request('http://www.baidu.com', function (error, response, body) {
//               if (!error && response.statusCode == 200) {
//                 callback(null, body)
//               }
//             })
//           }
//         }, function (err, results) {
//           ctx.state.data['ext'] = results
//         })
//     } else {
//         ctx.state.code = -1
//     }
// }
