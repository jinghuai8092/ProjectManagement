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
    const list=await Products.find(id).sort({updatedAt:-1})

    return list
}

module.exports={
    createProduct,
    getProductList
}