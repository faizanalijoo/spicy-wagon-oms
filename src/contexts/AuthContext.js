import React, { createContext, useContext, useState, useEffect, useCallback } from "react";
import api from "../services/api";
import { apiEndpoints } from "../services/apiEndpoints";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [userRole, setUserRole] = useState(null);
  const [vendorId, setVendorId] = useState(null);
  const [loading, setLoading] = useState(true);

  const fetchUserRole = useCallback(async (token) => {
    try {
      const response = await api.get(apiEndpoints.getRoles);
      // setUserRole(response.data.role);
      setVendorId(response.data[0].vendors[0]?.outlet?.outlet_id);
      setLoading(false);
    } catch (error) {
      logout();
    }
  }, []);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      setIsAuthenticated(true);
      fetchUserRole(token);
    } else {
      setLoading(false);
      setIsAuthenticated(false);
    }
  }, [fetchUserRole]);
 
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
