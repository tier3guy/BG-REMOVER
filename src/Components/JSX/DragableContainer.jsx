import React from 'react';
import '../CSS/DragableContainer.css';

// Importing Required Functions
import {BlockDefault} from '../../Functions/BlockDefaults';
import {ValidateFile} from '../../Functions/Validator';
import {CollectImage} from '../../Functions/ImageCollector';
import { upload } from '../../Functions/Upload';

// Importing Components
import UploadButton from './UploadButton';
import LoadingBar from './LoadingBar';

const DragableContainer = () => {

  // Creating Image state
  let Image = null;
  
  // Creating a fake input over the 'Browse Files' Button
  const ImageFile = document.createElement('input');
  ImageFile.type = 'file';
  ImageFile.accept = 'image/png, image/jpeg, image/jpg';

  // Image Uploading Event Listener
  ImageFile.addEventListener('change', async () => {
    Image = ImageFile.files[0];
    if(ValidateFile(Image)){
      console.log(Image);
      await upload(Image);
    } 
    else console.log('Invalid Format ...');
  })
  

  return (
    <div className = "dragable-main">
      <div className = "dragable-container"
          onDragOver = {(event) => {BlockDefault(event)}}
          onDrag = {(event) => {BlockDefault(event)}}
          onDragEnter = {(event) => {BlockDefault(event)}}
          onDrop = {(event) => {
            BlockDefault(event);
            Image = CollectImage(event);
            if(ValidateFile(Image)){
              console.log(Image);
            } 
            else console.log('Invalid Format ...');
          }}>

        <p className = "font-light">Drag and Drop your File Here</p>
        <p className = "font-light">OR</p>
        <button className = "browse-button" id = "browse-btn" onClick = {() => ImageFile.click()}>
          Browse Files
        </button>
      </div>
      <div className = "dragable-loader-container">
        <UploadButton upload = {upload}/>
        <LoadingBar/>
      </div>
    </div>
  )
}

export default DragableContainer
