import { Grid, Stack, Typography } from "@mui/material";
import React from "react";
import CustomCard from "../../../components/CustomCard";
import TableItem from "../../../components/TableItem";
import { AppColors } from "../../../utils/AppColors";
import StatusChip from "../../../components/StatusChip";

export default function OrdersListMobile({ orders }) {
  return (
    <Stack gap={2} sx={{ display: { xs: "flex", md: "none" } }}>
      {orders?.map((order) => (
        <CustomCard sx={{ p: 0 }}>
          <Stack
            p={1}
            px={2}
            bgcolor="#fceaee"
            direction="row"
            justifyContent="space-between"
          >
            <TableItem
              label="train"
              value={`${order.data?.deliveryDetails?.trainNo} - ${order.data?.deliveryDetails?.trainName}`}
            />

            <TableItem
              color={AppColors.THEME_COLOR}
              label="id"
              value={order.order_id}
            />
          </Stack>

          <Grid p={2} container spacing={2}>
            <Grid item xs={4}>
              <TableItem
                label="customer name"
                value={order.data?.customerDetails?.customerName}
              />
            </Grid>

            <Grid item xs={4}>
              <TableItem
                label="seat"
                value={`${order.data?.deliveryDetails?.coach}/${order.data?.deliveryDetails?.berth}`}
              />
            </Grid>

            <Grid item xs={4}>
              <TableItem
                label="Booking Date & Time"
                value={order.data?.bookingDate?.split(" ")[0]}
              />
            </Grid>

            <Grid item xs={4}>
              <TableItem
                label="amount"
                value={order.data?.priceDetails?.totalAmount}
              />
            </Grid>

            <Grid item xs={4}>
              <TableItem label="payment" value="CASH" />
            </Grid>

            <Grid item xs={4}>
              <TableItem
                label="station code"
                value={`${order.data?.deliveryDetails?.station} - ${order.station_code}`}
              />
            </Grid>

            <Stack
              direction="row"
              alignItems="center"
              justifyContent="space-between"
              width="100%"
              p={2}
              pb={0}
            >
              <Stack direction="row" alignItems="center" gap={1}>
                <Typography
                  variant="subtitle2"
                  fontSize={9}
                  color="#7A7A7A"
                  fontWeight={300}
                >
                  STATUS:
                </Typography>
                <StatusChip status={order?.status} />
              </Stack>

              <Stack direction="row" alignItems="center" gap={1}>
                <Typography
                  variant="subtitle2"
                  fontSize={9}
                  color="#7A7A7A"
                  fontWeight={300}
                >
                  BOOKED FROM:
                </Typography>

                <Typography
                  variant="subtitle2"
                  fontSize={13}
                  fontWeight={500}
                  color="#3E3E3E"
                >
                  Spicy Wagon
                </Typography>
              </Stack>
            </Stack>
          </Grid>
        </CustomCard>
      ))}
    </Stack>
  );
}
