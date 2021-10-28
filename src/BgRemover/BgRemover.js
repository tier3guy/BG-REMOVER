export const BgRemover = (url) => {

  // Accuring necessary modules
  const axios = require('axios');
  const FormData = require('form-data');

  // Creating a new form-data
  const formData = new FormData();
  formData.append('size', 'auto');
  formData.append('image_url', url);

  // Calling to 'remove.bg API' 
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

    // converting responsed Arraybuffer data to blob
    let blob = new Blob( [ response.data ] );

    // creating a URL for the blob
    let url = URL.createObjectURL( blob );

    // putting the url as the source of the image in the output-window
    let image = document.getElementById('img-after');
    console.log(url);
    image.src = url;
  })
  .catch((error) => {

      // Catching the errors if any
      return console.error('Request failed:', error);
  });

}