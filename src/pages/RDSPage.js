import React, { useState } from "react";
import {
  Typography,
  Box,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TextField,
  Button,
  InputAdornment,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import SearchIcon from "@mui/icons-material/Search";
import RefreshIcon from "@mui/icons-material/Refresh";
import FileUploadIcon from "@mui/icons-material/FileUpload";
import FileDownloadIcon from "@mui/icons-material/FileDownload";

const StyledPaper = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(3),
  margin: theme.spacing(3),
  width: "100%",
  boxSizing: "border-box",
}));

const StyledTableContainer = styled(TableContainer)({
  maxHeight: 440,
});

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  backgroundColor: theme.palette.common.black,
  color: theme.palette.common.white,
}));

const VendorsRollingDepositScheme = () => {
  const [searchTerm, setSearchTerm] = useState("");

  // Mock data for the table
  const depositData = [
    {
      date: "08-07-2024",
      time: "13:24",
      orderId: "#1286890452",
      transactionId: "1278067894",
      vendor: "Rangoli Wagon",
      outletId: "127",
      outlet: "Hotel Ramakrishna (Pure...)",
      amount: "₹320.00",
      paymentMode: "CASH",
      baseAmount: "596.00",
      marginAmount: "89.40",
      openingBalance: "87,774.00",
      // amount: "119.20",
      closingAmount: "87,655.06",
      remarks: "N/A",
      updatedBy: "N/A",
    },
    // Add more mock data here...
  ];

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleAddDeposit = () => {
    // Implement add deposit functionality
    console.log("Add deposit clicked");
  };

  const handleUploadTransactions = () => {
    // Implement upload transactions functionality
    console.log("Upload transactions clicked");
  };

  const handleDownloadReport = () => {
    // Implement download report functionality
    console.log("Download report clicked");
  };

  return (
    <StyledPaper>
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        mb={3}
      >
        <Typography variant="h5">Vendors Rolling Deposit Scheme</Typography>
        <Box>
          <TextField
            variant="outlined"
            size="small"
            placeholder="Search Here"
            value={searchTerm}
            onChange={handleSearch}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon />
                </InputAdornment>
              ),
            }}
          />
          <Button
            variant="contained"
            color="primary"
            startIcon={<RefreshIcon />}
            onClick={handleAddDeposit}
            sx={{ ml: 2 }}
          >
            Add Deposit
          </Button>
        </Box>
      </Box>

      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        mb={2}
      >
        <Typography variant="h6" display="flex" alignItems="center">
          <RefreshIcon sx={{ mr: 1 }} />
          RDS for Rangoli Wagon
        </Typography>
        <Box>
          <Button
            variant="outlined"
            startIcon={<FileUploadIcon />}
            onClick={handleUploadTransactions}
            sx={{ mr: 2 }}
          >
            Upload Transactions
          </Button>
          <Button
            variant="outlined"
            startIcon={<FileDownloadIcon />}
            onClick={handleDownloadReport}
          >
            Download Report
          </Button>
        </Box>
      </Box>

      <StyledTableContainer component={Paper}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              <StyledTableCell>Date & Time</StyledTableCell>
              <StyledTableCell>Order Details</StyledTableCell>
              <StyledTableCell>Outlet & Vendor</StyledTableCell>
              <StyledTableCell>Base Amount</StyledTableCell>
              <StyledTableCell>Margin Amount</StyledTableCell>
              <StyledTableCell>Opening Balance</StyledTableCell>
              <StyledTableCell>Amount</StyledTableCell>
              <StyledTableCell>Closing Amount</StyledTableCell>
              <StyledTableCell>Remarks</StyledTableCell>
              <StyledTableCell>Updated By</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {depositData.map((row, index) => (
              <TableRow key={index}>
                <TableCell>
                  <Typography variant="body2">{row.date}</Typography>
                  <Typography variant="body2" color="textSecondary">
                    {row.time}
                  </Typography>
                </TableCell>
                <TableCell>
                  <Typography variant="body2">
                    Order ID: {row.orderId}
                  </Typography>
                  <Typography variant="body2" color="textSecondary">
                    Transaction ID: {row.transactionId}
                  </Typography>
                </TableCell>
                <TableCell>
                  <Typography variant="body2">Vendor: {row.vendor}</Typography>
                  <Typography variant="body2">
                    Outlet ID: {row.outletId}
                  </Typography>
                  <Typography variant="body2" color="textSecondary">
                    Outlet: {row.outlet}
                  </Typography>
                </TableCell>
                <TableCell>{row.baseAmount}</TableCell>
                <TableCell>{row.marginAmount}</TableCell>
                <TableCell>{row.openingBalance}</TableCell>
                <TableCell>{row.amount}</TableCell>
                <TableCell>{row.closingAmount}</TableCell>
                <TableCell>{row.remarks}</TableCell>
                <TableCell>{row.updatedBy}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </StyledTableContainer>
    </StyledPaper>
  );
};

export default VendorsRollingDepositScheme;
