import React from "react";
import { Typography } from "@mui/material";

const OutletDetails = () => {
  return (
    <div>
      <Typography variant="h4" component="h1" gutterBottom>
        Outlet Details
      </Typography>
      <Typography variant="body1">
        Welcome to your SpicyWagon dashboard. Here you can view your
        restaurant's performance and manage your orders.
      </Typography>
    </div>
  );
};

export default OutletDetails;
