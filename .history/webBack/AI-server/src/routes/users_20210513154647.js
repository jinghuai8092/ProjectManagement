const router = require('koa-router')()
const {register,login}=require('../controller/user')
const {SuccessModel,ErrorModel} =require('../res-model/index')

router.prefix('/api/user')

//注册
router.post('/register',async function(ctx,next){
  const {username,name,gender,phone,email,password}=ctx.request.body

  try{
    const newUser= await register(username,name,gender,phone,email,password)
    ctx.body=new SuccessModel(newUser)
  }catch(ex){
    console.error(ex)
    ctx.body=new ErrorModel(10001,`注册失败-${ex.message}`)
  }
})


//登录
router.post('/login',async function(ctx,next){
  const {username,password}=ctx.request.body
  const result=await login(username,password)
  if(result){
    //成功

  }else{
    //失败
    ctx.body=new ErrorModel(10002,'登录验证失败')
  }
})
module.exports = router
