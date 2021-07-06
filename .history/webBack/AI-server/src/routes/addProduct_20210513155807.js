/**
 * @description 创建商品
 * @author maple
 */

 const router = require('koa-router')()
 const {register,login}=require('../controller/user')
 const {SuccessModel,ErrorModel} =require('../res-model/index')

 router.prefix('/api/product')



 module.exports = router