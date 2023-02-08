 import React, { useState } from 'react';
 import Button from 'react-bootstrap/Button';
 import Modal from 'react-bootstrap/Modal';

export default function Email_model(props) {
     const closed_model=()=>{
        props.setemail_model_show(false);

     }
  
    return (
    
<Modal className='bottom_right'   tabIndex='-1'   animationDirection='right'
show={props.email_model_show}
 
>
<Modal.Header  closeButton onClick={closed_model} >
  <Modal.Title>Modal title</Modal.Title>
</Modal.Header>
<Modal.Body>
  I will not close if you click outside me. Don't even try to press
  escape key.
</Modal.Body>
<Modal.Footer>
  <Button variant="secondary" onClick={closed_model} >
    Close
  </Button>
  <Button variant="primary">Understood</Button>
</Modal.Footer>
</Modal>
    )

    };

