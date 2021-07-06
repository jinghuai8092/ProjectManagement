const sendBtn=document.getElementById('SendBtn')
const ChangeBtn=document.getElementById('ChangeBtn')
const textBox1=document.getElementById('textBox1')
const textBox2=document.getElementById('textBox2')
const btn1=document.getElementById('btn1')
const btn2=document.getElementById('btn2')
const securityCode=document.getElementById('securityCode')
const email=document.getElementById('email')
const username=document.getElementById('username')
const rnewPassword=document.getElementById('rnewPassword')
const newPassword=document.getElementById('newPassword')

import {postData} from '../api/postData.js';


sendBtn.addEventListener('click',function(){
    console.log(id);
  postData(
      `http://localhost:3000/api/product/${getFromBefore}`,
      {
          data: {
              "username":`${username.value}`,
              "email":`${email.value}`
            }  
      }).then(data=>{
          if(data!=undefined){
              console.log(data)
              alert('edit successful')
              window.location.href='../html/index.html'
          }else{
              
                  productName.value=''
                  productModel.value=''
                  measureUnit.value=''
                  price.value=''
                  inventory.value=''
                  alert('edit product failure!')
          }
          
      })

      console.log("a")
  },true)