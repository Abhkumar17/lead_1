import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Box from '@mui/material/Box';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import Checkbox from '@mui/material/Checkbox';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import TextField from '@mui/material/TextField';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { TimePicker } from '@mui/x-date-pickers/TimePicker';
import FormControl from '@mui/material/FormControl';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import Add_Participants from '../model/addparticipants';
import Choose_Lead from '../model/leadmodel'; 
import Repeat_meeting from '../model/Repeatmeeting';

export default function Modal_new_meet(props) {
    const closed_model = () => {
        props.setmeeting_model_Show(false);
    }
  
    const [value_day, setDay_value] = useState(null);
    const [ToDay_value, setToDay_value] = useState(null);
    //--popup Add_Participants_show --- //
    const [Add_Participants_show, setAdd_Participants_show] = useState(false);
    const plus_model = (e) => {
      setAdd_Participants_show(true);
  
    }
    //--popup End---//
     //--popup Choose_Lead_show --- //
     const [Choose_Lead_show, setChoose_Lead_show] = useState(false);
     const Choose_Lead_model = (e) => {
       setChoose_Lead_show(true);
   
     }
      //--popup Choose_Lead_show_show --- //

       //--popup Repeat_meeting --- //
     const [Repeat_meeting_show, setRepeat_meeting_show] = useState(false);
     const model_Repeat = (e) => {
       setRepeat_meeting_show(true);
        }
      //--popup Repeat_meeting --- //
      
    const [Related_to, setRelated_to] = useState('');
    const LeadChange = (event) => {
      setRelated_to(event.target.value);
    }

    const [change_checked, setchange_checked] = useState(true);
    const userchange = (event) => {
    setchange_checked(event.target.checked);
  };

    return (

        <Modal
            show={props.meeting_model_Show}
            size="lg"
        >
            <Modal.Header closeButton onClick={closed_model} >
                <Modal.Title>Meeting Information</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <div id='Meeting_Information'>
                    <Form>
                        <div className="form-group  border-bottom">
                            <TextField size="small" id="standard-basic" className='form_full_width' variant="standard" label="Title" />
                        </div>

                        <div className="form-group  border-bottom">
                            <TextField size="small" id="standard-basic" className='form_full_width' variant="standard" label="Location" />
                        </div>


                        <div className="form-group border-bottom d-flex border-bottom justify-content-between align-items-center" >
                            <div className="textname">All days</div>
                            <FormGroup className='All_days'>
                                <FormControlLabel control={<Checkbox defaultChecked />} />
                            </FormGroup>
                        </div>


                        <div className="form-group  border-bottom d-flex justify-content-between align-items-center" >
                            <div className="textname">From</div>
                            <div className="tdate">
                                <div className="timedte justify-content-between align-items-end d-flex mx-auto">
                                    <FormControl id="standard-basic" variant="standard" className='input_form form_full_width demo-simple-select-standard' >
                                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                                            <DatePicker className="mr-20 input_form form_full_width demo-simple-select-standard"
                                                mask="____/__/__"
                                                label=""
                                                value={value_day}
                                                onChange={(newDay_value) => {
                                                    setDay_value(newDay_value);
                                                }}
                                                renderInput={(params) => <TextField {...params} />}
                                            />
                                        </LocalizationProvider>
                                    </FormControl>
                                    <FormControl id="standard-basic" variant="standard" className='input_form form_full_width demo-simple-select-standard' >
                                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                                            <TimePicker className="mr-20 input_form form_full_width demo-simple-select-standard"
                                                label=""
                                                value={value_day}
                                                onChange={(newDay_value) => {
                                                    setDay_value(newDay_value);
                                                }}
                                                renderInput={(params) => <TextField {...params} />}
                                            />
                                        </LocalizationProvider>
                                    </FormControl>
                                </div>
                            </div>
                        </div>

                        <div className="form-group  border-bottom d-flex justify-content-between align-items-center" >
                            <div className="textname">To</div>
                            <div className="tdate">
                                <div className="timedte justify-content-between align-items-end d-flex mx-auto">
                                    <FormControl id="standard-basic" variant="standard" className='input_form form_full_width demo-simple-select-standard' >
                                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                                            <DatePicker className="mr-20 input_form form_full_width demo-simple-select-standard"
                                                mask="____/__/__"
                                                label=""
                                                value={ToDay_value}
                                                onChange={(newToDay_value) => {
                                                    setToDay_value(newToDay_value);
                                                }}
                                                renderInput={(params) => <TextField {...params} />}
                                            />
                                        </LocalizationProvider>
                                    </FormControl>
                                    <FormControl id="standard-basic" variant="standard" className='input_form form_full_width demo-simple-select-standard' >
                                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                                            <TimePicker className="mr-20 input_form form_full_width demo-simple-select-standard"
                                                label=""
                                                value={ToDay_value}
                                                onChange={(newToDay_value) => {
                                                    setToDay_value(newToDay_value);
                                                }}
                                                renderInput={(params) => <TextField {...params} />}
                                            />
                                        </LocalizationProvider>
                                    </FormControl>

                                </div>
                            </div>
                        </div>

                        <div className="form-group  border-bottom d-flex justify-content-between align-items-center" >
                            <div className="textname col-md-2">Host</div>
                            <div className='col-md-7 '>
                                <TextField className='form_full_width' id="standard-basic" label="User Name" variant="standard" />
                            </div>
                        </div>

                        <div className="form-group  border-bottom d-flex justify-content-between align-items-center" >
                            <div className="textname">Participants
                            </div>
                            <div className="meetfilesearch">
                                <span>None</span>
                                <a onClick={plus_model}>+Add</a>
                               
                            </div>
                        </div>
                        <Add_Participants Add_Participants_show={Add_Participants_show} setAdd_Participants_show={setAdd_Participants_show} />
                        <div className="form-group border-bottom d-flex justify-content-between align-items-center" >
                            <div className="textname col-md-4">Related To
                            </div>
                            <div className='col-md-7'>
                            <FormControl variant="standard" className='input_form form_full_width' >
                       
                            <Select labelId="demo-simple-select-standard-label" id="demo-simple-select-standard"  value={Related_to}
                                onChange={LeadChange}
                                                            >
                                <MenuItem value="">
                                    <em>None</em>
                                </MenuItem>
                                <MenuItem value={10}>Lead</MenuItem>
                                <MenuItem value={20}>Contact</MenuItem>
                                <MenuItem value={30}>Others</MenuItem>
                            </Select>
                            </FormControl>
                            </div>
                        </div>

                        <div className="form-group border-bottom d-flex justify-content-between align-items-center">
                            <div className="textname" >Lead
                            </div>
                            <div className="meetfilesearch">
                                <span>rohit kumar</span>
                                <i className="fa fa-search" onClick={Choose_Lead_model} data-toggle="modal" data-target="#myModalchooselead"></i>
                                <Choose_Lead Choose_Lead_show={Choose_Lead_show} setChoose_Lead_show={setChoose_Lead_show} />
                            </div>
                        </div>

                        <div className="form-group border-bottom d-flex justify-content-between align-items-center" >
                            <div className="textname"></div>
                            <div className='checking-user col-md-7'>
                            <Checkbox checked={change_checked} onChange={userchange} inputProps={{ 'aria-label': 'controlled' }}   />
                            <span>Add rohit kumar as a participant</span>
                            </div>
                        </div>

                        <div className="form-group border-bottom d-flex justify-content-between align-items-center" >
                            <div className="textname" >Repeat
                            </div>
                            <div className="meetfilesearch">
                                <span>None</span>
                                <span onClick={model_Repeat} ><i className="neweditIconSvg"></i></span>
                                <Repeat_meeting Repeat_meeting_show={Repeat_meeting_show} setRepeat_meeting_show={setRepeat_meeting_show} />
                            </div>
                        </div>
                        <div className="form-group border-bottom d-flex justify-content-between align-items-center" >
                            <div className="textname">Discription</div>
                            <div className='checking-user col-md-7'>
                            <Box component="form" noValidate autoComplete="off" >
                            <TextField  className='form_full_width' id="standard-multiline-static" multiline rows={1} />
                            </Box>
                          </div>
                        </div>
                    </Form>
                    
                </div>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={closed_model}> Cancel </Button>
                <Button variant="primary">Save</Button>
            </Modal.Footer>
        </Modal>
    )

};

