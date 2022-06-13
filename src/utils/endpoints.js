import config from './config'

export default {
  baseUrl: `${config.userServerUrl}`,
  authbaseUrl: `${config.authServerUrl}`,
  corebaseUrl: `${config.coreServerUrl}`,

  login: "/api/login",
  registerCompany: "/api/core/lead/company-details",
  getGst: "/api/get-gst",
  getBuyers: "/api/core/lead/get-all-leads",
  getBuyerOrder: "/api/lead/order-review",
  updateBuyer: "/api/lead/order-action",
  

}







