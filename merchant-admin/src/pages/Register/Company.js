import React from 'react';
import './Company.css';


const Company = ({ onNext, onPrev}) => {
  return (
    <div className="company">
        <form>
          <div className="form-firstlayer">
            <div className="company-grid">
              <h2> * Company legal name </h2>
              <input 
                type="text" 
                className="form-control" 
              />
            </div>

            <div className="company-grid">
              <h2> * Company email address </h2>
              <input 
                type="text" 
                className="form-control" 
              />
            </div>


            <div className="company-grid">
              <h2> * Company Registered number (CAC) </h2>
              <input 
                type="text" 
                className="form-control" 
              />
            </div>

            <div className="company-grid">
              <h2> Company tax identification number </h2>
              <input 
                type="text" 
                className="form-control" 
              />
            </div>

            <div className="personal-lay">
              <h2> * Company physical address  </h2>
              <input 
                  type="email" 
                  className="form-control" 
                />
            </div>

            <div className="company-grid">
              <h2> * State of Establishment </h2>
              <input 
                type="text" 
                className="form-control" 
              />
            </div>

            <div className="company-grid">
              <h2> * Year Established </h2>
              <input 
                type="text" 
                className="form-control" 
              />
            </div>

            <div className="personal-lay">
              <h2> * Company website (optional)  </h2>
              <input 
                  type="email" 
                  className="form-control" 
                />
            </div>

            <div className="company-grid">
              <h2> * Establishment Image 1 </h2>
              <input 
                type="file"
                accept="image/*" 
                className="form-control" 
              />
            </div>

            <div className="company-grid">
              <h2> * Establishment Image 2 </h2>
              <input 
                type="file"
                accept="image/*" 
                className="form-control" 
              />
            </div>


            <div className="auth-btn-layer d-flex align-items-center">
              <button className="btn-prev" onClick={onPrev}> Previous </button>
              <button className="btn-reg"> Register </button>
            </div>

          </div>
        </form>
    </div>
  )
}

export default Company;