import React, { useState } from "react";
import {
  Box,
  Typography,
  Paper,
  Grid,
  Button,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  IconButton,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import FilterListIcon from "@mui/icons-material/FilterList";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import CancelIcon from "@mui/icons-material/Cancel";
import ErrorIcon from "@mui/icons-material/Error";
import PeopleIcon from "@mui/icons-material/People";

const StyledPaper = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(2),
  height: "100%",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
}));

const SummaryIcon = styled(Box)(({ theme, color }) => ({
  backgroundColor: color,
  borderRadius: "50%",
  padding: theme.spacing(1),
  marginBottom: theme.spacing(1),
}));

const SummaryCard = ({ icon, value, label, color }) => (
  <StyledPaper elevation={3}>
    <SummaryIcon color={color}>{icon}</SummaryIcon>
    <Typography variant="h4" component="div">
      {value}
    </Typography>
    <Typography variant="body2" color="text.secondary">
      {label}
    </Typography>
  </StyledPaper>
);

const Dashboard = () => {
  const [timePeriod, setTimePeriod] = useState("Today");

  const summaryData = [
    {
      icon: <ShoppingBagIcon />,
      value: 156,
      label: "BOOKED ORDERS",
      color: "#ffcccb",
    },
    {
      icon: <AttachMoneyIcon />,
      value: "₹4550",
      label: "TOTAL EARNINGS",
      color: "#c8e6c9",
    },
    {
      icon: <LocalShippingIcon />,
      value: 19,
      label: "TOTAL DELIVERED",
      color: "#bbdefb",
    },
    { icon: <CancelIcon />, value: 11, label: "CANCELLED", color: "#ffcccb" },
    { icon: <ErrorIcon />, value: 0, label: "UNDELIVERED", color: "#ffe0b2" },
    { icon: <PeopleIcon />, value: 128, label: "CUSTOMERS", color: "#e1bee7" },
  ];

  const orders = [
    {
      id: "#1286890452",
      amount: "₹540.0",
      customerName: "Rajesh Kumar Singh",
      seat: "CNF/S2/49",
      trainNumber: "12985",
      stationCode: "PNBE",
      bookingDateTime: "12TH JULY 2024, 16:00 PM",
      bookingPlatform: "IRCTC E-CATERING",
    },
    // Add more orders here...
  ];

  return (
    <Box sx={{ p: 3 }}>
      <Box sx={{ display: "flex", justifyContent: "space-between", mb: 3 }}>
        <Box>
          <Button
            variant={timePeriod === "Today" ? "contained" : "text"}
            onClick={() => setTimePeriod("Today")}
          >
            Today
          </Button>
          <Button
            variant={timePeriod === "This Week" ? "contained" : "text"}
            onClick={() => setTimePeriod("This Week")}
          >
            This Week
          </Button>
          <Button
            variant={timePeriod === "This Month" ? "contained" : "text"}
            onClick={() => setTimePeriod("This Month")}
          >
            This Month
          </Button>
        </Box>
        <IconButton>
          <FilterListIcon />
        </IconButton>
      </Box>

      <Grid container spacing={3} sx={{ mb: 4 }}>
        {summaryData.map((item, index) => (
          <Grid item xs={12} sm={6} md={2} key={index}>
            <SummaryCard {...item} />
          </Grid>
        ))}
      </Grid>

      <Typography variant="h6" sx={{ mb: 2 }}>
        Upcoming Orders
      </Typography>

      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="upcoming orders table">
          <TableHead>
            <TableRow>
              <TableCell>Order Details</TableCell>
              <TableCell>Customer Details</TableCell>
              <TableCell>Booking Details</TableCell>
              <TableCell>Booking Platform</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {orders.map((order) => (
              <TableRow key={order.id}>
                <TableCell>
                  <Typography variant="body2">Order ID: {order.id}</Typography>
                  <Typography variant="body2">
                    Amount: {order.amount}
                  </Typography>
                </TableCell>
                <TableCell>
                  <Typography variant="body2">
                    Name: {order.customerName}
                  </Typography>
                  <Typography variant="body2">Seat: {order.seat}</Typography>
                </TableCell>
                <TableCell>
                  <Typography variant="body2">
                    Train Number: {order.trainNumber}
                  </Typography>
                  <Typography variant="body2">
                    Station Code: {order.stationCode}
                  </Typography>
                  <Typography variant="body2">
                    Date & Time: {order.bookingDateTime}
                  </Typography>
                </TableCell>
                <TableCell>{order.bookingPlatform}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default Dashboard;
