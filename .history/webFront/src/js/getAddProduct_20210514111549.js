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
        `http://localhost:3000/api/product/add`,
        {
            data: {
                "productName": `${productName.value}`,
                "productModel": `${productModel.value}`,
                "measureUnit": `${measureUnit.value}`,
                "price": `${price.value}`,
                "inventory": `${inventory.value}`,
            }  
        }).then(data=>{
            .then(data=>{
                if(data!=undefined){
                    console.log(data)
                    alert('Add successful')
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
        

    }