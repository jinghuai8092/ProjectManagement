/**
 * @description 登录中间件
 * @author maple
 */

const {ErrorModel}=require('../res-model/index')

module.exports=async(ctx,next)=>{
    const session=ctx.session
    if(session &&session.userInfo){
        await next()
        return
    }
    ctx.body= new ErrorModel(10003,'登录验证失败')