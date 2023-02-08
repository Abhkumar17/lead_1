import React, { useState, useEffect } from "react";
import Header from "../include/header";
import Footer from "../include/footer";
import Button from 'react-bootstrap/Button';
import { Link } from "react-router-dom";
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';
import './lead_overview.css';
import '../css/icon.css';
// Model // 
import Email_model from "../model/mailpopup";
import Add_Products from "../model/addproducts";
import Add_Campaigns from "../model/addcampaigns";
import Upload_File from "../model/uploadfile";
import Link_url from "../model/linkurlpopup";
import Task_file from "../model/taskfilemodel";
import Modal_new_meet from "../model/meetinginformation";
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';



export default function Lead_import() {
  //---form --edit --//

const [age, setAge] = React.useState('');

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  const [email_model_show, setemail_model_show] = useState(false);
  const handleShow = (e) => {
    setemail_model_show(true);
  }

  const [add_products_show, setadd_products_show] = useState(false);
  const product_model = (e) => {
    setadd_products_show(true);
  }
  const [add_campaigns_show, setadd_campaigns_show] = useState(false);
  const campaigns_model = (e) => {
    setadd_campaigns_show(true);
  }

  const [task_file_show, settask_file_show] = useState(false);
  const task_file_model_Show = (e) => {
    settask_file_show(true);
  }

  const [Upload_File_show, setUpload_File_show] = useState(false);
  const upload_file_model_Show = (e) => {
    setUpload_File_show(true);
  }

  const [link_url_show, setlink_url_show] = useState(false);
  const link_url_model_Show = (e) => {
    setlink_url_show(true);
  }

  const [meeting_model_Show, setmeeting_model_Show] = useState(false);
  const meeting_popup_model_Show = (e) => {
    setmeeting_model_Show(true);
  }

  const [hide, sethide] = useState('show');
  const [hidecontent, sethidecontent] = useState('Hide details');

  const Hide_details = (e) => {


    if (hide == 'show') {
      sethidecontent('Hide details');
      sethide('hide');


    } else {
      sethidecontent('Show details');
      sethide('show');


    }
  };

  const [hidden_show, setHidden_show] = useState('show');
  let left_section = 'col-lg-3';
  let right_section = 'col-lg-9';
  const show_hide_left = () => {
    if (hidden_show == 'show') {
      setHidden_show('hide');
    } else {
      setHidden_show('show');
    }
  };

  if (hidden_show == 'show') { right_section = 'col-lg-9'; } else { right_section = 'col-lg-12'; }

  return (

    <div>
      <Header />
      <section>
        <div className="container-fluid">
          <div className="row leadown top_menu_fixed">
            <div className="col-sm-12 ">
              <nav aria-label="breadcrumb" className="bg-light rounded-3 infopgelead">
                <div className="card d-flex">
                  <div className="card-body text-center d-flex justify-content-between align-items-center">
                    <div className="admin_details d-flex justify-content-between align-items-center">
                      <Link to='/Leads'><i className="fa fa-chevron-left" aria-hidden="true"></i></Link>
                      <Link href="#" data-toggle="modal" data-target="#myModalimg" data-backdrop="static" data-keyboard="false"><img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava3.webp" alt="avatar" className="rounded-circle img-fluid" /></Link>
                      <div className="info_about">
                        <h5>Mr.Akash Verma   <span className="hide-side">-vertage</span></h5>

                        <div className="tagsCrm d-flex justify-content-start align-items-center">
                          <i className="tagged_icon"></i>
                          <span>Add Tags</span>
                        </div>
                      </div>
                    </div>


                    <div className="nav_btn">
                      <Link href="#"><button type="button" className="btn btn-primary ">Send Email</button></Link>
                      <Link href="./convert-lead.html" ><button type="button" className="btn btn-primary btn-nav">Convert</button></Link>
                      <Link href="./Leads/create" ><button type="button" className="btn btn-primary btn-nav">Edit</button></Link>
                    </div>

                  </div>
                </div>
              </nav>
            </div>
          </div>

          <div className="row mb-4 pr-3">
            <div className="showhideDetailpanel p3 h30" id="dv_leftPanel_showHide">
              <span className="showhideDetailpanelIcon fCollapseIn" onClick={show_hide_left}>
              </span>
            </div>
            <div className={`${left_section} mt-30 bg-white ${hidden_show}`}>
              <div className="card mb-4 col3left">
                <div className="card-body text-center">
                  <div className="head">
                    <a href="#">
                      <p className="#m-0">Related list</p>

                    </a>
                  </div>
                  <ul className="Open  model_box_row Activitieslist-group list-group-flush rounded-3">
                    <li className="list-group-item gItem d-flex justify-content-between align-items-center p-2">

                      <a href="#attachement">
                        <p className="mb-0">Attachment</p>

                      </a>
                      <i className="fa fa-plus"></i>
                    </li>
                    <li className="list-group-item gItem d-flex justify-content-between align-items-center p-2">

                      <a href="#Products">
                        <p className="mb-0">Products</p>
                      </a>
                      <i className="fa fa-plus"></i>

                    </li>
                    <li className="list-group-item gItem d-flex justify-content-between align-items-center p-2">

                      <a href="#Openactivities">
                        <p className="mb-0">Open Activities</p>
                      </a>
                      <i className="fa fa-plus"></i>

                    </li>
                    <li className="list-group-item gItem d-flex justify-content-between align-items-center p-2">

                      <a href="#closeactivities">
                        <p className="mb-0">Close Activities</p>
                      </a>
                      <i className="fa fa-plus"></i>

                    </li>
                    <li className="list-group-item gItem d-flex justify-content-between align-items-center p-2">

                      <a href="#invitemeeting">
                        <p className="mb-0">Invited Meetings</p>
                      </a>
                      <i className="fa fa-plus"></i>

                    </li>

                    <li className="list-group-item gItem d-flex justify-content-between align-items-center p-2">

                      <a href="#email">
                        <p className="mb-0">Emails</p>
                      </a>
                      <i className="fa fa-plus"></i>

                    </li>
                    <li className="list-group-item gItem d-flex justify-content-between align-items-center p-2">

                      <a href="#Campaigns">
                        <p className="mb-0">Campaigns</p>
                      </a>
                      <i className="fa fa-plus"></i>

                    </li>


                    <li className="list-group-item gItem d-flex justify-content-between align-items-center bg-transparent p-3" data-toggle="modal" data-target="#myModal"><a href="#">

                      <h1>Add
                        relevent list</h1>
                    </a>
                    </li>

                    <div className="modal right fade" id="myModal2" role="dialog" aria-labelledby="myModalLabel2">
                      <div className="modal-dialog" role="document">
                        <div className="modal-content">

                          <div className="modal-header">
                            <h4 className="modal-title" id="myModalLabel2">Right Sidebar</h4>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">×</span></button>
                          </div>

                          <div className="modal-body">
                            <p>Anim pariatur cliche reprehenderit, enim eiusmod high life
                              accusamus terry richardson ad squid. 3 wolf moon officia aute,
                              non cupidatat skateboard dolor brunch. Food truck quinoa
                              nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua
                              put a bird on it squid single-origin coffee nulla assumenda
                              shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore
                              wes anderson cred nesciunt sapiente ea proident. Ad vegan
                              excepteur butcher vice lomo. Leggings occaecat craft beer
                              farm-to-table, raw denim aesthetic synth nesciunt you probably
                              haven't heard of them accusamus labore sustainable VHS.
                            </p>
                          </div>

                        </div>
                      </div>
                    </div>


                  </ul>
                </div>
              </div>
            </div>
            <div className={`${right_section} mt-30 `}>
              <div className="row">
                <div className="col-md-12 col-lg-12 ">


                  <Tabs className="actionBtns" defaultActiveKey="second">

                    <Tab eventKey="second" className="actionBtn signupBtn" title="Overview">
                      <div id="overview" className="form signup Overview">
                        <div className="row">
                          <div className="col-md-8 ">
                            <div className="card mb-0">
                              <div className="card-body">

                                <div className="row pb-3">
                                  <div className="col-sm-4 att">
                                    <p className="mb-0 ">Leads Name</p>
                                  </div>
                                  <div className="col-sm-8">
                                    <div className="Bg-back edit_form">
                                    <TextField id="standard-helperText" variant="standard" defaultValue="Akash Verma" />
                                    <span className="svgIconsyes"></span>
                                    </div>
                                  </div>
                                </div>

                                <div className="row pb-3">
                                  <div className="col-sm-4 att">
                                    <p className="mb-0">Email</p>
                                  </div>
                                  <div className="col-sm-8">
                                    <div className="Bg-back edit_form">
                                      <TextField id="standard-basic" variant="standard" defaultValue="akashverma@vert-age.com" type="email" />
                                      <span className="svgIconsyes"></span>
                                    </div>
                                  </div>
                                </div>

                                <div className="row pb-3">
                                  <div className="col-sm-4 att">
                                    <p className="mb-0">Phone</p>
                                  </div>
                                  <div className="col-sm-8">
                                    <div className="Bg-back edit_form">
                                      <TextField id="standard-number" type="number" defaultValue="00000000000" InputLabelProps={{ shrink: true, }} variant="standard"
                                      />
                                        <span className="svgIconsyes"></span>
                                    </div>
                                  </div>
                                </div>

                                <div className="row pb-3">
                                  <div className="col-sm-4 att">
                                    <p className="mb-0">Mobile</p>
                                  </div>
                                  <div className="col-sm-8">
                                    <div className="Bg-back edit_form">
                                      <TextField id="standard-number" type="number" defaultValue="00000000000" InputLabelProps={{ shrink: true, }} variant="standard"
                                      />
                                        <span className="svgIconsyes"></span>
                                    </div>
                                  </div>
                                </div>

                                <div className="row pb-2">
                                  <div className="col-sm-4 att">
                                    <p className="mb-0">Leads status</p>
                                  </div>
                                  <div className="col-sm-8">
                                    <div className="Bg-back edit_form">
                                    <FormControl variant="standard" sx={{ m: 1, width: 203 }}>
                                     <Select
                                     defaultValue={30}
                                        labelId="demo-simple-select-filled-label"
                                        id="demo-simple-select-filled"
                                        value={age}
                                        onChange={handleChange}
                                        
                                      >
                                        <MenuItem value="">
                                          <em>-None-</em>
                                        </MenuItem>
                                        <MenuItem value={10}>Attempted to Contact</MenuItem>
                                        <MenuItem value={20}>Contact in Future</MenuItem>
                                        <MenuItem value={30}>Contacted</MenuItem>
                                        <MenuItem value={40}>Junk Lead</MenuItem>
                                        <MenuItem value={50}>Lost Lead</MenuItem>
                                        <MenuItem value={60}>Not Contacted</MenuItem>
                                        <MenuItem value={70}>Pre-Qualified</MenuItem>
                                        <MenuItem value={80}>Contacted</MenuItem>
                                        <MenuItem value={90}>Not Qualified</MenuItem>
                                      </Select>
                                    </FormControl>
                                    <span className="svgIconsyes mt_20"></span>
                                    </div>
                                                                    </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="col-md-4">
                            <div className="card mb-md-0">
                              <div className="card-body">

                                <div className="row pb-1">
                                  <div className="col-sm-8">
                                    <p><a href="#">Best time for</a></p>
                                  </div>
                                  <div className="col-sm-4">
                                    <p className="text-muted mb-0">Today</p>
                                  </div>
                                </div>

                                <div className="row">
                                  <div className="col-sm-12">
                                    <p><a href="#">Call</a></p>
                                    <span><a href="#">No best time for day</a></span>
                                  </div>
                                </div>

                                <div className="row">
                                  <div className="col-sm-12">
                                    <p><a href="#">Email</a></p>
                                  </div>

                                </div>

                                <div className="row">
                                  <div className="col-sm-12">
                                    <p><i className="fa fa-star"></i><a href="#">
                                      1:30 PM in 1hour 25 minutes</a></p>
                                  </div>
                                </div>


                              </div>
                            </div>
                          </div>
                        </div>



                        <div className="row">
                          <div className="col-md-12 pl-0">
                            <div className="card my-2">
                              <div className="card-body">
                                <div id="card-row-hide">
                                  <div className="row">
                                    <div className="col-sm-12 hide_title">
                                      <Link onClick={Hide_details}> {hidecontent} <i className="fa fa-caret-down"></i> </Link>

                                    </div>
                                  </div>


                                  <div className={`row hideleadinfo p-2 ${hide}`}>

                                    <div className="col-sm-12 pb-3">
                                      <h4>Lead information</h4>
                                    </div>


                                    <div className="row">
                                      <div className="col-sm-6">
                                        <div className="row pb-3">
                                          <div className="col-sm-4">
                                            <p className="mb-0">Leads owner</p>
                                          </div>
                                          <div className="col-sm-8">
                                            <p className="text-muted mb-0">Akash Verma</p>
                                          </div>
                                        </div>

                                        <div className="row pb-3">
                                          <div className="col-sm-4">
                                            <p className="mb-0">Title</p>
                                          </div>
                                          <div className="col-sm-8">
                                            <p className="text-muted mb-0">New leads</p>
                                          </div>
                                        </div>

                                        <div className="row pb-3">
                                          <div className="col-sm-4">
                                            <p className="mb-0">Phone</p>
                                          </div>
                                          <div className="col-sm-8">
                                            <p className="text-muted mb-0"></p>
                                          </div>
                                        </div>

                                        <div className="row pb-3">
                                          <div className="col-sm-4">
                                            <p className="mb-0">Mobile</p>
                                          </div>
                                          <div className="col-sm-8">
                                            <p className="text-muted mb-0">9999999999</p>
                                          </div>
                                        </div>

                                        <div className="row pb-3">
                                          <div className="col-sm-4">
                                            <p className="mb-0">Leads Source</p>
                                          </div>
                                          <div className="col-sm-8">
                                            <p className="text-muted mb-0">Advertisement</p>
                                          </div>
                                        </div>

                                        <div className="row pb-3">
                                          <div className="col-sm-4">
                                            <p className="mb-0">Industry</p>
                                          </div>
                                          <div className="col-sm-8">
                                            <p className="text-muted mb-0">Goverment/Militiry</p>
                                          </div>
                                        </div>

                                        <div className="row pb-3">
                                          <div className="col-sm-4">
                                            <p className="mb-0">Annual revenue</p>
                                          </div>
                                          <div className="col-sm-8">
                                            <p className="text-muted mb-0">Akash Verma</p>
                                          </div>
                                        </div>

                                        <div className="row pb-3">
                                          <div className="col-sm-4">
                                            <p className="mb-0">Email opt out</p>
                                          </div>
                                          <div className="col-sm-8">
                                            <p className="text-muted mb-0">-</p>
                                          </div>
                                        </div>

                                        <div className="row pb-3">
                                          <div className="col-sm-4">
                                            <p className="mb-0">Modified by</p>
                                          </div>
                                          <div className="col-sm-8">
                                            <p className="text-muted mb-0">Akash Verma</p>
                                          </div>
                                        </div>
                                      </div>

                                      <div className="col-sm-6">
                                        <div className="row pb-3">
                                          <div className="col-sm-4">
                                            <p className="mb-0">Company</p>
                                          </div>
                                          <div className="col-sm-8">
                                            <p className="text-muted mb-0">Vertage</p>
                                          </div>
                                        </div>

                                        <div className="row pb-3">
                                          <div className="col-sm-4">
                                            <p className="mb-0">Leads Name</p>
                                          </div>
                                          <div className="col-sm-8">
                                            <p className="text-muted mb-0">Mr.Akash Verma</p>
                                          </div>
                                        </div>

                                        <div className="row pb-3">
                                          <div className="col-sm-4">
                                            <p className="mb-0">Email</p>
                                          </div>
                                          <div className="col-sm-8">
                                            <p className="text-muted mb-0">akashverma@vert-age.com</p>
                                          </div>
                                        </div>

                                        <div className="row pb-3">
                                          <div className="col-sm-4">
                                            <p className="mb-0">Fax</p>
                                          </div>
                                          <div className="col-sm-8">
                                            <p className="text-muted mb-0">-</p>
                                          </div>
                                        </div>

                                        <div className="row pb-3">
                                          <div className="col-sm-4">
                                            <p className="mb-0">Website</p>
                                          </div>
                                          <div className="col-sm-8">
                                            <p className="text-muted mb-0"></p>
                                          </div>
                                        </div>

                                        <div className="row pb-3">
                                          <div className="col-sm-4">
                                            <p className="mb-0">Leads status</p>
                                          </div>
                                          <div className="col-sm-8">
                                            <p className="text-muted mb-0">Contacted</p>
                                          </div>
                                        </div>

                                        <div className="row pb-3">
                                          <div className="col-sm-4">
                                            <p className="mb-0">Rating</p>
                                          </div>
                                          <div className="col-sm-8">
                                            <p className="text-muted mb-0">-</p>
                                          </div>
                                        </div>

                                        <div className="row pb-3">
                                          <div className="col-sm-4">
                                            <p className="mb-0">Created by</p>
                                          </div>
                                          <div className="col-sm-8">
                                            <p className="text-muted mb-0">Akash Verma</p>
                                          </div>
                                        </div>

                                        <div className="row pb-3">
                                          <div className="col-sm-4">
                                            <p className="mb-0">Twitter</p>
                                          </div>
                                          <div className="col-sm-8">
                                            <p className="text-muted mb-0">-</p>
                                          </div>
                                        </div>

                                        <div className="row pb-3">
                                          <div className="col-sm-4">
                                            <p className="mb-0">Secondary email</p>
                                          </div>
                                          <div className="col-sm-8">
                                            <p className="text-muted mb-0">-</p>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>

                                  <div className={`row hideleadinfo p-2 ${hide}`}>
                                    <div className="col-sm-12 pb-2">
                                      <h4>Address information</h4>
                                    </div>

                                    <div className="col-sm-12 pb-2 d-flex justify-content-end align-items-center">
                                      <a href="https://www.google.com/maps/@28.6091409,77.3668853,14z" target="_blank"><button type="button" className="btn btn-primary">Locate Map</button></a>
                                    </div>



                                    <div className="col-sm-6">
                                      <div className="row pb-2">
                                        <div className="col-sm-4">
                                          <p className="mb-0">Street</p>
                                        </div>
                                        <div className="col-sm-8">
                                          <p className="text-muted mb-0">H 53 Ground floor,sector
                                            63,Noida Uttar Pradesh 201301</p>
                                        </div>
                                      </div>

                                      <div className="row pb-2">
                                        <div className="col-sm-4">
                                          <p className="mb-0">State</p>
                                        </div>
                                        <div className="col-sm-8">
                                          <p className="text-muted mb-0">Uttar Pradesh</p>
                                        </div>
                                      </div>


                                      <div className="row pb-2">
                                        <div className="col-sm-4">
                                          <p className="mb-0">Country</p>
                                        </div>
                                        <div className="col-sm-8">
                                          <p className="text-muted mb-0">India</p>
                                        </div>
                                      </div>


                                    </div>


                                    <div className="col-sm-6">
                                      <div className="row pb-2">
                                        <div className="col-sm-4">
                                          <p className="mb-0">City</p>
                                        </div>
                                        <div className="col-sm-8">
                                          <p className="text-muted mb-0">Noida</p>
                                        </div>
                                      </div>

                                      <div className="row pb-2">
                                        <div className="col-sm-4">
                                          <p className="mb-0">Pin Code</p>
                                        </div>
                                        <div className="col-sm-8">
                                          <p className="text-muted mb-0">201301</p>
                                        </div>
                                      </div>

                                    </div>
                                  </div>

                                  <div className={`row hideleadinfo p-2 ${hide}`}>
                                    <div className="col-lg-12 pb-2">
                                      <h4>Discription information</h4>
                                    </div>
                                    <div className="col-lg-6 col-sm-16">
                                      <div className="row">
                                        <div className="col-sm-4">Discription</div>
                                        <div className="col-sm-8">This is a demo lead</div>
                                      </div>
                                    </div>

                                    <div className="col-lg-6 col-sm-16">
                                      <div className="row">
                                      </div>
                                    </div>
                                  </div>

                                </div>
                              </div>
                            </div>
                          </div>
                        </div>




                        <div className="row">
                          <div id="attachement" className="col-lg-12 py-1 pl-0">
                            <div className="card mb-0">
                              <div className="card-body">
                                <div className="attach-head d-flex justify-content-between align-items-flex-start">
                                  <h4>Attachment</h4>
                                  <label className="dropdown-btn">

                                    <div className="dd-button btn btn-primary">
                                      Attach
                                    </div>

                                    <input type="checkbox" className="dd-input" id="test" />


                                    <ul className="dd-menu">

                                      <li>
                                        <a onClick={upload_file_model_Show}><span><i className="upload-iconAtc"></i></span> Upload
                                          file</a>
                                        <Upload_File Upload_File_show={Upload_File_show} setUpload_File_show={setUpload_File_show} />
                                      </li>

                                      <li><a onClick={link_url_model_Show}><span><i className="link-iconAtc"></i></span>
                                        Link(URL)</a></li>
                                      <Link_url link_url_show={link_url_show} setlink_url_show={setlink_url_show} />


                                    </ul>








                                  </label>
                                </div>

                                <div className="model_body">
                                  <p>no attachement</p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>


                        <div className="row">
                          <div id="Products" className="col-lg-12 py-1 pl-0">
                            <div className="card mb-0">
                              <div className="card-body">
                                <div className="attach-head d-flex justify-content-between align-items-flex-start">
                                  <h4>Products</h4>

                                </div>

                                <div>
                                  <p>no records found</p>

                                  <Button variant="primary" className="btn btn-primary" onClick={product_model}>
                                    Add  Products
                                  </Button>
                                  <Add_Products add_products_show={add_products_show} setadd_products_show={setadd_products_show} />

                                </div>
                              </div>
                            </div>
                          </div>
                        </div>




                        <div className="row">
                          <div id="Openactivities" className="col-lg-12 py-1 pl-0">
                            <div className="card mb-0">
                              <div className="card-body">
                                <div className="attach-head d-flex justify-content-between align-items-flex-start">
                                  <h4>Open Activities</h4>
                                  <label className="dropdown-btn">
                                    <div className="dd-button btn btn-primary">
                                      Add New
                                    </div>
                                    <input type="checkbox" className="dd-input" id="test" />

                                    <ul className="dd-menu">
                                      <li><a onClick={task_file_model_Show}>Task file</a></li>
                                      <Task_file task_file_show={task_file_show} settask_file_show={settask_file_show} />
                                      <li><a onClick={meeting_popup_model_Show}>Meeting file</a></li>
                                      <Modal_new_meet meeting_model_Show={meeting_model_Show} setmeeting_model_Show={setmeeting_model_Show} />
                                      <li><a href="" data-toggle="modal" data-target="#myModalnew" data-backdrop="static" data-keyboard="false">Call
                                        file</a></li>

                                    </ul>

                                  </label>
                                </div>

                                <div className="scroll">
                                  <p>no records found</p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="row">
                          <div id="closeactivities" className="col-lg-12 py-1 pl-0">
                            <div className="card mb-0">
                              <div className="card-body">
                                <div className="attach-head d-flex justify-content-between align-items-flex-start">
                                  <h4>Close activity</h4>

                                </div>
                                <hr />
                                <div className="scroll">
                                  <p>no records found</p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>


                        <div className="row">
                          <div id="invitemeeting" className="col-lg-12 py-1 pl-0">
                            <div className="card mb-0">
                              <div className="card-body">
                                <div className="attach-head d-flex justify-content-between align-items-flex-start">
                                  <h4>Invite meeting</h4>

                                </div>
                                <hr />
                                <div>
                                  <p>no records found</p>
                                </div>

                              </div>
                            </div>
                          </div>
                        </div>



                        <div className="row">
                          <div id="email" className="col-lg-12 py-1 pl-0">
                            <div className="card mb-0">
                              <div className="card-body">
                                <div className="attach-head d-flex justify-content-between align-items-flex-start">
                                  <h4>Emails</h4>
                                  <Button variant="primary" className="btn btn-primary" onClick={handleShow}>
                                    Compose Email
                                  </Button>
                                  <Email_model email_model_show={email_model_show} setemail_model_show={setemail_model_show} />
                                </div>
                                <hr />

                                <div className="email">
                                  <nav>
                                    <ul>
                                      <li><a href="#">Mail</a></li>
                                      <li><a href="#">Draft</a></li>
                                      <li><a href="#">Scheduled</a></li>
                                    </ul>
                                  </nav>
                                </div>
                                <div className="email_record">
                                  <p>no records found</p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="row">
                          <div id="Campaigns" className="col-lg-12 py-1 pl-0">
                            <div className="card mb-0">
                              <div className="card-body">
                                <div className="attach-head d-flex justify-content-between align-items-flex-start">
                                  <h4>Campaigns</h4>

                                </div>

                                <hr />
                                <div>
                                  <p>no records found</p>
                                  <Button variant="primary" className="btn btn-primary" onClick={campaigns_model}>
                                    Add Campaigns
                                  </Button>

                                  <Add_Campaigns add_campaigns_show={add_campaigns_show} setadd_campaigns_show={setadd_campaigns_show} />

                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </Tab>
                    <Tab eventKey="third" className="actionBtn loginBtn" title="Timeline">
                      <div id="timeline" className="form login timeline">
                        <div className="row pr-3">
                          <div className="col-md-12">
                            <div className="card mb-2">
                              <div className="card-body">
                                <h3 className=" crm-font-bold f24 pB25 dvtitle_color">Upcoming Actions</h3>
                                <div id="upcomingActionsDiv" className="pR timeLineNorec">
                                  <div className="p30 norec f14  fontsmooth" align="center">No upcoming actions
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="row pr-3">
                          <div className="col-md-12">
                            <div className="card mb-3">
                              <div className="card-body">
                                <section className="timeline">
                                  <h3>History</h3>
                                  <div className="widget-wrap">

                                    <div className="vtl">

                                      <div className="timelinedate">
                                        <p>12 Mar 2021</p>
                                      </div>
                                      <ul>
                                        <li className="event timeLineHistTime ">

                                          <div className="time_date_row">
                                            <p className="date">12:34</p>
                                          </div>
                                          <div className="content_row">
                                            <p className="txt_name">
                                              <span>Lead Status</span>
                                              <span> was updated </span>
                                              from <span className="tl_from">
                                                <b>Contacted</b> </span>
                                              to <span className="tl_to">
                                                <b>Lost Lead</b>
                                              </span>
                                            </p>
                                            <p>
                                              <span className="tl_by"> by </span>
                                              <span className="f13" > Siddharth Siddharth Singh </span>
                                              <span className="tl_dat ">
                                                Sep 16, 2022 </span>
                                            </p>
                                          </div>
                                        </li>
                                        <li className="event email-bounce">
                                          <div className="time_date_row">
                                            <p className="date">14:23</p>
                                          </div>
                                          <div className="content_row">
                                            <p className="txt_name">Cates ate Doge food.</p>
                                          </div>
                                        </li>
                                        <li className="event MailSent">
                                          <div className="time_date_row">
                                            <p className="date">20:12</p>
                                          </div>
                                          <div className="content_row">
                                            <p className="txt_name">Cates took over the Doge beds.</p>
                                          </div>
                                        </li>
                                        <li className="event Notes">
                                          <div className="time_date_row">
                                            <p className="date">08:11</p>
                                          </div>
                                          <div className="content_row">
                                            <p className="txt_name">Hoomans to the rescue.</p>
                                          </div>
                                        </li>
                                        <li className="event">
                                          <div className="time_date_row">
                                            <p className="date">14:27</p>
                                          </div>
                                          <div className="content_row">
                                            <p className="txt_name">Evil cates gone. Victory for good boys and girls.</p>
                                          </div>
                                        </li>
                                      </ul>
                                    </div>
                                  </div>

                                </section>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </Tab>
                  </Tabs>

                </div>
              </div>



            </div>

          </div>
        </div >
      </section >
      <Footer />
    </div >


  )



}
