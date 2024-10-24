import React from "react";
import {
  Typography,
  Select,
  MenuItem,
  Switch,
  Alert,
  Link,
  Stack,
  Divider,
} from "@mui/material";
import { useVendor } from "../contexts/VendorContext";
import CustomTabs from "../components/CustomTabs";
import CustomCard from "../components/CustomCard";
import CardTitle from "../components/CardTitle";
import {
  MdOutlineLocalPhone,
  MdOutlineMail,
  MdOutlineWhatsapp,
  MdRefresh,
} from "react-icons/md";
import { IoIosHelpCircle, IoIosInformationCircleOutline } from "react-icons/io";
import { BiSolidBell } from "react-icons/bi";
import { AppColors } from "../utils/AppColors";

const Settings = () => {
  const { refreshTime, setRefreshTime, isNotificationOn, setIsNotificationOn } =
    useVendor();

  const handleRefreshTimeChange = (event) => {
    setRefreshTime(event.target.value);
  };

  const handleNotificationChange = (event) => {
    setIsNotificationOn(event.target.checked);
  };

  return (
    <Stack gap={2}>
      <CustomTabs tabs={[{ label: "Settings" }]} value={0} />
      <CustomCard sx={{ p: 2, gap: 3 }}>
        <Stack gap={2}>
          <CardTitle icon={<MdRefresh />} title="Refresh Timing" />
          <Divider />
          <Alert
            icon={<IoIosInformationCircleOutline color="#3D3D3D" />}
            color="error"
          >
            Note : The exact time after which a request to check wheather we
            have a new order is being sent! This happens in exact intervals of
            above mentioned.
          </Alert>

          <Stack direction="row" alignItems="center" gap={2}>
            <Typography variant="subtitle1">
              Please select the time for refresh :
            </Typography>
            <Select
              onChange={handleRefreshTimeChange}
              sx={{ width: 170 }}
              size="small"
            >
              <MenuItem value={1}>1 min</MenuItem>
              <MenuItem value={2}>2 mins</MenuItem>
              <MenuItem value={5}>5 mins</MenuItem>
              <MenuItem value={10}>10 mins</MenuItem>
            </Select>
          </Stack>
        </Stack>

        <Stack gap={2}>
          <CardTitle icon={<BiSolidBell />} title="Notification" />
          <Divider />
          <Stack direction="row" alignItems="center" gap={2}>
            <Typography variant="subtitle1">Notifications :</Typography>
            <Switch
              checked={isNotificationOn}
              onChange={handleNotificationChange}
            />
          </Stack>
        </Stack>

        <Stack gap={2}>
          <CardTitle icon={<IoIosHelpCircle />} title="Help" />
          <Divider />

          <Stack direction="row" alignItems="center" gap={1}>
            <MdOutlineMail color={AppColors.TEXT_SECONDARY} />
            <Typography variant="subtitle2">Email us at :</Typography>
            <Typography variant="subtitle1">admin@spicywagon.in</Typography>
          </Stack>

          <Stack direction="row" alignItems="center" gap={1}>
            <MdOutlineLocalPhone color={AppColors.TEXT_SECONDARY} />
            <Typography variant="subtitle2">Call us at :</Typography>
            <Typography variant="subtitle1">+91 9868682626</Typography>
          </Stack>

          <Stack direction="row" alignItems="center" gap={1}>
            <MdOutlineWhatsapp color={AppColors.TEXT_SECONDARY} />
            <Typography variant="subtitle2">
              Connect with us on WhatsApp :
            </Typography>
            <Link underline="always" variant="subtitle1">
              Click Here
            </Link>
          </Stack>
        </Stack>
      </CustomCard>
    </Stack>
  );
};

export default Settings;
