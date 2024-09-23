import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  Menu,
  MenuItem,
  Box,
  Typography,
  Button,
} from "@mui/material";
import { AccountCircle, ExpandMore } from "@mui/icons-material";
import { useAuth } from "../contexts/AuthContext";
import styled from "styled-components";
import { useTheme } from "@mui/material/styles";
import logo from "../images/logo.png";

const StyledAppBar = styled(AppBar)`
  background-image: linear-gradient(to bottom right, #791717, #2a0101);
  z-index: ${(props) =>
    props.theme.zIndex.drawer + 1}; // Ensure AppBar is above Sidebar
`;

const LogoImage = styled.img`
  padding-top: 10px;
  height: 35px; // Adjust this value to fit your header height
  width: auto;
`;

const Logo = styled("div")({
  display: "flex",
  alignItems: "center",
  marginRight: "auto",
});

const OutletSelector = styled(Button)({
  backgroundColor: "rgba(255, 255, 255, 0.1)",
  color: "white",
  textTransform: "none",
  marginRight: "16px",
  "&:hover": {
    backgroundColor: "rgba(255, 255, 255, 0.2)",
  },
});

const Header = () => {
  const { logout, vendors, setVendorId } = useAuth();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [anchorElOutlet, setAnchorElOutlet] = React.useState(null);
  const [selectedOutlet, setSelectedOutlet] = useState(vendors[0].outlet.name);

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleOutletClick = (event) => {
    setAnchorElOutlet(event.currentTarget);
  };

  const handleOutletClose = () => {
    setAnchorElOutlet(null);
  };

  const handleOutletChange = (outlet, outletId) => {
    setVendorId(outletId)
    setSelectedOutlet(outlet);
    handleClose();
  };

  const theme = useTheme();

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  return (
    <StyledAppBar position="fixed" theme={theme}>
      <Toolbar>
        <Box sx={{ flexGrow: 1 }}>
          <LogoImage src={logo} alt="SpicyWagon Logo" />
        </Box>
        <Logo>
          <Typography variant="h7" component="div">
            {selectedOutlet}
          </Typography>
        </Logo>
        {vendors.length > 1 && (
          <>
            <OutletSelector
              endIcon={<ExpandMore />}
              onClick={handleOutletClick}
              disabled={vendors.length < 2}
            >
              Change Outlet
            </OutletSelector>
            <Menu
              anchorEl={anchorElOutlet}
              open={Boolean(anchorElOutlet)}
              onClose={handleOutletClose}
            >
              {vendors.map((v) => (
                <MenuItem onClick={() => handleOutletChange(v.outlet.name, v.outlet.outlet_id)}>
                  {v.outlet.companyName}
                </MenuItem>
              ))}
            </Menu>
          </>
        )}
        <div>
          <IconButton
            size="large"
            aria-label="account of current user"
            aria-controls="menu-appbar"
            aria-haspopup="true"
            onClick={handleMenu}
            color="inherit"
          >
            <AccountCircle />
          </IconButton>
          <Menu
            id="menu-appbar"
            anchorEl={anchorEl}
            anchorOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
            keepMounted
            transformOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
            open={Boolean(anchorEl)}
            onClose={handleClose}
          >
            <MenuItem onClick={handleClose}>Profile</MenuItem>
            <MenuItem onClick={logout}>Logout</MenuItem>
          </Menu>
        </div>
      </Toolbar>
    </StyledAppBar>
  );
};

export default Header;
