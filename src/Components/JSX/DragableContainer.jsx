import React from 'react';
import '../CSS/DragableContainer.css';


const DragableContainer = () => {
  
  // Creating a fake input over the 'Browse Files Button'
  const ImageFile = document.createElement('input');
  ImageFile.type = 'file';
  ImageFile.accept = 'image/png, image/jpeg, image/jpg';
  
  const BlockDefault = (e) => {
    e.preventDefault();
    e.stopPropagation();
  }
  return (
    <div className = "dragable-container"
         onDragOver = {(event) => {BlockDefault(event)}}
         onDrag = {(event) => {BlockDefault(event)}}
         onDragEnter = {(event) => {BlockDefault(event)}}
         onDrop = {(event) => {BlockDefault(event)}}>
         
      <p className = "font-light">Drag and Drop your File Here</p>
      <p className = "font-light">OR</p>
      <button className = "browse-button" id = "browse-btn" onClick = {() => ImageFile.click()}>
        Browse Files
      </button>
    </div>
  )
}

export default DragableContainer
