import React, { useState, useEffect, useCallback } from "react";
import {
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  CircularProgress,
} from "@mui/material";
import * as moment from "moment";
import styled from "styled-components";
import api from "../services/api";
import { apiEndpoints } from "../services/apiEndpoints";
import { useAuth } from "../contexts/AuthContext";
import OrderTableRow from "../components/OrderTableRow/OrderTableRow";

const StyledTableContainer = styled(TableContainer)(({ theme }) => ({
  width: "100%",
  overflowX: "auto",
  borderRadius: "10px"
}));

const StyledTable = styled(Table)(({ theme }) => ({
  minWidth: "100%",
}));

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  fontWeight: "bold",
  backgroundColor: theme.palette?.background?.default || "#ffffff",
  "&:not(:last-child)": {
    borderRight: `1px solid ${theme.palette?.divider || "#757373"}`,
  },
  borderBottom: `1px solid ${theme.palette?.divider || "#757373"}`,
}));

const ManageOrders = () => {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { vendorId } = useAuth();

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

  if (loading) {
    return <CircularProgress />;
  }

  if (error) {
    return <Typography color="error">{error}</Typography>;
  }

  return (
    <div>
      <StyledTableContainer component={Paper}>
        <StyledTable sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <StyledTableCell sx={{ width: '10%' }}>Order Details</StyledTableCell>
              <StyledTableCell sx={{ width: '30%' }}>Customer Travel Details</StyledTableCell>
              <StyledTableCell sx={{ width: '20%' }}>Booking Details</StyledTableCell>
              <StyledTableCell sx={{ width: '35%' }}>Booking Info</StyledTableCell>
              <StyledTableCell sx={{ width: '5%' }}>Status</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {orders?.map((order) => (
              <OrderTableRow key={order.id} order={order} />
            ))}
          </TableBody>
        </StyledTable>
      </StyledTableContainer>
    </div>
  );
};

export default ManageOrders;
