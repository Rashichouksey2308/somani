/* eslint-disable import/no-anonymous-default-export */
import config from './config'

export default {
  baseUrl: `${config.baseUrl}`,
  authbaseUrl: `${config.authServerUrl}`,
  corebaseUrl: `${config.coreServerUrl}`,
  userbaseUrl:`${config.userServerUrl}`,

  // auth
  login: '/login',
  logout: '/logout',

  //analytics
  orderSummary: '/analytics/order-summary',
  leadSummary: '/analytics/lead-summary',
  commoditySummary: '/analytics/commodity-summary',
  originSummary: '/analytics/origin-country-summary',
  customerSummary: '/analytics/customer-summary',
  exposureSummary: '/analytics/exposure-summary',
  //  leads
  registerCompany: '/lead/company-details',
  getBuyers: '/lead/get-all-leads',
  uploadDocuments: '/order/doc-upoad',
  search: '/lead/search?searchTerm=',
  getPanGst : '/get-company',

  //orders
  getBuyerOrder: '/lead/order-review',
  updateBuyer: '/lead/order-action',
  orderDetail: '/order/detail',
  newOrder: '/order',
  orderDetailUpdate: '/order/detail',
  updateCredit: '/order/credit',
  updateCreditCalculate: '/order/credit-calculate',

  // gst
  getGst: '/get-gst',

  //token
  generateToken: '/generate-token',
  verifyToken: '/verify-token',

  //termsheet
  gettermsheet: '/termsheet',
  updatetermsheet: '/termsheet',

  //marginMoney
  getMarginMoney: '/margin-money',
  updateMarginMoney: '/margin-money',
  reviseMarginMoney: '/margin-money/revised',

  // companydetails
  getCompanyDetails: '/lead/fetch-company-detail',
  updateCompanyDetails: '/lead/update-company',

  //complienceCase
  getCaseDetails: '/lead/litigation-case-detail',

  // Refetch Karza
  refetchCombineKarza: '/lead/refetch-combine-karza',

  // Credit Limit
  creditLimit: '/credit-limit',

  //LC Module
  getLcModule: '/lc-module',
  updateLcModule: '/lc-module',
  updateLcModuleAmendment: '/lc-module/amendment',
  updateLcAmendmentPost: '/lc-module/post-update-amendment',

  //DocumentsCam :
  getDocuments: '/order/order-document',
  addDocuments: '/order/order-document',
  deleteDocument: '/order/order-document',

  //Update Cam Sheet
  updateCam: '/order/cam',

  //generic
  updateGeneric: '/generic',

  //Vessel Nomination
  getVessel: '/vessel',
  uploadDocVessel: '/vessel/upload-doc',

  //getGstKarza
  getGstKarza: '/lead/refetch-gst-karza',

  // Insurance

  getInsurance: '/insurance',
  updateQuotation: '/insurance/quotation',
  renewInsurance : '/insurance/insurance-renew',

  // Inspection
  getInspection: '/inspection',
  updateInspection: '/inspection',

  //Transit
  getTransitDetails: '/transit',
  updateTransitDetails: '/transit',
  fetchAdditionalData: 'api/core/transit/additional-info',

  //ForwardHedging
  getForwardHedging: '/forward-hedging',
  updateForwardHedging: '/forward-hedging',

  //Custom Clearance
  customClearance: '/custom-clearance',
  customClearanceDoc: '/custom-clearance/upload-doc',

  //Delivery
  delivery: '/delivery',
  uploadDoc: '/delivery/upload-doc',
  lifting: '/lifting',

  //ViewDocument
  viewDoc: '/document/access',
}
