const router = require('koa-router')()
const {register}=require('../controller/user')

router.prefix('/api/user')

// router.get('/', function (ctx, next) {
//   ctx.body = 'this is a users response!'
// })

// router.get('/bar', function (ctx, next) {
//   ctx.body = 'this is a users/bar response'
// })
router.post('/register',function(ctx,next){
  const {username ,name,gender,phone,email,password}=ctx.request.body
  //新建用户
  const res=await register(username,name,gender,phone,email,password)
})

module.exports = router
