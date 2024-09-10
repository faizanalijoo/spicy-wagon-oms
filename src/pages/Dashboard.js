import React from "react";
import { Typography } from "@mui/material";

const Dashboard = () => {
  return (
    <div>
      <Typography variant="h4" component="h1" gutterBottom>
        Dashboard
      </Typography>
      <Typography variant="body1">
        Welcome to your SpicyWagon dashboard. Here you can view your
        restaurant's performance and manage your orders.
      </Typography>
    </div>
  );
};

export default Dashboard;
