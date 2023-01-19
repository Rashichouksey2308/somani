import * as types from './actionType';

const initialState = {
  getCountriesMasterData: [],
  getCommodityMasterData: [],
  getGonogoMasterData: [],
  gettingState: false,
  getStateMasterData: [],
  gettingPincodes: false,
  getMastersPincodesData: [],
  getPortsMasterData: [],
  getCommoditiesMasterData: [],
  getDocumentsMasterData: [],
  getCurrencyMasterData: [],
  getInternalCompaniesMasterData: [],
  getVendorsMasterData: [],
  getBanksMasterData: [],
  getBranchesMasterData: [],
  getPincodesMasterData: [],
  getStatesMasterData: [],
  usersQueueRecords: [],
  gettingUsersQueueRecords: false,
  filteringUsersQueue: false,
  filteredUsersQueue: [],
  portsQueueRecords: [],
  gettingPortsQueueRecords: false,
  filteringPortsQueue: false,
  filteredPortsQueue: [],
  creatingPortMaster: false,
  addNewCommodityData: [],
  documentMasterQueueRecords: [],
  gettingDocumentMasterQueueRecords: false,
  filteringDocumentMasterQueue: false,
  filteredDocumentMasterQueue: [],
  creatingDocumentMaster: false,
  countryQueueRecords: [],
  gettingCountryQueueRecords: false,
  filteringCountryQueue: false,
  filteredCountryQueue: [],
  creatingCountryMaster: false,
  currencyQueueRecords: [],
  gettingCurrencyQueueRecords: false,
  filteringCurrencyQueue: false,
  filteredCurrencyQueue: [],
  creatingCurrencyMaster: false,
  TDSSectionQueueRecords: [],
  gettingTDSSectionQueueRecords: false,
  filteringTDSSectionQueue: false,
  filteredTDSSectionQueue: [],
  creatingTDSSectionMaster: false,
  SACQueueRecords: [],
  gettingSACQueueRecords: false,
  filteringSACQueue: false,
  filteredSACQueue: [],
  creatingSACMaster: false,
  IIAGLedgerQueueRecords: [],
  gettingIIAGLedgerQueueRecords: false,
  filteringIIAGLedgerQueue: false,
  filteredIIAGLedgerQueue: [],
  creatingIIAGLedgerMaster: false,
  GoNoGoQueueRecords: [],
  gettingGoNoGoQueueRecords: false,
  GoNoGoSingleRecord: [],
  gettingGoNoGoSingleRecord: false,
  creatingGoNoGoMaster: false,
  InternalCompaniesQueueRecords: [],
  gettingInternalCompaniesQueueRecords: false,
  filteringInternalCompaniesQueue: false,
  filteredInternalCompaniesQueue: [],
  creatingInternalCompaniesMaster: false,
  zipCode: [],
  editPortTableDataMaster: false,
};

