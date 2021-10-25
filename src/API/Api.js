// API Keys
const API_KEY = process.env.REACT_APP_BG_REMOVER_API_KEY;

// Importing Axios
const axios = require('axios');


// API Calling function
export const getRemovedBG = (image) => {
  axios({
    method : 'post',
    url : '',
    data : image,
    responseType : 'arraybuffer',
    headers : {
      ...image.getHeaders(),
      'X-Api-Key' : API_KEY
    },
    encoding : null
  })
  .then(
    () => console.log('BG REMOVAL SUCCESS')
  )
  .catch(
    (error) => console.log(error)
  )
}
