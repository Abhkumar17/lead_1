import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';

export default function link_url(props) {
    const closed_model = () => {
        props.setlink_url_show(false);
    }


    return (

        <Modal
            show={props.link_url_show}

        >
            <Modal.Header closeButton onClick={closed_model} >
                <Modal.Title>Attach  Link</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <div id='myModalurl'>
            <form className="form-inline">
                                <div className="form-group">
                                  <label for="exampleInputName2">Enter
                                    Url</label>
                                  <Form.Control type="url" name="urlField" className="form-control" placeholder="URL" required="" />
                                </div>


                              </form>
                              </div>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={closed_model} >
                    Cancel
                </Button>
                <Button variant="primary">Attach</Button>
            </Modal.Footer>
        </Modal>
    )

};

