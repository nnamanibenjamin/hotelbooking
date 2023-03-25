import React from 'react';
import './Personal.css';

const Personal = ({ onNext }) => {
  return (
    <div className='personal'>
        <form>
          <div className="form-firstlayer">

          <div className="personal-lay">
            <h2> * Email Address  </h2>
            <input 
                type="email" 
                className="form-control" 
              />
          </div>

          <div className="personal-grid">
            <h2> * Firstname </h2>
            <input 
              type="text" 
              className="form-control" 
            />
          </div>

          <div className="personal-grid">
            <h2> * Lastname  </h2>
            <input 
              type="text" 
              className="form-control" 
            />
          </div>

          <div className="personal-lay">
            <h2> * Phone Number  </h2>
            <input 
                type="email" 
                className="form-control" 
              />
          </div>

          <div className="personal-grid">
            <h2> * Password  </h2>
            <input 
                type="email" 
                className="form-control" 
              />
          </div>

          <div className="personal-grid">
            <h2> * Confirm your Password </h2>
            <input 
              type="text" 
              className="form-control" 
            />
          </div>

          
          </div>
        </form>

        <button className="next-button" onClick={onNext}> Continue </button>

    </div>
  )
}

export default Personal;