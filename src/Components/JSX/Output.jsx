import React from 'react';
import '../CSS/Output.css';

const Output = () => {
  return (
    <div className="output-container">
      <aside className = "output-window">
        <div className = "img-container">
          <div className = "before-div">
            <img className = "img" id = "img-before"></img>
          </div>
          <div className = "after-div">
            <img className = "img" id = "img-after"></img>
          </div>
        </div>
        <div className="progress-container">
          <div className = "before"  id = "before-div"></div>
          <div className = "after"  id = "after-div"></div>
        </div>
      </aside>
      <button className="button" onClick={() => {
        var link = document.createElement('a');
        link.href = document.getElementById('img-after').src;
        link.download = 'Download.png';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      }}>Download</button>
    </div>
  )
}

export default Output
