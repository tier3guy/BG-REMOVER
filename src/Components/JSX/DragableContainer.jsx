import React from 'react';
import '../CSS/DragableContainer.css';
import {BlockDefault} from '../../Functions/BlockDefaults';
import {ValidateFile} from '../../Functions/Validator';
import {CollectImage} from '../../Functions/ImageCollector';
import UploadButton from './UploadButton';
import { upload } from '../../Functions/Upload';

const DragableContainer = () => {

  // Creating Image state
  let Image = null;
  
  // Creating a fake input over the 'Browse Files' Button
  const ImageFile = document.createElement('input');
  ImageFile.type = 'file';
  ImageFile.accept = 'image/png, image/jpeg, image/jpg';

  // Image Uploading Event Listener
  ImageFile.addEventListener('change', () => {
    Image = ImageFile.files[0];
    if(ValidateFile(Image)){
      console.log(Image);
      upload(Image);
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
      <UploadButton upload = {upload}/>
    </div>
  )
}

export default DragableContainer
