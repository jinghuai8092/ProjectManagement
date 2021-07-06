/**
 * @description user controller
 * @author maple
 */

const User = require('../models/User')
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

module.exports={
    register
}