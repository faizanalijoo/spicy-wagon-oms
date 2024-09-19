import React from "react";
import { Box, Typography, Stack, Divider } from "@mui/material";
import { styled } from "@mui/material/styles";
import PersonIcon from "@mui/icons-material/Person";
import PhoneIcon from "@mui/icons-material/Phone";
import EventSeatIcon from "@mui/icons-material/EventSeat";
import TrainIcon from "@mui/icons-material/Train";
import LocationOnIcon from "@mui/icons-material/LocationOn";

const DetailContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "row",
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

const CustomerTravelDetails = ({ name, contact, seat, train, station }) => {
  return (
    <Stack direction="column" spacing={2}>
      <DetailContainer>
        <DetailRow>
          <PersonIcon fontSize="small" color="action" />
          <Box>
            <Label>Name</Label>
            <Value>{name}</Value>
          </Box>
        </DetailRow>
        <DetailRow>
          <PhoneIcon fontSize="small" color="action" />
          <Box>
            <Label>Contact</Label>
            <Value>{contact}</Value>
          </Box>
        </DetailRow>
        <DetailRow>
          <EventSeatIcon fontSize="small" color="action" />
          <Box>
            <Label>Seat</Label>
            <Value>{seat}</Value>
          </Box>
        </DetailRow>
      </DetailContainer>
      <Divider />
      <DetailContainer>
        <DetailRow>
          <TrainIcon fontSize="small" color="action" />
          <Box>
            <Label>Train</Label>
            <Value>{train}</Value>
          </Box>
        </DetailRow>
        <DetailRow>
          <LocationOnIcon fontSize="small" color="action" />
          <Box>
            <Label>Station</Label>
            <Value>{station}</Value>
          </Box>
        </DetailRow>
      </DetailContainer>
    </Stack>
  );
};

export default CustomerTravelDetails;
