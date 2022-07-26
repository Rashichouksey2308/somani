/* eslint-disable import/no-anonymous-default-export */
import config from './config'

export default {
  baseUrl: `${config.userServerUrl}`,
  authbaseUrl: `${config.authServerUrl}`,
  corebaseUrl: `${config.coreServerUrl}`,

  // auth
  login: '/api/auth/login',
  logout: '/api/auth/logout',

  //  leads
  registerCompany: '/api/core/lead/company-details',
  getBuyers: '/api/core/lead/get-all-leads',
  uploadDocuments: '/api/core/order/doc-upoad',
  search: '/api/core/lead/search?searchTerm=',

  //orders
  getBuyerOrder: '/api/core/lead/order-review',
  updateBuyer: '/api/core/lead/order-action',
  orderDetail: '/api/core/order/detail',
  newOrder: '/api/core/order',
  orderDetailUpdate: '/api/core/order/detail',
  updateCredit: '/api/core/order/credit',
  updateCreditCalculate: '/api/core/order/credit-calculate',

  // gst
  getGst: '/api/get-gst',

  //token
  generateToken: '/api/auth/generate-token',
  verifyToken: '/api/auth/verify-token',

  //termsheet
  gettermsheet: '/api/core/termsheet',
  updatetermsheet: '/api/core/termsheet',

  //marginMoney
  getMarginMoney: '/api/core/margin-money',
  updateMarginMoney: '/api/core/margin-money',

  // companydetails
  getCompanyDetails: '/api/core/lead/fetchCompanyDetail',
  updateCompanyDetails: '/api/core/lead/update-company',

  // Refetch Karza
  refetchCombineKarza: '/api/core/lead/refetch-combine-karza',

  // Credit Limit
  creditLimit: '/api/core/credit-limit',

  //LC Module
  getLcModule: '/api/core/lc-module',
  updateLcModule: '/api/core/lc-module',

  //DocumentsCam :
  getDocuments: '/api/core/order/order-document',
  addDocuments: '/api/core/order/order-document',
  deleteDocument: '/api/core/order/order-document',

  //Update Cam Sheet
  updateCam : '/api/core/order/cam',


 // karza Gst 
  getGstKarza : '/api/core/lead/refetch-gst-karza',

  //Module 2

  //VESSEL
  getVessel:  '/api/core/vessel'
}
