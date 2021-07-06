/**
 * @description user controller
 * @author maple
 */

import User from '../models/User'

async function register(username,name,gender,phone,email,password){
    //保存到数据库
    const newUser=await User.create({username,name,gender,phone,email,password})
    return newUser
}

module.exports={
    register
}