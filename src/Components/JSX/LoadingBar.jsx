import React from 'react';
import '../CSS/LoadingBar.css';

const LoadingBar = () => {
  return (
    <div className = "bar">
      <div className = "loaded"></div>
      <div className = "unloaded"></div>
    </div>
  )
}

export default LoadingBar
