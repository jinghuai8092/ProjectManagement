import { postData } from '../api/postData.js';


const username = document.getElementById('username');
const fullname = document.getElementById('fullname');
const gender = document.getElementById('gender');
const phone = document.getElementById('phone');
const email = document.getElementById('email');
const password1 = document.getElementById('password1');
const password2 = document.getElementById('password2');

const btn = document.getElementById('btn');

let x = {}

btn.onclick = function () {
    if (password1.value == password2.value) {

    postData(
            `http://localhost:3000/api/user/register`,
            {
                data: {
                    "username": `${username.value}`,
                    "name": `${fullname.value}`,
                    "gender": `${gender.value}`,
                    "phone": `${phone.value}`,
                    "email": `${email.value}`,
                    "password": `${password1.value}`
                },

                withCredentials: true
            }
        ).then(data=>{
            if(data!=undefined){
                alert('Register success!')
                window.location.href='../html/login.html'
            }
            else{
                alert('Username already have! Please try another one!')
                username.value=""
                fullname.value=""
                gender.value=""
                phone.value=""
                email.value=""
                password1.value=""
                password2.value=""
            }
            }
        )
        
        // window.location.href='../html/login.html'
    }
    else{
        alert("The password you entered is different. Please re-enter it")
        password1.value=""
        password2.value=""
    }
}
