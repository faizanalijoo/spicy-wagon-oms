import { Button, IconButton, Stack, Typography } from "@mui/material";
import React from "react";
import { useAuth } from "../contexts/AuthContext";
import { MdClose } from "react-icons/md";
import { AppColors } from "../utils/AppColors";

export default function LogoutConfirm({ onClose }) {
  const { logout } = useAuth();
  return (
    <Stack
      position="relative"
      alignItems="center"
      justifyContent="center"
      gap={1}
      p={2}
      width={{ xs: "100%", md: 350 }}
    >
      <IconButton
        onClick={onClose}
        size="small"
        sx={{ position: "absolute", top: -8, right: -8 }}
      >
        <MdClose size={20} color={AppColors.TEXT_SECONDARY} />
      </IconButton>
      <Typography variant="h3" fontSize={24} color="primary.main">
        Logout
      </Typography>
      <Typography variant="subtitle2" fontSize={16}>
        Are you sure you want to logout?
      </Typography>

      <Stack mt={2} direction="row" alignItems="center" gap={2}>
        <Button
          onClick={onClose}
          variant="contained"
          color="secondary"
          sx={{ flex: 1, minWidth: "fit-content" }}
        >
          No, Cancel
        </Button>
        <Button
          onClick={logout}
          variant="contained"
          sx={{ flex: 1, minWidth: "fit-content" }}
        >
          Yes, Logout
        </Button>
      </Stack>
    </Stack>
  );
}
