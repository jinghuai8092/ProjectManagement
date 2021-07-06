
import { getData } from '../api/getData.js';

const del = document.getElementById('delete');
const cancel = document.getElementById('cancel');

var getFromBefore = window.location.href.split("?")[1];
console.log(getFromBefore)


del.addEventListener('click', function () {
    getData(
        `http://localhost:3000/api/delete/${getFromBefore}`,
        { withCredentials: true }
    )
    window.location.href="about:blank";

    window.close();
}, true)
cancel.addEventListener('click', function () {
    window.location.href="about:blank";
    window.close();
}, true)





