import { Button, MenuItem, Select, Stack, Typography } from "@mui/material";
import React from "react";
import redLogo from "../images/redLogo.png";
import { AppColors } from "../utils/AppColors";
import { useAuth } from "../contexts/AuthContext";
import LabelledInput from "./LabelledInput";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  bgcolor: AppColors.WHITE,
  borderRadius: "18px",
  boxShadow: 24,
};

export default function ChangeOutlet({ onClose }) {
  const { vendors, setVendorId, vendorId } = useAuth();

  const handleOutletChange = (e) => {
    setVendorId(e);
  };

  return (
    <Stack sx={style} width={{ xs: "90%", md: 512 }} gap={3} p={5}>
      <Stack alignItems="center" justifyContent="center">
        <img
          src={redLogo}
          style={{ height: 24, objectFit: "contain", marginBottom: 18 }}
          alt="logo"
        />
        <Typography textAlign="center" variant="h3" fontSize={24}>
          Select Outlet
        </Typography>
        <Typography textAlign="center" variant="subtitle2">
          Increase your online orders.
        </Typography>
      </Stack>

      <LabelledInput label="Please select the outlet">
        <Select
          value={vendorId}
          onChange={(e) => handleOutletChange(e.target.value)}
        >
          {vendors.map((v) => (
            <MenuItem value={v.outlet.outlet_id}>{v.outlet.name}</MenuItem>
          ))}
        </Select>
      </LabelledInput>

      <Button
        onClick={onClose}
        size="large"
        type="submit"
        fullWidth
        variant="contained"
      >
        Proceed
      </Button>
    </Stack>
  );
}
