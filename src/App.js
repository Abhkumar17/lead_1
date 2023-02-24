//import logo from './logo.svg';
import './App.css';
import React from 'react'
import { BrowserRouter as Router, Route, Routes, Link }
  from 'react-router-dom';

import Deals from './component/page/Deals';
import Mail from './component/page/Mail';
import Contacts from './component/page/Contacts';
import Report from './component/page/Report'
import Campaign from './component/page/Campaign';
import Activities from './component/page/Activities';
//lead section import 
import Dashbord from './component/Leads/Lead_dashboard';
import Lead from './component/Leads/lead';
import Lead_import from './component/Leads/import_lead';
import Lead_overview from './component/Leads/lead_overview';
import Login_form from './component/page/login';
import Forgot_password from './component/page/forgotpassword';
import Register from './component/page/register'  

// protected

function App() {
  return (

    <div className='App'>
      
      <Router>
    
        <Routes>
          <Route path='/' element={<Login_form />} />
          <Route path='/forgotpassword' element={<Forgot_password />} />
          <Route path='/register' element={<Register />} />
          <Route path='/dashboard' element={<Dashbord />} />
          <Route path='/Leads' element={<Lead />} />
          <Route path='/Leads/import_lead' element={<Lead_import />} />
          <Route path='/Leads/lead_overview' element={<Lead_overview />} />
          <Route path='/Deals' element={<Deals />} />
          <Route path='/Mail' element={<Mail />} />
          <Route path='/Activities' element={<Activities />} />
          <Route path='/Contacts' element={<Contacts />} />
          <Route path='/Report' element={<Report />} />
          <Route path='/Campaign' element={<Campaign />} />

        </Routes>
      </Router>
    </div>
  );
}

export default App;
