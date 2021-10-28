import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import {storage} from '../Database/Config';

// Importing the BG Remover function
import {BgRemover} from '../BgRemover/BgRemover';

export const upload = (file) => {

  const storageRef = ref(storage, 'images/' + file.name);
  const uploadTask = uploadBytesResumable(storageRef, file);

  uploadTask.on('state_changed',
    (snapshot) => {

      // Collecting the progress report for file upload
      const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
      console.log('Upload is ' + progress + '% done');
      switch (snapshot.state) {
        case 'paused':
          console.log('Upload is paused');
          break;
        case 'running':
          console.log('Upload is running');
          break;
        default:
          console.log('Working on ..');
          break;
      }
    }, 
    (error) => {

      // Catching errors
      switch (error.code) {
        case 'storage/unauthorized':
          break;
        case 'storage/canceled':
          break;
        case 'storage/unknown':
          break;
        default:
          console.log('Working on ..');
          break;
      }
    }, 
    () => {

      // Upload completed successfully, now we can get the download URL
      getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
        BgRemover(downloadURL);
      });
    }
  );

}