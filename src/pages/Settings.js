import React, { useState } from "react";
import {
  Typography,
  Box,
  Paper,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  Switch,
  Alert,
  Link,
  Stack,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import RefreshIcon from "@mui/icons-material/Refresh";
import NotificationsIcon from "@mui/icons-material/Notifications";
import HelpIcon from "@mui/icons-material/Help";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import { useVendor } from '../contexts/VendorContext';

const StyledPaper = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(3),
  margin: theme.spacing(3),
  width: "100%",
  boxSizing: "border-box",
}));

const SectionTitle = styled(Typography)(({ theme }) => ({
  fontSize: "1.1rem",
  fontWeight: "bold",
  marginBottom: theme.spacing(2),
  display: "flex",
  alignItems: "center",
  "& .MuiSvgIcon-root": {
    marginRight: theme.spacing(1),
    color: theme.palette.primary.main,
  },
}));

const Settings = () => {

  const { refreshTime, setRefreshTime, isNotificationOn, setIsNotificationOn } = useVendor();

  const handleRefreshTimeChange = (event) => {
    setRefreshTime(event.target.value);
  };

  const handleNotificationChange = (event) => {
    setIsNotificationOn(event.target.checked);
  };

  return (
    <StyledPaper>
      <Typography variant="h5" gutterBottom>
        Settings
      </Typography>

      <Box mb={4}>
        <SectionTitle>
          <RefreshIcon />
          Refresh Timing
        </SectionTitle>
        <Alert severity="info" sx={{ mb: 2 }}>
          Note : The exact time after which a request to check whether we have a
          new order is being sent! This happens in exact intervals of above
          mentioned.
        </Alert>
        <FormControl fullWidth>
          <InputLabel id="refresh-time-label">
            Please select the time for refresh :
          </InputLabel>
          <Select
            labelId="refresh-time-label"
            id="refresh-time-select"
            value={refreshTime/(60000)}
            label="Please select the time for refresh :"
            onChange={handleRefreshTimeChange}
          >
            <MenuItem value={1}>1 Min</MenuItem>
            <MenuItem value={2}>2 Mins</MenuItem>
            <MenuItem value={5}>5 Mins</MenuItem>
            <MenuItem value={10}>10 Mins</MenuItem>
          </Select>
        </FormControl>
      </Box>

      <Box mb={4}>
        <SectionTitle>
          <NotificationsIcon />
          Notification
        </SectionTitle>
        <Box display="flex" alignItems="center">
          <Typography mr={2}>Notifications :</Typography>
          <Switch
            checked={isNotificationOn}
            onChange={handleNotificationChange}
            inputProps={{ "aria-label": "toggle isNotificationOn" }}
          />
        </Box>
      </Box>

      <Box>
        <SectionTitle>
          <HelpIcon />
          Help
        </SectionTitle>
        <Stack spacing={2}>
          <Box display="flex" alignItems="center">
            <EmailIcon sx={{ mr: 1 }} />
            <Typography>
              Email us at :{" "}
              <Link href="mailto:admin@spicywagon.in">admin@spicywagon.in</Link>
            </Typography>
          </Box>
          <Box display="flex" alignItems="center">
            <PhoneIcon sx={{ mr: 1 }} />
            <Typography>
              Call us at <Link href="tel:+919868682626">+91 9868682626</Link>
            </Typography>
          </Box>
          <Box display="flex" alignItems="center">
            <WhatsAppIcon sx={{ mr: 1 }} />
            <Typography>
              Connect with us on WhatsApp :{" "}
              <Link href="#" onClick={() => alert("WhatsApp link clicked")}>
                Click Here
              </Link>
            </Typography>
          </Box>
        </Stack>
      </Box>
    </StyledPaper>
  );
};

export default Settings;
