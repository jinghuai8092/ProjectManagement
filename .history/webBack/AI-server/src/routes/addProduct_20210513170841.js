/**
 * @description 创建商品
 * @author maple
 */

const router = require('koa-router')()
const { createProduct, getProductList,getProductById,updateProduct,deleteProduct } = require('../controller/product')
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

    try {
        const list = await getProductList()
        ctx.body=new SuccessModel(list)
    } catch (ex) {
        console.error(ex)
        ctx.body = new ErrorModel(10005, '获取商品列表失败')
    }

})

//查询单个商品信息
router.get('/:id',loginCheck,async function(ctx, next){
    const id=ctx.params.id


    try {
        const product =await getProductById(id)
        ctx.body=new SuccessModel(product)
    } catch (ex) {
        console.error(ex)
        ctx.body = new ErrorModel(10006, '查询单个商品信息失败')
    }
})

//  更新商品信息
router.patch('/:id',loginCheck,async function(ctx,next){
    const id=ctx.params.id
    const data= ctx.request.body

    try {
        const newProduct=await updateProduct(id,data)
        ctx.body=new SuccessModel(newProduct)
    } catch (ex) {
        console.error(ex)
        ctx.body = new ErrorModel(10007, '更新商品信息失败')
    }
})

//  删除商品
router.get('/delete/:id',loginCheck,async function(ctx,next){
    const id=ctx.params.id

    try {
        await deleteProduct(id)
        ctx.body=new SuccessModel("删除商品成功")
    } catch (ex) {
        console.error(ex)
        ctx.body = new ErrorModel(10008, '删除商品失败')
    }
})


//  商品查询
router.get('/search/:input',loginCheck,async function(ctx, next){
    const input=ctx.params.input


    try {
        const product =await getProductById(input)
        ctx.body=new SuccessModel(product)
    } catch (ex) {
        console.error(ex)
        ctx.body = new ErrorModel(10009, '商品信息查询失败')
    }
})


module.exports = router