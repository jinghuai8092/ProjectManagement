const router = require('koa-router')()
const {register}=require('../controller/user.js')

router.prefix('/api/user')

// router.get('/', function (ctx, next) {
//   ctx.body = 'this is a users response!'
// })

// router.get('/bar', function (ctx, next) {
//   ctx.body = 'this is a users/bar response'
// })
router.post('/register',function(ctx,next){
  const {username,name,gender,phone,email,password}=ctx.request.body
  //新建用户

  try{
    const newUser= await register(username,name,gender,phone,email,password)
    ctx.body={
      errno:0,
      data:newUser
    }
  }catch(ex){
    console.error(ex)
    ctx.body={
      errno:10001,
    message:`注册失败 -${ex.message}`
  }
  }
})

module.exports = router
