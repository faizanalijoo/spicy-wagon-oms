import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  useCallback,
} from "react";
import api from "../services/api";
import { apiEndpoints } from "../services/apiEndpoints";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [userRole, setUserRole] = useState(null);
  const [vendorId, setVendorId] = useState(null);
  const [vendors, setVendors] = useState([]);
  const [loading, setLoading] = useState(true);

  const logout = useCallback(() => {
    localStorage.removeItem("token");
    setIsAuthenticated(false);
    setUserRole(null);
    setVendors([]);
    setVendorId(null);
  }, []);

  const fetchUserRole = useCallback(
    async (token) => {
      try {
        const response = await api.get(apiEndpoints.getRoles);
        // Uncomment the next line if you want to set the user role
        setVendors(response.data[0]?.vendors);
        setVendorId(response.data[0]?.vendors[0]?.outlet?.outlet_id || null);
      } catch (error) {
        console.error("Error fetching user role:", error);
        logout();
      } finally {
        setLoading(false);
      }
    },
    [logout]
  );

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

  const login = useCallback(
    async (token) => {
      localStorage.setItem("token", token);
      setIsAuthenticated(true);
      await fetchUserRole(token);
    },
    [fetchUserRole]
  );

  const contextValue = {
    isAuthenticated,
    login,
    logout,
    userRole,
    vendorId,
    loading,
    vendors
  };

  return (
    <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
