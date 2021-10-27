import React from 'react';
import '../CSS/UploadButton.css';

const UploadButton = (props) => {
  return <button id = "upload-button" onClick = {props.upload}>Upload</button>
}

export default UploadButton;
