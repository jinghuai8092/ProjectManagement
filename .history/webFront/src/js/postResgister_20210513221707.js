import {postData} from '../api/postData.js';


const username=document.getElementById('username');
const fullname=document.getElementById('fullname');
const gender=document.getElementById('gender');
const phone=document.getElementById('phone');
const email=document.getElementById('email');
const password1=document.getElementById('password1');
const password2=document.getElementById('password2');

const btn=document.getElementById('btn');


// var o=            {
//     username:`${username.value}`,
//     name:`${fullname.value}`,
//     gender:`${gender.value}`,
//     phone:`${phone.value}`,
//     email:`${email.value}`,
//     password:`${password1.value}`
// }
const usernameV =username.value
const   nameV=fullname.value
const    genderV=gender.value
const  phoneV=phone.value
const  emailV=email.value
const  passwordV=password1.value
console.log(usernameV)
var o =            {
    username:`${usernameV}`,
    name:`${nameV}`,
    gender:`${genderV}`,
    phone:`${phoneV}`,
    email:`${emailV}`,
    password:`${passwordV}`
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
