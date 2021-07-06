import {postData} from '../api/postData.js';

const productName = document.getElementById('productName');
const productModel=document.getElementById('productModel');
const measureUnit=document.getElementById('measureUnit');
const price=document.getElementById('price');
const inventory=document.getElementById('inventory');
const subBtn=document.getElementById('subBtn');

let id='';

  subBtn.onclick=()=>{
      console.log(id);
    postData(
        `http://localhost:3000/api/product/${getFromBefore}`,
        {
            data: {
                "_id":`${id}`,
                "productName": `${productName.value}`,
                "productModel": `${productModel.value}`,
                "measureUnit": `${measureUnit.value}`,
                "price": `${price.value}`,
                "inventory": `${inventory.value}`,
            }  
        }).then(data=>{
            console.log(data)
        })
        alert('Add successful')
        window.location.href='../html/index.html'
        console.log("a")
    }