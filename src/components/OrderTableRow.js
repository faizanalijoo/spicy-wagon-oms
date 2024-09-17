import React from "react";
import {
  TableRow,
  TableCell,
  Typography,
  Box,
  Chip,
  Button,
} from "@mui/material";
import styled from "styled-components";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  padding: theme.spacing ? theme.spacing(2) : "16px",
  "&:not(:last-child)": {
    borderRight: `1px solid ${theme.palette?.divider || "#e0e0e0"}`,
  },
}));

const Label = styled(Typography)(({ theme }) => ({
  color: theme.palette?.text?.secondary || "#757575",
  fontSize: "0.75rem",
  marginBottom: theme.spacing ? theme.spacing(0.5) : "4px",
}));

const Value = styled(Typography)({
  fontSize: "0.875rem",
  fontWeight: 500,
});

const OrderId = styled(Value)(({ theme }) => ({
  color: theme.palette?.error?.main || "#f44336",
  fontWeight: "bold",
}));

const StatusChip = styled(Chip)(({ theme, status }) => {
  const getStatusColor = (status) => {
    switch (status.toLowerCase()) {
      case "placed":
        return {
          color: theme.palette?.success?.main || "#4caf50",
          backgroundColor: theme.palette?.success?.light || "#e8f5e9",
        };
      default:
        return {
          color: theme.palette?.text?.secondary || "#757575",
          backgroundColor: theme.palette?.action?.hover || "#f5f5f5",
        };
    }
  };

  const { color, backgroundColor } = getStatusColor(status);
  return {
    fontWeight: "bold",
    color,
    backgroundColor,
  };
});

const NextButton = styled(Button)(({ theme }) => ({
  backgroundColor: theme.palette?.primary?.main || "#1976d2",
  color: theme.palette?.primary?.contrastText || "#ffffff",
  "&:hover": {
    backgroundColor: theme.palette?.primary?.dark || "#115293",
  },
}));

const OrderTableRow = ({ order, onNext }) => {
  return (
    <TableRow>
      <StyledTableCell>
        <Box>
          <Label>ID</Label>
          <OrderId>{order.id}</OrderId>
        </Box>
        <Box mt={2}>
          <Label>Amount</Label>
          <Value>{order.amount}</Value>
        </Box>
        <Box mt={2}>
          <Label>Payment</Label>
          <Value>{order.payment}</Value>
        </Box>
      </StyledTableCell>
      <StyledTableCell>
        <Box>
          <Label>Name</Label>
          <Value>{order.name}</Value>
        </Box>
        <Box mt={2}>
          <Label>Contact</Label>
          <Value>{order.contact}</Value>
        </Box>
        <Box mt={2}>
          <Label>Seat</Label>
          <Value>{order.seat}</Value>
        </Box>
      </StyledTableCell>
      <StyledTableCell>
        <Box>
          <Label>Train</Label>
          <Value>{order.train}</Value>
        </Box>
        <Box mt={2}>
          <Label>Station</Label>
          <Value>{order.station}</Value>
        </Box>
      </StyledTableCell>
      <StyledTableCell>
        <Box>
          <Label>Booking Date & Time</Label>
          <Value>{order.bookingDateTime}</Value>
        </Box>
        <Box mt={2}>
          <Label>Booked From</Label>
          <Value>{order.bookedFrom}</Value>
        </Box>
      </StyledTableCell>
      <StyledTableCell>
        <Box>
          <Label>Last Updated</Label>
          <Value>{order.lastUpdated}</Value>
        </Box>
        <Box mt={2}>
          <Label>Status</Label>
          <StatusChip label={order.status} size="small" status={order.status} />
        </Box>
        <Box mt={2}>
          <Label>Updated</Label>
          <Value>{order.updated}</Value>
        </Box>
        <Box mt={2}>
          <Label>Remarks</Label>
          <Value>{order.remarks}</Value>
        </Box>
      </StyledTableCell>
      <StyledTableCell>
        <NextButton variant="contained" onClick={() => onNext(order.id)}>
          Next
        </NextButton>
      </StyledTableCell>
    </TableRow>
  );
};

export default OrderTableRow;
