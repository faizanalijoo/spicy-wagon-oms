import React from "react";
import {
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Toolbar,
} from "@mui/material";
import { Link, useLocation } from "react-router-dom";
import DashboardIcon from "@mui/icons-material/Dashboard";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import StoreIcon from "@mui/icons-material/Store";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import DescriptionIcon from "@mui/icons-material/Description";
import SettingsIcon from "@mui/icons-material/Settings";
import styled from "styled-components";
import { useTheme } from "@mui/material/styles";

const StyledDrawer = styled(Drawer)`
  & .MuiDrawer-paper {
    width: 240px;
    background-image: linear-gradient(to bottom right, #791717, #2a0101);
    color: white;
  }
`;

const StyledListItem = styled(ListItem)`
  &:hover {
    background-color: rgba(255, 255, 255, 0.1);
  }
`;

const Sidebar = () => {
  const theme = useTheme();
  let location = useLocation();

  console.log('loca', location)

  const menuItems = [
    { text: "Dashboard", icon: <DashboardIcon />, path: "/" },
    {
      text: "Manage Orders",
      icon: <ShoppingCartIcon />,
      path: "/manage-orders",
    },
    { text: "Outlet Details", icon: <StoreIcon />, path: "/outlet-details" },
    { text: "Manage Menu", icon: <MenuBookIcon />, path: "/manage-menu" },
    { text: "RDS Page", icon: <DescriptionIcon />, path: "/rds-page" },
    { text: "Settings", icon: <SettingsIcon />, path: "/settings" },
  ];

  return (
    <StyledDrawer variant="permanent" theme={theme}>
      <Toolbar /> {/* This empty Toolbar pushes content below AppBar */}
      <List>
        {menuItems.map((item) => (
          <StyledListItem
            button
            key={item.text}
            component={Link}
            to={item.path}
            sx={{ backgroundColor: item.path === location.pathname && `rgba(255, 255, 255, 0.1)` }}
          >
            <ListItemIcon sx={{ color: "white" }}>{item.icon}</ListItemIcon>
            <ListItemText sx={{ color: "white" }} primary={item.text} />
          </StyledListItem>
        ))}
      </List>
    </StyledDrawer>
  );
};

export default Sidebar;
