import React, { useState } from "react";
import { Dialog, List, ListItem, Stack, Typography } from "@mui/material";
import { Link, useLocation } from "react-router-dom";
import logo from "../images/logo.png";
import { AppColors } from "../utils/AppColors";
import { VscSettings } from "react-icons/vsc";
import { PiCallBell } from "react-icons/pi";
import { MdOutlineStorefront } from "react-icons/md";
import { LuMenuSquare } from "react-icons/lu";
import { RiSettings4Line } from "react-icons/ri";
import { TbLogout } from "react-icons/tb";
import LogoutConfirm from "./LogoutConfirm";

export const menuItems = [
  { text: "Dashboard", icon: VscSettings, path: "/" },
  {
    text: "Manage Orders",
    icon: PiCallBell,
    path: "/manage-orders",
  },
  {
    text: "Outlet Details",
    icon: MdOutlineStorefront,
    path: "/outlet-details",
  },
  { text: "Manage Menu", icon: LuMenuSquare, path: "/manage-menu" },
  { text: "RDS Page", icon: PiCallBell, path: "/rds-page" },
  { text: "Settings", icon: RiSettings4Line, path: "/settings" },
];

const Sidebar = () => {
  let location = useLocation();
  const [open, setOpen] = useState(false);

  return (
    <Stack borderRight="1px solid #404142" height="100%">
      <Stack alignItems="center" justifyContent="center" height={90}>
        <img src={logo} alt="logo" width="70%" />
      </Stack>
      <List>
        {menuItems.map((item) => (
          <ListItem
            key={item.text}
            component={Link}
            to={item.path}
            sx={{
              gap: 2,
              height: 50,
              backgroundColor:
                item.path === location.pathname && AppColors.THEME_COLOR,
            }}
          >
            {<item.icon size={18} color="#D6D6D6" />}
            <Typography color="#D6D6D6" fontSize={14} fontWeight={500}>
              {item?.text}
            </Typography>
          </ListItem>
        ))}
        <ListItem
          onClick={() => setOpen(true)}
          component={Link}
          sx={{
            gap: 2,
            height: 50,
          }}
        >
          <TbLogout size={18} color="#D6D6D6" />
          <Typography color="#D6D6D6" fontSize={14} fontWeight={500}>
            Logout
          </Typography>
        </ListItem>
      </List>

      <Dialog open={open} onClose={() => setOpen(false)}>
        <LogoutConfirm onClose={() => setOpen(false)} />
      </Dialog>
    </Stack>
  );
};

export default Sidebar;
