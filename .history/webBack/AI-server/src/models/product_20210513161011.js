/**
 * @description user model
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
     
     
 }
 ,{timestamps:true}
 )

 const User=mongoose.model('users',Schema)

 module.exports=User