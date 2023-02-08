import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import Checkbox from '@mui/material/Checkbox';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import TextField from '@mui/material/TextField';
import Select from '@mui/material/Select';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { TimePicker } from '@mui/x-date-pickers/TimePicker';
import FormControl from '@mui/material/FormControl';
import MenuItem from '@mui/material/MenuItem';

export default function Repeat_meeting(props) {
    const closed_model = () => {
        props.setRepeat_meeting_show(false);
    }
    const [value_day, setDay_value] = useState(null);
    const [ToDay_value, setToDay_value] = useState(null);
    
    const [Repeat_type, setRepeat_type] = useState('');
    const LeadChange = (event) => {
      setRepeat_type(event.target.value);
    }
    return (

        <Modal show={props.Repeat_meeting_show} size="lg" >
            <Modal.Header closeButton onClick={closed_model} >
                <Modal.Title>Repeat</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <div id='Meeting_Information'>
                    <Form>
                        

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

                        <div className="form-group border-bottom d-flex justify-content-between align-items-center" >
                            <div className="textname col-md-4">Related To
                            </div>
                            <div className='col-md-7'>
                            <FormControl variant="standard" className='input_form form_full_width' >
                       
                            <Select labelId="demo-simple-select-standard-label" id="demo-simple-select-standard"  value={Repeat_type}
                                onChange={LeadChange}
                                                            >
                                <MenuItem value="">
                                    <em>None</em>
                                </MenuItem>
                                <MenuItem value={20}>Daily</MenuItem>
                                <MenuItem value={30}>Weekly</MenuItem>
                                <MenuItem value={40}>Monthly</MenuItem>
                                <MenuItem value={50}>Yearly</MenuItem>
                                <MenuItem value={60}>Custom</MenuItem>
                             
                            </Select>
                            </FormControl>
                            </div>
                        </div>
                        
                     
                    </Form>
                    
                </div>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={closed_model}> Cancel </Button>
                <Button variant="primary">Attach</Button>
            </Modal.Footer>
        </Modal>
    )

};