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
  getUpdatedBuyers: '/lead/getleadsForFilter',

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
  sendGst: '/karza/send-gst-link',
  getConsolidatedGst: '/lead/consolidate-gst',

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

  //mcaReport
  getMcaReport: '/karza/request-mca-document',
  // preview
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
  bankBranchesMaster: '/banks/branches/',
  pincodesMaster: '/locations/pincodes/',
  getAllStates: '/lead/getState',
  getMasterUsersQueueRecords: '/user-master/filterUser',
  filterUsersQueue: '/user-master/searchUser',
  getMasterPortsQueueRecords: '/port/filterPorts',
  filterPortsQueue: '/port/search',
  createPortMaster: '/port',
  getDocumentMasterQueueRecords: '/document-master/filterDocs',
  filterDocumentMasterQueue: '/document-master/search',
  createDocumentMaster: '/document-master',
  getMasterCountryQueueRecords: '/country-master/filterCountryMaster',
  filterCountryQueue: '/country-master/search',
  createCountryMaster: '/country-master',
  getMasterCurrencyQueueRecords: '/currency-master/filterCurrency',
  filterCurrencyQueue: '/currency-master/search',
  createCurrencyMaster: '/currency-master',
  getMasterTDSSectionQueueRecords: '/tds-section/filterTDS',
  filterTDSSectionQueue: '/tds-section/search',
  createTDSSectionMaster: '/tds-section',
  getMasterSACQueueRecords: '/sac-code/filterSAC',
  filterSACQueue: '/sac-code/search',
  createSACMaster: '/sac-code',
  getMasterIIAGLedgerQueueRecords: '/ledger/filterLedger',
  filterIIAGLedgerQueue: '/ledger/search',
  createIIAGLedgerMaster: '/ledger',
  editPortsMaster:'port',
  getMasterGoNoGoQueueRecords: '/gng-master',
  getMasterGoNoGoSingleRecord: '/gng-master',
  createGoNoGoMaster: '/gng-master',
  editDocumentMaster: '/document-master',
  editCountryMaster: '/country-master',
  editCurrencyMaster: '/currency-master',

  //Checker
  getUserDetails: '/user-master/user',
  getInspectionDetails: '/inspection/inspectionDetails',
  updateInspectionRemark: '/inspection/checker-inspections-status-update',
  getInspectionPickupRecords: '/inspection/requiredInspectionDetails',
  getCommodityPickupRecords: '/commodity/checker-pending-requests',
  getVendorPickupRecords: '/vendor/checker-pending-requests',
  getCreditCAMPickupRecords: '/lead/cam/getCamLeads',
  getTransactionSummaryPickupRecords: '/termsheet/checker-pending-requests',
  getGenericsPickupRecords: '/generic/checker-pending-requests',
  getLetterofCreditPickupRecords: '/lc-module/checker-pending-requests',
  getUserPickupRecords: '/user-master/checker-pending-requests',
  getInternalCompanyPickupRecords: '/internal-company/checker-pending-requests',
  getGoNoGoLogicPickupRecords: '/gng-master/checker-pending-requests',
  getUserMasterDetails: 'user-master/get-user-masters',
  updateUserMasterRemark: 'user-master/checker-user-status-update',
  getCommodityDetails: 'commodity/get-commodities',
  updateCommodityRemark: 'commodity/checker-commodity-status-update',
  getGoNoGoLogicDetails: 'gng-master/get-gng',
  updateGoNoGoLogicRemark: 'gng-master/checker-gngMaster-status-update',
  getInternalCompanyDetails: 'internal-company/get-internal-company',
  updateInternalCompanyRemark: 'internal-company/checker-internal-company-status-update',
  getVendorDetails: 'vendor/get-vendor',
  updateVendorRemark: 'vendor/checker-vendor-status-update',
  getTransactionSummaryDetails: 'termsheet/get-termsheet',
  updateTransactionSummaryRemark: 'termsheet/checker-termsheet-status-update',
  getLcModuleDetails: 'lc-module/get-lc',
  updateLcModuleRemark: 'lc-module/checker-lc-module-status-update',
  getGenericDetails: 'generic/get-generic',
  updateGenericRemark: 'generic/checker-generic-status-update',
  
  //Masters
  getAllCommodity: '/commodity/get-commodities',
  getAllGonogo: '/gng-master',
  addNewCommodity: '/commodity',
  // Commodity
  getCommodity: '/commodity',

  // Internal Companies
  getInternalCompanies: '/internal-company',

  // PORTS
  getPorts: '/port',

  // City State
  getState: '/city-master',

  // COUNTRY
  getCountry: '/country-master',

  // DOCUMENT MASTER
  getDocument: '/document-master',

  // GO NO GO
  getGoNoGo: '/gng-master',

  // CURRENCY
  getCurrency: '/currency-master',

  // ALL MASTER URL's
  zipCodeMaster: '/world-master/',

  //VENDOR API ROoutes
  getVendor: '/vendor',
};
