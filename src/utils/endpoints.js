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
  reviseMarginMoney: '/api/core/margin-money/revised',

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
  updateLcModuleAmendment: '/api/core/lc-module/amendment',
  updateLcAmendmentPost: '/api/core/lc-module/post-update-amendment',

  //DocumentsCam :
  getDocuments: '/api/core/order/order-document',
  addDocuments: '/api/core/order/order-document',
  deleteDocument: '/api/core/order/order-document',

  //DocumentsCam :
  getDocuments: '/api/core/order/order-document',
  addDocuments: '/api/core/order/order-document',
  deleteDocument: '/api/core/order/order-document',

  //Update Cam Sheet
  updateCam: '/api/core/order/cam',

  //generic
  updateGeneric: '/api/core/generic',

  //Vessel Nomination
  getVessel: '/api/core/vessel',
  uploadDocVessel: '/api/core/vessel/upload-doc',

  //getGstKarza
  getGstKarza: '/api/core/lead/refetch-gst-karza',

  // Insurance

  getInsurance: '/api/core/insurance',
  updateQuotation: '/api/core/insurance/quotation',

  // Inspection
  getInspection: '/api/core/inspection',
  updateInspection: '/api/core/inspection',

  //Transit
  getTransitDetails: '/api/core/transit',
  updateTransitDetails: '/api/core/transit',
  fetchAdditionalData: 'api/core/transit/additional-info',

  //ForwardHedging
  getForwardHedging: '/api/core/forward-hedging',
  updateForwardHedging: '/api/core/forward-hedging',

  //Custom Clearance
  customClearance: '/api/core/custom-clearance',
  customClearanceDoc: '/api/core/custom-clearance/upload-doc',

  //Delivery
  delivery: '/api/core/delivery',
  uploadDoc :'/api/core/delivery/upload-doc',
  lifting: '/api/core/lifting',

  //ViewDocument
  viewDoc: '/api/core/document/access',
}
