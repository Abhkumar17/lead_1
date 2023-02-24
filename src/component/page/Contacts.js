import React, { useEffect, useState } from "react";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";

import axios from "axios";

import Header from "../include/header";
import Footer from "../include/footer";



const token = '3|okYVY8gK4Cw7DOp0XRaftVVTUNkHlBQ72QviwApL';
const rows = [];

export default function Contacts() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get('http://192.168.1.157/lms_laravel/api/showContactList', {
  headers: {
    'Authorization': `Bearer ${token}`
  }
})
.then(response => {
    setData(response.data.ct)
  })
  .catch(error => {
    console.log(error);
  });
  }, []);

  return (
    <div>
        <Header />
        <TableContainer component={Paper}>
      <Table aria-label="simple table" stickyHeader >
        <TableHead  >
          <TableRow >
            <TableCell>Contact Owner</TableCell>
            <TableCell align="">First Name</TableCell>
            <TableCell align="">Account Name</TableCell>
            <TableCell align="">Email</TableCell>
            <TableCell align="">Phone</TableCell>
            <TableCell align="">Other Phone</TableCell>
            {/* <TableCell align="">assistant</TableCell> */}
            <TableCell align="">Last Name </TableCell>
            <TableCell align="">Vendor Name</TableCell>
            <TableCell align="">Title</TableCell>
            <TableCell align="">Department</TableCell>
            <TableCell align="">Home Phone</TableCell>
            {/* <TableCell align="">fax</TableCell>
            <TableCell align="">dateofBirth</TableCell>
            <TableCell align="">mailingStreet</TableCell>
            <TableCell align="">mailingCity</TableCell>
            <TableCell align="">mailingState</TableCell>
            <TableCell align="">mailingZip </TableCell>
            <TableCell align="">mailingCountry</TableCell>
            <TableCell align="">otherStreet</TableCell>
            <TableCell align="">otherCity</TableCell>
            <TableCell align="">otherState</TableCell>
            <TableCell align="">otherZip</TableCell>
            <TableCell align="">otherCountry</TableCell> */}
            <TableCell align="">Description </TableCell>
            
          </TableRow>
        </TableHead>
        <TableBody>
          {data?.map((row) => (
            <TableRow key={row.id}>
              <TableCell component="th" scope="row">
                {row.contactOwner}
              </TableCell>
              <TableCell align="">{row.firstName}</TableCell>
              <TableCell align="">{row.accountName}</TableCell>
              <TableCell align="">{row.email}</TableCell>
              <TableCell align="">{row.phone}</TableCell>
              <TableCell align="">{row.otherPhone}</TableCell>
              {/* <TableCell align="">{row.assistant}</TableCell> */}
              <TableCell align="">{row.lastName}</TableCell>
              <TableCell align="">{row.vendorName}</TableCell>
              <TableCell align="">{row.title}</TableCell>
              <TableCell align="">{row.department}</TableCell>
              <TableCell align="">{row.homePhone}</TableCell>
              {/* <TableCell align="">{row.fax}</TableCell>
              <TableCell align="">{row.dateofBirth}</TableCell>
              <TableCell align="">{row.mailingStreet}</TableCell>
              <TableCell align="">{row.mailingCity}</TableCell>
              <TableCell align="">{row.mailingState}</TableCell>
              <TableCell align="">{row.mailingZip}</TableCell>
              <TableCell align="">{row.mailingCountry}</TableCell>
              <TableCell align="">{row.otherStreet}</TableCell>
              <TableCell align="">{row.otherCity}</TableCell>
              <TableCell align="">{row.otherState}</TableCell>
              <TableCell align="">{row.otherZip}</TableCell>
              <TableCell align="">{row.otherCountry}</TableCell> */}
              <TableCell align="">{row.description}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
        <Footer />
    </div>
   
  );
}
