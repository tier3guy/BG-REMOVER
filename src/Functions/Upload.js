import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import {storage} from '../Database/Config';

export const upload = (file) => {

  if(file === null){
    alert('Insert a file first !');
    return;
  }

  const storageRef = ref(storage, 'images/' + file.name);
  const uploadTask = uploadBytesResumable(storageRef, file);


  uploadTask.on('state_changed',
    (snapshot) => {

      const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
      console.log('Upload is ' + progress + '% done');
      switch (snapshot.state) {
        case 'paused':
          console.log('Upload is paused');
          break;
        case 'running':
          console.log('Upload is running');
          break;
      }
    }, 
    (error) => {

      switch (error.code) {
        case 'storage/unauthorized':
          break;

        case 'storage/canceled':
          break;

        case 'storage/unknown':
          break;
      }
    }, 
    () => {
      // Upload completed successfully, now we can get the download URL
      getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
        console.log('File available at', downloadURL);
      });
    }
  );

}