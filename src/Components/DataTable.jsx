import React from "react";
import { styled } from "@mui/material/styles";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import Paper from "@mui/material/Paper";
import {
  CircularProgress,
  Table,
  TableBody,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import "../Styling/DataTable.css";

function DataTable({ loading, data }) {
  const StyledTableRow = styled(TableRow)(({ theme }) => ({
    "&:nth-of-type(odd)": {
      backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    "&:last-child td, &:last-child th": {
      border: 0,
    },
  }));

  const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 15,
    },
  }));

  return (
    <div className="dataTable">
      {loading && (
        <>
          <CircularProgress />
          <span style={{ marginTop: "15px" }}>Loading...</span>
        </>
      )}
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              {data &&
                data.length > 0 &&
                Object.keys(data[0]).map((header) => {
                  return <StyledTableCell>{header}</StyledTableCell>;
                })}
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((row, index) => {
              return (
                <StyledTableRow key={index}>
                  {Object.values(row).map((value, valueIndex) => (
                    <StyledTableCell key={valueIndex}>{value}</StyledTableCell>
                  ))}
                </StyledTableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}

export default DataTable;
