import React from "react";
import {
  Paper,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
} from "@mui/material";
import { styled } from "@mui/material/styles";

const StyledPaper = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(2),
  maxWidth: 300,
  marginLeft: "auto",
  marginTop: 5,
  borderRadius: '10px',
  backgroundColor: theme.palette.action.hover
}));

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  borderBottom: "none",
  padding: theme.spacing(1, 0),
}));

const RedTypography = styled(Typography)(({ theme }) => ({
  color: theme.palette.error.main,
  fontWeight: "bold",
}));

const PriceBreakdown = ({
  totalAmount,
  subTotal,
  gst,
  deliveryCharges,
  discount,
  amountPayable,
}) => {
  return (
    <StyledPaper elevation={2}>
      <TableContainer>
        <Table>
          <TableBody>
            <TableRow>
              <StyledTableCell>
                <Typography variant="subtitle1">Total Amount:</Typography>
              </StyledTableCell>
              <StyledTableCell align="right">
                <Typography variant="subtitle1">
                  ₹ {totalAmount.toFixed(2)}
                </Typography>
              </StyledTableCell>
            </TableRow>
            <TableRow>
              <StyledTableCell>
                <Typography variant="body2">Sub Total:</Typography>
              </StyledTableCell>
              <StyledTableCell align="right">
                <Typography variant="body2">₹ {subTotal.toFixed(2)}</Typography>
              </StyledTableCell>
            </TableRow>
            <TableRow>
              <StyledTableCell>
                <Typography variant="body2">GST:</Typography>
              </StyledTableCell>
              <StyledTableCell align="right">
                <Typography variant="body2">₹ {gst.toFixed(2)}</Typography>
              </StyledTableCell>
            </TableRow>
            <TableRow>
              <StyledTableCell>
                <Typography variant="body2">Delivery Charges:</Typography>
              </StyledTableCell>
              <StyledTableCell align="right">
                <Typography variant="body2">
                  ₹ {deliveryCharges?.toFixed(2)}
                </Typography>
              </StyledTableCell>
            </TableRow>
            <TableRow>
              <StyledTableCell>
                <Typography variant="body2">Discount:</Typography>
              </StyledTableCell>
              <StyledTableCell align="right">
                <Typography variant="body2">₹ {discount?.toFixed(2)}</Typography>
              </StyledTableCell>
            </TableRow>
            <TableRow>
              <StyledTableCell>
                <RedTypography variant="subtitle1">
                  Amount Payable:
                </RedTypography>
              </StyledTableCell>
              <StyledTableCell align="right">
                <RedTypography variant="subtitle1">
                  ₹ {amountPayable?.toFixed(2)}
                </RedTypography>
              </StyledTableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </StyledPaper>
  );
};

export default PriceBreakdown;
