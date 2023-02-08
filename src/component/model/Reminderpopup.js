import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import Radio from '@mui/material/Radio';
import TextField from '@mui/material/TextField';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { TimePicker } from '@mui/x-date-pickers';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function Reminder_popup(props) {
    const closed_model = () => {
        props.setReminder_popup_show(false);


    }

    console.log(props.Reminder_popup_show);

    const [Alert, setAlert] = useState('');

    const select_option = (event) => {
        setAlert(event.target.value);

    }
   
    const [value_day, setDay_value] = useState(null);

    return (

        <Modal  className='Reminder_popup rt' 
            size='lg'
            show={props.Reminder_popup_show}  
        >
            <Modal.Header closeButton onClick={closed_model} >
                <Modal.Title>Reminder</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <div className="modal-body py-0">
                    <div className="col-sm-12 reminderdata">
                        <Form>
                            <div className='mr-left-20'>
                                <Radio name="radio-buttons" inputProps={{ 'aria-label': 'on' }} />
                                <span>On</span>
                            </div>

                            <span className="dthtml">
                            <FormControl id="standard-basic" variant="standard" className='demo-simple-select-standard MuiInputBase-formControl'>
                                <LocalizationProvider dateAdapter={AdapterDayjs}>
                                    <DatePicker className='demo-simple-select-standard  MuiInputBase-formControl' mask="____/__/__" size="small"
                                label=""
                                value={value_day}
                                onChange={(newDay_value) => {
                                 setDay_value(newDay_value);
                                }} renderInput={(params) => <TextField {...params} />}
                                    />
                                 </LocalizationProvider>
                                </FormControl>
                              
                                <span className='mt-30'>at</span>
                                <FormControl id="standard-basic" variant="standard" className='demo-simple-select-standard  MuiInputBase-formControl'>
                                <LocalizationProvider dateAdapter={AdapterDayjs}>
                                    <TimePicker  className='demo-simple-select-standard  MuiInputBase-formControl' value={value_day}
                                onChange={(newDay_value) => {
                                 setDay_value(newDay_value);
                                }} size="small" renderInput={(params) => <TextField {...params} />}
                                    />
                                </LocalizationProvider>
                                </FormControl>
                            </span>

                            <FormControl variant="standard" className='mb-30' >
                                <div className='row'>
                                    <div className='col-md-5'>
                                        <p>Alert</p>
                                    </div>
                                    <div className='col-md-7'>
                                        <Select size="small" labelId="demo-simple-select-standard-label" id="demo-simple-select-standard" label="Alert" onChange={select_option}>
                                            <MenuItem >
                                                <em>None</em>
                                            </MenuItem>
                                            <MenuItem>Email</MenuItem>
                                            <MenuItem>Pop-up</MenuItem>
                                            <MenuItem>Both</MenuItem>
                                        </Select>
                                    </div>
                                </div>
                            </FormControl>

                        </Form>
                    </div>
                </div>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={closed_model} >
                    Cancel
                </Button>
                <Button  variant="primary">Done</Button>
            </Modal.Footer>
        </Modal>
    )

};

