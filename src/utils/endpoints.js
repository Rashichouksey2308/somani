import config from './config'

export default {
  baseUrl: `${config.userServerUrl}`,
  authbaseUrl: `${config.authServerUrl}`,
  corebaseUrl: `${config.coreServerUrl}`,

 // auth
  login: "/api/auth/login",
  logout: "/api/auth/logout",


  //  leads 
  registerCompany: "/api/core/lead/company-details",
  getBuyers: "/api/core/lead/get-all-leads",

  //orders
  getBuyerOrder: "/api/core/lead/order-review",
  updateBuyer: "/api/core/lead/order-action",
  orderDetail: "/api/core/order/detial",

  // gst 
  getGst: "/api/get-gst",
 

  //token
  generateToken: "/api/auth/generate-token",
  verifyToken: "/api/auth/verify-token",
  

}






