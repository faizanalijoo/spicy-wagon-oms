export const PAYMENT_TYPES = {
    CASH_ON_DELIVERY: 'Cash on Delivery',
    PRE_PAID: 'Pre-paid',
    // Add more payment types as needed
  };
  
  export const ORDER_STATUSES = {
    PENDING: 'Pending',
    CONFIRMED: 'Confirmed',
    DELIVERED: 'Delivered',
    CANCELLED: 'Cancelled',
    ORDER_PLACED: 'Order Placed'
    // Add more statuses as needed
  };
  
//   export const API_ENDPOINTS = {
//     LOGIN: '/api/login',
//     ORDERS: '/api/orders',
//     // Add more API endpoints as needed
//   };
  
  // You can add more constant objects as needed
  
  // Helper function to get the display value for a constant
  export const getDisplayValue = (constantObject, key) => {
    return constantObject[key] || key; // Return the key itself if not found in the object
  };