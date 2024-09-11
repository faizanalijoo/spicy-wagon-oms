import React, { createContext, useContext, useState, useEffect } from "react";
import api from "../services/api";
import { apiEndpoints } from "../services/apiEndpoints";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [userRole, setUserRole] = useState(null);
  const [vendorId, setVendorId] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      setIsAuthenticated(true);
      fetchUserRole(token);
    } else {
      setLoading(false);
      setIsAuthenticated(false);
    }
  }, [localStorage]);

  const fetchUserRole = async (token) => {
    try {
      const response = await api.get(apiEndpoints.getRoles);
      // setUserRole(response.data.role);
      // setVendorId(response.data.vendorId);
      setLoading(false);
    } catch (error) {
      logout();
    }
  };

  const login = async (token) => {
    localStorage.setItem("token", token);
    setIsAuthenticated(true);
    await fetchUserRole(token);
  };

  const logout = () => {
    localStorage.removeItem("token");
    setIsAuthenticated(false);
    setUserRole(null);
    setVendorId(null);
  };

  return (
    <AuthContext.Provider
      value={{ isAuthenticated, login, logout, userRole, vendorId, loading }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
