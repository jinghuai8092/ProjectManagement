/**
 * @description user model
 * @author maple
 */


 const mongoose=require('../db/db')
 const {mongo} =require('../db/db')


 const Schema=mongoose.Schema({
     username:{
         type:String,
         require:true,
         unique:true
     },
     password:String,
     
 }
 ,{timestamps:true}
 )

 const User=mongoose.model('users',Schema)

 module.exports=User