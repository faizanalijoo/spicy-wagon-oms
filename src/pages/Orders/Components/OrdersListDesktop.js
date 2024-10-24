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
import { LuMenuSquare } from "react-icons/lu";
import {
  MdCalendarToday,
  MdOutlineAccountBalanceWallet,
  MdOutlineHistory,
  MdOutlineInsertComment,
  MdOutlineLocalPhone,
  MdOutlinePinDrop,
  MdOutlineShoppingCart,
} from "react-icons/md";
import { PiCallBell, PiSeatLight, PiTrain } from "react-icons/pi";
import { TiUserOutline } from "react-icons/ti";
import { GoCheckCircleFill } from "react-icons/go";
import { HiOutlineTruck } from "react-icons/hi";
import { IoBagHandleOutline } from "react-icons/io5";
import moment from "moment";

export default function OrdersListDesktop({ orders, isDashboard }) {
  const navigate = useNavigate();
  return (
    <>
      {isDashboard ? (
        <TableContainer sx={{ display: { xs: "none", md: "block" } }}>
          <Table>
            <TableHead
              sx={{
                svg: { fontSize: 15 },
                "& .MuiStack-root": {
                  flexDirection: "row",
                  alignItems: "center",
                  gap: 1,
                },
              }}
            >
              <TableCell>
                <Stack>
                  <HiOutlineTruck />
                  Order Details
                </Stack>
              </TableCell>
              <TableCell>
                <Stack>
                  <IoBagHandleOutline />
                  Customer Details
                </Stack>
              </TableCell>
              <TableCell>
                <Stack>
                  <PiCallBell />
                  Booking Details
                </Stack>
              </TableCell>
              <TableCell>
                <Stack>
                  <MdCalendarToday />
                  Booking Platform
                </Stack>
              </TableCell>
            </TableHead>

            <TableBody>
              {orders?.map((order) => (
                <TableRow key={order.order_id}>
                  <TableCell>
                    <Stack direction="row" gap={2}>
                      <TableItem
                        onClick={() => navigate(`/order/${order.order_id}`)}
                        Icon={LuMenuSquare}
                        color={AppColors.THEME_COLOR}
                        label="order id"
                        value={order.order_id}
                      />
                      <TableItem
                        Icon={MdOutlineShoppingCart}
                        label="amount"
                        value={order.data?.priceDetails?.totalAmount}
                      />
                    </Stack>
                  </TableCell>

                  <TableCell>
                    <Stack direction="row" gap={2}>
                      <TableItem
                        Icon={TiUserOutline}
                        label="customer name"
                        value={order.data?.customerDetails?.customerName}
                      />
                      <TableItem
                        Icon={PiSeatLight}
                        label="seat"
                        value={`${order.data?.deliveryDetails?.coach}/${order.data?.deliveryDetails?.berth}`}
                      />
                      <TableItem
                        Icon={PiTrain}
                        label="train number"
                        value={`${order.data?.deliveryDetails?.trainNo} - ${order.data?.deliveryDetails?.trainName}`}
                      />
                      <TableItem
                        Icon={MdOutlinePinDrop}
                        label="station code"
                        value={`${order.data?.deliveryDetails?.station} - ${order.station_code}`}
                      />
                    </Stack>
                  </TableCell>

                  <TableCell>
                    <TableItem
                      Icon={MdCalendarToday}
                      label="Booking Date & Time"
                      value={order.data?.bookingDate}
                    />
                  </TableCell>

                  <TableCell>
                    <TableItem
                      Icon={MdCalendarToday}
                      label="Booking platform"
                      value="Spicy Wagon"
                    />
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      ) : (
        <TableContainer sx={{ display: { xs: "none", md: "block" } }}>
          <Table>
            <TableHead
              sx={{
                svg: { fontSize: 15 },
                "& .MuiStack-root": {
                  flexDirection: "row",
                  alignItems: "center",
                  gap: 1,
                },
              }}
            >
              <TableCell>
                <Stack>
                  <HiOutlineTruck />
                  Order Details
                </Stack>
              </TableCell>
              <TableCell>
                <Stack>
                  <IoBagHandleOutline />
                  Customer Details
                </Stack>
              </TableCell>
              <TableCell>
                <Stack>
                  <PiCallBell />
                  Booking Details
                </Stack>
              </TableCell>
              <TableCell>
                <Stack>
                  <MdOutlineHistory />
                  Order Update
                </Stack>
              </TableCell>
            </TableHead>

            <TableBody>
              {orders?.map((order) => (
                <TableRow key={order.order_id}>
                  <TableCell>
                    <Stack gap={1}>
                      <TableItem
                        onClick={() => navigate(`/order/${order.order_id}`)}
                        Icon={LuMenuSquare}
                        color={AppColors.THEME_COLOR}
                        label="order id"
                        value={order.order_id}
                      />

                      <Divider />
                      <Stack direction="row" gap={2}>
                        <TableItem
                          Icon={MdOutlineShoppingCart}
                          label="amount"
                          value={order.data?.priceDetails?.totalAmount}
                        />
                        <TableItem
                          Icon={MdOutlineAccountBalanceWallet}
                          label="payment"
                          value={order.data?.paymentType}
                        />
                      </Stack>
                    </Stack>
                  </TableCell>

                  <TableCell>
                    <Stack gap={1}>
                      <Stack direction="row" gap={2}>
                        <TableItem
                          Icon={TiUserOutline}
                          label="customer name"
                          value={order.data?.customerDetails?.customerName}
                        />
                        <TableItem
                          Icon={MdOutlineLocalPhone}
                          label="contact"
                          value={order.customer_mobile}
                        />
                        <TableItem
                          Icon={PiSeatLight}
                          label="seat"
                          value={`${order.data?.deliveryDetails?.coach}/${order.data?.deliveryDetails?.berth}`}
                        />
                      </Stack>

                      <Divider />

                      <Stack direction="row" gap={2}>
                        <TableItem
                          Icon={PiTrain}
                          label="train number"
                          value={`${order.data?.deliveryDetails?.trainNo} - ${order.data?.deliveryDetails?.trainName}`}
                        />
                        <TableItem
                          Icon={MdOutlinePinDrop}
                          label="station code"
                          value={`${order.data?.deliveryDetails?.station} - ${order.station_code}`}
                        />
                      </Stack>
                    </Stack>
                  </TableCell>

                  <TableCell>
                    <Stack gap={1}>
                      <TableItem
                        iconColor={AppColors.TEXT_GREEN}
                        Icon={GoCheckCircleFill}
                        label="Booking Date & Time"
                        value={order.data?.bookingDate}
                      />

                      <Divider />
                      <TableItem
                        Icon={MdCalendarToday}
                        label="Booking platform"
                        value="Spicy Wagon"
                      />
                    </Stack>
                  </TableCell>

                  <TableCell>
                    <Stack gap={1}>
                      <TableItem
                        Icon={MdOutlineHistory}
                        label="Last Updated"
                        value={moment(order.updated_at).format("lll")}
                      />
                      <Divider />

                      <Stack direction="row" gap={2}>
                        <TableItem
                          Icon={LuMenuSquare}
                          label="Status"
                          value={order.status}
                        />
                        <TableItem label="Updated" value="SW" />
                        <TableItem
                          Icon={MdOutlineInsertComment}
                          label="Remarks"
                          value={order.data?.remarks}
                        />
                      </Stack>
                    </Stack>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      )}
    </>
  );
}
