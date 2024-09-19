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
  CircularProgress,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import StorefrontIcon from "@mui/icons-material/Storefront";
import PersonIcon from "@mui/icons-material/Person";
import RestaurantIcon from "@mui/icons-material/Restaurant";
import api from "../services/api";
import { apiEndpoints } from "../services/apiEndpoints";
import { useAuth } from "../contexts/AuthContext";
import PriceBreakdown from "../components/PriceBreakdown";

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
    <Typography
      variant="caption"
      sx={{ color: "text.secondary", display: "block" }}
    >
      {label}
    </Typography>
    <Typography variant="body2">{value}</Typography>
  </Box>
);

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
          apiEndpoints.getOrderDetails(vendorId, id)
        );
        console.log("jere");

        setOrder(response.data);
        setLoading(false);
      } catch (err) {
        setError("Failed to fetch order details. Please try again later.");
        setLoading(false);
      }
    };

    fetchOrderDetail();
  }, [id, vendorId]);

  if (loading) {
    return (
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        height="100vh"
      >
        <CircularProgress />
      </Box>
    );
  }

  if (error) {
    return (
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        height="100vh"
      >
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

      <Box sx={{ width: "100%" }}>
        <Stack
          direction={{ xs: "column", md: "row" }}
          spacing={3}
          sx={{ width: "100%" }}
        >
          <Paper elevation={2} sx={{ p: 3, flex: 1 }}>
            <SectionTitle icon={<StorefrontIcon color="primary" />}>
              Outlet & Vendor Details
            </SectionTitle>
            <Stack direction="row" spacing={2}>
              <Stack direction="column" spacing={2}>
                <InfoItem label="ID" value={order.order_id} />
                <InfoItem
                  label="RESTAURANT DETAILS"
                  value={order.outlet_name}
                />
                <InfoItem
                  label="RESTAURANT CONTACT"
                  value={order.data?.aggregatorDetails?.customerCareNumbers[0]}
                />
              </Stack>
              <Stack direction="column" spacing={2}>
                <InfoItem
                  label="GST REGISTRATION"
                  value={order.gstRegistration}
                />
                <InfoItem
                  label="AGGREGATOR"
                  value={order.data?.aggregatorDetails?.name}
                />
                <InfoItem
                  label="AGGREGATOR CONTACT"
                  value={order.data?.aggregatorDetails?.customerCareNumbers[0]}
                />
              </Stack>
              <Stack direction="column" spacing={2}>
                <InfoItem
                  label="BOOKING DATE & TIME"
                  value={order.data?.deliveryDate}
                />
                <InfoItem label="ORDER PUSH" value={order.orderPush} />
                <InfoItem label="BOOKING FROM" value={order.bookedFrom} />
              </Stack>
            </Stack>
          </Paper>
          <Paper elevation={2} sx={{ p: 3, flex: 1 }}>
            <SectionTitle icon={<PersonIcon color="primary" />}>
              Customer Details
            </SectionTitle>
            <Stack direction="column" spacing={2}>
              <Stack direction="row" spacing={2}>
                <InfoItem
                  label="CUSTOMER NAME"
                  value={order.data?.customerDetails?.customerName}
                />
                <InfoItem
                  label="CUSTOMER CONTACT"
                  value={order.customer_mobile}
                />
              </Stack>
              <Stack direction="row" spacing={2}>
                <InfoItem
                  label="DELIVERY STATION"
                  value={order.data?.deliveryDetails?.station}
                />
                <InfoItem
                  label="COACH/SEAT"
                  value={`${order.data?.deliveryDetails?.coach}/${order.data?.deliveryDetails?.berth}`}
                />
              </Stack>
              <InfoItem
                label="TRAIN DETAILS"
                value={`${order.data?.deliveryDetails?.trainNo}/${order.data?.deliveryDetails?.trainName}`}
              />
            </Stack>
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
                  <TableCell>Total Tax</TableCell>
                  <TableCell>Total Selling Price</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {order.data.orderItems.map((item, index) => (
                  <TableRow key={index}>
                    <TableCell>{item.itemName}</TableCell>
                    <TableCell>{item.description}</TableCell>
                    <TableCell>{item.quantity}</TableCell>
                    <TableCell>₹{item.basePrice}</TableCell>
                    <TableCell>₹{item.tax}</TableCell>
                    <TableCell>₹{item.sellingPrice}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
          <PriceBreakdown
            totalAmount={order.data?.priceDetails?.totalAmount}
            subTotal={order.data?.priceDetails?.totalAmount}
            gst={order.data?.priceDetails?.gst}
            deliveryCharges={order.data?.priceDetails?.deliveryCharges}
            discount={order.data?.priceDetails?.discountAmount}
            amountPayable={order.data?.priceDetails?.amountPayable}
          />
        </Paper>
      </Box>
    </StyledPaper>
  );
};

export default OrderDetails;
