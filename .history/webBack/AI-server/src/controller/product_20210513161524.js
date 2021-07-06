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

module.exports={
    createProduct
}