import { postData } from '../api/postData.js';


const username = document.getElementById('username');
const password = document.getElementById('password');

const btn = document.getElementById('loginBtn');

let x = {}

btn.onclick = function () {
    if (password1.value == password2.value) {

    postData(
            `http://localhost:3000/api/user/login`,
            {
                data: {
                    "username": `${username.value}`,
                    "password": `${password.value}`
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
