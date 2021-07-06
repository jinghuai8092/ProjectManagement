import {postData} from '../api/postData.js';


const username=document.getElementById('username');
const fullname=document.getElementById('fullname');
const gender=document.getElementById('gender');
const phone=document.getElementById('phone');
const email=document.getElementById('email');
const password1=document.getElementById('password1');
const password2=document.getElementById('password2');

const btn=document.getElementById('btn');

btn.onclick=function(){
    console.log('a')
    if(password1===password2){
        postData(
            `http://localhost:3000/api/user/register`,
            {
                "username":`${username.value}`,
                "name":`${fullname.value}`,
                "gender":`${gender.value}`,
                "phone":`${phone.value}`,
                "email":`${email.value}`,
                "password":`${password.value}`
            }
            ).then(data=>{
                console.log(data)
            })
    }
}
