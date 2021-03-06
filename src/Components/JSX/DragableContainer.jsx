import React from 'react';
import '../CSS/DragableContainer.css';

// Importing Required Functions
import {BlockDefault} from '../../Functions/BlockDefaults';
import {ValidateFile} from '../../Functions/Validator';
import {CollectImage} from '../../Functions/ImageCollector';
import { upload } from '../../Functions/Upload';


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
    if(!ValidateFile(Image)){
      console.log('Invalid Format ...');
    }
    else upload(Image);
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
            if(!ValidateFile(Image)){
              console.log('Invalid Format ...');
            }
            else upload(Image); 

          }}>

        <p className = "font-light">Drag and Drop your File Here</p>
        <p className = "font-light">OR</p>

        <button className = "button" 
                id = "browse-btn" 
                onClick = {() => ImageFile.click()}>
                Browse Files
        </button>

      </div>
    </div>
  )
}

export default DragableContainer
