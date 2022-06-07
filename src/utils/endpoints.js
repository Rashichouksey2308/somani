import config from './config'

export default {
  baseUrl: `${config.userServerUrl}`,
  authbaseUrl: `${config.authServerUrl}`,

  login: "/api/login",
  registerCompany: "/api/lead/company-details",
  getGst: "/api/get-gst",
  getBuyers: "/api/lead/get-all-leads",
  getBuyerOrder: "/api/lead/order-review"
  

}







