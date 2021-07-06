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
     name:String,
     gender:String,
     phone:String,
     email:String,
     password:String,
     
 }
 ,{timestamps:true}
 )

 const User=mongoose.model('users',Schema)

 module.exports=User