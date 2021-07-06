
import { getData } from '../api/getData.js';

const del = document.getElementById('delete');
const cancel = document.getElementById('cancel');

var getFromBefore = window.location.href.split("?")[1];
console.log(getFromBefore)


del.addEventListener('click', function () {
    getData(
        `http://localhost:3000/api/deleteProduct/${getFromBefore}`,
        { withCredentials: true }
    )
    window.open('','_self').close()
}, true)
cancel.addEventListener('click', function () {
    window.open('','_self').close()
}, true)





