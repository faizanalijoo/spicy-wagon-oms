import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import CssBaseline from "@mui/material/CssBaseline";
import { Box, CircularProgress, ThemeProvider } from "@mui/material";
import Layout from "./components/Layout";
import OutletDetails from "./pages/OutletDetails";
import ManageMenu from "./pages/ManageMenu";
import RDSPage from "./pages/RDSPage";
import Settings from "./pages/Settings";
import { useAuth } from "./contexts/AuthContext";
import { theme } from "./theme";
import "./index.css";
import Login from "./pages/Login/Login";
import Dashboard from "./pages/Dashboard/Dashboard";
import ManageOrders from "./pages/Orders/ManageOrders";
import OrderDetails from "./pages/Orders/OrderDetails";
import { Toaster } from "react-hot-toast";

const ProtectedRoute = ({ children }) => {
  const { isAuthenticated } = useAuth();
  if (!isAuthenticated) {
    return <Navigate to="/login" />;
  }
  return children;
};

function App() {
  const { loading } = useAuth();
  if (loading) return;
  return (
    <ThemeProvider theme={theme}>
      <Toaster />
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
          <Route
            path="manage-orders"
            element={
              <ProtectedRoute>
                <ManageOrders />
              </ProtectedRoute>
            }
          />
          <Route
            path="/order/:id"
            element={
              <ProtectedRoute>
                <OrderDetails />
              </ProtectedRoute>
            }
          />
          <Route
            path="outlet-details"
            element={
              <ProtectedRoute>
                <OutletDetails />
              </ProtectedRoute>
            }
          />
          <Route
            path="manage-menu"
            element={
              <ProtectedRoute>
                <ManageMenu />
              </ProtectedRoute>
            }
          />
          <Route
            path="rds-page"
            element={
              <ProtectedRoute>
                <RDSPage />
              </ProtectedRoute>
            }
          />
          <Route
            path="settings"
            element={
              <ProtectedRoute>
                <Settings />
              </ProtectedRoute>
            }
          />
        </Route>
      </Routes>
    </ThemeProvider>
  );
}

export default App;