function MastersReducer(state = initialState, action) {
  switch (action.type) {
    case types.GET_COUNTRIES_MASTERS:
      return {
        ...state,
        getCountriesMasterData: [],
      };
    case types.GET_COUNTRIES_MASTERS_SUCCESS:
      return {
        ...state,
        getCountriesMasterData: action.payload,
      };
    case types.GET_COUNTRIES_MASTERS_FAILURE:
      return {
        ...state,
        getCountriesMasterData: [],
      };
    case types.GET_COMMODITY_MASTERS:
      return {
        ...state,
        getCommodityMasterData: [],
      };
    case types.GET_COMMODITY_MASTERS_SUCCESS:
      return {
        ...state,
        getCommodityMasterData: action.payload,
      };
    case types.GET_COMMODITY_MASTERS_FAILURE:
      return {
        ...state,
        getCommodityMasterData: [],
      };
    case types.GET_GONOGO_MASTERS:
      return {
        ...state,
        getGonogoMasterData: [],
      };
    case types.GET_GONOGO_MASTERS_SUCCESS:
      return {
        ...state,
        getGonogoMasterData: action.payload,
      };
    case types.GET_GONOGO_MASTERS_FAILURE:
      return {
        ...state,
        getGonogoMasterData: [],
      };
    case types.GET_STATE_MASTERS:
      return {
        ...state,
        gettingState: true,
        getStateMasterData: [],
      };
    case types.GET_STATE_MASTERS_SUCCESS:
      return {
        ...state,
        getStateMasterData: action.payload,
      };
    case types.GET_STATE_MASTERS_FAILURE:
      return {
        ...state,
        getStateMasterData: [],
      };

    case types.GET_MASTERS_PINCODE:
      return {
        ...state,
        gettingPincodes: true,
        getMastersPincodesData: [],
      };
    case types.GET_MASTERS_PINCODE_SUCCESS:
      return {
        ...state,
        getMastersPincodesData: action.payload,
      };
    case types.GET_MASTERS_PINCODE_FAILURE:
      return {
        ...state,
        getMastersPincodesData: [],
      };

    case types.GET_PORTS_MASTERS:
      return {
        ...state,
        getPortsMasterData: [],
      };
    case types.GET_PORTS_MASTERS_SUCCESS:
      return {
        ...state,
        getPortsMasterData: action.payload,
      };
    case types.GET_PORTS_MASTERS_FAILURE:
      return {
        ...state,
        getPortsMasterData: [],
      };

    case types.GET_COMMODITIES_MASTERS:
      return {
        ...state,
        getCommoditiesMasterData: [],
      };
    case types.GET_COMMODITIES_MASTERS_SUCCESS:
      return {
        ...state,
        getCommoditiesMasterData: action.payload,
      };
    case types.GET_COMMODITIES_MASTERS_FAILURE:
      return {
        ...state,
        getCommoditiesMasterData: [],
      };

    case types.GET_DOCUMENTS_MASTERS:
      return {
        ...state,
        getDocumentsMasterData: [],
      };
    case types.GET_DOCUMENTS_MASTERS_SUCCESS:
      return {
        ...state,
        getDocumentsMasterData: action.payload,
      };
    case types.GET_DOCUMENTS_MASTERS_FAILURE:
      return {
        ...state,
        getDocumentsMasterData: [],
      };

    case types.GET_CURRENCY_MASTERS:
      return {
        ...state,
        getCurrencyMasterData: [],
      };
    case types.GET_CURRENCY_MASTERS_SUCCESS:
      return {
        ...state,
        getCurrencyMasterData: action.payload,
      };
    case types.GET_CURRENCY_MASTERS_FAILURE:
      return {
        ...state,
        getCurrencyMasterData: [],
      };

    case types.GET_INTERNAL_COMPANIES_MASTERS:
      return {
        ...state,
        getInternalCompaniesMasterData: [],
      };
    case types.GET_INTERNAL_COMPANIES_MASTERS_SUCCESS:
      return {
        ...state,
        getInternalCompaniesMasterData: action.payload,
      };
    case types.GET_INTERNAL_COMPANIES_MASTERS_FAILURE:
      return {
        ...state,
        getInternalCompaniesMasterData: [],
      };

    case types.GET_VENDORS_MASTERS:
      return {
        ...state,
        getVendorsMasterData: [],
      };
    case types.GET_VENDORS_MASTERS_SUCCESS:
      return {
        ...state,
        getVendorsMasterData: action.payload,
      };
    case types.GET_VENDORS_MASTERS_FAILURE:
      return {
        ...state,
        getVendorsMasterData: [],
      };

    case types.GET_BANKS_MASTERS:
      return {
        ...state,
        getBanksMasterData: [],
      };
    case types.GET_BANKS_MASTERS_SUCCESS:
      return {
        ...state,
        getBanksMasterData: action.payload,
      };
    case types.GET_BANKS_MASTERS_FAILURE:
      return {
        ...state,
        getBanksMasterData: [],
      };

    case types.GET_BANK_BRANCHES_MASTERS:
      return {
        ...state,
        getBranchesMasterData: [],
      };
    case types.GET_BANK_BRANCHES_MASTERS_SUCCESS:
      return {
        ...state,
        getBranchesMasterData: action.payload,
      };
    case types.GET_BANK_BRANCHES_MASTERS_FAILURE:
      return {
        ...state,
        getBranchesMasterData: [],
      };

    case types.GET_PINCODES_MASTERS:
      return {
        ...state,
        getPincodesMasterData: [],
      };
    case types.GET_PINCODES_MASTERS_SUCCESS:
      return {
        ...state,
        getPincodesMasterData: action.payload,
      };
    case types.GET_PINCODES_MASTERS_FAILURE:
      return {
        ...state,
        getPincodesMasterData: [],
      };

    case types.GET_STATES_MASTERS:
      return {
        ...state,
        getStatesMasterData: [],
      };
    case types.GET_STATES_MASTERS_SUCCESS:
      return {
        ...state,
        getStatesMasterData: action.payload,
      };
    case types.GET_STATES_MASTERS_FAILURE:
      return {
        ...state,
        getStatesMasterData: [],
      };

    case types.GET_MASTER_USERS_QUEUE_RECORDS_SUCCESSFULL:
      return {
        ...state,
        gettingUsersQueueRecords: false,
        usersQueueRecords: action.payload,
      };

    case types.GET_MASTER_USERS_QUEUE_RECORDS_FAILED:
      return {
        ...state,
        gettingUsersQueueRecords: false,
        usersQueueRecords: {},
      };

    case types.FILTER_USERS_QUEUE:
      return {
        ...state,
        filteringUsersQueue: true,
      };

    case types.FILTER_USERS_QUEUE_SUCCESSFULL:
      return {
        ...state,
        filteringUsersQueue: false,
        filteredUsersQueue: action.payload,
      };

    case types.FILTER_USERS_QUEUE_FAILED:
      return {
        ...state,
        filteringUsersQueue: false,
        filteredUsersQueue: null,
      };

    case types.GET_MASTER_PORTS_QUEUE_RECORDS_SUCCESSFULL:
      return {
        ...state,
        gettingPortsQueueRecords: false,
        portsQueueRecords: action.payload,
      };

    case types.GET_MASTER_PORTS_QUEUE_RECORDS_FAILED:
      return {
        ...state,
        gettingPortsQueueRecords: false,
        portsQueueRecords: {},
      };

    case types.FILTER_PORTS_QUEUE:
      return {
        ...state,
        filteringPortsQueue: true,
      };

    case types.FILTER_PORTS_QUEUE_SUCCESSFULL:
      return {
        ...state,
        filteringPortsQueue: false,
        filteredPortsQueue: action.payload,
      };

    case types.FILTER_PORTS_QUEUE_FAILED:
      return {
        ...state,
        filteringPortsQueue: false,
        filteredPortsQueue: null,
      };

    case types.CREATE_PORT_MASTER_SUCCESS:
      return {
        ...state,
        creatingPortMaster: false,
      };

    case types.CREATE_PORT_MASTER_FAILED:
      return {
        ...state,
        creatingPortMaster: false,
      };

    case types.ADD_NEW_COMMODITY_MASTERS:
      return {
        ...state,
        getPincodesMasterData: [],
      };
    case types.ADD_NEW_COMMODITY_MASTERS_SUCCESS:
      return {
        ...state,
        getPincodesMasterData: action.payload,
      };
    case types.ADD_NEW_COMMODITY_MASTERS_FAILURE:
      return {
        ...state,
        getPincodesMasterData: [],
      };
    case types.GET_DOCUMENT_MASTER_QUEUE_RECORDS_SUCCESSFULL:
      return {
        ...state,
        gettingDocumentMasterQueueRecords: false,
        documentMasterQueueRecords: action.payload,
      };

    case types.GET_DOCUMENT_MASTER_QUEUE_RECORDS_FAILED:
      return {
        ...state,
        gettingDocumentMasterQueueRecords: false,
        documentMasterQueueRecords: {},
      };

    case types.FILTER_DOCUMENT_MASTER_QUEUE:
      return {
        ...state,
        filteringDocumentMasterQueue: true,
      };

    case types.FILTER_DOCUMENT_MASTER_QUEUE_SUCCESSFULL:
      return {
        ...state,
        filteringDocumentMasterQueue: false,
        filteredDocumentMasterQueue: action.payload,
      };

    case types.FILTER_DOCUMENT_MASTER_QUEUE_FAILED:
      return {
        ...state,
        filteringDocumentMasterQueue: false,
        filteredDocumentMasterQueue: null,
      };

    case types.CREATE_DOCUMENT_MASTER_SUCCESS:
      return {
        ...state,
        creatingDocumentMaster: false,
      };

    case types.CREATE_DOCUMENT_MASTER_FAILED:
      return {
        ...state,
        creatingDocumentMaster: false,
      };

    case types.GET_MASTER_COUNTRY_QUEUE_RECORDS_SUCCESSFULL:
      return {
        ...state,
        gettingCountryQueueRecords: false,
        countryQueueRecords: action.payload,
      };

    case types.GET_MASTER_COUNTRY_QUEUE_RECORDS_FAILED:
      return {
        ...state,
        gettingCountryQueueRecords: false,
        countryQueueRecords: {},
      };

    case types.FILTER_COUNTRY_QUEUE:
      return {
        ...state,
        filteringCountryQueue: true,
      };

    case types.FILTER_COUNTRY_QUEUE_SUCCESSFULL:
      return {
        ...state,
        filteringCountryQueue: false,
        filteredCountryQueue: action.payload,
      };

    case types.FILTER_COUNTRY_QUEUE_FAILED:
      return {
        ...state,
        filteringCountryQueue: false,
        filteredCountryQueue: null,
      };

    case types.CREATE_COUNTRY_MASTER_SUCCESS:
      return {
        ...state,
        creatingCountryMaster: false,
      };

    case types.CREATE_COUNTRY_MASTER_FAILED:
      return {
        ...state,
        creatingCountryMaster: false,
      };

    case types.GET_MASTER_CURRENCY_QUEUE_RECORDS_SUCCESSFULL:
      return {
        ...state,
        gettingCurrencyQueueRecords: false,
        currencyQueueRecords: action.payload,
      };

    case types.GET_MASTER_CURRENCY_QUEUE_RECORDS_FAILED:
      return {
        ...state,
        gettingCurrencyQueueRecords: false,
        currencyQueueRecords: {},
      };

    case types.FILTER_CURRENCY_QUEUE:
      return {
        ...state,
        filteringCurrencyQueue: true,
      };

    case types.FILTER_CURRENCY_QUEUE_SUCCESSFULL:
      return {
        ...state,
        filteringCurrencyQueue: false,
        filteredCurrencyQueue: action.payload,
      };

    case types.FILTER_CURRENCY_QUEUE_FAILED:
      return {
        ...state,
        filteringCurrencyQueue: false,
        filteredCurrencyQueue: null,
      };

    case types.CREATE_CURRENCY_MASTER_SUCCESS:
      return {
        ...state,
        creatingCurrencyMaster: false,
      };

    case types.CREATE_CURRENCY_MASTER_FAILED:
      return {
        ...state,
        creatingCurrencyMaster: false,
      };

    case types.GET_MASTER_TDS_SECTION_QUEUE_RECORDS_SUCCESSFULL:
      return {
        ...state,
        gettingTDSSectionQueueRecords: false,
        TDSSectionQueueRecords: action.payload,
      };

    case types.GET_MASTER_TDS_SECTION_QUEUE_RECORDS_FAILED:
      return {
        ...state,
        gettingTDSSectionQueueRecords: false,
        TDSSectionQueueRecords: {},
      };

    case types.FILTER_TDS_SECTION_QUEUE:
      return {
        ...state,
        filteringTDSSectionQueue: true,
      };

    case types.FILTER_TDS_SECTION_QUEUE_SUCCESSFULL:
      return {
        ...state,
        filteringTDSSectionQueue: false,
        filteredTDSSectionQueue: action.payload,
      };

    case types.FILTER_TDS_SECTION_QUEUE_FAILED:
      return {
        ...state,
        filteringTDSSectionQueue: false,
        filteredTDSSectionQueue: null,
      };

    case types.CREATE_TDS_SECTION_MASTER_SUCCESS:
      return {
        ...state,
        creatingTDSSectionMaster: false,
      };

    case types.CREATE_TDS_SECTION_MASTER_FAILED:
      return {
        ...state,
        creatingTDSSectionMaster: false,
      };
    case types.GET_MASTER_SAC_QUEUE_RECORDS_SUCCESSFULL:
      return {
        ...state,
        gettingSACQueueRecords: false,
        SACQueueRecords: action.payload,
      };

    case types.GET_MASTER_SAC_QUEUE_RECORDS_FAILED:
      return {
        ...state,
        gettingSACQueueRecords: false,
        SACQueueRecords: {},
      };

    case types.FILTER_SAC_QUEUE:
      return {
        ...state,
        filteringSACQueue: true,
      };

    case types.FILTER_SAC_QUEUE_SUCCESSFULL:
      return {
        ...state,
        filteringSACQueue: false,
        filteredSACQueue: action.payload,
      };

    case types.FILTER_SAC_QUEUE_FAILED:
      return {
        ...state,
        filteringSACQueue: false,
        filteredSACQueue: null,
      };

    case types.CREATE_SAC_MASTER_SUCCESS:
      return {
        ...state,
        creatingSACMaster: false,
      };

    case types.CREATE_SAC_MASTER_FAILED:
      return {
        ...state,
        creatingSACMaster: false,
      };

    case types.GET_MASTER_IIAG_LEDGER_QUEUE_RECORDS_SUCCESSFULL:
      return {
        ...state,
        gettingIIAGLedgerQueueRecords: false,
        IIAGLedgerQueueRecords: action.payload,
      };

    case types.GET_MASTER_IIAG_LEDGER_QUEUE_RECORDS_FAILED:
      return {
        ...state,
        gettingIIAGLedgerQueueRecords: false,
        IIAGLedgerQueueRecords: {},
      };

    case types.FILTER_IIAG_LEDGER_QUEUE:
      return {
        ...state,
        filteringIIAGLedgerQueue: true,
      };

    case types.FILTER_IIAG_LEDGER_QUEUE_SUCCESSFULL:
      return {
        ...state,
        filteringIIAGLedgerQueue: false,
        filteredIIAGLedgerQueue: action.payload,
      };

    case types.FILTER_IIAG_LEDGER_QUEUE_FAILED:
      return {
        ...state,
        filteringIIAGLedgerQueue: false,
        filteredIIAGLedgerQueue: null,
      };

    case types.CREATE_IIAG_LEDGER_MASTER_SUCCESS:
      return {
        ...state,
        creatingIIAGLedgerMaster: false,
      };

    case types.CREATE_IIAG_LEDGER_MASTER_FAILED:
      return {
        ...state,
        creatingIIAGLedgerMaster: false,
      };
    case types.GET_ZIPCODES_MASTERS:
      return {
        ...state,
        zipCode: [],
      };
    case types.GET_ZIPCODES_MASTERS_SUCCESS:
      return {
        ...state,
        zipCode: action.payload,
      };
    case types.GET_ZIPCODES_MASTERS_FAILURE:
      return {
        ...state,
        zipCode: [],
      }
    case types.EDIT_PORT_TABLE_DATA_MASTER_SUCCESS:
      return {
        ...state,
        editPortTableDataMaster: false,
      };

    case types.EDIT_PORT_TABLE_DATA_MASTER_FAILED:
      return {
        ...state,
        editPortTableDataMaster: false,
      };

    case types.GET_MASTER_GONOGO_QUEUE_RECORDS_SUCCESSFULL:
      return {
        ...state,
        gettingGoNoGoQueueRecords: false,
        GoNoGoQueueRecords: action.payload,
      };

    case types.GET_MASTER_GONOGO_QUEUE_RECORDS_FAILED:
      return {
        ...state,
        gettingGoNoGoQueueRecords: false,
        GoNoGoQueueRecords: {},
      };

    case types.GET_MASTER_GONOGO_SINGLE_RECORD_SUCCESSFULL:
      return {
        ...state,
        gettingGoNoGoSingleRecord: false,
        GoNoGoSingleRecord: action.payload,
      };

    case types.GET_MASTER_GONOGO_SINGLE_RECORD_FAILED:
      return {
        ...state,
        gettingGoNoGoSingleRecord: false,
        GoNoGoSingleRecord: {},
      };

    case types.CREATE_GONOGO_MASTER_SUCCESS:
      return {
        ...state,
        creatingGoNoGoMaster: false,
      };

    case types.CREATE_GONOGO_MASTER_FAILED:
      return {
        ...state,
        creatingGoNoGoMaster: false,
      };

    case types.GET_MASTER_INTERNAL_COMPANIES_QUEUE_RECORDS_SUCCESSFULL:
      return {
        ...state,
        gettingInternalCompaniesQueueRecords: false,
        InternalCompaniesQueueRecords: action.payload,
      };

    case types.GET_MASTER_INTERNAL_COMPANIES_QUEUE_RECORDS_FAILED:
      return {
        ...state,
        gettingInternalCompaniesQueueRecords: false,
        InternalCompaniesQueueRecords: {},
      };

    case types.FILTER_INTERNAL_COMPANIES_QUEUE:
      return {
        ...state,
        filteringInternalCompaniesQueue: true,
      };

    case types.FILTER_INTERNAL_COMPANIES_QUEUE_SUCCESSFULL:
      return {
        ...state,
        filteringInternalCompaniesQueue: false,
        filteredInternalCompaniesQueue: action.payload,
      };

    case types.FILTER_INTERNAL_COMPANIES_QUEUE_FAILED:
      return {
        ...state,
        filteringInternalCompaniesQueue: false,
        filteredInternalCompaniesQueue: null,
      };

    case types.CREATE_INTERNAL_COMPANIES_MASTER_SUCCESS:
      return {
        ...state,
        creatingInternalCompaniesMaster: false,
      };

    case types.CREATE_INTERNAL_COMPANIES_MASTER_FAILED:
      return {
        ...state,
        creatingInternalCompaniesMaster: false,
      };
    case types.GET_ZIPCODES_MASTERS:
      return {
        ...state,
        zipCode: [],
      };
    case types.GET_ZIPCODES_MASTERS_SUCCESS:
      return {
        ...state,
        zipCode: action.payload,
      };
    case types.GET_ZIPCODES_MASTERS_FAILURE:
      return {
        ...state,
        zipCode: [],
      };

    default:
      return state;
  }
}

export default MastersReducer;
