import React from 'react'
import '../CSS/DragableContainer.css'

const DragableContainer = () => {
  return (
    <div className = "dragable-container">
      <p className = "font-glow">Drag and Drop your File Here</p>
      <button className = "browse-button">Browse Filse</button>
    </div>
  )
}

export default DragableContainer
