export const apiEndpoints = {
  // Login Stack
  // Login With Password
  getToken: `common/login-with-password/`,
  // Send Login OTP
  getOtp: `common/send-login-otp/`,
  // Verifying the OTP
  verifyOtp: `common/verify-otp/`,
  // Password Reset OTP
  sendResetOtp: `common/send-password-reset-otp/`,
  // Verifying Reset Password OTP
  verifyResetOtp: `common/verify-otp-password-reset/`,
  // Updating the Password
  updatePassword: `common/update-password/`,

  // Roles call
  getRoles: `common/roles/`,

  // Orders by date
  getOrdersDate: (id, date) => `dashboard/vendor/${id}/orders/${date}/`,
  getOrdersDetails: (id, orderId) =>
    `dashboard/vendor/${id}/order/${orderId}/details`,
  confirmOrder: (id, orderId) =>
    `dashboard/vendor/${id}/order/${orderId}/confirm`,

  // getOrdersDataSince: (id, date, sinceId) => `dashboard/vendor/${id}/orders/${date}/?since_id/${sinceId}`,

  eventsCall: (id, orderId) => `dashboard/vendor/${id}/order/${orderId}/events`,

  // Devies
  devicesRegistration: `devices`,

  // Change status end points
  changeStatus: (outletId, orderId, status) =>
    `dashboard/vendor/${outletId}/order/${orderId}/change-status-to/${status}`,

  // Unauthenticated End points

  // get order details for unauthenticated users
  getOrderDetailsUnAuth: (pnr, orderId) =>
    `open-api/order/${pnr}/${orderId}/details`,
  // order confirmation from Vendor
  vendorConfirmUnAuth: (pnr, orderId) =>
    `open-api/vendor-order-confirm/${pnr}/${orderId}/`,
  // order confirmation from Passenger side this should be only active if the user has accepted it, i.e. order.confirmed_by_user=null
  passengerConfirmUnAuth: (pnr, orderId) =>
    `open-api/passenger-order-confirm/${pnr}/${orderId}/`,

  // outlets Info
  getOutletDetails: (outletId) => `dashboard/outlet/${outletId}/details`,
  // Get Menu Items
  getMenuItems: (outletId) => `dashboard/menu-item/${outletId}/list/`,
  // Updating an Image for a menu item
  updateImageForMenu: (id) => `dashboard/menu-item/${id}/update-image`,
  menuItemOperations: (id) => `dashboard/menu-item/${id}`,
  // GetFeedbacks
  getFeedbacks: (outletId, startDate, endDate) =>
    `dashboard/${outletId}/feedback-stats/?start_date=${startDate}&end_date=${endDate}`,
};
