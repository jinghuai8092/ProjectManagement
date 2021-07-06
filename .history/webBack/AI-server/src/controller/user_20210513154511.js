/**
 * @description user controller
 * @author maple
 */

const User = require('../models/user')
/**
 * 
 * @param {String} username 
 * @param {String} name 
 * @param {String} gender 
 * @param {String} phone 
 * @param {String} email 
 * @param {String} password 
 * @returns 
 */

async function register(username,name,gender,phone,email,password){
    //保存到数据库
    const newUser = await User.create({username,name,gender,phone,email,password})
    return newUser
}
/**
 * 
 * @param {String} username 
 * @param {String} password 
 * @returns 
 */
async function login(username,password){
    const user=await User.findOne({username,password})
    if(user!=null){
        return true
    }
    else{
        return false
    }
}

module.exports={
    register,
    login
}