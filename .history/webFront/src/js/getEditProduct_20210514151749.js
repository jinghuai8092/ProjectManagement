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
    

  subBtn.addEventListener('click',function(){
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
        },
        { withCredentials: true }
        ).then(data=>{
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