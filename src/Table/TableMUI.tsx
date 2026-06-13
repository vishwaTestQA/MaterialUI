import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'
import React from 'react'
import tableData from "./tableData.json"

const TableMUI = () => {
  return (
    <TableContainer component={Paper} sx={{height: 300}}>
      <Table aria-label="user table" stickyHeader>
        <TableHead>
           <TableRow>
              <TableCell>ID</TableCell>
              <TableCell>FIRST NAME</TableCell>
              <TableCell>LAST NAME</TableCell>
              <TableCell align='center'>IP ADDRESS</TableCell>
           </TableRow>
        </TableHead>
        <TableBody>
           {
            tableData.map((itm,ind) => 
               <TableRow key={itm.id} 
                         sx={{
                            bgcolor: ind %2===0 ? "lightgrey" : "lightblue",
                            // '&:nth-child(odd)': {bgcolor:"lightgrey"},
                            '&:last-child td, &:last-child th': {border: 0}
                         }}>
                <TableCell>{itm.id}</TableCell>
                <TableCell>{itm.first_name}</TableCell>
                <TableCell>{itm.last_name}</TableCell>
                <TableCell align='center'>{itm.ip_address}</TableCell>
              </TableRow>
            )
           }
        </TableBody>
      </Table>
    </TableContainer>
  )
}

export default TableMUI
