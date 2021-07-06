/**
 * @description 创建商品
 * @author maple
 */

 const router = require('koa-router')()
 const {register,login}=require('../controller/user')
 const {SuccessModel,ErrorModel} =require('../res-model/index')

 router.prefix('/api/product')

 创建商品

 获取商品列表

 更新商品信息
 

 删除商品



 module.exports = router