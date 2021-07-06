import {getData} from '../api/getData.js';
import {postData} from '../api/postData.js';

const tbodyList=document.getElementById('tbodyList');
const searchBtn=document.getElementById('searchBtn');
const searchText=document.getElementById('searchText');
let p = '';

var iTop = (window.screen.height-30-190)/2;       
var iLeft = (window.screen.width-10-200)/2;  

getData(
    `http://localhost:3000/api/product/`,
    {withCredentials:true}
  ).then(data=>{
    if(data!=null){
    for (var i = 0; i < data.length; i++) {
      p = `<tr><td>${data[i].productName}</td><td>${data[i].productModel}</td><td>${data[i].price}</td><td>${data[i].measureUnit}</td><td>${data[i].inventory}</td><td><button class="editBtn" onclick="location.href='../html/editProduct.html?${data[i]._id}'">Edit</button><button class="deleteBtn"onclick="window.open('../html/product-delete.html?${data[i]._id}','_blank','location=yes,top=${iTop}，left=${iLeft},height=190px,width=200px,scrollbars=yes,status=yes');">Delete</button></td></tr>`;
        tbodyList.innerHTML += p;
    }
  }else{
    alert("Failed to connect to database. Please try again!")
  }
  })


searchBtn.onclick=function(){
  tbodyList.innerHTML=''
  postData(
    'http://localhost:3000/api/product/search/product',
    {
      data:{
        "productName":`${searchText.value}`
      }
    }
  ).then(data=>{
    for (var i = 0; i < data.length; i++) {
      p = `<tr><td>${data[i].productName}</td><td>${data[i].productModel}</td><td>${data[i].price}</td><td>${data[i].measureUnit}</td><td>${data[i].inventory}</td><td><button class="editBtn" onclick="location.href='../html/editProduct.html?${data[i]._id}'">Edit</button><button class="deleteBtn"onclick="window.open('../html/product-delete.html?${data[i]._id}','_blank','location=yes,height=190px,width=200px,scrollbars=yes,status=yes');">Delete</button></td></tr>`;
      tbodyList.innerHTML += p;
  }
  // console.log(data)
  })
}