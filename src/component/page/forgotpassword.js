import React, { useState } from "react"
import "bootstrap/dist/css/bootstrap.min.css"
import "../css/login.css"
import TextField from '@mui/material/TextField';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { Link } from "react-router-dom";

export default function Forgot_password() {

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
                                    <span>l</span>
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
                                <Link href="register-1.html" className="btn btn-white text-primary text-transparent font-weight-bold ">Create Here <i className="fa-solid fa-right-to-bracket"></i></Link>
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
                                <h3>Recover Your Password</h3>
                                <div className="login-inner-form">
                                    <form action="#" method="GET">
                                        <div className="form-group clearfix">
                                            <div className="form-box Bg-back ">
                                                <TextField id="standard-basic" label="Email" variant="standard" fullWidth type="email" />
                                                <i className="flaticon-mail-2"><i className="fa-solid fa-envelope"></i> </i>
                                            </div>
                                        </div>
                                        <div className="form-group clearfix mb-0">
                                            <button type="submit" className="btn btn-primary btn-lg btn-theme">Send Me Email <i className="fa-solid fa-right-to-bracket"></i> </button>
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
                                <p className="text-center">Already a member?<a href="/login"> Login here</a></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}