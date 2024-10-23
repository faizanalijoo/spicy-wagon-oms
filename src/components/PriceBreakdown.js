import React from "react";
import { Typography, Stack, Divider } from "@mui/material";
import CustomCard from "./CustomCard";
import { AppColors } from "../utils/AppColors";

const PriceBreakdown = ({
  totalAmount,
  subTotal,
  gst,
  deliveryCharges,
  discount,
  amountPayable,
}) => {
  return (
    <CustomCard
      borderColor={{ xs: AppColors.WHITE, md: "#E0E0E0" }}
      sx={{
        p: { xs: 0, md: 1 },
        gap: 1,
        width: { xs: "100%", md: 400 },
        bgcolor: { xs: AppColors.WHITE, md: "#FAFAFA" },
        ml: "auto",
      }}
    >
      <Stack direction="row" alignItems="center" justifyContent="space-between">
        <Typography variant="subtitle1">Total Amount :</Typography>
        <Typography variant="subtitle1" color={AppColors.THEME_COLOR}>
          ₹ {totalAmount.toFixed(2)}
        </Typography>
      </Stack>

      <Divider />

      <Stack direction="row" alignItems="center" justifyContent="space-between">
        <Typography variant="subtitle1">Sub Total :</Typography>
        <Typography variant="subtitle1">₹ {subTotal.toFixed(2)}</Typography>
      </Stack>

      <Stack direction="row" alignItems="center" justifyContent="space-between">
        <Typography variant="subtitle1">GST :</Typography>
        <Typography variant="subtitle1">₹ {gst.toFixed(2)}</Typography>
      </Stack>

      <Stack direction="row" alignItems="center" justifyContent="space-between">
        <Typography variant="subtitle1">Delivery Charges :</Typography>
        <Typography variant="subtitle1">
          ₹ {deliveryCharges?.toFixed(2)}
        </Typography>
      </Stack>

      <Stack direction="row" alignItems="center" justifyContent="space-between">
        <Typography variant="subtitle1">Discount :</Typography>
        <Typography variant="subtitle1">₹ {discount?.toFixed(2)}</Typography>
      </Stack>

      <Divider />

      <Stack direction="row" alignItems="center" justifyContent="space-between">
        <Typography color={AppColors.THEME_COLOR} variant="subtitle1">
          Amount Payable :
        </Typography>
        <Typography color={AppColors.THEME_COLOR} variant="subtitle1">
          ₹ {amountPayable?.toFixed(2)}
        </Typography>
      </Stack>
    </CustomCard>
  );
};

export default PriceBreakdown;
