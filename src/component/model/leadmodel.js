import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import '../css/icon.css';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField'
import { DataGrid, GridToolbar } from '@mui/x-data-grid';
import { randomCreatedDate, randomTraderName, randomUpdatedDate, } from '@mui/x-data-grid-generator';


// table row ---///
const columns = [
  { field: 'Lead Name', headerName: 'Lead Name', width: 180, editable: true },
  { field: 'Lead Owner',headerName: 'Lead Owner', type: 'Owner', editable: true },
  { field: 'Company', headerName: 'Company', type: 'Company', width: 180, editable: true, },
  { field: 'First Name', headerName: 'FirstName', type: 'FirstName', width: 220, editable: true, },
  { field: 'Title', headerName: 'Title', type: 'Title', width: 220, editable: true, },
  { field: 'Email', headerName: 'Email', type: 'Email', width: 220, editable: true, },
  { field: 'Phone', headerName: 'Phone', type: 'Phone', width: 220, editable: true, },
  { field: 'Fax', headerName: 'Fax', type: 'Fax', width: 220, editable: true, },
  { field: 'Mobile', headerName: 'Mobile', type: 'Mobile', width: 220, editable: true, },
];

const rows = [
  { id: 1, Name: randomTraderName(), Owner: 25, Company: randomCreatedDate(), FirstName: randomUpdatedDate(), Title: randomUpdatedDate(), Email: randomUpdatedDate(),  Phone: randomUpdatedDate(), Fax: randomUpdatedDate(), Mobile: randomUpdatedDate(),},
  { id: 2, Name: randomTraderName(), Owner: 36, Company: randomCreatedDate(), FirstName: randomUpdatedDate(), Title: randomUpdatedDate(), Email: randomUpdatedDate(),  Phone: randomUpdatedDate(), Fax: randomUpdatedDate(), Mobile: randomUpdatedDate(),},
  { id: 3, Name: randomTraderName(), Owner: 19, Company: randomCreatedDate(), FirstName: randomUpdatedDate(), Title: randomUpdatedDate(), Email: randomUpdatedDate(),  Phone: randomUpdatedDate(), Fax: randomUpdatedDate(), Mobile: randomUpdatedDate(),},
  { id: 4, name: randomTraderName(), Owner: 28, Company: randomCreatedDate(), FirstName: randomUpdatedDate(), Title: randomUpdatedDate(), Email: randomUpdatedDate(),  Phone: randomUpdatedDate(), Fax: randomUpdatedDate(), Mobile: randomUpdatedDate(),},
  { id: 5, name: randomTraderName(), Owner: 23, Company: randomCreatedDate(), FirstName: randomUpdatedDate(), Title: randomUpdatedDate(), Email: randomUpdatedDate(), Phone: randomUpdatedDate(), Fax: randomUpdatedDate(), Mobile: randomUpdatedDate(),},
];

export default function Choose_Lead(props) {
  const closed_model = () => {
    props.setChoose_Lead_show(false);

  }

  return (

    <Modal
      show={props.Choose_Lead_show}
      size="xl"
    >
      <Modal.Header closeButton onClick={closed_model}>
        <Modal.Title>Choose Lead</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group className="mb-3 search_section ico-search svgIcons" controlId="formBasicEmail">
            <div className='row'>
            <Col xs={4}>
              <TextField className='svg_Icons' fullWidth id="standard-search" label="Search" type="search" variant="standard" />
            </Col>
            <Col xs={8}>
            <Button className="outlineplus pull_right" variant="outlined"> New Lead </Button>
            </Col>
            </div>
          </Form.Group>
          <div style={{ height: 300, width: '100%' }}>
            <DataGrid checkboxSelection rows={rows} columns={columns} components={{ Toolbar: GridToolbar, }} experimentalFeatures={{ newEditingApi: true }} />
          </div>


        </Form>

      </Modal.Body>

    </Modal>
  )

};