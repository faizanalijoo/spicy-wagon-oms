import React from "react";
import { Box, Divider, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import EventIcon from "@mui/icons-material/Event";
import * as moment from "moment";

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

const GreenDot = styled(FiberManualRecordIcon)(({ theme }) => ({
  color: theme.palette.success.main,
  fontSize: "0.75rem",
}));

const BookingDetails = ({ bookingDateTime, bookedFrom }) => {
  return (
    <DetailContainer>
      <DetailRow>
        <GreenDot />
        <Box>
          <Label>Booking Date & Time</Label>
          <Value>{moment(bookingDateTime, 'MM-DD-YYYY HH:mm a').format('MMMM Do YYYY, h:mm:ss a')}</Value>
        </Box>
      </DetailRow>
      <Divider />
      <DetailRow>
        <EventIcon fontSize="small" color="action" />
        <Box>
          <Label>Booked From</Label>
          <Value>{bookedFrom}</Value>
        </Box>
      </DetailRow>
    </DetailContainer>
  );
};

export default BookingDetails;
