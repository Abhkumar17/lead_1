import React, { useState } from 'react';
import { TextField, Button } from '@material-ui/core';
import axios from 'axios';

const LoginForm = () => {
    const [formData, setFormData] = useState({
      email: '',
      password: '',
    });
  
    const handleChange = (event) => {
      setFormData({ ...formData, [event.target.name]: event.target.value });
    };
  
    const handleSubmit = async (event) => {
      event.preventDefault();
      try {
        const { data } = await axios.post('http://localhost:8000/api/login', formData);
        localStorage.setItem("loggedInUser", JSON.stringify('token',data.loggedInUser));
        // localStorage.setItem('token', data.access_token);
        window.location.href = '/dashboard';
      } catch (error) {
        console.error(error);
      }
    };
// export default function Login_form() {

//     const [email, setEmail] = useState('');
//     const [password, setPassword] = useState('');
//     const [error, setError] = useState(null);
//     handleSubmit = event => {
//         event.preventDefault();
//         axios.post('/api/login', { email, password })
//         .then(response => 
//             {
//           // Handle success
//         })
//         .catch(error => {
//           setError(error.response.data.message);
//         });
//       }


//     const [values, setValues] = React.useState({
//         amount: '',
//         password: '',
//         weight: '',
//         weightRange: '',
//         showPassword: false,
//     });


//     const handleChange = (prop) => (event) => {
//         setValues({ ...values, [prop]: event.target.value });
//     };

//     const handleClickShowPassword = () => {
//         setValues({
//             ...values,
//             showPassword: !values.showPassword,
//         });
//     };

//     const handleMouseDownPassword = (event) => {
//         event.preventDefault();
//     };

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
                                    {/* <form onSubmit={handleSubmit}>
                                        <div className="form-group clearfix">
                                            <div className="form-box Bg-back ">
                                                <TextField id="standard-basic" label="Email" value={email} onChange = {(e) => setEmail(e.target.value)} variant="standard" fullWidth type="email" />
                                                <i className="flaticon-mail-2"><i className="fa-solid fa-envelope"></i> </i>
                                            </div>
                                        </div>
                                        <div className="form-group clearfix">
                                            <div className="form-box Bg-back">
                                                <FormControl fullWidth variant="standard">
                                                    <InputLabel htmlFor="standard-adornment-password">Password</InputLabel>
                                                    <Input
                                                        id="standard-adornment-password"
                                                        type={values.showPassword ? 'text' : 'password'}
                                                        value={password}
                                                        onChange ={(e) => setPassword(e.target.value)}
                                                        endAdornment={
                                                            <InputAdornment position="end">
                                                                <IconButton
                                                                    aria-label="toggle password visibility"
                                                                    onClick={handleClickShowPassword}
                                                                    onMouseDown={handleMouseDownPassword}
                                                                >
                                                                    {values.showPassword ? <VisibilityOff /> : <Visibility />}
                                                                </IconButton>

                                                            </InputAdornment>
                                                        }

                                                    />

                                                </FormControl>
                                                <i className="flaticon-mail-2"><i className="fa-solid fa-key"></i></i>
                                            </div>
                                        </div>
                                        <div className="checkbox form-group clearfix">
                                            <div className="form-check float-start">
                                                <input className="form-check-input" type="checkbox" id="rememberme" />
                                                <label className="form-check-label">
                                                    Remember me
                                                </label>
                                            </div>
                                            <a href="/forgotpassword" className="link-light float-end forgot-password">Forgot your password?</a>
                                        </div>
                                        <div className="form-group clearfix mb-0">
                                            <a href="/Dashbord" type="submit" className="btn btn-primary btn-lg btn-theme"><i className="fa-solid fa-right-to-bracket"></i> Login</a>
                                        </div>
                                    </form> */}
                                    <form onSubmit={handleSubmit}>
                                        <TextField
                                            label="Email"
                                            name="email"
                                            type="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            required
                                        />
                                        <TextField
                                            label="Password"
                                            name="password"
                                            type="password"
                                            value={formData.password}
                                            onChange={handleChange}
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
                                    <ul className="social-list clearfix">
                                        <li><a href="#" className="facebook-bg"><i className="fa-brands fa-facebook-f"></i> Facebook</a></li>
                                        <li><a href="#" className="twitter-bg"><i className="fa-brands fa-twitter"></i> Twitter</a></li>
                                        <li><a href="#" className="google-bg"><i className="fa-brands fa-google-plus-g"></i> Google</a></li>
                                    </ul>
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