const sendBtn=document.getElementById('SendBtn')
const ChangeBtn=document.getElementById('ChangeBtn')
const textBox1=document.getElementById('textBox1')
const textBox2=document.getElementById('textBox2')
const btn1=document.getElementById('btn1')
const btn2=document.getElementById('btn2')

sendBtn.addEventListener('click',function(){
    textBox1.className="loginInfo displayNone"
    textBox2.className="loginInfo "
    btn1.className="loginBtn displayNone"
    btn2.className="loginBtn"

},true)