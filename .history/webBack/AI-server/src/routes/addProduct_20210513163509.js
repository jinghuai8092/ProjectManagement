/**
 * @description 创建商品
 * @author maple
 */

const router = require('koa-router')()
const { createProduct, getProductList } = require('../controller/product')
const { SuccessModel, ErrorModel } = require('../res-model/index')

const loginCheck = require('../middleware/loginCheck')

router.prefix('/api/product')

//  创建商品
router.post('/add', loginCheck, async function (ctx, next) {
    const data = ctx.request.body

    //创建数据
    try {
        const newProduct = await createProduct(data)
        ctx.body = new SuccessModel(newProduct)
    } catch (ex) {
        console.error(ex)
        ctx.body = new ErrorModel(10004, '创建商品失败')
    }
})

//  获取商品列表
    router.get('/', loginCheck, async function (ctx, next) {
    //获取列表
    const list = await getProductList()

    ctx.body=new SuccessModel(list)
})

//查询商品
router.get('/:id',loginCheck,async function(ctx, next){
    const id=ctx.params.id
    
})

//  更新商品信息


//  删除商品



module.exports = router