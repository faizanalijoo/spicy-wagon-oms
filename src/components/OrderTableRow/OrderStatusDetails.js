import React from "react";
import { Box, Typography, Chip } from "@mui/material";
import { styled } from "@mui/material/styles";
import UpdateIcon from "@mui/icons-material/Update";
import PersonIcon from "@mui/icons-material/Person";
import CommentIcon from "@mui/icons-material/Comment";

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
  textTransform: "uppercase",
}));

const Value = styled(Typography)(({ theme }) => ({
  fontSize: "0.875rem",
  fontWeight: "medium",
}));

const StatusChip = styled(Chip)(({ theme }) => ({
  backgroundColor: theme.palette.success.light,
  color: theme.palette.success.dark,
  fontWeight: "bold",
  fontSize: "0.75rem",
}));

const OrderStatusDetails = ({ lastUpdated, status, updatedBy, remarks }) => {
  return (
    <DetailContainer>
      <DetailRow>
        <UpdateIcon fontSize="small" color="action" />
        <Box>
          <Label>Last Updated</Label>
          <Value>{lastUpdated}</Value>
        </Box>
      </DetailRow>
      <DetailRow>
        <Label>Status</Label>
        <StatusChip label={status} size="small" />
      </DetailRow>
      <DetailRow>
        <PersonIcon fontSize="small" color="action" />
        <Box>
          <Label>Updated</Label>
          <Value>{updatedBy}</Value>
        </Box>
      </DetailRow>
      <DetailRow>
        <CommentIcon fontSize="small" color="action" />
        <Box>
          <Label>Remarks</Label>
          <Value>{remarks || "N/A"}</Value>
        </Box>
      </DetailRow>
    </DetailContainer>
  );
};

export default OrderStatusDetails;
