import {getData} from '../api/getData.js';

const tbodyList=document.getElementById('tbodyList');


getData(
    `http://localhost:3000/api/product/`,
    {withCredentials:true}
  ).then(data=>{
    for (var i = 0; i < data.length; i++) {
        p = `<tr><td>${data[i].productName}</td><td>${data[i].productModel}</td><td>${data[i].price}</td><td>${data[i].measureUnit}</td><td>${data[i].inventory}</td><td><button class="check">Details</button><button class="editBtn">Edit</button><button class="deleteBtn">Delete</button></td></tr>`;
        tbody.innerHTML += p;
    }
  })
