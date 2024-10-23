import { Drawer, Stack, Typography } from "@mui/material";
import React, { useState } from "react";
import logo from "../../images/small-logo-white.svg";
import { AppColors } from "../../utils/AppColors";
import { GrMenu } from "react-icons/gr";
import { menuItems } from "../Sidebar";
import { useLocation } from "react-router-dom";
import MobileNavDrawer from "./MobileNavDrawer";

export default function MobileHeader() {
  const [showDrawer, setShowDrawer] = useState(false);
  const location = useLocation();
  return (
    <>
      <Stack
        height="100%"
        borderBottom="1px solid #404142"
        px={3}
        justifyContent="space-between"
        alignItems="center"
        direction="row"
        bgcolor="#252227"
      >
        <img width={22} src={logo} alt="logo" />

        <Typography variant="subtitle1" fontSize={14} color={AppColors.WHITE}>
          {menuItems?.find((i) => i.path == location.pathname)?.text}
        </Typography>

        <GrMenu
          onClick={() => setShowDrawer(true)}
          size={24}
          color={AppColors.WHITE}
        />
      </Stack>

      <Drawer
        PaperProps={{ sx: { borderRadius: "24px 24px 0 0" } }}
        open={showDrawer}
        onClose={() => setShowDrawer(false)}
        anchor="bottom"
      >
        <MobileNavDrawer onClose={() => setShowDrawer(false)} />
      </Drawer>
    </>
  );
}
