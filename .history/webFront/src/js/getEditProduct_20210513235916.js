import {getData} from '../api/getData.js';
import {postData} from '../api/postData.js';

const productName = document.getElementById('productName');
const productModel=document.getElementById('productModel');
const measureUnit=document.getElementById('measureUnit');
const price=document.getElementById('price');
const inventory=document.getElementById('inventory');
const subBtn=document.getElementById('subBtn');

let id='';

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
            productName.value=data.productName;
            productModel.value=data.productModel;
            measureUnit.value=data.measureUnit;
            price.value=data.price;
            inventory.value=data.inventory;

      }
  )

  edit.onclick=()=>{
    postData(
        'http://localhost:3000/api/editProduct/edit',
        {
            data: {
                "_id":`${id}`,
                "name": `${name.value}`,
                "imgUrl": `../images/${imgUrl.value}`,
                "imgUrl2": `../images/${imgUrl2.value}`,
                "imgUrl3": `../images/${imgUrl3.value}`,
                "imgUrl4": `../images/${imgUrl4.value}`,
                "beforePrices": `${B_Prices.value}`,
                "prices": `${N_Prices.value}`,
                "color": `${color.value}`,
                "detail": `${detail.value}`,
                "advantage": `${Advantage.value}`
            }  
        })
        alert('edit successful')

    }