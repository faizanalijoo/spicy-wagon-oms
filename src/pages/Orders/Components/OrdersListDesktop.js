import {
  Divider,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import React from "react";
import TableItem from "../../../components/TableItem";
import { AppColors } from "../../../utils/AppColors";
import { useNavigate } from "react-router-dom";

export default function OrdersListDesktop({ orders }) {
  const navigate = useNavigate();
  return (
    <TableContainer sx={{ display: { xs: "none", md: "block" } }}>
      <Table>
        <TableHead>
          <TableCell>Order Details</TableCell>
          <TableCell>Customer Details</TableCell>
          <TableCell>Booking Details</TableCell>
          <TableCell>Order Update</TableCell>
        </TableHead>

        <TableBody>
          {orders?.map((order) => (
            <TableRow
              onClick={() => navigate(`/order/${order.order_id}`)}
              key={order.order_id}
            >
              <TableCell>
                <Stack gap={1}>
                  <TableItem
                    color={AppColors.THEME_COLOR}
                    label="order id"
                    value={order.order_id}
                  />

                  <Divider />
                  <Stack direction="row" gap={2}>
                    <TableItem
                      label="amount"
                      value={order.data?.priceDetails?.totalAmount}
                    />
                    <TableItem label="payment" value="CASH" />
                  </Stack>
                </Stack>
              </TableCell>

              <TableCell>
                <Stack gap={1}>
                  <Stack direction="row" gap={2}>
                    <TableItem
                      label="customer name"
                      value={order.data?.customerDetails?.customerName}
                    />
                    <TableItem label="contact" value={order.customer_mobile} />
                    <TableItem
                      label="seat"
                      value={`${order.data?.deliveryDetails?.coach}/${order.data?.deliveryDetails?.berth}`}
                    />
                  </Stack>

                  <Divider />

                  <Stack direction="row" gap={2}>
                    <TableItem
                      label="train number"
                      value={`${order.data?.deliveryDetails?.trainNo} - ${order.data?.deliveryDetails?.trainName}`}
                    />
                    <TableItem
                      label="station code"
                      value={`${order.data?.deliveryDetails?.station} - ${order.station_code}`}
                    />
                  </Stack>
                </Stack>
              </TableCell>

              <TableCell>
                <Stack gap={1}>
                  <TableItem
                    label="Booking Date & Time"
                    value={order.data?.bookingDate}
                  />

                  <Divider />
                  <TableItem label="Booking platform" value="Spicy Wagon" />
                </Stack>
              </TableCell>

              <TableCell>
                <Stack gap={1}>
                  <TableItem label="Last Updated" value={order.updated_at} />
                  <Divider />

                  <Stack direction="row" gap={2}>
                    <TableItem label="Status" value={order.status} />
                    <TableItem label="Updated" value="SW" />
                    <TableItem label="Remarks" value={order.data?.remarks} />
                  </Stack>
                </Stack>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
