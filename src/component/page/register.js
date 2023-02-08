import React, { useState } from "react"
import "bootstrap/dist/css/bootstrap.min.css"
import "../css/login.css"
import IconButton from '@mui/material/IconButton';
import Input from '@mui/material/Input';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import TextField from '@mui/material/TextField';
import '@fortawesome/fontawesome-free/css/all.min.css';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';

export default function Login_form() {

  const [step, setstep] = useState(1);

  console.log(step);
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
                <a href="/" className="btn btn-white text-primary text-transparent font-weight-bold ">login here <i className="fa-solid fa-right-to-bracket"></i></a>
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
                <h3>SIGN UP YOUR USER ACCOUNT</h3>
                <div className="login-inner-form">

                  {(() => {
                    if (step == 1) {
                      return <ul id="progressbar">
                        <li className='active' id="account"><strong>Account</strong></li>
                        <li id="personal"><strong>About you</strong></li>
                        <li id="payment"><strong>Company</strong></li>
                      </ul>
                    }
                    if (step == 2) {
                      return <ul id="progressbar">
                        <li className='active' id="account"><strong>Account</strong></li>
                        <li className='active' id="personal"><strong>About you</strong></li>
                        <li id="payment"><strong>Company</strong></li>
                      </ul>
                    }
                    if (step == 3) {
                      return <ul id="progressbar">
                        <li className='active' id="account"><strong>Account</strong></li>
                        <li className='active' id="personal"><strong>About you</strong></li>
                        <li className='active' id="payment"><strong>Company</strong></li>
                      </ul>
                    }

                  })()}


                  <StepForm step={step} setstep={setstep} />

                </div>
                <p className="text-center">Don't have an account?<a href="/login"> login here</a></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>


  )
}



