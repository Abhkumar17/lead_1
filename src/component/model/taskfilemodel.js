import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import Switch from '@mui/material/Switch';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import FormControl from '@mui/material/FormControl';
import Reminder_model from "../model/Reminderpopup";

export default function Task_file(props) {
     const closed_model = () => {
        props.settask_file_show(false);
    }


    const [Reminder_popup_show, setReminder_popup_show] = useState(false);
    const Reminderpopup = (e) => {
        setReminder_popup_show(e.target.checked);
        props.settask_file_show(false);
    };

    const [value_day, setDay_value] = useState(null);

    const [Priority_option, setPriority_option] = useState('null');
    const Priority = (event) => {
        setPriority_option(event.target.value);
    };

    return (
<div>
        <Modal show={props.task_file_show} size="lg">
            <Modal.Header closeButton onClick={closed_model} >
                <Modal.Title>Create Task</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <div id='myModalurl1'>
                    <Form>
                        <div className="form-group d-flex">
                            <Form.Label className="textname">Subject</Form.Label>
                            <TextField size="small" id="standard-basic" className='input_form' variant="filled" />
                            <span><i className='task_lookup'></i></span>
                        </div>

                        <div className="form-group d-flex">
                            <Form.Label className="textname">Due Date</Form.Label>
                            <FormControl id="standard-basic" variant="standard" className='input_form form_full_width demo-simple-select-standard' >
                                <LocalizationProvider dateAdapter={AdapterDayjs}>
                                    <DatePicker size="small" mask="____/__/__"
                                        label=""
                                        value={value_day}
                                        onChange={(newDay_value) => {
                                            setDay_value(newDay_value);
                                        }}
                                        className='input_form' renderInput={(params) => <TextField id="demo-simple-select-standard" {...params} />}
                                    />
                                </LocalizationProvider>
                            </FormControl>
                        </div>
                        <div className="form-group d-flex">

                            <Form.Label className="textname">Priority</Form.Label>
                            <FormControl variant="standard" className='input_form form_full_width' >
                                <Select size="small"                                   
                                    label="Priority"
                                    value={Priority_option}
                                    onChange={Priority}
                                    labelId="demo-simple-select-standard-label" id="demo-simple-select-standard" name="sellist1">

                                    <MenuItem value={10}>High</MenuItem>
                                    <MenuItem value={20}>Highest</MenuItem>
                                    <MenuItem value={30}>Low</MenuItem>
                                    <MenuItem value={40}>Lowest</MenuItem>
                                    <MenuItem value={50}>Normal</MenuItem>
                                </Select>
                            </FormControl>
                        </div>

                        <div className="form-group d-flex">
                            <Form.Label className="textname">Owner</Form.Label>



                            <div className="taskwrap">
                                <div className="taskbtn">
                                    <p>Rohit kumar</p>
                                    {/* <!-- <span style="font-size: 18px;">Rohit Kumar</span> --> */}
                                    <i className="fa-solid fa-angle-down" ></i>
                                </div>
                                <div className="taskcont">
                                    <div className="tasksearch">
                                        <i className="uil uil-search"></i>
                                        <Form.Control type="text" placeholder="Search" />
                                    </div>
                                    <ul className="taskoptions"><li className="">Rohit Kumar</li></ul>
                                </div>
                            </div>
                        </div>

                        <div className="form-group d-flex">
                            <Form.Label className="textname">Reminder</Form.Label>
                            <Form.Control type="checkbox" hidden="hidden" id="username" />
                            <Switch color="secondary" onChange={Reminderpopup} />
                           

                        </div>

                    </Form>
                </div>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={closed_model} >
                    Cancel
                </Button>
                <Button variant="primary">Attach</Button>
            </Modal.Footer>
        </Modal>
          {<Reminder_model Reminder_popup_show={Reminder_popup_show} setReminder_popup_show={setReminder_popup_show} />}
          </div>
    )
  
};

