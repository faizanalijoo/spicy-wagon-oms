import React, { useState, useEffect, useCallback } from "react";
import { Stack } from "@mui/material";
import * as moment from "moment";
import api from "../../services/api";
import { useAuth } from "../../contexts/AuthContext";
import { useNavigate } from "react-router-dom";
import { FiBox } from "react-icons/fi";
import { PiCookingPot, PiWarningCircle } from "react-icons/pi";
import { LuTruck } from "react-icons/lu";
import { apiEndpoints } from "../../services/apiEndpoints";
import CustomTabs from "../../components/CustomTabs";
import OrdersListDesktop from "./Components/OrdersListDesktop";
import OrdersListMobile from "./Components/OrdersListMobile";

const ManageOrders = () => {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { vendorId } = useAuth();
  const navigate = useNavigate();

  const [value, setValue] = useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

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
      setLoading(false);
    } catch (err) {
      setError("Failed to fetch orders. Please try again later.");
      setLoading(false);
    }
  }, [vendorId]);

  useEffect(() => {
    fetchOrders();
  }, [fetchOrders]);

  const tabs = [
    { code: "0", label: "Placed Orders", icon: FiBox },
    { code: "1", label: "Being Prepared", icon: PiCookingPot },
    { code: "2", label: "Delivered", icon: LuTruck },
    { code: "3", label: "Undelivered", icon: PiWarningCircle },
  ];

  return (
    <Stack gap={2}>
      <CustomTabs tabs={tabs} value={value} handleChange={handleChange} />

      <OrdersListMobile orders={orders} />
      <OrdersListDesktop orders={orders} />
    </Stack>
  );
};

export default ManageOrders;
