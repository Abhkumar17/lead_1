import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import '../css/icon.css';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import TextField from '@mui/material/TextField';

export default function Add_Participants(props) {
    const closed_model_popup = () => {
        props.setAdd_Participants_show(false);

    };

    const [Users, setUsers] = useState('');
    const handle_Change = (event) => {
        setUsers(event.target.value);
    };

    return (

        <Modal
            show={props.Add_Participants_show}
            size="lg"
        >
            <Modal.Header closeButton onClick={closed_model_popup}>
                <Modal.Title>Add Products to Lead</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <div className="modal-body py-0">
                    <div className="col-lg-12 mx-4 login-form">
                        <div className='col-md-4'>
                            <FormControl fullWidth>
                                <Select id="demo-simple-select-standard"  value={Users} onChange={handle_Change}
                                >
                                    <MenuItem value={10}>Contacts</MenuItem>
                                    <MenuItem value={20}>Leads</MenuItem>
                                    <MenuItem value={30}>Users</MenuItem>
                                </Select>
                            </FormControl></div>

                        <div className='col-md-4'>


                            <div className="pseudo-search">
                                <TextField id="filled-search" label="Search" type="search" variant="filled" />
                            </div>
                        </div>
                        <div className='col-md-4'>
                            <div className="das d-inline ">
                                <a href="#" className="dasall">All</a>
                                <a href="#" className="dasselt">Selected
                                    <span>(0)</span>
                                </a>
                            </div>
                        </div>
                    </div>


                    <div className="col-sm-12">
                        <div className='over-flow-Selected'>

                        <div className="form-check">
                            <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                            <h3><a >rohit kumar</a> <span>(Sample)</span><span className='color_change'>&nbsp;(VERTAGE)</span></h3>
                            <span className="color5">rohitkumar@vert-age.com</span>
                        </div>
                        <div className="form-check">
                            <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                            <h3><a >rohit kumar</a> <span>(Sample)</span><span className='color_change'>&nbsp;(VERTAGE)</span></h3>
                            <span className="color5">rohitkumar@vert-age.com</span>
                        </div>

                    </div>
                    </div>
                    <div className="col-sm-12 userdte my-3">
                        <div className="form-check  mt-30">
                            <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                        </div>
                        <p>Invite by Email Address <span>: Use commas to separate email addresses.</span> 
                        </p> 
                            <TextField fullWidth id="standard-multiline-static"  label="Email" multiline rows={2} />
                                </div>
                </div>

            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={closed_model_popup} >
                    Cancel
                </Button>
                <Button variant="primary">Done</Button>
            </Modal.Footer>
        </Modal>
    )

};
