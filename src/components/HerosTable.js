

import React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import TableHeader from './TableHeader';


const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: "#C5C5C5",
    color: "#525252",
    fontWeight:"bold",
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
    backgroundColor: theme.palette.common.white,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));


export default function HerosTable({data}) {
  const colTitles = ["Name", "Phone", "Email", "Date", "Country", "Company"];

  return (
    <TableContainer component={Paper}>

      <TableHeader />
    
      
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
          {colTitles.map((val) => {
          return  <StyledTableCell>{val}</StyledTableCell>;
          })}
          </TableRow>
        </TableHead>
        <TableBody>
        {data.slice(0,10).map((val, index)=>{
          return (
            <StyledTableRow key={index} className=''>
              <StyledTableCell>{val.name}</StyledTableCell>
              <StyledTableCell>{val.phone}</StyledTableCell>
              <StyledTableCell>{val.email}</StyledTableCell>
              <StyledTableCell>{val.date}</StyledTableCell>
              <StyledTableCell>{val.country}</StyledTableCell>
              <StyledTableCell>{val.company}</StyledTableCell>
          </StyledTableRow>
          );
        })}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
