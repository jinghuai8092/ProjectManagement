import {getData} from '../api/getData.js';



getData(
    `http://localhost:3000/api/product/`,
    {withCredentials:true}
  ).then(data=>{
      console.log(data);
  })
