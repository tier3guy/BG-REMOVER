import React from 'react';
import '../CSS/UploadButton.css';
import { upload } from '../../Functions/Upload';

const UploadButton = (props) => {
  return <button id = "upload-button" onClick = {() => {
    console.log(props.file);
  }}>Upload</button>
}

export default UploadButton;
