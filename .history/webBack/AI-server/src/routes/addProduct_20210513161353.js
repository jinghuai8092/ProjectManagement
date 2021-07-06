/**
 * @description 创建商品
 * @author maple
 */

 const router = require('koa-router')()
 const {register,login}=require('../controller/user')
 const {SuccessModel,ErrorModel} =require('../res-model/index')

 const loginCheck = require('../middleware/loginCheck')

 router.prefix('/api/product')

//  创建商品
router.post('/add', loginCheck,async function(ctx,next){
    const data=ctx.request.body

    //创建数据
    
})

//  获取商品列表

//  更新商品信息
 

//  删除商品



 module.exports = router