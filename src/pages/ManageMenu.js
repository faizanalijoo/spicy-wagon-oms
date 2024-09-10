import React from "react";
import { Typography } from "@mui/material";

const ManageMenu = () => {
  return (
    <div>
      <Typography variant="h4" component="h1" gutterBottom>
        Manage Menu
      </Typography>
      <Typography variant="body1">
        Welcome to your SpicyWagon dashboard. Here you can view your
        restaurant's performance and manage your orders.
      </Typography>
    </div>
  );
};

export default ManageMenu;
