import {getData} from '../api/getData.js';

const tbodyList=document.getElementById('tbodyList');
let p = '';

getData(
    `http://localhost:3000/api/product/`,
    {withCredentials:true}
  ).then(data=>{
    for (var i = 0; i < data.length; i++) {
        p = `<tr><td>${data[i].productName}</td><td>${data[i].productModel}</td><td>${data[i].price}</td><td>${data[i].measureUnit}</td><td>${data[i].inventory}</td><td><button class="check">Details</button><button class="editBtn" onclick="location.href='../html/editProduct.html?${data[i]._id}'">Edit</button><button class="deleteBtn"onclick="location.href='../html/product-delete.html?${data[i]._id}'">Delete</button></td></tr>`;
        tbodyList.innerHTML += p;
    }
  })
