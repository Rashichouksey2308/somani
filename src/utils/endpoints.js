/* eslint-disable import/no-anonymous-default-export */
import config from './config';

export default {
  baseUrl: `${config.baseUrl}`,
  authbaseUrl: `${config.authServerUrl}`,
  corebaseUrl: `${config.coreServerUrl}`,
  userbaseUrl: `${config.userServerUrl}`,
  // auth
  login: '/login',
  logout: '/logout',

  // analytics
  orderSummary: '/analytics/order-summary',
  leadSummary: '/analytics/lead-summary',
  commoditySummary: '/analytics/commodity-summary',
  originSummary: '/analytics/origin-country-summary',
  customerSummary: '/analytics/customer-summary',
  exposureSummary: '/analytics/exposure-summary',
  //  leads
  registerCompany: '/lead/company-details',
  getBuyers: '/lead/getleads',
  uploadDocuments: '/order/doc-upoad',
  search: '/lead/search?searchTerm=',
  filter: '/lead/search-leads?',
  getPanGst: '/get-company',
  getOrderLeads: '/lead/getleads',

  // orders
  getBuyerOrder: '/lead/order-review',
  updateBuyer: '/lead/order-action',
  orderDetail: '/order/detail',
  newOrder: '/order',
  orderDetailUpdate: '/order/detail',
  updateCredit: '/order/credit',
  updateCreditCalculate: '/order/credit-calculate',

  // gst
  getGst: '/get-gst',

  // token
  generateToken: '/generate-token',
  verifyToken: '/verify-token',

  // termsheet
  gettermsheet: '/termsheet',
  updatetermsheet: '/termsheet',
  termsheetshareemial: '/delivery/share-doc',

  // marginMoney
  getMarginMoney: '/margin-money',
  updateMarginMoney: '/margin-money',
  reviseMarginMoney: '/margin-money/revised',

  // companydetails
  getCompanyDetails: '/lead/fetch-company-detail',
  updateCompanyDetails: '/lead/update-company',

  // complienceCase
  getCaseDetails: '/lead/litigation-case-detail',

  // Refetch Karza
  refetchCombineKarza: '/lead/refetch-combine-karza',

  // Credit Limit
  creditLimit: '/credit-limit',

  // LC Module
  getLcModule: '/lc-module',
  updateLcModule: '/lc-module',
  updateLcModuleAmendment: '/lc-module/amendment',
  updateLcAmendmentPost: '/lc-module/post-update-amendment',

  // DocumentsCam :
  getDocuments: '/order/order-document',
  addDocuments: '/order/order-document',
  deleteDocument: '/order/order-document',
  changeDocModule: '/order/document-module',

  // Update Cam Sheet
  updateCam: '/order/cam',

  // generic
  updateGeneric: '/generic',

  // Vessel Nomination
  getVessel: '/vessel',
  uploadDocVessel: '/vessel/upload-doc',

  // getGstKarza

  getGstKarza: '/lead/refetch-gst-karza',
  getConsolidatedGst: '/lead/consolidate-gst',

  // mcaReport
  getMcaReport: '/karza/request-mca-document',

  // getGstKarza: 'karza/send-gst-link',

  // Insurance

  getInsurance: '/insurance',
  updateQuotation: '/insurance/quotation',
  renewInsurance: '/insurance/insurance-renew',

  // Inspection
  getInspection: '/inspection',
  updateInspection: '/inspection',

  // Transit
  getTransitDetails: '/transit',
  updateTransitDetails: '/transit',
  fetchAdditionalData: '/transit/additional-info',

  // ForwardHedging
  getForwardHedging: '/forward-hedging',
  updateForwardHedging: '/forward-hedging',

  // Custom Clearance
  customClearance: '/custom-clearance',
  customClearanceDoc: '/custom-clearance/upload-doc',

  // Delivery
  delivery: '/delivery',
  uploadDoc: '/delivery/upload-doc',
  lifting: '/lifting',

  // ViewDocument
  viewDoc: '/document/access',

  // supplier
  supplier: '/supplier',
  supplierDoc: '/supplier/supplier-document',
  searchSupplier: '/supplier/search?searchTerm=',
  SupplierUploadDoc: '/supplier/upload-doc',

  //preview
  preview: '/document/access/preview',

  //ALL MASTER URL's
  masterBaseUrl: 'https://somani-uat-s3-public.s3.ap-south-1.amazonaws.com/assets/master-data/',
  countriesMaster: 'country.json',
  portsMaster: 'ports.json',
  commoditiesMaster: 'commodity.json',
  documentsMaster: 'document.json',
  currencyMaster: 'currency.json',
  internalCompaniesMaster: 'internalCompanies.json',
  vendorsMaster: 'vendors.json',
  banksMaster: 'banks/master.json',
  bankBranchesMaster: 'banks/branches/',
  pincodesMaster: 'locations/pincodes/',


  //Checker
  getCommodityDetails: '/commodity/commodity/',
  updateCommodityRemark: '/commodity/checker-commodity/',
  getUserDetails: '/user-master/user',
  getInspectionDetails: '/inspection/inspectionDetails',
  updateInspectionRemark: '/inspection/checker-inspections-status-update',
  getInspectionPickupRecords: '/inspection/requiredInspectionDetails',
  getVendorPickupRecords: '/vendor'
};
  