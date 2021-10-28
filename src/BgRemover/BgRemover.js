export const BgRemover = (url) => {

  const axios = require('axios');
  const FormData = require('form-data');
  const fs = require('fs');


  const formData = new FormData();
  formData.append('size', 'auto');
  formData.append('image_url', url);

  axios({
    method: 'post',
    url: 'https://api.remove.bg/v1.0/removebg',
    data: formData,
    responseType: 'arraybuffer',
    headers: {
      'Content-Type': 'multipart/form-data',
      'X-Api-Key': process.env.REACT_APP_BG_REMOVER_API_KEY,
    },
    encoding: null
  })
  .then((response) => {
    if(response.status !== 200) return console.error('Error:', response.status, response.statusText);
    let blob = new Blob( [ response.data ] );
    let url = URL.createObjectURL( blob );
    console.log(response.data);
    console.log(url);

    let img = document.getElementById('output-image');
    console.log(img);
    img.src = url;
  })
  .catch((error) => {
      return console.error('Request failed:', error);
  });

}