import React from "react";
import { TableRow, TableCell } from "@mui/material";
import styled from "styled-components";
import OrderDetailSnippet from "./OrderDetailSnippet";
import CustomerTravelDetails from "./CustomerTravelDetails";
import BookingDetails from "./BookingDetails";
import OrderStatusDetails from "./OrderStatusDetails";
import IconButton from "@mui/material/IconButton";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import { useNavigate } from "react-router-dom";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  padding: theme.spacing ? theme.spacing(2) : "16px",
  "&:not(:last-child)": {
    borderRight: `1px solid ${theme.palette?.divider || "#e0e0e0"}`,
  },
}));

const OrderTableRow = ({ order }) => {
  const navigate = useNavigate();

  const handleNext = () => {
    navigate(`/order/${order.order_id}`);
    // Implement your logic here
  };

  return (
    <TableRow>
      <StyledTableCell>
        <OrderDetailSnippet
          id={order.order_id}
          amount={order.data?.priceDetails?.totalAmount}
          payment={order.payment_type}
        />
      </StyledTableCell>
      <StyledTableCell>
        <CustomerTravelDetails
          name={order.data?.customerDetails?.customerName}
          contact={order.customer_mobile}
          seat={`${order.data?.deliveryDetails?.coach}/${order.data?.deliveryDetails?.berth}`}
          train={`${order.data?.deliveryDetails?.trainNo} - ${order.data?.deliveryDetails?.trainName}`}
          station={`${order.data?.deliveryDetails?.station} - ${order.station_code}`}
        />
      </StyledTableCell>
      <StyledTableCell>
        <BookingDetails
          bookingDateTime={order.data?.bookingDate}
          bookedFrom={"Spicy Wagon"}
        />
      </StyledTableCell>
      <StyledTableCell>
        <OrderStatusDetails
          lastUpdated={order.updated_at}
          status={order.status}
          updatedBy={"SW"}
          remarks={order.data?.remarks}
        />
      </StyledTableCell>
      <StyledTableCell>
        <IconButton onClick={handleNext} size="small">
          <ChevronRightIcon />
        </IconButton>
      </StyledTableCell>
    </TableRow>
  );
};

export default OrderTableRow;
