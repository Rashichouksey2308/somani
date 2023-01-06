import * as types from './actionType';

const initialState = {
  getCountriesMasterData: [],
  getCommodityMasterData: [],
  getGonogoMasterData: [],
  getPortsMasterData: [],
  getCommoditiesMasterData: [],
  getDocumentsMasterData: [],
  getCurrencyMasterData: [],
  getInternalCompaniesMasterData: [],
  getVendorsMasterData: [],
  getBanksMasterData: [],
  getBranchesMasterData: [],
  getPincodesMasterData: [],
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


    default:
      return state;
  }
}

export default MastersReducer;
