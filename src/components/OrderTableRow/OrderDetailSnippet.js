import React from "react";
import { Box, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import ReceiptIcon from "@mui/icons-material/Receipt";
import PaymentIcon from "@mui/icons-material/Payment";

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
      <DetailRow>
        <ReceiptIcon fontSize="small" color="action" />
        <Label>AMOUNT</Label>
        <Value>{amount}</Value>
      </DetailRow>
      <DetailRow>
        <PaymentIcon fontSize="small" color="action" />
        <Label>PAYMENT</Label>
        <Value>{payment}</Value>
      </DetailRow>
    </DetailContainer>
  );
};

export default OrderDetailSnippet;
