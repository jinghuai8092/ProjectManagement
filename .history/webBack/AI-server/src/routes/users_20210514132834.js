const router = require('koa-router')()
const {register,login}=require('../controller/user')
const {SuccessModel,ErrorModel} =require('../res-model/index')
const nodemailer=require('nodemailer')


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
    ctx.session.userInfo={username} //设置session

    ctx.body=new SuccessModel(username)
  }else{
    //失败
    ctx.body=new ErrorModel(10002,'登录验证失败')
  }
})

// 重置密码
router.post('/resetPassword',async function(ctx,next){
  const {username,email}=ctx.request.body
  const result=await reset(username,email)
  if(result!=null){
    var transporter=nodemailer.createTransport({
      host:'gmail',
      auth:{
        user:'',
        pass:''
      }
    });
    let mailOptions={
      from:'maple9821@gmail.com',
      to:`${email}`,
      subject:'Reset Your Password',
      text:`Your security code is ${result}`
    }

    transporter.sendMail(mailOptions,function(err,data){
      if(err){
        console.log('error occurs');

      }else{
        console.log('email sent~!')
      }
    })
  }
})

module.exports = router
