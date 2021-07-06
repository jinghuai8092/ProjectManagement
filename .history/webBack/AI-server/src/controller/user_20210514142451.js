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
 * @param {String} resetLink 
 * @returns 
 */

async function register(username, name, gender, phone, email, password) {
    //保存到数据库
    const newUser = await User.create({ username, name, gender, phone, email, password })
    return newUser
}
/**
 * 
 * @param {String} username 
 * @param {String} password 
 * @returns 
 */
async function login(username, password) {
    const user = await User.findOne({ username, password })
    if (user != null) {
        return true
    }
    else {
        return false
    }
}
let random6Number = ''

async function reset(username, email) {
    const user = await User.findOne({ username, email })
    if (user != null) {
        random6Number = Math.random().toString().slice(-6)
        console.log(random6Number)
        const users = await User.findOneAndUpdate(
            {username:username},
            {resetLink: random6Number }
        )
        return random6Number
    }
    else {
        return null
    }
}
async function resetPassword(username,resetLink,password){
    const user=await User.findOne({username,resetLink})
    if (user != null) {
        let pwd=password
        const users = await User.findOneAndUpdate(
            {username:username},
            {password:`${password}`}
        )
        return users
    }
    else {
        return null
    }
}

module.exports = {
    register,
    login,
    reset,
    resetPassword
}