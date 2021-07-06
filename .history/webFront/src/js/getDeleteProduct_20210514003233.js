
import { getData } from '../api/getData.js';

const del =document.getElementById('delete');
const cancel=document.getElementById('cancel');

var getFromBefore = window.location.href.split("?")[1];
console.log(getFromBefore)


del.onclick=()=>{
    getData(
        `http://localhost:3000/api/deleteProduct/${getFromBefore}`,
        { withCredentials: true }
    )
    Xadmin.close();
}

cancel.onclick=()=>{
    Xadmin.close();
}





