import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
  Typography,
  Paper,
  Box,
  Button,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Chip,
  CircularProgress
} from "@mui/material";
import { styled } from "@mui/material/styles";
import StorefrontIcon from "@mui/icons-material/Storefront";
import PersonIcon from "@mui/icons-material/Person";
import RestaurantIcon from "@mui/icons-material/Restaurant";
import api from "../services/api";
import { apiEndpoints } from "../services/apiEndpoints";
import { useAuth } from "../contexts/AuthContext";

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

// const SectionTitle = ({ icon, children }) => (
//   <Stack direction="row" alignItems="center" spacing={1} sx={{ mb: 2 }}>
//     {icon}
//     <Typography variant="h6">{children}</Typography>
//   </Stack>
// );

const InfoItem = ({ label, value }) => (
  <Box sx={{ mb: 2 }}>
    <Typography variant="caption" sx={{ color: 'text.secondary', display: 'block' }}>
      {label}
    </Typography>
    <Typography variant="body2">{value}</Typography>
  </Box>
);

const Label = styled(Typography)(({ theme }) => ({
  color: theme.palette.text.secondary,
  fontSize: "0.875rem",
}));

const Value = styled(Typography)({
  fontWeight: 500,
});

const OrderDetails = () => {
  const { id } = useParams();
  const { vendorId } = useAuth();
  const [order, setOrder] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchOrderDetail = async () => {
      try {
        setLoading(true);
        const response = await api.get(
          apiEndpoints.getOrderDetails(
            vendorId, id
          )
        );
      console.log("jere")

        setOrder(response.data);
        setLoading(false);
      } catch (err) {
        setError('Failed to fetch order details. Please try again later.');
        setLoading(false);
      }
    };

    fetchOrderDetail();
  }, [id, vendorId]);

  if (loading) {
    return (
      <Box display="flex" justifyContent="center" alignItems="center" height="100vh">
        <CircularProgress />
      </Box>
    );
  }

  if (error) {
    return (
      <Box display="flex" justifyContent="center" alignItems="center" height="100vh">
        <Typography color="error">{error}</Typography>
      </Box>
    );
  }

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

      <Box sx={{ width: '100%' }}>
      <Stack
        direction={{ xs: 'column', md: 'row' }}
        spacing={3}
        sx={{ width: '100%' }}
      >
        <Paper elevation={2} sx={{ p: 3, flex: 1 }}>
          <SectionTitle icon={<StorefrontIcon color="primary" />}>
            Outlet & Vendor Details
          </SectionTitle>
          <InfoItem label="ID" value={order.id} />
          <InfoItem label="RESTAURANT DETAILS" value={order.restaurantDetails} />
          <InfoItem label="RESTAURANT CONTACT" value={order.restaurantContact} />
          <InfoItem label="GST REGISTRATION" value={order.gstRegistration} />
          <InfoItem label="AGGREGATOR" value={order.aggregator} />
          <InfoItem label="AGGREGATOR CONTACT" value={order.aggregatorContact} />
          <InfoItem label="BOOKING DATE & TIME" value={order.bookingDateTime} />
          <InfoItem label="ORDER PUSH" value={order.orderPush} />
          <InfoItem label="BOOKING FROM" value={order.bookedFrom} />
        </Paper>

        <Paper elevation={2} sx={{ p: 3, flex: 1 }}>
          <SectionTitle icon={<PersonIcon color="primary" />}>
            Customer Details
          </SectionTitle>
          <InfoItem label="CUSTOMER NAME" value={order.customerName} />
          <InfoItem label="CUSTOMER CONTACT" value={order.customerContact} />
          <InfoItem label="DELIVERY STATION" value={order.deliveryStation} />
          <InfoItem label="COACH/SEAT" value={order.coachSeat} />
          <InfoItem label="TRAIN DETAILS" value={order.trainDetails} />
        </Paper>
      </Stack>
      </Box>

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
                {order.data.orderItems.map((item, index) => (
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
