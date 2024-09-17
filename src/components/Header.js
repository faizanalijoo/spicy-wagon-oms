import React from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  Menu,
  MenuItem,
  Box,
} from "@mui/material";
import { AccountCircle } from "@mui/icons-material";
import { useAuth } from "../contexts/AuthContext";
import styled from "styled-components";
import { useTheme } from "@mui/material/styles";
import logo from "../images/logo.png";

const StyledAppBar = styled(AppBar)`
  background-color: #1e1e1e;
  z-index: ${(props) =>
    props.theme.zIndex.drawer + 1}; // Ensure AppBar is above Sidebar
`;

const LogoImage = styled.img`
  padding-top: 10px;
  height: 40px; // Adjust this value to fit your header height
  width: auto;
`;

const Header = () => {
  const { logout } = useAuth();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const theme = useTheme();

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <StyledAppBar position="fixed" theme={theme}>
      <Toolbar>
        <Box sx={{ flexGrow: 1 }}>
          <LogoImage src={logo} alt="SpicyWagon Logo" />
        </Box>
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
