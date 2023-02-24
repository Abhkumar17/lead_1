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

export default function Deals() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get('http://192.168.1.157/lms_laravel/api/showDealList', {
  headers: {
    'Authorization': `Bearer ${token}`
  }
})
.then(response => {
    setData(response.data.deals)
  })
  .catch(error => {
    console.log(error);
  });
  }, []);

  return (
    <div>
        <Header />
        <TableContainer component={Paper}>
        <Table aria-label="simple table" stickyHeader>
        <TableHead>
          <TableRow>
            <TableCell>Deal Owner</TableCell>
            <TableCell align="right">Deal Name</TableCell>
            <TableCell align="right">Account Name</TableCell>
            <TableCell align="right">Type</TableCell>
            <TableCell align="right">Amount</TableCell>
            <TableCell align="right">Closing Date</TableCell>
            <TableCell align="right">stage</TableCell>
            <TableCell align="right">Probability %</TableCell>
            <TableCell align="right">Expected Revenue</TableCell>
            <TableCell align="right">Campaign Source</TableCell>
            <TableCell align="right">Description</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((row) => (
            <TableRow key={row.id}>
              <TableCell component="th" scope="row">
                {row.dealOwner}
              </TableCell>
              <TableCell align="right">{row.dealName}</TableCell>
              <TableCell align="right">{row.accountName}</TableCell>
              <TableCell align="right">{row.type}</TableCell>
              <TableCell align="right">{row.amount}</TableCell>
              <TableCell align="right">{row.closingDate}</TableCell>
              <TableCell align="right">{row.stage}</TableCell>
              <TableCell align="right">{row.probability}</TableCell>
              <TableCell align="right">{row.expectedRevenue}</TableCell>
              <TableCell align="right">{row.campaignSource}</TableCell>
              <TableCell align="right">{row.description}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
        <Footer />
    </div>
   
  );
}
