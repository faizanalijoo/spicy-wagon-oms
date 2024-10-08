import React, { useState, useEffect, useCallback } from "react";
import {
  Box,
  Typography,
  Button,
  IconButton,
  Snackbar,
  Alert,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import FilterListIcon from "@mui/icons-material/FilterList";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import CancelIcon from "@mui/icons-material/Cancel";
import ErrorIcon from "@mui/icons-material/Error";
import PeopleIcon from "@mui/icons-material/People";
import { Refresh as RefreshIcon } from "@mui/icons-material";
import api from "../services/api";
import { apiEndpoints } from "../services/apiEndpoints";
import * as moment from "moment";
import { useAuth } from "../contexts/AuthContext";
import { useOrdersFetch } from "../hooks/useOrdersFetch";
import DashboardCard from "../components/DashboardCard";
import OrdersTable from "../components/OrdersTable";
import CenteredCircularProgress from '../components/CenteredCircularProgress';

const REFRESH_OFFER = "New orders available. Click to refresh.";

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
  const [summary, setSummary] = useState({
    totalBookedOrders: 0,
    totalEarning: 0,
    totalDelivered: 0,
    totalCancelled: 0,
    totalUndelivered: 0,
    totalCustomers: 0,
  });

  const summaryData = [
    {
      icon: <ShoppingBagIcon fontSize="large" />,
      count: summary.totalBookedOrders,
      label: "BOOKED ORDERS",
    },
    {
      icon: <CurrencyRupeeIcon fontSize="large" />,
      count: summary.totalEarning,
      label: "TOTAL EARNINGS",
    },
    {
      icon: <LocalShippingIcon fontSize="large" />,
      count: summary.totalDelivered,
      label: "TOTAL DELIVERED",
    },
    {
      icon: <CancelIcon fontSize="large" />,
      count: summary.totalCancelled,
      label: "CANCELLED",
    },
    {
      icon: <ErrorIcon fontSize="large" />,
      count: summary.totalUndelivered,
      label: "UNDELIVERED",
    },
    {
      icon: <PeopleIcon fontSize="large" />,
      count: summary.totalCustomers,
      label: "CUSTOMERS",
    },
  ];

  const calculateOrderStatistics = (orders) => {
    let totalBookedOrders = orders.length;
    let totalEarning = 0;
    let totalDelivered = 0;
    let totalCancelled = 0;
    let totalUndelivered = 0;
    let uniqueCustomers = new Set();

    orders.forEach((order) => {
      totalEarning += order.data.priceDetails.amountPayable;

      switch (order.data.status) {
        case "ORDER_PLACED":
          totalUndelivered++;
          break;
        // TODO: Need to change keys based on status
        case "DELIVERED":
          totalDelivered++;
          break;
        case "CANCELLED":
          totalCancelled++;
          break;
      }

      uniqueCustomers.add(order.data.customerDetails.customerId);
    });

    let totalCustomers = uniqueCustomers.size;

    setSummary({
      totalBookedOrders,
      totalEarning,
      totalDelivered,
      totalCancelled,
      totalUndelivered,
      totalCustomers,
    });

    return {
      totalBookedOrders,
      totalEarning,
      totalDelivered,
      totalCancelled,
      totalUndelivered,
      totalCustomers,
    };
  };

  const { newOrdersCount, fetchOrdersSinceLatest, setNewOrdersCount } =
    useOrdersFetch(vendorId, latestOrderId, count);

  const fetchOrders = useCallback(async () => {
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
      calculateOrderStatistics(response.data.results);
      fetchOrdersSinceLatest(getHighestId(response.data.results));
      setLoading(false);
    } catch (err) {
      setError("Failed to fetch orders. Please try again later.");
      setLoading(false);
    }
  }, [vendorId]);

  const fetchOrdersBetween = useCallback(
    async (type) => {
      setTimePeriod(type);
      let daysToSubtract =
        type === "This Week" ? 6 : type === "This Month" ? 30 : 0;
      try {
        setLoading(true);
        const response = await api.get(
          apiEndpoints.getOrdersBetween(
            vendorId,
            1000,
            moment(new Date())
              .startOf("day")
              .subtract(daysToSubtract, "days")
              .format("YYYY-MM-DD"),
            moment(new Date()).startOf("day").format("YYYY-MM-DD")
          )
        );
        setOrders(response.data.results);
        calculateOrderStatistics(response.data.results);
        setLoading(false);
      } catch (err) {
        setError("Failed to fetch orders. Please try again later.");
        setLoading(false);
      }
    },
    [vendorId]
  );

  useEffect(() => {
    fetchOrders();
  }, [fetchOrders]);

  const handleRefresh = () => {
    fetchOrders();
    setNewOrdersCount(0);
  };

  if (loading) {
    return <CenteredCircularProgress />;
  }

  if (error) {
    return <Typography color="error">{error}</Typography>;
  }

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
            onClick={() => fetchOrdersBetween("Today")}
          >
            Today
          </Button>
          <Button
            variant={timePeriod === "This Week" ? "contained" : "text"}
            onClick={() => fetchOrdersBetween("This Week")}
          >
            This Week
          </Button>
          <Button
            variant={timePeriod === "This Month" ? "contained" : "text"}
            onClick={() => fetchOrdersBetween("This Month")}
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
