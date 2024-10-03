import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@mui/material";
import styled from "styled-components";
import OrderTableRow from "../components/OrderTableRow/OrderTableRow";

const StyledTableContainer = styled(TableContainer)(({ theme }) => ({
  width: "100%",
  overflowX: "auto",
  borderRadius: "10px"
}));

const StyledTable = styled(Table)(({ theme }) => ({
  minWidth: "100%",
}));

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  fontWeight: "bold",
  backgroundColor: theme.palette?.background?.default || "#ffffff",
  "&:not(:last-child)": {
    borderRight: `1px solid ${theme.palette?.divider || "#757373"}`,
  },
  borderBottom: `1px solid ${theme.palette?.divider || "#757373"}`,
}));

const OrdersTable = ({ orders }) => {
  return (
    <div>
      <StyledTableContainer component={Paper}>
        <StyledTable sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <StyledTableCell sx={{ width: '10%' }}>Order Details</StyledTableCell>
              <StyledTableCell sx={{ width: '30%' }}>Customer Travel Details</StyledTableCell>
              <StyledTableCell sx={{ width: '20%' }}>Booking Details</StyledTableCell>
              <StyledTableCell sx={{ width: '35%' }}>Booking Info</StyledTableCell>
              <StyledTableCell sx={{ width: '5%' }}>Status</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {orders?.map((order) => (
              <OrderTableRow key={order.id} order={order} />
            ))}
          </TableBody>
        </StyledTable>
      </StyledTableContainer>
    </div>
  );
};

export default OrdersTable;
