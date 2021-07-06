const sendBtn = document.getElementById('SendBtn')
const ChangeBtn = document.getElementById('ChangeBtn')
const textBox1 = document.getElementById('textBox1')
const textBox2 = document.getElementById('textBox2')
const btn1 = document.getElementById('btn1')
const btn2 = document.getElementById('btn2')
const securityCode = document.getElementById('securityCode')
const email = document.getElementById('email')
const username = document.getElementById('username')
const rnewPassword = document.getElementById('rnewPassword')
const newPassword = document.getElementById('newPassword')

import { postData } from '../api/postData.js';


sendBtn.addEventListener('click', function () {
    postData(
        `http://localhost:3000/api/user/sendEmail`,
        {
            data: {
                "username": `${username.value}`,
                "email": `${email.value}`
            }
        }).then(data => {
            if (data != undefined) {
                console.log(data)
                alert('email sent,please check your email!')
                textBox1.className = "loginInfo displayNone"
                textBox2.className = "loginInfo "
                btn1.className = "loginBtn displayNone"
                btn2.className = "loginBtn"
            } else {
                username.value = ''
                email.value = ''
                alert('username or email wrong!')
            }

        })

}, true)

sendBtn.addEventListener('click', function () {
    if (rnewPassword.value == newPassword.value) {
        postData(
            `http://localhost:3000/api/user/resetPassword`,
            {
                data: {
                    "username": `${username.value}`,
                    "resetLink": `${securityCode.value}`
                    "password":`${newPassword.value}`
                }
            }).then(data => {
                if (data != undefined) {
                    console.log(data)
                    alert('Reset password success!')

                } else {
                    securityCode.value = ''
                    rnewPassword.value = ''
                    newPassword.value = ''
                    alert('Security Code is Wrong!')
                }

            }
            )
    }
    else{
        alert("Two passwords are not the same!")
        securityCode.value = ''
        rnewPassword.value = ''
        newPassword.value = ''
    }


}, true)