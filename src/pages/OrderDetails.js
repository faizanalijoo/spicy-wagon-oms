import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
  Typography,
  Paper,
  Box,
  Button,
  Grid,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Chip,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import StorefrontIcon from "@mui/icons-material/Storefront";
import PersonIcon from "@mui/icons-material/Person";
import RestaurantIcon from "@mui/icons-material/Restaurant";

const StyledPaper = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(3),
  margin: theme.spacing(3),
}));

const SectionTitle = styled(Typography)(({ theme }) => ({
  fontSize: "1.1rem",
  fontWeight: "bold",
  marginBottom: theme.spacing(2),
  display: "flex",
  alignItems: "center",
  "& .MuiSvgIcon-root": {
    marginRight: theme.spacing(1),
    color: theme.palette.primary.main,
  },
}));

const InfoItem = styled(Box)(({ theme }) => ({
  marginBottom: theme.spacing(1),
}));

const Label = styled(Typography)(({ theme }) => ({
  color: theme.palette.text.secondary,
  fontSize: "0.875rem",
}));

const Value = styled(Typography)({
  fontWeight: 500,
});

const OrderDetails = () => {
  const { id } = useParams();
  const [order, setOrder] = useState(null);

  useEffect(() => {
    // Fetch order details here
    // For now, we'll use mock data
    setOrder({
      id: "#1286890452",
      restaurantDetails: "The Tandoor Hut Villa",
      restaurantContact: "+91 9868563202",
      gstRegistration: "O9AARCA6144P1ZV",
      aggregator: "Spigoli Wagon",
      aggregatorContact: "+91 8646882096",
      bookingDateTime: "12th July 2024, 16:00 PM",
      orderPush: "12th July 2024, 16:00 PM",
      bookedFrom: "IRCTC E-Catering",
      customerName: "Kundan Singh",
      customerContact: "+91 9868563202",
      deliveryStation: "MB / MORADABAD",
      coachSeat: "B5/38",
      trainDetails: "13151 - KOAA JAAT EXPRESS",
      paymentMode: "Cash on Delivery",
      items: [
        {
          name: "Butter Tawa Roti",
          description: "1 Pcs",
          quantity: 6,
          basePrice: 16,
          discount: "N/A",
          totalBasePrice: "N/A",
          totalTax: 4.8,
          totalSellingPrice: 100.8,
        },
        {
          name: "Chicken Kadhai",
          description: "400 Gms",
          quantity: 1,
          basePrice: 311,
          discount: "N/A",
          totalBasePrice: "N/A",
          totalTax: 15.56,
          totalSellingPrice: 326.56,
        },
      ],
      totalAmount: 198,
      subTotal: 189.0,
      gst: 9.45,
      deliveryCharges: 0,
      discount: 0,
      amountPayable: 198,
    });
  }, [id]);

  if (!order) {
    return <Typography>Loading...</Typography>;
  }

  return (
    <StyledPaper>
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        mb={3}
      >
        <Typography variant="h5">Order Details</Typography>
        <Box>
          <Button
            variant="contained"
            color="success"
            style={{ marginRight: "10px" }}
          >
            Order Placed
          </Button>
          <Button variant="contained" color="primary">
            Change Status
          </Button>
        </Box>
      </Box>

      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <Paper elevation={2} style={{ padding: "20px" }}>
            <SectionTitle>
              <StorefrontIcon />
              Outlet & Vendor Details
            </SectionTitle>
            <InfoItem>
              <Label>ID</Label>
              <Value>{order.id}</Value>
            </InfoItem>
            <InfoItem>
              <Label>RESTAURANT DETAILS</Label>
              <Value>{order.restaurantDetails}</Value>
            </InfoItem>
            <InfoItem>
              <Label>RESTAURANT CONTACT</Label>
              <Value>{order.restaurantContact}</Value>
            </InfoItem>
            <InfoItem>
              <Label>GST REGISTRATION</Label>
              <Value>{order.gstRegistration}</Value>
            </InfoItem>
            <InfoItem>
              <Label>AGGREGATOR</Label>
              <Value>{order.aggregator}</Value>
            </InfoItem>
            <InfoItem>
              <Label>AGGREGATOR CONTACT</Label>
              <Value>{order.aggregatorContact}</Value>
            </InfoItem>
            <InfoItem>
              <Label>BOOKING DATE & TIME</Label>
              <Value>{order.bookingDateTime}</Value>
            </InfoItem>
            <InfoItem>
              <Label>ORDER PUSH</Label>
              <Value>{order.orderPush}</Value>
            </InfoItem>
            <InfoItem>
              <Label>BOOKING FROM</Label>
              <Value>{order.bookedFrom}</Value>
            </InfoItem>
          </Paper>
        </Grid>
        <Grid item xs={12} md={6}>
          <Paper elevation={2} style={{ padding: "20px" }}>
            <SectionTitle>
              <PersonIcon />
              Customer Details
            </SectionTitle>
            <InfoItem>
              <Label>CUSTOMER NAME</Label>
              <Value>{order.customerName}</Value>
            </InfoItem>
            <InfoItem>
              <Label>CUSTOMER CONTACT</Label>
              <Value>{order.customerContact}</Value>
            </InfoItem>
            <InfoItem>
              <Label>DELIVERY STATION</Label>
              <Value>{order.deliveryStation}</Value>
            </InfoItem>
            <InfoItem>
              <Label>COACH/SEAT</Label>
              <Value>{order.coachSeat}</Value>
            </InfoItem>
            <InfoItem>
              <Label>TRAIN DETAILS</Label>
              <Value>{order.trainDetails}</Value>
            </InfoItem>
          </Paper>
        </Grid>
      </Grid>

      <Box mt={3}>
        <Paper elevation={2} style={{ padding: "20px" }}>
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            mb={2}
          >
            <SectionTitle>
              <RestaurantIcon />
              Order Items & Details
            </SectionTitle>
            <Chip
              label={`Payment Mode: ${order.paymentMode}`}
              color="primary"
            />
          </Box>
          <TableContainer>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>Item Name</TableCell>
                  <TableCell>Description</TableCell>
                  <TableCell>Quantity</TableCell>
                  <TableCell>Base Price</TableCell>
                  <TableCell>Discount</TableCell>
                  <TableCell>Total Base Price</TableCell>
                  <TableCell>Total Tax</TableCell>
                  <TableCell>Total Selling Price</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {order.items.map((item, index) => (
                  <TableRow key={index}>
                    <TableCell>{item.name}</TableCell>
                    <TableCell>{item.description}</TableCell>
                    <TableCell>{item.quantity}</TableCell>
                    <TableCell>₹{item.basePrice}</TableCell>
                    <TableCell>{item.discount}</TableCell>
                    <TableCell>{item.totalBasePrice}</TableCell>
                    <TableCell>₹{item.totalTax}</TableCell>
                    <TableCell>₹{item.totalSellingPrice}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
          <Box
            mt={2}
            display="flex"
            flexDirection="column"
            alignItems="flex-end"
          >
            <InfoItem>
              <Label>Total Amount:</Label>
              <Value>₹{order.totalAmount}</Value>
            </InfoItem>
            <InfoItem>
              <Label>Sub Total:</Label>
              <Value>₹{order.subTotal}</Value>
            </InfoItem>
            <InfoItem>
              <Label>GST:</Label>
              <Value>₹{order.gst}</Value>
            </InfoItem>
            <InfoItem>
              <Label>Delivery Charges:</Label>
              <Value>₹{order.deliveryCharges}</Value>
            </InfoItem>
            <InfoItem>
              <Label>Discount:</Label>
              <Value>₹{order.discount}</Value>
            </InfoItem>
            <InfoItem>
              <Label style={{ color: "red", fontWeight: "bold" }}>
                Amount Payable:
              </Label>
              <Value style={{ color: "red", fontWeight: "bold" }}>
                ₹{order.amountPayable}
              </Value>
            </InfoItem>
          </Box>
        </Paper>
      </Box>
    </StyledPaper>
  );
};

export default OrderDetails;
