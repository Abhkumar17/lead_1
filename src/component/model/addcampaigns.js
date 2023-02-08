import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import Table from 'react-bootstrap/Table';
import Col from 'react-bootstrap/Col';
import '../css/icon.css';
import { DataGrid, GridToolbar } from '@mui/x-data-grid';

export default function Add_Campaigns(props) {
    const closed_model = () => {
        props.setadd_campaigns_show(false);

    }

    return (

        <Modal
            show={props.add_campaigns_show}
            size="xl"
        >
            <Modal.Header closeButton onClick={closed_model}>
                <Modal.Title>Add Campaigns to Contact  :
                    Kris Marrier (Sample)</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Group className="mb-3 search_section ico-search svgIcons" controlId="formBasicEmail">
                        <Col xs={4}>
                            <Form.Control id="standard-basic" type="text" placeholder="Search" />
                        </Col>

                    </Form.Group>



                </Form>

                <Table striped bordered hover size="sm">
                    <tbody>
                        <tr>
                            <th width="20" className="pR20 pR">
                                <input type="checkbox" name="allcheck" /><span>
                                </span>
                            </th>
                            <th> <a href="javascript:sortColumns_smfa('Type');">
                                Type</a>
                            </th>
                            <th> <a href="#" >
                                Campaign Name</a>
                            </th>
                            <th> <a href="#">
                                Status</a>
                            </th>
                            <th> <a href="#">
                                Start Date</a>
                            </th>
                            <th> <a href="#">
                                End Date</a>
                            </th>
                            <th> <a href="#">
                                Expected Revenue</a>
                            </th>
                            <th> <a href="#">
                                Survey Department</a>
                            </th>
                            <th> <a href="#">
                                Survey Type</a>
                            </th>
                            <th> <a href="#;">
                                Survey</a>
                            </th>
                        </tr>
                        <tr>
                            <td className='contain-table' colspan="13">

                                <div className="f15 grayTxt" align="center">&lt;  No Campaigns found. &gt;</div>

                            </td>
                        </tr>
                    </tbody>
                
                </Table >
            </Modal.Body>

        </Modal>

    )

};