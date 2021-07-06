import {getData} from '../api/getData.js';

var a=getData(
    `http://localhost:3000/api/product/`,
  ).then(data=>{
      console.log(data);
  })
