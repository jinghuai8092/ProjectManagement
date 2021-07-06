// let windowWidth=window.innerWidth;
// console.log(windowWidth)
// const main=document.getElementById('main');

const productM=document.getElementById('productM');
const productMul=document.getElementById('productMul');

productM.onclick=function(){
    if(productMul.style.display=="none"){
        productMul.style.display="inline-block"
    }
    else{
        productMul.style.display="none"
    }
}

