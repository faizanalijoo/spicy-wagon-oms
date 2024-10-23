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
  Grid,
  Divider,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import StorefrontIcon from "@mui/icons-material/Storefront";
import PersonIcon from "@mui/icons-material/Person";
import RestaurantIcon from "@mui/icons-material/Restaurant";
import api from "../services/api";
import { apiEndpoints } from "../services/apiEndpoints";
import { useAuth } from "../contexts/AuthContext";
import PriceBreakdown from "../components/PriceBreakdown";
import CustomTabs from "../components/CustomTabs";
import { LuHistory } from "react-icons/lu";
import { IoIosArrowDown } from "react-icons/io";
import CustomCard from "../components/CustomCard";
import CardTitle from "../components/CardTitle";
import TableItem from "../components/TableItem";
import { MdOutlineRestaurant, MdOutlineStorefront } from "react-icons/md";
import { PiUsersFill } from "react-icons/pi";
import VegTag from "../components/VegTag";

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

  return (
    <Stack gap={2}>
      <Stack
        gap={2}
        direction={{ xs: "column", md: "row" }}
        alignItems={{ xs: "flex-start", md: "center" }}
        justifyContent="space-between"
      >
        <CustomTabs tabs={[{ label: "Order Details" }]} value={0} />

        <Stack direction="row" alignItems="center" gap={2}>
          <Button
            startIcon={<LuHistory />}
            variant="contained"
            sx={{ bgcolor: "#0EAD38", pointerEvents: "none" }}
          >
            Order Placed
          </Button>
          <Button endIcon={<IoIosArrowDown />} variant="contained" color="info">
            Change Status
          </Button>
        </Stack>
      </Stack>

      <Grid container spacing={2}>
        <Grid item xs={12} md={8}>
          <CustomCard sx={{ gap: 2, p: 2 }}>
            <CardTitle
              icon={<MdOutlineStorefront />}
              title="Outlet & Vendor Details"
            />
            <Divider />
            <Grid container spacing={2}>
              <Grid item xs={6} md={4}>
                <TableItem size="large" label="id" value={order.order_id} />
              </Grid>
              <Grid item xs={6} md={4}>
                <TableItem
                  size="large"
                  label="RESTAURANT DETAILS"
                  value={order.outlet_name}
                />
              </Grid>
              <Grid item xs={6} md={4}>
                <TableItem
                  size="large"
                  label="RESTAURANT CONTACT"
                  value={order.data?.aggregatorDetails?.customerCareNumbers[0]}
                />
              </Grid>
              <Grid item xs={6} md={4}>
                <TableItem
                  size="large"
                  label="GST REGISTRATION"
                  value={order.gstRegistration}
                />
              </Grid>
              <Grid item xs={6} md={4}>
                <TableItem
                  size="large"
                  label="AGGREGATOR"
                  value={order.data?.aggregatorDetails?.name}
                />
              </Grid>
              <Grid item xs={6} md={4}>
                <TableItem
                  size="large"
                  label="AGGREGATOR CONTACT"
                  value={order.data?.aggregatorDetails?.customerCareNumbers[0]}
                />
              </Grid>

              <Grid item xs={6} md={4}>
                <TableItem
                  size="large"
                  label="BOOKING DATE & TIME"
                  value={order.data?.deliveryDate}
                />
              </Grid>

              <Grid item xs={6} md={4}>
                <TableItem
                  size="large"
                  label="ORDER PUSH"
                  value={order.orderPush}
                />
              </Grid>
              <Grid item xs={6} md={4}>
                <TableItem
                  size="large"
                  label="BOOKING FROM"
                  value={order.bookedFrom}
                />
              </Grid>
            </Grid>
          </CustomCard>
        </Grid>

        <Grid item xs={12} md={4}>
          <CustomCard sx={{ gap: 2, p: 2 }}>
            <CardTitle icon={<PiUsersFill />} title="Customer Details" />
            <Divider />
            <Grid container spacing={2}>
              <Grid item xs={6}>
                <TableItem
                  size="large"
                  label="CUSTOMER NAME"
                  value={order.data?.customerDetails?.customerName}
                />
              </Grid>

              <Grid item xs={6}>
                <TableItem
                  size="large"
                  label="CUSTOMER CONTACT"
                  value={order.customer_mobile}
                />
              </Grid>

              <Grid item xs={6}>
                <TableItem
                  size="large"
                  label="DELIVERY STATION"
                  value={order.data?.deliveryDetails?.station}
                />
              </Grid>

              <Grid item xs={6}>
                <TableItem
                  size="large"
                  label="COACH/SEAT"
                  value={`${order.data?.deliveryDetails?.coach}/${order.data?.deliveryDetails?.berth}`}
                />
              </Grid>

              <Grid item xs={12}>
                <TableItem
                  size="large"
                  label="TRAIN DETAILS"
                  value={`${order.data?.deliveryDetails?.trainNo}/${order.data?.deliveryDetails?.trainName}`}
                />
              </Grid>
            </Grid>
          </CustomCard>
        </Grid>

        <Grid item xs={12}>
          <CustomCard sx={{ p: 2, gap: 2 }}>
            <CardTitle
              icon={<MdOutlineRestaurant />}
              title="Order Items & Details"
            />
            <Divider />

            <Stack
              sx={{ display: { xs: "flex", md: "none" } }}
              divider={<Divider />}
              gap={1}
            >
              {order?.data?.orderItems?.map((o) => (
                <Stack
                  direction="row"
                  alignItems="center"
                  justifyContent="space-between"
                  gap={2}
                >
                  <Stack direction="row" gap={1}>
                    <VegTag nonVeg={o?.isNonVegetarian} mt={0.5} />
                    <Stack gap={0.5}>
                      <Typography variant="h3" fontSize={12}>
                        {o?.itemName}
                      </Typography>
                      <Typography variant="subtitle2" fontSize={10}>
                        {o?.description}
                      </Typography>
                    </Stack>
                  </Stack>

                  <Typography variant="subtitle1" fontSize={12}>
                    ₹{o?.sellingPrice} x {o?.quantity}
                  </Typography>
                </Stack>
              ))}
            </Stack>

            <TableContainer sx={{ display: { xs: "none", md: "block" } }}>
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
                  {order?.data?.orderItems.map((item, index) => (
                    <TableRow sx={{ bgcolor: "#FAFAFA" }} key={index}>
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

            <Divider sx={{ display: { xs: "flex", md: "none" } }} />

            <PriceBreakdown
              totalAmount={order.data?.priceDetails?.totalAmount}
              subTotal={order.data?.priceDetails?.totalAmount}
              gst={order.data?.priceDetails?.gst}
              deliveryCharges={order.data?.priceDetails?.deliveryCharges}
              discount={order.data?.priceDetails?.discountAmount}
              amountPayable={order.data?.priceDetails?.amountPayable}
            />
          </CustomCard>
        </Grid>
      </Grid>
    </Stack>
  );
};

export default OrderDetails;
