

import React, { useState, useEffect } from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import TableHeader from './TableHeader';
import { useDispatch, useSelector } from 'react-redux';
import { getHeros, sortHeros } from '../redux/heros/herosActions';

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

function compare_name( a, b )
{
if ( a.name.toLowerCase() < b.name.toLowerCase()){
  return -1;
}
if ( a.name.toLowerCase() > b.name.toLowerCase()){
  return 1;
}
return 0;
}

export default function HerosTable({herosData}) {
  const dispatch = useDispatch();
  const colTitles = ["Name", "Phone", "Email", "Date", "Country", "Company"];
  const [sortedHeros, setSortedHeros ] = useState([]);
  const herosDetails = useSelector((state) => state.heros);
  const { loading, error, heros } = herosDetails;
  const  {isSorted}  = useSelector((state) => state.sortedHeros);
  

  useEffect(()=>{
    if (heros){
      setSortedHeros(heros.slice().sort(compare_name));
    } else {
      console.log("have not recieved the list yet..");
    }
  }, []);

  useEffect(()=>{
      console.log(sortedHeros);
  }, [sortedHeros]);

  useEffect(()=>{
    console.log(isSorted);
  }, [isSorted]);

  useEffect(()=>{
    console.log(heros);
    console.log("something happened changed the heros value..");
    dispatch(getHeros());
  }, [heros]);

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
          {isSorted? sortedHeros.slice(0,15).map((val, index)=>{
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
        })
        :
        heros.slice(0,15).map((val, index)=>{
          return (
            <StyledTableRow key={index} className=''>
              <StyledTableCell>{val.name}</StyledTableCell>
              <StyledTableCell>{val.phone}</StyledTableCell>
              <StyledTableCell>{val.email}</StyledTableCell>
              <StyledTableCell>{val.date}</StyledTableCell>
              <StyledTableCell>{val.country}</StyledTableCell>
              <StyledTableCell>{val.company}</StyledTableCell>
          </StyledTableRow>
          )
        })}
        {heros.slice(0,10).map((val, index)=>{
          return (
            <StyledTableRow key={index} className=''>
              <StyledTableCell>{val.name}</StyledTableCell>
              <StyledTableCell>{val.phone}</StyledTableCell>
              <StyledTableCell>{val.email}</StyledTableCell>
              <StyledTableCell>{val.date}</StyledTableCell>
              <StyledTableCell>{val.country}</StyledTableCell>
              <StyledTableCell>{val.company}</StyledTableCell>
          </StyledTableRow>
          )
        })}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
