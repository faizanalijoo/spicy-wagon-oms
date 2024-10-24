import React, { useState, useEffect, useCallback } from "react";
import { Button, Snackbar, Alert, Stack, Grid } from "@mui/material";
import { Refresh as RefreshIcon } from "@mui/icons-material";
import api from "../../services/api";
import { apiEndpoints } from "../../services/apiEndpoints";
import * as moment from "moment";
import { useAuth } from "../../contexts/AuthContext";
import { useOrdersFetch } from "../../hooks/useOrdersFetch";
import DashboardCard from "../../components/DashboardCard";
import CustomTabs from "../../components/CustomTabs";
import { FaBagShopping, FaTruck } from "react-icons/fa6";
import { HiShoppingCart } from "react-icons/hi";
import { AiFillCloseCircle } from "react-icons/ai";
import { PiUsersFill, PiWarningCircleFill } from "react-icons/pi";
import OrdersListMobile from "../Orders/Components/OrdersListMobile";
import OrdersListDesktop from "../Orders/Components/OrdersListDesktop";

const REFRESH_OFFER = "New orders available. Click to refresh.";

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

  const [value, setValue] = useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const [subValue, setSubValue] = useState(0);
  const handleChangeSubValue = (event, newValue) => {
    setSubValue(newValue);
  };

  const summaryData = [
    {
      icon: FaBagShopping,
      count: summary.totalBookedOrders,
      label: "BOOKED ORDERS",
    },
    {
      icon: HiShoppingCart,
      count: summary.totalEarning,
      label: "TOTAL EARNINGS",
    },
    {
      icon: FaTruck,
      count: summary.totalDelivered,
      label: "TOTAL DELIVERED",
    },
    {
      icon: AiFillCloseCircle,
      count: summary.totalCancelled,
      label: "CANCELLED",
    },
    {
      icon: PiWarningCircleFill,
      count: summary.totalUndelivered,
      label: "UNDELIVERED",
    },
    {
      icon: PiUsersFill,
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

  const tabs = [
    { code: "today", label: "Today" },
    { code: "week", label: "This Week" },
    { code: "month", label: "This Month" },
  ];

  useEffect(() => {
    if (value == 0) {
      fetchOrdersBetween("Today");
    } else if (value == 1) {
      fetchOrdersBetween("This Week");
    } else if (value == 2) {
      fetchOrdersBetween("This Month");
    }
  }, [value]);

  return (
    <Stack gap={2}>
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

      <CustomTabs tabs={tabs} value={value} handleChange={handleChange} />

      <Grid container spacing={2}>
        {summaryData.map((item, index) => (
          <Grid item xs={6} sm={4} md={3} lg={2} key={index}>
            <DashboardCard showRupee={index == 1} {...item} />
          </Grid>
        ))}
      </Grid>

      <CustomTabs
        tabs={[{ label: "Upcoming Orders" }]}
        value={subValue}
        handleChange={handleChangeSubValue}
      />

      <OrdersListMobile orders={orders} />
      <OrdersListDesktop orders={orders} isDashboard />
    </Stack>
  );
};

export default Dashboard;
