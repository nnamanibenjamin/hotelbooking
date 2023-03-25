import React, { useState } from 'react';
import './Register.css';

import { SiIced } from 'react-icons/si';
// import {  } from 'react-icons/fa';

// SCREENS IMPORT
import Personal from './Personal';
import Company from './Company';
import { useNavigate } from 'react-router-dom';

const Register = () => {
    const navigate = useNavigate();

    const [step, setStep] = useState(1);

    const onNext = () => {
        setStep(step + 1);
    }

    const onPrev = () => {
        setStep(step - 1);
    }

  return (
    <div className='register-layer'>
        <div className="container">
            <div className="row justify-content-between">
                <div className="col-md-8 mx-auto reg-form">

                    <div className="reg-top my-4">
                        <SiIced className="reg-top-icon" />
                        <h1 className="text-center"> GWC Tech Hub Limited </h1>
                        <h2> Register your hotel with us and scale your customer horizon faster!! </h2>
                    </div>

                    {/* <div className='text-layer'>
                        <h1> Create a new account </h1>
                    </div> */}

                    {/* INDICATORS */}
                    <div className="indicators-layer">
                        <div className="personal-layer">
                            <h1> 1 </h1>
                            <h2> Personal Information </h2>
                        </div>
                        <div className={step === 2 ? "company-layer" : "company-layer-active"}>
                            <h1> 2 </h1>
                            <h2> Company Information </h2>
                        </div>
                    </div>

                    { step === 1 && <Personal onNext={onNext} />}
                    { step === 2 && <Company onNext={onNext} onPrev={onPrev} />}

                    <div className="d-flex align-items-center justify-content-center mt-3 mb-2 reg-layer">
                        <h4 onClick={() => navigate('/')} className="register-text text-center"> Already a merchant?.. Login to your account now!! </h4>
                    </div>


                </div>
            </div>
        </div>
    </div>
  )
}

export default Register;