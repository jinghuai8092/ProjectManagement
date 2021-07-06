import { postJSON } from './ajax/index.js';
import { SUCC_CODE, TIMEOUT } from './config.js'

const postData=(url,options)=>{
    return postJSON(url, {
        timeoutTime: TIMEOUT,
        ...options
    }).then(response => {

        if (response.code !== SUCC_CODE) 
        return response.data;
    })
        .catch(err => {
            console.error(err);
        })
}

export{
    postData
}