/**
 * @description εε»Ίεε
 * @author maple
 */

 const router = require('koa-router')()
 const {register,login}=require('../controller/user')
 const {SuccessModel,ErrorModel} =require('../res-model/index')

 router.prefix('/api/product')



 module.exports = router