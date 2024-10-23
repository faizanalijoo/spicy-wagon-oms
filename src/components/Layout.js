import React from "react";
import { Outlet } from "react-router-dom";
import { Stack } from "@mui/material";
import Header from "./Header";
import Sidebar from "./Sidebar";
import { AppColors } from "../utils/AppColors";
import { HEADER_HEIGHT, SIDEBAR_WIDTH } from "../utils/constants";
import MobileHeader from "./MobileNav/MobileHeader";

const Layout = () => {
  return (
    <Stack sx={{ background: AppColors.GRADIENT_TOP_BOTTOM }}>
      <Stack
        position="fixed"
        top={0}
        width="100%"
        height={HEADER_HEIGHT}
        zIndex={1}
        display={{ xs: "none", md: "flex" }}
      >
        <Header />
      </Stack>

      <Stack
        position="fixed"
        top={0}
        width="100%"
        height={HEADER_HEIGHT}
        zIndex={1}
        display={{ xs: "flex", md: "none" }}
      >
        <MobileHeader />
      </Stack>

      <Stack
        width={SIDEBAR_WIDTH}
        position="fixed"
        left={0}
        top={0}
        height="100vh"
        zIndex={2}
        display={{ xs: "none", md: "flex" }}
      >
        <Sidebar />
      </Stack>

      <Stack
        mt={`${HEADER_HEIGHT}px`}
        ml={{ md: `${SIDEBAR_WIDTH}px`, xs: 0 }}
        component="main"
        p={{ xs: 0, md: 2 }}
        minHeight={`calc(100vh - ${HEADER_HEIGHT}px)`}
      >
        <Stack
          borderRadius={{ xs: 0, md: "16px" }}
          bgcolor="#F9F5F4"
          height="calc(100vh - 96px)"
          overflow="auto"
          p={{ xs: 2, md: 3 }}
        >
          <Outlet />
        </Stack>
      </Stack>
    </Stack>
  );
};

export default Layout;
