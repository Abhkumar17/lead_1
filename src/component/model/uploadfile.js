import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';

export default function Upload_File(props) {
    const closed_model = () => {
        props.setUpload_File_show(false);
      
      
    }

   
    return (
        
        <Modal
            show={props.Upload_File_show}

        >
            <Modal.Header closeButton onClick={closed_model} >
                <Modal.Title>Attach  Link</Modal.Title>
            </Modal.Header>
            <Modal.Body>
         <div className="drop_box">
                                <header>
                                  <h4>Select File here</h4>
                                  <span>Files Supported: PDF, TEXT, DOC , DOCX</span>
                                </header>
                            <Form.Control type="file"  hidden=""  id="fileID1" />
                               
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

