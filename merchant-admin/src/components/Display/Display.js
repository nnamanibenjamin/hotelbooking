import React from 'react';
import './Display.css';

const Display = ({ children }) => {
  return (
    <div className="backdrop">
        <div className=" display-container">
          <div className="row ds-cont">
            {children}
          </div>
        </div>
    </div>
  )
}

export default Display;