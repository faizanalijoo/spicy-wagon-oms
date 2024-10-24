import React from "react";
import { Box, Divider, Typography, Stack } from "@mui/material";
import { styled } from "@mui/material/styles";
import ReceiptIcon from "@mui/icons-material/Receipt";
import PaymentIcon from "@mui/icons-material/Payment";
import { getDisplayValue, PAYMENT_TYPES } from "../../utils/constants";

const DetailContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  gap: theme.spacing(1),
}));

const DetailRow = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  gap: theme.spacing(1),
}));

const Label = styled(Typography)(({ theme }) => ({
  fontSize: "0.75rem",
  color: theme.palette.text.secondary,
}));

const Value = styled(Typography)(({ theme }) => ({
  fontSize: "0.875rem",
  fontWeight: "medium",
}));

const OrderId = styled(Value)(({ theme }) => ({
  color: theme.palette?.error?.main || "#f44336",
  fontWeight: "bold",
}));

const OrderDetailSnippet = ({ id, amount, payment }) => {
  return (
    <DetailContainer>
      <DetailRow>
        <Label>ID</Label>
        <OrderId>{id}</OrderId>
      </DetailRow>
      <Divider />
      <Stack direction="row" spacing={2}>
        <DetailRow>
          <ReceiptIcon fontSize="small" color="action" />
          <Label>AMOUNT</Label>
          <Value>{amount}</Value>
        </DetailRow>
        <DetailRow>
          <PaymentIcon fontSize="small" color="action" />
          <Label>PAYMENT</Label>
          <Value>{getDisplayValue(PAYMENT_TYPES, payment)}</Value>
        </DetailRow>
      </Stack>
    </DetailContainer>
  );
};

export default OrderDetailSnippet;
