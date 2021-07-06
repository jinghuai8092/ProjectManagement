/**
 * @description 创建商品
 * @author maple
 */

const router = require('koa-router')()
const { createProduct, getProductList,getProductById,updateProduct } = require('../controller/product')
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

//查询单个商品信息
router.get('/:id',loginCheck,async function(ctx, next){
    const id=ctx.params.id

    const product =await getProductById(id)
    ctx.body=new SuccessModel(product)
})

//  更新商品信息
router.patch('/:id',loginCheck,async function(ctx,next)){
    const id=ctx.params.id
    const data= ctx.request.body

    const newProduct=await updateProduct(id,data)
    ctx.body=new SuccessModel(newProduct)

}

//  删除商品



module.exports = router