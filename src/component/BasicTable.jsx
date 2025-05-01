import React from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';
import "../App.css";

const BasicTable = ({ data, headers }) => {
  if (!data || data.length === 0) {
    return <div>No data available</div>;
  }


  return (
    <TableContainer component={Paper} className="tableStyles">
      <Table>
        <TableHead className="tableHeadStyles">
          <TableRow>
            {headers.map((header) => (
              <TableCell key={header.key}>{header.label}</TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((row, rowIndex) => (
            <TableRow key={rowIndex} className="tableRowStyles">
              {headers.map((header) => (
                <TableCell key={header.key} className="tableCellStyles">
                  {header.key.split('.').reduce((acc, key) => acc && acc[key], row)}
                </TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default BasicTable;
