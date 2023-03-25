import React, { useState } from 'react';
import './Login.css';

import imageSection from '../../assets/images/login-background.svg';

import { SiIced } from 'react-icons/si';
import { FaRegEye, FaRegEyeSlash, FaDesktop, FaKey } from 'react-icons/fa';

import { useNavigate } from 'react-router-dom';
import { Display } from '../../components';

const Login = () => {

    const navigate = useNavigate();

    const [eye, setEye] = useState(true);
    const [showForgot, setShowForgot] = useState(false);

    const changeEye = () => {
        setEye(!eye);
    }

    const navigateScreen = () => {
        navigate('/');
    }

    const handleForgot = () => {
        setShowForgot(!showForgot);
    }

  return (
    <div className='login-layer'>
        <div className="container">
            <div className="row justify-content-between">

                {/* IMAGE DIV */}

                <div className="col-md-5 image-div mt-5">
                    <div className="company-id d-flex align-items-center">
                        <SiIced className="icon" />
                            <h1 className="text-center"> GWC Tech Hub Limited </h1>
                    </div>
                    <img src={imageSection} alt="background" />
                </div>

                {/* LOGIN FORM */}

                <div className="col-md-6 col-sm-12 login-form">
                    <div className="login-form-top text-center mb-5">
                        <h1> Sign in to your account </h1>
                        <h2> Login to your merchant dashboard to manage your users!!</h2>
                    </div>

                    <form>
                        <div className="form-main">
                            <div className="key-layer">
                                <FaDesktop className="icon-left" />
                                <input 
                                    type="email"
                                    name="key"
                                    className="key-input form-control"
                                    placeholder="Enter account emai address.." 
                                    required
                                />
                            </div>
                            <div className="password-layer">
                                <FaKey className="icon-left" />
                                <input 
                                    type={eye ? "password": "text"} 
                                    name="password"
                                    className="key-input form-control"
                                    placeholder="Enter your password..." 
                                    required
                                />
                                {
                                    eye ? 
                                    <FaRegEye onClick={changeEye} className='password-eye' />
                                        :
                                    <FaRegEyeSlash onClick={changeEye} className='password-eye' />

                                }
                            </div>
                            <button className="login-btn" onClick={navigateScreen}>
                                <p className="login-text mt-3"> Login to your account </p>
                            </button>

                            <div className="forgot-layer" onClick={handleForgot}>
                                <h3> Forgot password? </h3>
                            </div>

                            <div className="d-flex align-items-center justify-content-center mt-3 reg-layer">
                                <h4 onClick={() => navigate('/register')} className="register-text text-center"> Register a new merchant account with us!! </h4>
                            </div>

                        </div>
                    </form>
                </div>

            </div>
        </div>

            { showForgot && 
                <Display>

                </Display>
            }
    </div>
  )
}

export default Login;