import { postData } from '../api/postData.js';


const username = document.getElementById('username');
const password = document.getElementById('password');

const btn = document.getElementById('loginBtn');

let x = {}

btn.onclick = function () {


    postData(
            `http://localhost:3000/api/user/login`,
            {
                data: {
                    "username": `${username.value}`,
                    "password": `${password.value}`
                },
            },
            { withCredentials: true }

        ).then(data=>{
            if(data!=undefined){
                alert('Login success!')
                window.location.href='../html/index.html'
            }
            else{
                alert('Incorrect username or password please try again!')
                username.value=""
                password.value=""
            }
            }
        )
        
        // window.location.href='../html/login.html'
    }

