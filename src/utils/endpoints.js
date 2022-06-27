/* eslint-disable import/no-anonymous-default-export */
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
  uploadDocuments: "/api/core/order/doc-upoad",

  //orders
  getBuyerOrder: "/api/core/lead/order-review",
  updateBuyer: "/api/core/lead/order-action",
  orderDetail: "/api/core/order/detail",
  orderDetailUpdate: "/api/core/order/detail",
  updateCredit: "/api/core/order/credit",

  // gst 
  getGst: "/api/get-gst",
 

  //token
  generateToken: "/api/auth/generate-token",
  verifyToken: "/api/auth/verify-token",
  

}







