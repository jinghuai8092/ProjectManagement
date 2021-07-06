import {postData} from '../api/postData.js';


const username=document.getElementById('username');
const fullname=document.getElementById('fullname');
const gender=document.getElementById('gender');
const phone=document.getElementById('phone');
const email=document.getElementById('email');
const password1=document.getElementById('password1');
const password2=document.getElementById('password2');

const btn=document.getElementById('btn');


var o=            {
    username:`${username}`,
    name:`${fullname}`,
    gender:`${gender}`,
    phone:`${phone}`,
    email:`${email}`,
    password:`${password1}`
}

btn.onclick=function(){
    if(password1.value==password2.value){
        console.log(o)
        postData(
            `http://localhost:3000/api/user/register`,

            ).then(data=>{
                console.log(data)
            })
    }
}
