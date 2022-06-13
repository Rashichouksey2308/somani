import config from './config'

export default {
  baseUrl: `${config.userServerUrl}`,
  authbaseUrl: `${config.authServerUrl}`,
  corebaseUrl: `${config.coreServerUrl}`,

  login: "/api/auth/login",
  logout: "/api/auth/logout",
  registerCompany: "/api/core/lead/company-details",
  getGst: "/api/get-gst",
  getBuyers: "/api/core/lead/get-all-leads",
  getBuyerOrder: "/api/core/lead/order-review",
  updateBuyer: "/api/lead/order-action",
  generateToken: "/api/auth/generate-token",
  verifyToken: "/api/auth/verify-token"
  

}







