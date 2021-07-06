import {getData} from '../api/getData.js';
import {postData} from '../api/postData.js';

const productName = document.getElementById('productName');
const productModel=document.getElementById('productModel');
const measureUnit=document.getElementById('measureUnit');
const price=document.getElementById('price');
const inventory=document.getElementById('inventory');
const subBtn=document.getElementById('subBtn');



var getFromBefore = window.location.href.split("?")[1];
console.log(getFromBefore)

getData(
    `http://localhost:3000/api/product/${getFromBefore}`,
    // 'http://localhost:3000/api/editProduct/6024128556c1f6290ca91223',
    {withCredentials:true}
  ).then(
    data=>{
        console.log(data)
            id=data._id;
            productName.value=data.name;
            productModel.value=data.imgUrl;
            measureUnit.value=data.imgUrl2;
            price.value=data.imgUrl3;
            inventory.value=data.imgUrl4;

      }
  )