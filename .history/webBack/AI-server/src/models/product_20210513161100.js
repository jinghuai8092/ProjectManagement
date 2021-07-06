/**
 * @description products model
 * @author maple
 */


 const mongoose=require('../db/db')
 const {mongo} =require('../db/db')

 const Schema=mongoose.Schema({
     productName:{
         type:String,
         require:true,
         unique:true
     },
     productModel:String,
     measureUnit:String,
     price:String,
     inventory:String
     
 }
 ,{timestamps:true}
 )

 const Products=mongoose.model('users',Schema)

 module.exports=User