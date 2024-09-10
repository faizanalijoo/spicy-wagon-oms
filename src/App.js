import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { Box } from "@mui/material"; // Add this import
import theme from "./theme";
import Layout from "./components/Layout";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import ManageOrders from "./pages/ManageOrders";
import OutletDetails from "./pages/OutletDetails";
import ManageMenu from "./pages/ManageMenu";
import RDSPage from "./pages/RDSPage";
import Settings from "./pages/Settings";
import { useAuth } from "./contexts/AuthContext";

const ProtectedRoute = ({ children }) => {
  const { isAuthenticated } = useAuth();
  return isAuthenticated ? children : <Navigate to="/login" />;
};

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box sx={{ display: "flex" }}>
        {" "}
        {/* Add this Box component */}
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route
            path="/"
            element={
              <ProtectedRoute>
                <Layout />
              </ProtectedRoute>
            }
          >
            <Route index element={<Dashboard />} />
            <Route path="manage-orders" element={<ManageOrders />} />
            <Route path="outlet-details" element={<OutletDetails />} />
            <Route path="manage-menu" element={<ManageMenu />} />
            <Route path="rds-page" element={<RDSPage />} />
            <Route path="settings" element={<Settings />} />
          </Route>
        </Routes>
      </Box>
    </ThemeProvider>
  );
}

export default App;
