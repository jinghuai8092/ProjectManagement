/**
 * @description product controller
 * @author maple
 */

const Products=require('../models/product')

async function createProduct(data){
    const product =await Products.create({
        ...data
    })
    return product
}

async function getProductList(){
    const list=await Products.find().sort({updatedAt:-1})

    return list
}

async function getProductById(id){
    const product=await Products.findById(id)

    return product
}

async function updateProduct(id, data){
    const product=await Products.findOneAndUpdate(
        {_id:id},
        {...data},
        {new:true}

    )
    return product
}

async function deleteProduct(id){
    await Products.findOneAndRemove({
        _id:id
    })
    return 
}

async function getProductByInput(input){
    const product=await Products.find(input).sort({updatedAt:-1})

    return product
}
module.exports={
    createProduct,
    getProductList,
    getProductById,
    updateProduct,
    deleteProduct,
    getProductByInput
}