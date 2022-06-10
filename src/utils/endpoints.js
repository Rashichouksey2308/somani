import config from './config'

export default {
  baseUrl: `${config.userServerUrl}`,
  authbaseUrl: `${config.authServerUrl}`,

  login: "/api/auth/login",
  logout: "/api/auth/logout",
  registerCompany: "/api/lead/company-details",
  getGst: "/api/get-gst",
  getBuyers: "/api/lead/get-all-leads",
  getBuyerOrder: "/api/lead/order-review",
  updateBuyer: "/api/lead/order-action",
  generateToken: "/api/auth/generate-token",
  verifyToken: "/api/auth/verify-token"
  

}







