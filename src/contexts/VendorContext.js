import React, { createContext, useState, useContext } from "react";

const VendorContext = createContext();

export const VendorProvider = ({ children }) => {
  const [refreshTime, setRefreshTime] = useState(120000);
  const [isNotificationOn, setIsNotificationOn] = useState(true);

  const contextValue = {
    refreshTime,
    setRefreshTime,
    isNotificationOn,
    setIsNotificationOn,
  };

  return (
    <VendorContext.Provider value={contextValue}>
      {children}
    </VendorContext.Provider>
  );
};

export const useVendor = () => {
  const context = useContext(VendorContext);
  if (!context) {
    throw new Error("useVendor must be used within an VendorProvider");
  }
  return context;
};
