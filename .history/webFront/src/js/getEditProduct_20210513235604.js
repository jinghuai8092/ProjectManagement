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

