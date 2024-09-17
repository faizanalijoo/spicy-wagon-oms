import React from "react";
import { Outlet } from "react-router-dom";
import { Box } from "@mui/material";
import styled from "styled-components";
import Header from "./Header";
import Sidebar from "./Sidebar";

const LayoutContainer = styled(Box)`
  display: flex;
  width: 100%;
`;

const MainContent = styled(Box)`
  flex-grow: 1;
  padding: 20px;
  margin-top: 64px; // Height of the AppBar
  margin-left: 240px; // Width of the Sidebar
  @media (max-width: 600px) {
    margin-left: 0;
  }
`;

const Layout = () => {
  return (
    <LayoutContainer>
      <Header />
      <Sidebar />
      <MainContent component="main">
        <Outlet />
      </MainContent>
    </LayoutContainer>
  );
};

export default Layout;
