// let windowWidth=window.innerWidth;
// console.log(windowWidth)
// const main=document.getElementById('main');

const productM=document.getElementById('productM');
const productMul=document.getElementById('productMul');
const productIcleft=document.getElementById('productIcleft');
const resetBtn=document.getElementById('resetBtn');
const searchText=document.getElementById('searchText');

productM.onclick=function(){
    if(productMul.style.display=="none"){
        productMul.style.display="inline-block"
        productIcleft.style.transform="rotate(90deg)";
    }
    else{
        productMul.style.display="none";
        productIcleft.style.transform="none";
    }
}

resetBtn.onclick=function(){
    window.location.href='../html/index.html'
    searchText.value=''
}