function StepForm(prps) {



  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    age: "",
    email: ""
  })
  const [values, setValues] = React.useState({
    password: '',
    showPassword: false,
  });

  const [current, setcurrent] = React.useState('');

  const handl_Change = (event) => {
    setcurrent(event.target.value);
  };

  const [Experience, setExperience] = React.useState('');
  const experience = (event) => {
    setExperience(event.target.value);
  };

  const [YourCompany, setYourCompany] = React.useState('');
  const Your_Company = (event) => {
    setYourCompany(event.target.value);
  };

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const handleClickShowPassword = () => {
    setValues({
      ...values,
      showPassword: !values.showPassword,
    });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  // function for going to next step by increasing step state by 1
  const nextStep = () => {
    prps.setstep(prps.step + 1);
  };

  // function for going to previous step by decreasing step state by 1
  const prevStep = () => {
    prps.setstep(prps.step - 1);
  };

  // handling form input data by taking onchange value and updating our previous form data state
  const handleInputData = input => e => {
    // input value from the form
    const { value } = e.target;

    //updating for data state taking previous state and then adding new value to create new object
    setFormData(prevState => ({
      ...prevState,
      [input]: value
    }));
  }

  // javascript switch case to show different form in each step
  switch (prps.step) {
    // case 1 to show stepOne form and passing nextStep, prevStep, and handleInputData as handleFormData method as prop and also formData as value to the fprm
    case 1:
      return (

        <div className="App">
          <div className="heading_tittle">
            <h2>Let's get started</h2>
            <h4>first you'll need to create the account.</h4>
          </div>
          <form action="#" method="GET">
            <div className="form-group clearfix">
              <div className="form-box Bg-back ">
                <TextField id="standard-basic" label="Email" variant="standard" fullWidth type="email" />
                <i className="flaticon-mail-2"><i className="fa-solid fa-envelope"></i> </i>
              </div>
              <div className="form-box Bg-back ">
                <TextField id="standard-basic" label="Your Name" variant="standard" fullWidth type="text" />
                <i className="flaticon-mail-2"><i className="fa-solid fa-user"></i> </i>
              </div>
              <div className="form-box Bg-back ">
                <FormControl fullWidth variant="standard">
                  <InputLabel htmlFor="standard-adornment-password">Password</InputLabel>
                  <Input
                    id="standard-adornment-password"
                    type={values.showPassword ? 'text' : 'password'}
                    value={values.password}
                    onChange={handleChange('password')}
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

              <div className="form-box Bg-back ">
                <TextField id="standard-basic" fullWidth label="Phone Number" variant="standard" name="phone"
                />




                <i className="flaticon-mail-2"><i className="fa-solid fa-phone"></i></i>
              </div>
            </div>
            <p className="code_section">Do you have a promo code.</p>

          </form >

          <button className="btn btn-primary btn-lg btn-theme" onClick={nextStep} >Continue <i className="fa-solid fa-arrow-right"></i></button>
        </div>
      );
    // case 2 to show stepTwo form passing nextStep, prevStep, and handleInputData as handleFormData method as prop and also formData as value to the fprm
    case 2:
      return (

        <div className="App">
          <div className="heading_tittle">
            <h2>About You</h2>
            <h4>we'll use this into to personalize your experience.</h4>
          </div>
          <form action="#" method="GET">
            <div className="form-group clearfix">
              <div className="form-box Bg-back ">
                <FormControl variant="standard" fullWidth>
                  <InputLabel id="demo-simple-select-standard-label">What is your current role?</InputLabel>
                  <Select labelId="demo-simple-select-standard-label" id="demo-simple-select-standard" value={current} onChange={handl_Change} label="Age" >
                    <MenuItem value="">
                      <em>What is your current role?</em>
                    </MenuItem>
                    <MenuItem value={10}>Ten</MenuItem>
                    <MenuItem value={20}>Twenty</MenuItem>
                    <MenuItem value={30}>Thirty</MenuItem>
                  </Select>
                </FormControl>
                <i className="flaticon-mail-2"><i className="fa-solid fa-user-tie"></i> </i>
              </div>
              <div className="form-box Bg-back ">
                <FormControl variant="standard" fullWidth>
                  <InputLabel id="demo-simple-select-standard-label">Experience</InputLabel>
                  <Select labelId="demo-simple-select-standard-label" id="demo-simple-select-standard" value={Experience} onChange={experience} label="Age" >
                    <MenuItem value="">
                      <em>What is your experience with sales today?</em>
                    </MenuItem>
                    <MenuItem value={10}>Ten</MenuItem>
                    <MenuItem value={20}>Twenty</MenuItem>
                    <MenuItem value={30}>Thirty</MenuItem>
                  </Select>
                </FormControl>
                <i className="flaticon-mail-2"><i className="fa-solid fa-calendar-week"></i> </i>
              </div>
            </div>


          </form >
          <button className="btn btn_white btn-lg btn-theme width50" onClick={prevStep} ><i className="fa-solid fa-arrow-left"></i> Back    </button>
          <button className="btn btn-primary btn-lg btn-theme width50" onClick={nextStep} >Next <i className="fa-solid fa-arrow-right"></i></button>
        </div>
      );
    // Only formData is passed as prop to show the final value at form submit
    case 3:
      return (
        <div className="App">
          <div className="heading_tittle">
            <h2>About Your company</h2>
            <h4>we'll use this into to personalize your experience.</h4>
          </div>
          <form action="#" method="GET">
            <div className="form-group clearfix">
              <div className="form-box Bg-back ">
                <TextField id="standard-basic" label="Your Name" variant="standard" fullWidth type="text" />
                <i className="flaticon-mail-2"><i className="fa-solid fa-user"></i> </i>
              </div>
              <div className="form-box Bg-back ">
                <FormControl variant="standard" fullWidth>
                  <InputLabel id="demo-simple-select-standard-label">Your Company</InputLabel>
                  <Select labelId="demo-simple-select-standard-label" id="demo-simple-select-standard" value={YourCompany} onChange={Your_Company} label="Age" >
                    <MenuItem value="">
                      <em>How big is your company?</em>
                    </MenuItem>
                    <MenuItem value={10}>Ten</MenuItem>
                    <MenuItem value={20}>Twenty</MenuItem>
                    <MenuItem value={30}>Thirty</MenuItem>
                  </Select>
                </FormControl>
                <i className="flaticon-mail-2"><i className="fa-solid fa-building"></i> </i>
              </div>
              <div className="form-box Bg-back ">
                <FormControl variant="standard" fullWidth>
                  <InputLabel id="demo-simple-select-standard-label">Company Industry</InputLabel>
                  <Select labelId="demo-simple-select-standard-label" id="demo-simple-select-standard" value={current} onChange={handl_Change} label="Age" >
                    <MenuItem value="">
                      <em>Company Industry</em>
                    </MenuItem>
                    <MenuItem value={10}>Ten</MenuItem>
                    <MenuItem value={20}>Twenty</MenuItem>
                    <MenuItem value={30}>Thirty</MenuItem>
                  </Select>
                </FormControl>
                <i className="flaticon-mail-2"><i className="fa-solid fa-industry"></i> </i>
              </div>
            </div>


          </form >
          <button className="btn btn_white btn-lg btn-theme width50" onClick={prevStep} ><i className="fa-solid fa-arrow-left"></i> Back    </button>
          <button className="btn btn-primary btn-lg btn-theme width50" onClick={nextStep} >Next <i className="fa-solid fa-arrow-right"></i></button>
        </div>
      );
    // default case to show nothing
    default:
      return (
        <div className="App">
          <div className="form-card">

            <h2 className="purple-text text-center"><strong>SUCCESS !</strong></h2>
            <div className="row justify-content-center">
              <div className="col-12">
                <i className="fit-image fa-regular fa-square-check"></i> </div>
            </div>
            <div className="row text-center">
              <div className="col-12 text-center">
                <h5 className="purple-text text-center">You Have Successfully Signed Up</h5>
              </div>
            </div>
          </div>
        </div>
      );
  }
}
