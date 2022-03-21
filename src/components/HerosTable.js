

import React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { IconButton, Toolbar, Tooltip } from '@mui/material';
import FilterListIcon from '@mui/icons-material/FilterList';
import Typography from '@mui/material/Typography';
// export default function HerosTable({data}) {
//   console.log(data)

//   const colTitles = ["Name", "Phone", "Email", "Date", "Country", "Company"]
//   return (
//     <div>
//       <Table responsive bordered hover>
//       <thead>
//         <tr>
//           {colTitles.map((val) => {
//           return  <th>{val}</th>;
//           })}
//         </tr>
//       </thead>
//       <tbody>
//         {data.slice(0,10).map((val, index)=>{
//           return (
//             <tr key={index} className=''>
//             <td>{val.name}</td>
//             <td>{val.phone}</td>
//             <td>{val.email}</td>
//             <td>{val.date}</td>
//             <td>{val.country}</td>
//             <td>{val.company}</td>
//           </tr>
//           );
//         })}
       
//       </tbody>
//     </Table>
//     </div>
//   );
// }




const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
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
  const colTitles = ["Name", "Phone", "Email", "Date", "Country", "Company"]

  return (
    <TableContainer component={Paper}>
      <Toolbar>
      <Typography
          sx={{ flex: '1 1 100%' }}
          variant="h6"
          id="tableTitle"
          component="div"
        >
          Heros
        </Typography>
        <Tooltip title="Filter list">
          <IconButton>
            <FilterListIcon />
          </IconButton>
        </Tooltip>
        </Toolbar>
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
