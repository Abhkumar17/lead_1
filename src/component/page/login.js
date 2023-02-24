import React, { useState } from 'react';
import { TextField, Button } from '@material-ui/core';
import Cookies from 'js-cookie';

const LoginForm = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
  
    const handleSubmit = async (e) => {
      e.preventDefault();
  
      // make API call to authenticate user
      const response = await fetch('http://192.168.1.157/lms_laravel/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email, password })
      });
  
      if (response.ok) {
        const data = await response.json();
  
        // set token in cookie
        Cookies.set('token', data.token);
  
        // redirect to dashboard or homepage
        window.location.href = '/dashboard';
      } else {
        // handle error
        console.log('Authentication failed');
      }
    };
  
    return (
        <div>
            <div className="login-6">

                <div className="container-fluid">
                    <div className="row">
                        <div className="col-xl-8 col-lg-7 col-md-12 bg-img">
                            <div className="info">
                                <div className="waviy">
                                    <span>W</span>
                                    <span>e</span>
                                    <span >l</span>
                                    <span>c</span>
                                    <span>o</span>
                                    <span>m</span>
                                    <span>e</span>
                                    <span className="color-yellow">t</span>
                                    <span className="color-yellow">o</span>
                                    <span>V</span>
                                    <span>E</span>
                                    <span>R</span>
                                    <span>T</span>
                                    <span>A</span>
                                    <span>G</span>
                                    <span>e</span>
                                </div>
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type</p>
                                <h6 className="text-white-50">Don't Have an Account?</h6>
                                <a href="/register" className="btn btn-white text-primary text-transparent font-weight-bold ">Create Here <i className="fa-solid fa-right-to-bracket"></i></a>
                            </div>
                            <div className="bg-photo">
                                <img src="/images/img-6.png" alt="bg" className="img-fluid" />
                            </div>

                        </div>
                        <div className="col-xl-4 col-lg-5 col-md-12 bg-color-6">
                            <div className="form-section">
                                <div className="logo">
                                    <a href="login-6.html">
                                        {/* <img src="assets/img/logos/logo.png" alt="logo" /> */}
                                    </a>
                                </div>
                                <h3>Sign Into Your Account</h3>
                                <div className="login-inner-form">
                                   
                                    <form onSubmit={handleSubmit}>
                                        <TextField
                                            label="Email"
                                            name="email"
                                            type="email"
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)}
                                            required
                                        />
                                        <TextField
                                            label="Password"
                                            name="password"
                                            type="password"
                                            value={password}
                                            onChange={(e) => setPassword(e.target.value)}
                                            required
                                        />
                                        <br/> <br/>
                                        {/* <Button type="submit">Login</Button> */}
                                        <div className="form-group clearfix mb-0">
                                            <Button type="submit" className="btn btn-primary btn-lg btn-theme"><i className="fa-solid fa-right-to-bracket"></i> Login</Button>
                                        </div>
                                        </form>
                                    <div className="extra-login">
                                        <span>Or Login With</span>
                                    </div>
                                    
                                </div>
                                <p className="text-center">Don't have an account?<a href="/register"> Register here</a></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>


    )
}
export default LoginForm;