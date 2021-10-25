import React from 'react';
import '../CSS/DragableContainer.css';
import {BlockDefault} from '../../Functions/BlockDefaults';
import {ValidateFile} from '../../Functions/Validator';
import {CollectImage} from '../../Functions/ImageCollector';


const DragableContainer = () => {
  
  // Creating a fake input over the 'Browse Files Button'
  const ImageFile = document.createElement('input');
  ImageFile.type = 'file';
  ImageFile.accept = 'image/png, image/jpeg, image/jpg';

  ImageFile.addEventListener('change', () => {
    const Image = ImageFile.files[0];
    if(ValidateFile(Image)) console.log('File Accepted : ', Image);
    else console.log('Invalid Format ...');
  })
  

  return (
    <div className = "dragable-container"
         onDragOver = {(event) => {BlockDefault(event)}}
         onDrag = {(event) => {BlockDefault(event)}}
         onDragEnter = {(event) => {BlockDefault(event)}}
         onDrop = {(event) => {
          BlockDefault(event);
          const Image = CollectImage(event);
          if(ValidateFile(Image)) console.log('File Accepted : ', Image);
          else console.log('Invalid Format ...');
         }}>

      <p className = "font-light">Drag and Drop your File Here</p>
      <p className = "font-light">OR</p>
      <button className = "browse-button" id = "browse-btn" onClick = {() => ImageFile.click()}>
        Browse Files
      </button>
    </div>
  )
}

export default DragableContainer
