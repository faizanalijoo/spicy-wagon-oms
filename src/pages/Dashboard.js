import React, { useState, useEffect, useCallback } from "react";
import {
  Box,
  Typography,
  Paper,
  Button,
  IconButton,
  Snackbar,
  Alert,
  Stack,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import FilterListIcon from "@mui/icons-material/FilterList";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import CancelIcon from "@mui/icons-material/Cancel";
import ErrorIcon from "@mui/icons-material/Error";
import PeopleIcon from "@mui/icons-material/People";
import { Refresh as RefreshIcon } from '@mui/icons-material';
import api from "../services/api";
import { apiEndpoints } from "../services/apiEndpoints";
import * as moment from "moment";
import { useAuth } from "../contexts/AuthContext";
import { useOrdersFetch } from "../hooks/useOrdersFetch";
import DashboardCard from "../components/DashboardCard";
import OrdersTable from "../components/OrdersTable";

const REFRESH_OFFER = "New orders available. Click to refresh.";

const StyledPaper = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(2),
  height: "100%",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
}));

const SummaryIcon = styled(Box)(({ theme, color }) => ({
  // backgroundColor: color,
  borderRadius: "50%",
  padding: theme.spacing(1),
  marginBottom: theme.spacing(1),
}));

const SummaryCard = ({ icon, count, label, color }) => (
  <StyledPaper elevation={3}>
    <Stack direction="row">
      <SummaryIcon color={color}>{icon}</SummaryIcon>
      <Stack>
        <Typography variant="h4" component="div">
          {count}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {label}
        </Typography>
      </Stack>
    </Stack>
  </StyledPaper>
);

const GridContainer = styled(Box)`
  display: flex;
  flex-wrap: wrap;
  margin: -12px; // Compensate for GridItem padding
  margin-bottom: 32px;
`;

const GridItem = styled(Box)`
  padding: 12px;
  width: 100%;

  @media (min-width: 600px) {
    width: 50%;
  }

  @media (min-width: 900px) {
    width: 16.666%; // Approximately 2/12 for md breakpoint
  }
`;

function getHighestId(orders) {
  if (!Array.isArray(orders) || orders.length === 0) {
    return null;
  }

  return orders.reduce((maxId, order) => {
    return Math.max(maxId, order.id);
  }, orders[0].id);
}

const Dashboard = () => {
  const [timePeriod, setTimePeriod] = useState("Today");
  const [orders, setOrders] = useState([]);
  const [count, setCount] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [latestOrderId, setLatestOrderId] = useState(0);
  const { vendorId } = useAuth();

  const summaryData = [
    {
      icon: <ShoppingBagIcon fontSize="large" />,
      count: 156,
      label: "BOOKED ORDERS",
    },
    {
      icon: <AttachMoneyIcon fontSize="large" />,
      count: "₹4550",
      label: "TOTAL EARNINGS",
    },
    {
      icon: <LocalShippingIcon fontSize="large" />,
      count: 19,
      label: "TOTAL DELIVERED",
    },
    { icon: <CancelIcon fontSize="large" />, count: 11, label: "CANCELLED" },
    { icon: <ErrorIcon fontSize="large" />, count: 0, label: "UNDELIVERED" },
    { icon: <PeopleIcon fontSize="large" />, count: 128, label: "CUSTOMERS" },
  ];

  const { newOrdersCount, fetchOrdersSinceLatest, setNewOrdersCount } = useOrdersFetch(
    vendorId,
    latestOrderId,
    count
  );

  console.log('new', newOrdersCount)

  // if (newOrdersCount > 0) {
  //   fetchOrdersSinceLatest(latestOrderId);
  // }

  const fetchOrders = useCallback(async () => {
    console.log("ins")
    try {
      setLoading(true);
      const response = await api.get(
        apiEndpoints.getOrdersDate(
          vendorId,
          moment(new Date()).format("YYYY-MM-DD")
        )
      );
      setOrders(response.data.results);
      setCount(response.data.count);
      setLatestOrderId(getHighestId(response.data.results));
      fetchOrdersSinceLatest(getHighestId(response.data.results));
      setLoading(false);
    } catch (err) {
      setError("Failed to fetch orders. Please try again later.");
      setLoading(false);
    }
  }, [vendorId]);

  useEffect(() => {
    fetchOrders();
  }, [fetchOrders]);

  const [selectedDate, setSelectedDate] = React.useState(new Date());

  const handleRefresh = () => {
    fetchOrders();
    setNewOrdersCount(0);
  };

  return (
    <Box sx={{ p: 3 }}>
      <Snackbar
        open={newOrdersCount > 0}
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
      >
        <Alert
          severity="success"
          action={
            <Button
              color="inherit"
              size="small"
              onClick={handleRefresh}
              startIcon={<RefreshIcon />}
              >
              Refresh
            </Button>
          }
          >
            {REFRESH_OFFER}
          </Alert>
      </Snackbar>
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

      <GridContainer>
        {summaryData.map((item, index) => (
          <GridItem key={index}>
            <DashboardCard {...item} />
          </GridItem>
        ))}
      </GridContainer>

      <Typography variant="h6" sx={{ mb: 2 }}>
        Upcoming Orders
      </Typography>

      <OrdersTable orders={orders} />
    </Box>
  );
};

export default Dashboard;
