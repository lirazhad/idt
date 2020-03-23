import * as axios from 'axios';


export function networkCall(url) {
   return new Promise(function(resolve, reject) {
    axios.get(url)
    .then(function (response) {
        resolve(response)
    })
    .catch(async function (error) {
        reject(error);
    });
        
      });
  }