import * as types from './actionType';
import Axios from 'axios';
import API from '../../utils/endpoints';
import Cookies from 'js-cookie';
import { handleErrorToast } from '@/utils/helpers/global';
import { toast } from 'react-toastify';
import router from 'next/router';
import { settingSidebar } from '../breadcrumb/action';
import { setIsLoading, setNotLoading } from '../Loaders/action';

function getMasterUsersQueueRecordsSuccess(payload) {
  return {
    type: types.GET_MASTER_USERS_QUEUE_RECORDS_SUCCESSFULL,
    payload,
  };
}

function getMasterUsersQueueRecordsFailed(payload = {}) {
  return {
    type: types.GET_MASTER_USERS_QUEUE_RECORDS_FAILED,
    payload,
  };
}
// Master getMastersCommodity Queue

function getMastersCommodity() {
  return {
    type: types.GET_COMMODITY_MASTERS,
  };
}

function getAllCommoditySuccess(payload) {
  return {
    type: types.GET_COMMODITY_MASTERS_SUCCESS,
    payload,
  };
}

function getAllCommodityFailed() {
  return {
    type: types.GET_COMMODITY_MASTERS_FAILURE,
  };
}

// Master Gonogo Queue
function getAllGonogo() {
  return {
    type: types.GET_GONOGO_MASTERS,
  };
}

function getAllGonogoSuccess(payload) {
  return {
    type: types.GET_GONOGO_MASTERS_SUCCESS,
    payload,
  };
}

function getAllGonogoFailed() {
  return {
    type: types.GET_GONOGO_MASTERS_FAILURE,
  };
}
function filterUsersQueueFailed() {
  return {
    type: types.FILTER_USERS_QUEUE_FAILED,
  };
}

function addNewCommodity() {
  return {
    type: types.ADD_NEW_COMMODITY_MASTERS,
  };
}

function addNewCommoditySuccess(payload) {
  return {
    type: types.ADD_NEW_COMMODITY_MASTERS_SUCCESS,
    payload,
  };
}

function addNewCommodityFailed() {
  return {
    type: types.ADD_NEW_COMMODITY_MASTERS_FAILURE,
  };
}

// Master Port Queue
function getMasterPortsQueueRecordsSuccess(payload) {
  return {
    type: types.GET_MASTER_PORTS_QUEUE_RECORDS_SUCCESSFULL,
    payload,
  };
}

function getMasterPortsQueueRecordsFailed(payload = {}) {
  return {
    type: types.GET_MASTER_PORTS_QUEUE_RECORDS_FAILED,
    payload,
  };
}

// ******** Search & Filter Ports Queue  ***********/////

function filterPortsQueue() {
  return {
    type: types.FILTER_PORTS_QUEUE,
  };
}

function filterPortsQueueSuccess(payload) {
  return {
    type: types.FILTER_PORTS_QUEUE_SUCCESSFULL,
    payload,
  };
}

function filterPortsQueueFailed() {
  return {
    type: types.FILTER_PORTS_QUEUE_FAILED,
  };
}

// ******** Port Master Add ******** //

function createPortMasterSuccess(payload) {
  return {
    type: types.CREATE_PORT_MASTER_SUCCESS,
    payload,
  };
}

function createPortMasterFailed(payload = {}) {
  return {
    type: types.CREATE_PORT_MASTER_FAILED,
    payload,
  };
}

// Document Master Queue
function getDocumentMasterQueueRecordsSuccess(payload) {
  return {
    type: types.GET_DOCUMENT_MASTER_QUEUE_RECORDS_SUCCESSFULL,
    payload,
  };
}

function getDocumentMasterQueueRecordsFailed(payload = {}) {
  return {
    type: types.GET_DOCUMENT_MASTER_QUEUE_RECORDS_FAILED,
    payload,
  };
}


// ******** Search & Filter Document Master Queue  ***********/////

function filterDocumentMasterQueue() {
  return {
    type: types.FILTER_DOCUMENT_MASTER_QUEUE,
  };
}

function filterDocumentMasterQueueSuccess(payload) {
  return {
    type: types.FILTER_DOCUMENT_MASTER_QUEUE_SUCCESSFULL,
    payload,
  };
}

function filterDocumentMasterQueueFailed() {
  return {
    type: types.FILTER_DOCUMENT_MASTER_QUEUE_FAILED,
  };
}


// ******** Port Master Add ******** //

function createDocumentMasterSuccess(payload) {
  return {
    type: types.CREATE_DOCUMENT_MASTER_SUCCESS,
    payload,
  };
}

function createDocumentMasterFailed(payload = {}) {
  return {
    type: types.CREATE_DOCUMENT_MASTER_FAILED,
    payload,
  };
}

// Master Country Queue
function getMasterCountryQueueRecordsSuccess(payload) {
  return {
    type: types.GET_MASTER_COUNTRY_QUEUE_RECORDS_SUCCESSFULL,
    payload,
  };
}

function getMasterCountryQueueRecordsFailed(payload = {}) {
  return {
    type: types.GET_MASTER_COUNTRY_QUEUE_RECORDS_FAILED,
    payload,
  };
}


// ******** Search & Filter Ports Queue  ***********/////

function filterCountryQueue() {
  return {
    type: types.FILTER_COUNTRY_QUEUE,
  };
}

function filterCountryQueueSuccess(payload) {
  return {
    type: types.FILTER_COUNTRY_QUEUE_SUCCESSFULL,
    payload,
  };
}

function filterCountryQueueFailed() {
  return {
    type: types.FILTER_COUNTRY_QUEUE_FAILED,
  };
}


// ******** Port Master Add ******** //

function createCountryMasterSuccess(payload) {
  return {
    type: types.CREATE_COUNTRY_MASTER_SUCCESS,
    payload,
  };
}

function createCountryMasterFailed(payload = {}) {
  return {
    type: types.CREATE_COUNTRY_MASTER_FAILED,
    payload,
  };
}


// ******** Master Currency Queue ***********///
function getMasterCurrencyQueueRecordsSuccess(payload) {
  return {
    type: types.GET_MASTER_CURRENCY_QUEUE_RECORDS_SUCCESSFULL,
    payload,
  };
}

function getMasterCurrencyQueueRecordsFailed(payload = {}) {
  return {
    type: types.GET_MASTER_CURRENCY_QUEUE_RECORDS_FAILED,
    payload,
  };
}


// ******** Search & Filter Currency Queue  ***********/////

function filterCurrencyQueue() {
  return {
    type: types.FILTER_CURRENCY_QUEUE,
  };
}

function filterCurrencyQueueSuccess(payload) {
  return {
    type: types.FILTER_CURRENCY_QUEUE_SUCCESSFULL,
    payload,
  };
}

function filterCurrencyQueueFailed() {
  return {
    type: types.FILTER_CURRENCY_QUEUE_FAILED,
  };
}

// ******** Currency Master Add ******** //

function createCurrencyMasterSuccess(payload) {
  return {
    type: types.CREATE_CURRENCY_MASTER_SUCCESS,
    payload,
  };
}

function createCurrencyMasterFailed(payload = {}) {
  return {
    type: types.CREATE_CURRENCY_MASTER_FAILED,
    payload,
  };
}

// ******** Master SAC Queue ***********///
function getMasterSACQueueRecordsSuccess(payload) {
  return {
    type: types.GET_MASTER_SAC_QUEUE_RECORDS_SUCCESSFULL,
    payload,
  };
}

function getMasterSACQueueRecordsFailed(payload = {}) {
  return {
    type: types.GET_MASTER_SAC_QUEUE_RECORDS_FAILED,
    payload,
  };
}


// ******** Search & Filter SAC Queue  ***********/////

function filterSACQueue() {
  return {
    type: types.FILTER_SAC_QUEUE,
  };
}

function filterSACQueueSuccess(payload) {
  return {
    type: types.FILTER_SAC_QUEUE_SUCCESSFULL,
    payload,
  };
}

function filterSACQueueFailed() {
  return {
    type: types.FILTER_SAC_QUEUE_FAILED,
  };
}

// ******** SAC Master Add ******** //

function createSACMasterSuccess(payload) {
  return {
    type: types.CREATE_SAC_MASTER_SUCCESS,
    payload,
  };
}

function createSACMasterFailed(payload = {}) {
  return {
    type: types.CREATE_SAC_MASTER_FAILED,
    payload,
  };
}

// ******** Master TDSSection Queue ***********///
function getMasterTDSSectionQueueRecordsSuccess(payload) {
  return {
    type: types.GET_MASTER_TDS_SECTION_QUEUE_RECORDS_SUCCESSFULL,
    payload,
  };
}
function getMasterTDSSectionQueueRecordsFailed(payload = {}) {
  return {
    type: types.GET_MASTER_TDS_SECTION_QUEUE_RECORDS_FAILED,
    payload,
  };
}
// ******** Search & Filter TDSSection Queue  ***********/////
function filterTDSSectionQueue() {
  return {
    type: types.FILTER_TDS_SECTION_QUEUE,
  };
}
function filterTDSSectionQueueSuccess(payload) {
  return {
    type: types.FILTER_TDS_SECTION_QUEUE_SUCCESSFULL,
    payload,
  };
}
function filterTDSSectionQueueFailed() {
  return {
    type: types.FILTER_TDS_SECTION_QUEUE_FAILED,
  };
}
// ******** TDSSection Master Add ******** //
function createTDSSectionMasterSuccess(payload) {
  return {
    type: types.CREATE_TDS_SECTION_MASTER_SUCCESS,
    payload,
  };
}
function createTDSSectionMasterFailed(payload = {}) {
  return {
    type: types.CREATE_TDS_SECTION_MASTER_FAILED,
    payload,
  };
}

// ******** Master IIAGLedger Queue ***********///
function getMasterIIAGLedgerQueueRecordsSuccess(payload) {
  return {
    type: types.GET_MASTER_IIAG_LEDGER_QUEUE_RECORDS_SUCCESSFULL,
    payload,
  };
}

function getMasterIIAGLedgerQueueRecordsFailed(payload = {}) {
  return {
    type: types.GET_MASTER_IIAG_LEDGER_QUEUE_RECORDS_FAILED,
    payload,
  };
}


// ******** Search & Filter IIAGLedger Queue  ***********/////

function filterIIAGLedgerQueue() {
  return {
    type: types.FILTER_IIAG_LEDGER_QUEUE,
  };
}

function filterIIAGLedgerQueueSuccess(payload) {
  return {
    type: types.FILTER_IIAG_LEDGER_QUEUE_SUCCESSFULL,
    payload,
  };
}

function filterIIAGLedgerQueueFailed() {
  return {
    type: types.FILTER_IIAG_LEDGER_QUEUE_FAILED,
  };
}
// ******** Master GoNoGo Queue ***********///
function getMasterGoNoGoQueueRecordsSuccess(payload) {
  return {
    type: types.GET_MASTER_GONOGO_QUEUE_RECORDS_SUCCESSFULL,
    payload,
  };
}

function getMasterGoNoGoQueueRecordsFailed(payload = {}) {
  return {
    type: types.GET_MASTER_GONOGO_QUEUE_RECORDS_FAILED,
    payload,
  };
}


// ******** Master GoNoGo Single Record  ***********/////

function filterGoNoGoQueue() {
  return {
    type: types.FILTER_GONOGO_QUEUE,
  };
}

function getMasterGoNoGoSingleRecordSuccess(payload) {
  return {
    type: types.GET_MASTER_GONOGO_SINGLE_RECORD_SUCCESSFULL,
    payload,
  };
}

function getMasterGoNoGoSingleRecordFailed() {
  return {
    type: types.GET_MASTER_GONOGO_SINGLE_RECORD_FAILED,
  };
}

// ******** GoNoGo Master Add ******** //

function createGoNoGoMasterSuccess(payload) {
  return {
    type: types.CREATE_GONOGO_MASTER_SUCCESS,
    payload,
  };
}

function createGoNoGoMasterFailed(payload = {}) {
  return {
    type: types.CREATE_GONOGO_MASTER_FAILED,
    payload,
  };
}
// ******** IIAGLedger Master Add ******** //

function createIIAGLedgerMasterSuccess(payload) {
  return {
    type: types.CREATE_IIAG_LEDGER_MASTER_SUCCESS,
    payload,
  };
}

function createIIAGLedgerMasterFailed(payload = {}) {
  return {
    type: types.CREATE_IIAG_LEDGER_MASTER_FAILED,
    payload,
  };
}

// ******** Master InternalCompanies Queue ***********///
function getMasterInternalCompaniesQueueRecordsSuccess(payload) {
  return {
    type: types.GET_MASTER_INTERNAL_COMPANIES_QUEUE_RECORDS_SUCCESSFULL,
    payload,
  };
}

function getMasterInternalCompaniesQueueRecordsFailed(payload = {}) {
  return {
    type: types.GET_MASTER_INTERNAL_COMPANIES_QUEUE_RECORDS_FAILED,
    payload,
  };
}


// ******** Search & Filter InternalCompanies Queue  ***********/////

function filterInternalCompaniesQueue() {
  return {
    type: types.FILTER_INTERNAL_COMPANIES_QUEUE,
  };
}

function filterInternalCompaniesQueueSuccess(payload) {
  return {
    type: types.FILTER_INTERNAL_COMPANIES_QUEUE_SUCCESSFULL,
    payload,
  };
}

function filterInternalCompaniesQueueFailed() {
  return {
    type: types.FILTER_INTERNAL_COMPANIES_QUEUE_FAILED,
  };
}

// ******** InternalCompanies Master Add ******** //

function createInternalCompaniesMasterSuccess(payload) {
  return {
    type: types.CREATE_INTERNAL_COMPANIES_MASTER_SUCCESS,
    payload,
  };
}

function createInternalCompaniesMasterFailed(payload = {}) {
  return {
    type: types.CREATE_INTERNAL_COMPANIES_MASTER_FAILED,
    payload,
  };
}

export const getCountries = (payload) => async (dispatch, getState, api) => {
  const cookie = Cookies.get('SOMANI');
  const decodedString = Buffer.from(cookie, 'base64').toString('ascii');
  const [userId, refreshToken, jwtAccessToken] = decodedString.split('#');

  dispatch({
    type: types.GET_COUNTRIES_MASTERS,
  });
  try {
    Axios.get(`${API.masterBaseUrl}${API.countriesMaster}`).then((response) => {
      if (response.status === 200) {
        dispatch({
          type: types.GET_COUNTRIES_MASTERS_SUCCESS,
          payload: response.data,
        });
      } else {
        dispatch({
          type: types.GET_COUNTRIES_MASTERS_FAILURE,
          payload: response.data,
        });
      }
    });
  } catch (error) {
    console.log(error);
  }
};

export const getState = (payload) => async (dispatch, getState, api) => {
  const cookie = Cookies.get('SOMANI');
  const decodedString = Buffer.from(cookie, 'base64').toString('ascii');
  const [userId, refreshToken, jwtAccessToken] = decodedString.split('#');

  const headers = {
    authorization: jwtAccessToken,
    Cache: 'no-cache',
    'Access-Control-Allow-Origin': '*',
  };

  dispatch({
    type: types.GET_STATE_MASTERS,
  });
  try {
    await Axios.get(`${API.corebaseUrl}${API.getState}${payload || ''}`, {
      headers: headers,
    })
      .then((response) => {
        if (response.status === 200) {
          dispatch({
            type: types.GET_STATE_MASTERS_SUCCESS,
            payload: response.data,
          });
        } else {
          dispatch({
            type: types.GET_STATE_MASTERS_FAILURE,
            payload: response.data,
          });
        }
      })
      .catch((error) => {
        handleErrorToast('COULD NOT GET A RESPONSE');
      });
  } catch (error) {
    handleErrorToast('COULD NOT GET STATE');
  }
};

export const getMastersPincodes = (payload) => async (dispatch, getState, api) => {
  const cookie = Cookies.get('SOMANI');
  const decodedString = Buffer.from(cookie, 'base64').toString('ascii');
  const [userId, refreshToken, jwtAccessToken] = decodedString.split('#');

  const headers = {
    authorization: jwtAccessToken,
    Cache: 'no-cache',
    'Access-Control-Allow-Origin': '*',
  };

  dispatch({
    type: types.GET_MASTERS_PINCODE,
  });
  try {
    await Axios.get(`${API.corebaseUrl}${API.getMastersPincodes}${payload || ''}`, {
      headers: headers,
    })
      .then((response) => {
        if (response.status === 200) {
          dispatch({
            type: types.GET_MASTERS_PINCODE_SUCCESS,
            payload: response.data.data,
          });
        } else {
          dispatch({
            type: types.GET_MASTERS_PINCODE_FAILURE,
            payload: response.data,
          });
        }
      })
      .catch((error) => {
        handleErrorToast('COULD NOT GET A RESPONSE');
      });
  } catch (error) {
    handleErrorToast('COULD NOT GET PINCODES');
  }
};

export const GetMastersCommodity = () => async (dispatch, getState, api) => {
  try {
    dispatch(setIsLoading());
    const cookie = Cookies.get('SOMANI');
    const decodedString = Buffer.from(cookie, 'base64').toString('ascii');
    const [userId, refreshToken, jwtAccessToken] = decodedString.split('#');
    const headers = {
      authorization: jwtAccessToken,
      Cache: 'no-cache',
      'Access-Control-Allow-Origin': '*',
    };
    Axios.get(`${API.corebaseUrl}/${API.getAllCommodity}`, {
      headers: headers,
    }).then((response) => {
      if (response.data.code === 200) {
        dispatch(getAllCommoditySuccess(response.data.data.data));
        dispatch(setNotLoading());
      } else {
        dispatch(getAllCommodityFailed(response.data.data));
        const toastMessage = 'COULD NOT PROCESS YOUR REQUEST';
        if (!toast.isActive(toastMessage.toUpperCase())) {
          toast.error(toastMessage.toUpperCase(), { toastId: toastMessage });
        }
        dispatch(setNotLoading());
      }
    });
  } catch (error) {
    dispatch(getAllCommodityFailed());
    dispatch(setNotLoading());
    const toastMessage = 'GET MASTER COMMODITY API FAILED';
    if (!toast.isActive(toastMessage.toUpperCase())) {
      toast.error(toastMessage.toUpperCase(), { toastId: toastMessage });
    }
  }
};
export const GetAllGonogo = () => async (dispatch, getState, api) => {
  try {
    dispatch(setIsLoading());
    const cookie = Cookies.get('SOMANI');
    const decodedString = Buffer.from(cookie, 'base64').toString('ascii');
    const [userId, refreshToken, jwtAccessToken] = decodedString.split('#');
    const headers = {
      authorization: jwtAccessToken,
      Cache: 'no-cache',
      'Access-Control-Allow-Origin': '*',
    };
    Axios.get(`${API.corebaseUrl}/${API.getAllGonogo}`, {
      headers: headers,
    }).then((response) => {
      if (response.data.code === 200) {
        dispatch(getAllGonogoSuccess(response.data.data.data));
        dispatch(setNotLoading());
      } else {
        dispatch(getAllGonogoFailed(response.data.data));
        const toastMessage = 'COULD NOT PROCESS YOUR REQUEST';
        if (!toast.isActive(toastMessage.toUpperCase())) {
          toast.error(toastMessage.toUpperCase(), { toastId: toastMessage });
        }
        dispatch(setNotLoading());
      }
    });
  } catch (error) {
    dispatch(getAllGonogoFailed());
    dispatch(setNotLoading());
    const toastMessage = 'GET MASTER COMMODITY API FAILED';
    if (!toast.isActive(toastMessage.toUpperCase())) {
      toast.error(toastMessage.toUpperCase(), { toastId: toastMessage });
    }
  }
};
export const AddNewCommodity = (payload) => async (dispatch, getState, api) => {
  try {
    dispatch(setIsLoading());
    const cookie = Cookies.get('SOMANI');
    const decodedString = Buffer.from(cookie, 'base64').toString('ascii');
    const [userId, refreshToken, jwtAccessToken] = decodedString.split('#');
    const headers = {
      authorization: jwtAccessToken,
      Cache: 'no-cache',
      'Access-Control-Allow-Origin': '*',
    };
    Axios.post(`${API.corebaseUrl}${API.addNewCommodity}`, payload, {
      headers: headers,
    }).then((response) => {
      if (response.data.code === 200) {
        dispatch(addNewCommoditySuccess(response.data));
        dispatch(setNotLoading());
      } else {
        dispatch(addNewCommodityFailed(response.data));
        const toastMessage = 'COULD NOT PROCESS YOUR REQUEST';
        if (!toast.isActive(toastMessage.toUpperCase())) {
          toast.error(toastMessage.toUpperCase(), { toastId: toastMessage });
        }
        dispatch(setNotLoading());
      }
    });
  } catch (error) {
    dispatch(getAllGonogoFailed());
    dispatch(setNotLoading());
    const toastMessage = 'GET MASTER COMMODITY API FAILED';
    if (!toast.isActive(toastMessage.toUpperCase())) {
      toast.error(toastMessage.toUpperCase(), { toastId: toastMessage });
    }
  }
};

export const getPorts = (payload) => async (dispatch, getState, api) => {
  const cookie = Cookies.get('SOMANI');
  const decodedString = Buffer.from(cookie, 'base64').toString('ascii');
  const [userId, refreshToken, jwtAccessToken] = decodedString.split('#');

  const headers = {
    authorization: jwtAccessToken,
    Cache: 'no-cache',
    'Access-Control-Allow-Origin': '*',
  };

  dispatch({
    type: types.GET_PORTS_MASTERS,
  });
  try {
    await Axios.get(`${API.corebaseUrl}${API.portsMaster}`, {
      headers: headers,
    }).then((response) => {
      if (response.status === 200) {
        dispatch({
          type: types.GET_PORTS_MASTERS_SUCCESS,
          payload: response.data.data.data,
        });
      } else {
        dispatch({
          type: types.GET_PORTS_MASTERS_FAILURE,
          payload: response.data.data.data,
        });
      }
    });
  } catch (error) {
    console.log(error);
  }
};

export const getCommodities = (payload) => async (dispatch, getState, api) => {
  const cookie = Cookies.get('SOMANI');
  const decodedString = Buffer.from(cookie, 'base64').toString('ascii');
  const [userId, refreshToken, jwtAccessToken] = decodedString.split('#');
  const headers = {
    authorization: jwtAccessToken,
    Cache: 'no-cache',
    'Access-Control-Allow-Origin': '*',
  };
  dispatch({
    type: types.GET_COMMODITIES_MASTERS,
  });
  try {
    await Axios.get(`${API.corebaseUrl}${API.commoditiesMaster}`, {
      headers: headers,
    }).then((response) => {
      if (response.status === 200) {
        dispatch({
          type: types.GET_COMMODITIES_MASTERS_SUCCESS,
          payload: response.data.data.data,
        });
      } else {
        dispatch({
          type: types.GET_COMMODITIES_MASTERS_FAILURE,
          payload: response.data.data.data,
        });
      }
    });
  } catch (error) {
    console.log(error);
  }
};

export const getDocuments = (payload) => async (dispatch, getState, api) => {
  const cookie = Cookies.get('SOMANI');
  const decodedString = Buffer.from(cookie, 'base64').toString('ascii');
  const [userId, refreshToken, jwtAccessToken] = decodedString.split('#');

  const headers = {
    authorization: jwtAccessToken,
    Cache: 'no-cache',
    'Access-Control-Allow-Origin': '*',
  };
  dispatch({
    type: types.GET_DOCUMENTS_MASTERS,
  });
  try {
    await Axios.get(`${API.corebaseUrl}${API.documentsMaster}`, {
      headers: headers,
    }).then((response) => {
      if (response.status === 200) {
        dispatch({
          type: types.GET_DOCUMENTS_MASTERS_SUCCESS,
          payload: response.data.data.data,
        });
      } else {
        dispatch({
          type: types.GET_DOCUMENTS_MASTERS_FAILURE,
          payload: response.data.data.data,
        });
      }
    });
  } catch (error) {
    console.log(error);
  }
};

export const getCurrency = (payload) => async (dispatch, getState, api) => {
  const cookie = Cookies.get('SOMANI');
  const decodedString = Buffer.from(cookie, 'base64').toString('ascii');
  const [userId, refreshToken, jwtAccessToken] = decodedString.split('#');
  const headers = {
    authorization: jwtAccessToken,
    Cache: 'no-cache',
    'Access-Control-Allow-Origin': '*',
  };

  dispatch({
    type: types.GET_CURRENCY_MASTERS,
  });
  try {
    await Axios.get(`${API.corebaseUrl}${API.currencyMaster}`, {
      headers: headers,
    }).then((response) => {
      if (response.status === 200) {
        dispatch({
          type: types.GET_CURRENCY_MASTERS_SUCCESS,
          payload: response.data.data.data,
        });
      } else {
        dispatch({
          type: types.GET_CURRENCY_MASTERS_FAILURE,
          payload: response.data.data.data,
        });
      }
    });
  } catch (error) {
    console.log(error);
  }
};

export const getInternalCompanies = (payload) => async (dispatch, getState, api) => {
  const cookie = Cookies.get('SOMANI');
  const decodedString = Buffer.from(cookie, 'base64').toString('ascii');
  const [userId, refreshToken, jwtAccessToken] = decodedString.split('#');
  const headers = {
    authorization: jwtAccessToken,
    Cache: 'no-cache',
    'Access-Control-Allow-Origin': '*',
  };

  dispatch({
    type: types.GET_INTERNAL_COMPANIES_MASTERS,
  });
  try {
    await Axios.get(`${API.corebaseUrl}${API.internalCompaniesMaster}`, {
      headers: headers,
    }).then((response) => {
      if (response.status === 200) {
        dispatch({
          type: types.GET_INTERNAL_COMPANIES_MASTERS_SUCCESS,
          payload: response.data.data.data,
        });
      } else {
        dispatch({
          type: types.GET_INTERNAL_COMPANIES_MASTERS_FAILURE,
          payload: response.data.data.data,
        });
      }
    });
  } catch (error) {
    console.log(error);
  }
};

export const getVendors = (payload) => async (dispatch, getState, api) => {
  const cookie = Cookies.get('SOMANI');
  const decodedString = Buffer.from(cookie, 'base64').toString('ascii');
  const [userId, refreshToken, jwtAccessToken] = decodedString.split('#');
  const headers = {
    authorization: jwtAccessToken,
    Cache: 'no-cache',
    'Access-Control-Allow-Origin': '*',
  };
  dispatch({
    type: types.GET_VENDORS_MASTERS,
  });
  try {
    await Axios.get(`${API.corebaseUrl}${API.vendorsMaster}`, {
      headers: headers,
    }).then((response) => {
      if (response.status === 200) {
        dispatch({
          type: types.GET_VENDORS_MASTERS_SUCCESS,
          payload: response.data.data.data,
        });
      } else {
        dispatch({
          type: types.GET_VENDORS_MASTERS_FAILURE,
          payload: response.data.data.data,
        });
      }
    });
  } catch (error) {
    console.log(error);
  }
};

export const getBanks = (payload) => async (dispatch, getState, api) => {
  const cookie = Cookies.get('SOMANI');
  const decodedString = Buffer.from(cookie, 'base64').toString('ascii');
  const [userId, refreshToken, jwtAccessToken] = decodedString.split('#');

  dispatch({
    type: types.GET_BANKS_MASTERS,
  });
  try {
    await Axios.get(`${API.corebaseUrl}${API.banksMaster}`).then((response) => {
      if (response.status === 200) {
        dispatch({
          type: types.GET_BANKS_MASTERS_SUCCESS,
          payload: response.data,
        });
      } else {
        dispatch({
          type: types.GET_BANKS_MASTERS_FAILURE,
          payload: response.data,
        });
      }
    });
  } catch (error) {
    console.log(error);
  }
};

export const getBranches = (payload) => async (dispatch, getState, api) => {
  const cookie = Cookies.get('SOMANI');
  const decodedString = Buffer.from(cookie, 'base64').toString('ascii');
  const [userId, refreshToken, jwtAccessToken] = decodedString.split('#');

  dispatch({
    type: types.GET_BANK_BRANCHES_MASTERS,
  });
  try {
    await Axios.get(`${API.corebaseUrl}${API.bankBranchesMaster}${payload}.json`).then((response) => {
      if (response.status === 200) {
        dispatch({
          type: types.GET_BANK_BRANCHES_MASTERS_SUCCESS,
          payload: response.data,
        });
      } else {
        dispatch({
          type: types.GET_BANK_BRANCHES_MASTERS_FAILURE,
          payload: response.data,
        });
      }
    });
  } catch (error) {
    console.log(error);
  }
};

export const getPincodes = (payload) => async (dispatch, getState, api) => {
  const cookie = Cookies.get('SOMANI');
  const decodedString = Buffer.from(cookie, 'base64').toString('ascii');
  const [userId, refreshToken, jwtAccessToken] = decodedString.split('#');

  dispatch({
    type: types.GET_PINCODES_MASTERS,
  });
  try {
    await Axios.get(`${API.masterBaseUrl}${API.pincodesMaster}${payload}.json`).then((response) => {
      if (response.status === 200) {
        dispatch({
          type: types.GET_PINCODES_MASTERS_SUCCESS,
          payload: response.data,
        });
      } else {
        dispatch({
          type: types.GET_PINCODES_MASTERS_SUCCESS,
          payload: [],
        });
      }
    });
  } catch (error) {
    dispatch({
      type: types.GET_PINCODES_MASTERS_SUCCESS,
      payload: [],
    });
  }
};

export const getAllStates = (payload) => async (dispatch, getState, api) => {
  dispatch(setIsLoading());
  const cookie = Cookies.get('SOMANI');
  const decodedString = Buffer.from(cookie, 'base64').toString('ascii');
  const [, , jwtAccessToken] = decodedString.split('#');
  const headers = {
    authorization: jwtAccessToken,
    Cache: 'no-cache',
    'Access-Control-Allow-Origin': '*',
  };

  dispatch({
    type: types.GET_STATES_MASTERS,
  });
  try {
    Axios.get(`${API.corebaseUrl}${API.getAllStates}`, {
      headers: headers,
    }).then((response) => {
      if (response.status === 200) {
        dispatch(setNotLoading());
        dispatch({
          type: types.GET_STATES_MASTERS_SUCCESS,
          payload: response.data,
        });
      } else {
        dispatch({
          type: types.GET_STATES_MASTERS_SUCCESS,
          payload: [],
        });
        dispatch(setNotLoading());
      }
    });
  } catch (error) {
    dispatch({
      type: types.GET_STATES_MASTERS_SUCCESS,
      payload: [],
    });
    dispatch(setNotLoading());
  }
};

export const GetMasterUsersQueueRecords = (payload) => async (dispatch, getState, api) => {
  dispatch(setIsLoading());

  const cookie = Cookies.get('SOMANI');
  const decodedString = Buffer.from(cookie, 'base64').toString('ascii');

  const [, , jwtAccessToken] = decodedString.split('#');
  const headers = {
    authorization: jwtAccessToken,
    Cache: 'no-cache',
    'Access-Control-Allow-Origin': '*',
  };
  try {
    Axios.get(`${API.corebaseUrl}${API.getMasterUsersQueueRecords}${payload}`, {
      headers: headers,
    }).then((response) => {
      if (response.data.code === 200) {
        dispatch(getMasterUsersQueueRecordsSuccess(response?.data?.data));

        dispatch(setNotLoading());
      } else {
        dispatch(getMasterUsersQueueRecordsFailed(response.data.data));
        const toastMessage = 'Could not fetch Inspection Records';
        if (!toast.isActive(toastMessage.toUpperCase())) {
          toast.error(toastMessage.toUpperCase(), { toastId: toastMessage });
        }
        dispatch(setNotLoading());
      }
    });
  } catch (error) {
    dispatch(getMasterUsersQueueRecordsFailed());
    dispatch(setNotLoading());
  }
};

export const FilterUsersQueue = (payload) => async (dispatch, getState, api) => {
  dispatch(setIsLoading());
  const cookie = Cookies.get('SOMANI');
  const decodedString = Buffer.from(cookie, 'base64').toString('ascii');

  const [userId, refreshToken, jwtAccessToken] = decodedString.split('#');
  const headers = { authorization: jwtAccessToken };
  try {
    dispatch(filterUsersQueue());
    Axios.get(`${API.corebaseUrl}${API.filterUsersQueue}?${payload}`, {
      headers: headers,
    }).then((response) => {
      if (response.data.code === 200) {
        dispatch(filterUsersQueueSuccess(response.data));
        dispatch(setNotLoading());
      } else {
        dispatch(filterUsersQueueFailed(response.data));
        const toastMessage = 'Search Users Queue request Failed';
        if (!toast.isActive(toastMessage.toUpperCase())) {
          toast.error(toastMessage.toUpperCase(), { toastId: toastMessage });
        }
        dispatch(setNotLoading());
      }
    });
  } catch (error) {
    dispatch(filterUsersQueueFailed());
    const toastMessage = 'Search Leads request Failed';
    if (!toast.isActive(toastMessage.toUpperCase())) {
      toast.error(toastMessage.toUpperCase(), { toastId: toastMessage });
    }
    dispatch(setNotLoading());
  }
};

export const GetMasterPortsQueueRecords = (payload) => async (dispatch, getState, api) => {
  dispatch(setIsLoading());

  const cookie = Cookies.get('SOMANI');
  const decodedString = Buffer.from(cookie, 'base64').toString('ascii');

  const [, , jwtAccessToken] = decodedString.split('#');
  const headers = {
    authorization: jwtAccessToken,
    Cache: 'no-cache',
    'Access-Control-Allow-Origin': '*',
  };
  try {
    Axios.get(`${API.corebaseUrl}${API.getMasterPortsQueueRecords}${payload}`, {
      headers: headers,
    }).then((response) => {
      if (response.data.code === 200) {
        dispatch(getMasterPortsQueueRecordsSuccess(response?.data?.data));

        dispatch(setNotLoading());
      } else {
        dispatch(getMasterPortsQueueRecordsFailed(response.data.data));
        const toastMessage = 'Could not fetch Port Records';
        if (!toast.isActive(toastMessage.toUpperCase())) {
          toast.error(toastMessage.toUpperCase(), { toastId: toastMessage });
        }
        dispatch(setNotLoading());
      }
    });
  } catch (error) {
    dispatch(getMasterPortsQueueRecordsFailed());
    dispatch(setNotLoading());
  }
};

export const FilterPortsQueue = (payload) => async (dispatch, getState, api) => {
  dispatch(setIsLoading());
  const cookie = Cookies.get('SOMANI');
  const decodedString = Buffer.from(cookie, 'base64').toString('ascii');

  const [userId, refreshToken, jwtAccessToken] = decodedString.split('#');
  const headers = { authorization: jwtAccessToken };
  try {
    dispatch(filterPortsQueue());
    Axios.get(`${API.corebaseUrl}${API.filterPortsQueue}?${payload}`, {
      headers: headers,
    }).then((response) => {
      if (response.data.code === 200) {
        dispatch(filterPortsQueueSuccess(response.data));
        dispatch(setNotLoading());
      } else {
        dispatch(filterPortsQueueFailed(response.data));
        const toastMessage = 'Search Ports Queue request Failed';
        if (!toast.isActive(toastMessage.toUpperCase())) {
          toast.error(toastMessage.toUpperCase(), { toastId: toastMessage });
        }
        dispatch(setNotLoading());
      }
    });
  } catch (error) {
    dispatch(filterPortsQueueFailed());
    const toastMessage = 'Search Ports request Failed';
    if (!toast.isActive(toastMessage.toUpperCase())) {
      toast.error(toastMessage.toUpperCase(), { toastId: toastMessage });
    }
    dispatch(setNotLoading());
  }
};

export const CreatePortMaster = (payload) => async (dispatch, getState, api) => {
  try {
    dispatch(setIsLoading());
    let cookie = Cookies.get('SOMANI');
    const decodedString = Buffer.from(cookie, 'base64').toString('ascii');

    let [, , jwtAccessToken] = decodedString.split('#');
    let headers = { authorization: jwtAccessToken, Cache: 'no-cache' };

    let response = await Axios.post(`${API.corebaseUrl}${API.createPortMaster}`, payload, {
      headers: headers,
    });
    if (response.data.code === 200) {
      dispatch(createPortMasterSuccess(response.data.data));
      let toastMessage = 'PORT ADDED SUCCESSFULLY';
      if (!toast.isActive(toastMessage.toUpperCase())) {
        toast.success(toastMessage.toUpperCase(), { toastId: toastMessage });
      }
      dispatch(setNotLoading());
    } else {
      dispatch(createPortMasterFailed(response.data.data));
      let toastMessage = 'COULD NOT PROCESS YOUR REQUEST AT THIS TIME';
      if (!toast.isActive(toastMessage.toUpperCase())) {
        toast.error(toastMessage.toUpperCase(), { toastId: toastMessage });
      }
      dispatch(setNotLoading());
    }
  } catch (error) {
    dispatch(createPortMasterFailed());

    let toastMessage = 'COULD NOT ADD PORT DETAILS';
    if (!toast.isActive(toastMessage.toUpperCase())) {
      toast.error(toastMessage.toUpperCase(), { toastId: toastMessage });
    }
    dispatch(setNotLoading());
  }
};

export const GetDocumentMasterQueueRecords = (payload) => async (dispatch, getState, api) => {
  dispatch(setIsLoading());

  const cookie = Cookies.get('SOMANI');
  const decodedString = Buffer.from(cookie, 'base64').toString('ascii');

  const [, , jwtAccessToken] = decodedString.split('#');
  const headers = {
    authorization: jwtAccessToken,
    Cache: 'no-cache',
    'Access-Control-Allow-Origin': '*',
  };
  try {
    Axios.get(`${API.corebaseUrl}${API.getDocumentMasterQueueRecords}${payload}`, {
      headers: headers,
    }).then((response) => {
      if (response.data.code === 200) {
        dispatch(getDocumentMasterQueueRecordsSuccess(response?.data?.data));

        dispatch(setNotLoading());
      } else {
        dispatch(getDocumentMasterQueueRecordsFailed(response.data.data));
        const toastMessage = 'Could not fetch Document Master Records';
        if (!toast.isActive(toastMessage.toUpperCase())) {
          toast.error(toastMessage.toUpperCase(), { toastId: toastMessage });
        }
        dispatch(setNotLoading());
      }
    });
  } catch (error) {
    dispatch(getDocumentMasterQueueRecordsFailed());
    dispatch(setNotLoading());
  }
};

export const FilterDocumentMasterQueue = (payload) => async (dispatch, getState, api) => {
  dispatch(setIsLoading());
  const cookie = Cookies.get('SOMANI');
  const decodedString = Buffer.from(cookie, 'base64').toString('ascii');

  const [userId, refreshToken, jwtAccessToken] = decodedString.split('#');
  const headers = { authorization: jwtAccessToken };
  try {
    dispatch(filterDocumentMasterQueue());
    Axios.get(`${API.corebaseUrl}${API.filterDocumentMasterQueue}?${payload}`, {
      headers: headers,
    }).then((response) => {
      if (response.data.code === 200) {
        dispatch(filterDocumentMasterQueueSuccess(response.data));
        dispatch(setNotLoading());
      } else {
        dispatch(filterDocumentMasterQueueFailed(response.data));
        const toastMessage = 'Search Document Master Queue request Failed';
        if (!toast.isActive(toastMessage.toUpperCase())) {
          toast.error(toastMessage.toUpperCase(), { toastId: toastMessage });
        }
        dispatch(setNotLoading());
      }
    });
  } catch (error) {
    dispatch(filterDocumentMasterQueueFailed());
    const toastMessage = 'Search Document Master request Failed';
    if (!toast.isActive(toastMessage.toUpperCase())) {
      toast.error(toastMessage.toUpperCase(), { toastId: toastMessage });
    }
    dispatch(setNotLoading());
  }
};

export const CreateDocumentMaster = (payload) => async (dispatch, getState, api) => {
  try {
    dispatch(setIsLoading());
    let cookie = Cookies.get('SOMANI');
    const decodedString = Buffer.from(cookie, 'base64').toString('ascii');

    let [, , jwtAccessToken] = decodedString.split('#');
    let headers = { authorization: jwtAccessToken, Cache: 'no-cache' };

    let response = await Axios.post(`${API.corebaseUrl}${API.createDocumentMaster}`, payload, {
      headers: headers,
    });
    if (response.data.code === 200) {
      dispatch(createDocumentMasterSuccess(response.data.data));
      let toastMessage = 'DOCUMENT CREATED SUCCESSFULLY';
      if (!toast.isActive(toastMessage.toUpperCase())) {
        toast.success(toastMessage.toUpperCase(), { toastId: toastMessage });
      }
      dispatch(setNotLoading());
    } else {
      dispatch(createDocumentMasterFailed(response.data.data));
      let toastMessage = 'COULD NOT PROCESS YOUR REQUEST AT THIS TIME';
      if (!toast.isActive(toastMessage.toUpperCase())) {
        toast.error(toastMessage.toUpperCase(), { toastId: toastMessage });
      }
      dispatch(setNotLoading());
    }
  } catch (error) {
    dispatch(createDocumentMasterFailed());

    let toastMessage = 'COULD NOT ADD DOCUMENT MASTER';
    if (!toast.isActive(toastMessage.toUpperCase())) {
      toast.error(toastMessage.toUpperCase(), { toastId: toastMessage });
    }
    dispatch(setNotLoading());
  }
};


// Handler for Country-master Start ---->
export const GetMasterCountryQueueRecords = (payload) => async (dispatch, getState, api) => {
  dispatch(setIsLoading());

  const cookie = Cookies.get('SOMANI');
  const decodedString = Buffer.from(cookie, 'base64').toString('ascii');

  const [, , jwtAccessToken] = decodedString.split('#');
  const headers = {
    authorization: jwtAccessToken,
    Cache: 'no-cache',
    'Access-Control-Allow-Origin': '*',
  };
  try {
    Axios.get(`${API.corebaseUrl}${API.getMasterCountryQueueRecords}${payload}`, {
      headers: headers,
    }).then((response) => {
      if (response.data.code === 200) {
        dispatch(getMasterCountryQueueRecordsSuccess(response?.data?.data));

        dispatch(setNotLoading());
      } else {
        dispatch(getMasterCountryQueueRecordsFailed(response.data.data));
        const toastMessage = 'Could not fetch Country Records';
        if (!toast.isActive(toastMessage.toUpperCase())) {
          toast.error(toastMessage.toUpperCase(), { toastId: toastMessage });
        }
        dispatch(setNotLoading());
      }
    });
  } catch (error) {
    dispatch(getMasterCountryQueueRecordsFailed());
    dispatch(setNotLoading());
  }
};

export const FilterCountryQueue = (payload) => async (dispatch, getState, api) => {
  dispatch(setIsLoading());
  const cookie = Cookies.get('SOMANI');
  const decodedString = Buffer.from(cookie, 'base64').toString('ascii');

  const [, , jwtAccessToken] = decodedString.split('#');
  const headers = { authorization: jwtAccessToken };
  try {
    dispatch(filterCountryQueue());
    Axios.get(`${API.corebaseUrl}${API.filterCountryQueue}?${payload}`, {
      headers: headers,
    }).then((response) => {
      if (response.data.code === 200) {
        dispatch(filterCountryQueueSuccess(response.data));
        dispatch(setNotLoading());
      } else {
        dispatch(filterCountryQueueFailed(response.data));
        const toastMessage = 'Search Country Queue request Failed';
        if (!toast.isActive(toastMessage.toUpperCase())) {
          toast.error(toastMessage.toUpperCase(), { toastId: toastMessage });
        }
        dispatch(setNotLoading());
      }
    });
  } catch (error) {
    dispatch(filterCountryQueueFailed());
    const toastMessage = 'Search Country request Failed';
    if (!toast.isActive(toastMessage.toUpperCase())) {
      toast.error(toastMessage.toUpperCase(), { toastId: toastMessage });
    }
    dispatch(setNotLoading());
  }
};

export const CreateCountryMaster = (payload) => async (dispatch, getState, api) => {
  try {
    dispatch(setIsLoading());
    let cookie = Cookies.get('SOMANI');
    const decodedString = Buffer.from(cookie, 'base64').toString('ascii');

    let [, , jwtAccessToken] = decodedString.split('#');
    let headers = { authorization: jwtAccessToken, Cache: 'no-cache' };

    let response = await Axios.post(`${API.corebaseUrl}${API.createCountryMaster}`, payload, {
      headers: headers,
    });
    if (response.data.code === 200) {
      dispatch(createCountryMasterSuccess(response.data.data));
      let toastMessage = 'COUNTRY ADDED SUCCESSFULLY';
      if (!toast.isActive(toastMessage.toUpperCase())) {
        toast.success(toastMessage.toUpperCase(), { toastId: toastMessage });
      }
      dispatch(setNotLoading());
    } else {
      dispatch(createCountryMasterFailed(response.data.data));
      let toastMessage = 'COULD NOT PROCESS YOUR REQUEST AT THIS TIME';
      if (!toast.isActive(toastMessage.toUpperCase())) {
        toast.error(toastMessage.toUpperCase(), { toastId: toastMessage });
      }
      dispatch(setNotLoading());
    }
  } catch (error) {
    dispatch(createCountryMasterFailed());

    let toastMessage = 'COULD NOT ADD COUNTRY DETAILS';
    if (!toast.isActive(toastMessage.toUpperCase())) {
      toast.error(toastMessage.toUpperCase(), { toastId: toastMessage });
    }
    dispatch(setNotLoading());
  }
};
// Handler for Country-master End ---->

// Handler for Currency-master Start ---->
export const GetMasterCurrencyQueueRecords = (payload) => async (dispatch, getState, api) => {
  dispatch(setIsLoading());

  const cookie = Cookies.get('SOMANI');
  const decodedString = Buffer.from(cookie, 'base64').toString('ascii');

  const [, , jwtAccessToken] = decodedString.split('#');
  const headers = {
    authorization: jwtAccessToken,
    Cache: 'no-cache',
    'Access-Control-Allow-Origin': '*',
  };
  try {
    Axios.get(`${API.corebaseUrl}${API.getMasterCurrencyQueueRecords}${payload}`, {
      headers: headers,
    }).then((response) => {
      if (response.data.code === 200) {
        dispatch(getMasterCurrencyQueueRecordsSuccess(response?.data?.data));

        dispatch(setNotLoading());
      } else {
        dispatch(getMasterCurrencyQueueRecordsFailed(response.data.data));
        const toastMessage = 'Could not fetch Currency Records';
        if (!toast.isActive(toastMessage.toUpperCase())) {
          toast.error(toastMessage.toUpperCase(), { toastId: toastMessage });
        }
        dispatch(setNotLoading());
      }
    });
  } catch (error) {
    dispatch(getMasterCurrencyQueueRecordsFailed());
    dispatch(setNotLoading());
  }
};

export const FilterCurrencyQueue = (payload) => async (dispatch, getState, api) => {
  dispatch(setIsLoading());
  const cookie = Cookies.get('SOMANI');
  const decodedString = Buffer.from(cookie, 'base64').toString('ascii');

  const [, , jwtAccessToken] = decodedString.split('#');
  const headers = { authorization: jwtAccessToken };
  try {
    dispatch(filterCurrencyQueue());
    Axios.get(`${API.corebaseUrl}${API.filterCurrencyQueue}?${payload}`, {
      headers: headers,
    }).then((response) => {
      if (response.data.code === 200) {
        dispatch(filterCurrencyQueueSuccess(response.data));
        dispatch(setNotLoading());
      } else {
        dispatch(filterCurrencyQueueFailed(response.data));
        const toastMessage = 'Search Currency Queue request Failed';
        if (!toast.isActive(toastMessage.toUpperCase())) {
          toast.error(toastMessage.toUpperCase(), { toastId: toastMessage });
        }
        dispatch(setNotLoading());
      }
    });
  } catch (error) {
    dispatch(filterCurrencyQueueFailed());
    const toastMessage = 'Search Currency request Failed';
    if (!toast.isActive(toastMessage.toUpperCase())) {
      toast.error(toastMessage.toUpperCase(), { toastId: toastMessage });
    }
    dispatch(setNotLoading());
  }
};

export const CreateCurrencyMaster = (payload) => async (dispatch, getState, api) => {
  try {
    dispatch(setIsLoading());
    let cookie = Cookies.get('SOMANI');
    const decodedString = Buffer.from(cookie, 'base64').toString('ascii');

    let [, , jwtAccessToken] = decodedString.split('#');
    let headers = { authorization: jwtAccessToken, Cache: 'no-cache' };

    let response = await Axios.post(`${API.corebaseUrl}${API.createCurrencyMaster}`, payload, {
      headers: headers,
    });
    if (response.data.code === 200) {
      dispatch(createCurrencyMasterSuccess(response.data.data));
      let toastMessage = 'CURRENCY ADDED SUCCESSFULLY';
      if (!toast.isActive(toastMessage.toUpperCase())) {
        toast.success(toastMessage.toUpperCase(), { toastId: toastMessage });
      }
      dispatch(setNotLoading());
    } else {
      dispatch(createCurrencyMasterFailed(response.data.data));
      let toastMessage = 'COULD NOT PROCESS YOUR REQUEST AT THIS TIME';
      if (!toast.isActive(toastMessage.toUpperCase())) {
        toast.error(toastMessage.toUpperCase(), { toastId: toastMessage });
      }
      dispatch(setNotLoading());
    }
  } catch (error) {
    dispatch(createCurrencyMasterFailed());

    let toastMessage = 'COULD NOT ADD CURRENCY DETAILS';
    if (!toast.isActive(toastMessage.toUpperCase())) {
      toast.error(toastMessage.toUpperCase(), { toastId: toastMessage });
    }
    dispatch(setNotLoading());
  }
};
// Handler for Currency-master End ---->

// Handler for SAC-master Start ---->
export const GetMasterSACQueueRecords = (payload) => async (dispatch, getState, api) => {
  dispatch(setIsLoading());

  const cookie = Cookies.get('SOMANI');
  const decodedString = Buffer.from(cookie, 'base64').toString('ascii');

  const [, , jwtAccessToken] = decodedString.split('#');
  const headers = {
    authorization: jwtAccessToken,
    Cache: 'no-cache',
    'Access-Control-Allow-Origin': '*',
  };
  try {
    Axios.get(`${API.corebaseUrl}${API.getMasterSACQueueRecords}${payload}`, {
      headers: headers,
    }).then((response) => {
      if (response.data.code === 200) {
        dispatch(getMasterSACQueueRecordsSuccess(response?.data?.data));

        dispatch(setNotLoading());
      } else {
        dispatch(getMasterSACQueueRecordsFailed(response.data.data));
        const toastMessage = 'Could not fetch SAC Records';
        if (!toast.isActive(toastMessage.toUpperCase())) {
          toast.error(toastMessage.toUpperCase(), { toastId: toastMessage });
        }
        dispatch(setNotLoading());
      }
    });
  } catch (error) {
    dispatch(getMasterSACQueueRecordsFailed());
    dispatch(setNotLoading());
  }
};

export const FilterSACQueue = (payload) => async (dispatch, getState, api) => {
  dispatch(setIsLoading());
  const cookie = Cookies.get('SOMANI');
  const decodedString = Buffer.from(cookie, 'base64').toString('ascii');

  const [, , jwtAccessToken] = decodedString.split('#');
  const headers = { authorization: jwtAccessToken };
  try {
    dispatch(filterSACQueue());
    Axios.get(`${API.corebaseUrl}${API.filterSACQueue}?${payload}`, {
      headers: headers,
    }).then((response) => {
      if (response.data.code === 200) {
        dispatch(filterSACQueueSuccess(response.data));
        dispatch(setNotLoading());
      } else {
        dispatch(filterSACQueueFailed(response.data));
        const toastMessage = 'Search SAC Queue request Failed';
        if (!toast.isActive(toastMessage.toUpperCase())) {
          toast.error(toastMessage.toUpperCase(), { toastId: toastMessage });
        }
        dispatch(setNotLoading());
      }
    });
  } catch (error) {
    dispatch(filterSACQueueFailed());
    const toastMessage = 'Search SAC request Failed';
    if (!toast.isActive(toastMessage.toUpperCase())) {
      toast.error(toastMessage.toUpperCase(), { toastId: toastMessage });
    }
    dispatch(setNotLoading());
  }
};

export const CreateSACMaster = (payload) => async (dispatch, getState, api) => {
  try {
    dispatch(setIsLoading());
    let cookie = Cookies.get('SOMANI');
    const decodedString = Buffer.from(cookie, 'base64').toString('ascii');

    let [, , jwtAccessToken] = decodedString.split('#');
    let headers = { authorization: jwtAccessToken, Cache: 'no-cache' };

    let response = await Axios.post(`${API.corebaseUrl}${API.createSACMaster}`, payload, {
      headers: headers,
    });
    if (response.data.code === 200) {
      dispatch(createSACMasterSuccess(response.data.data));
      let toastMessage = 'SAC ADDED SUCCESSFULLY';
      if (!toast.isActive(toastMessage.toUpperCase())) {
        toast.success(toastMessage.toUpperCase(), { toastId: toastMessage });
      }
      dispatch(setNotLoading());
    } else {
      dispatch(createSACMasterFailed(response.data.data));
      let toastMessage = 'COULD NOT PROCESS YOUR REQUEST AT THIS TIME';
      if (!toast.isActive(toastMessage.toUpperCase())) {
        toast.error(toastMessage.toUpperCase(), { toastId: toastMessage });
      }
      dispatch(setNotLoading());
    }
  } catch (error) {
    dispatch(createSACMasterFailed());

    let toastMessage = 'COULD NOT ADD SAC DETAILS';
    if (!toast.isActive(toastMessage.toUpperCase())) {
      toast.error(toastMessage.toUpperCase(), { toastId: toastMessage });
    }
    dispatch(setNotLoading());
  }
};
// Handler for SAC-master End ---->

// Handler for TDS-Section-master Start ---->
export const GetMasterTDSSectionQueueRecords = (payload) => async (dispatch, getState, api) => {
  dispatch(setIsLoading());
  const cookie = Cookies.get('SOMANI');
  const decodedString = Buffer.from(cookie, 'base64').toString('ascii');
  const [, , jwtAccessToken] = decodedString.split('#');
  const headers = {
    authorization: jwtAccessToken,
    Cache: 'no-cache',
    'Access-Control-Allow-Origin': '*',
  };
  try {
    Axios.get(`${API.corebaseUrl}${API.getMasterTDSSectionQueueRecords}${payload}`, {
      headers: headers,
    }).then((response) => {
      if (response.data.code === 200) {
        dispatch(getMasterTDSSectionQueueRecordsSuccess(response?.data?.data));
        dispatch(setNotLoading());
      } else {
        dispatch(getMasterTDSSectionQueueRecordsFailed(response.data.data));
        const toastMessage = 'Could not fetch TDS Section Records';
        if (!toast.isActive(toastMessage.toUpperCase())) {
          toast.error(toastMessage.toUpperCase(), { toastId: toastMessage });
        }
        dispatch(setNotLoading());
      }
    });
  } catch (error) {
    dispatch(getMasterTDSSectionQueueRecordsFailed());
    dispatch(setNotLoading());
  }
};
export const FilterTDSSectionQueue = (payload) => async (dispatch, getState, api) => {
  dispatch(setIsLoading());
  const cookie = Cookies.get('SOMANI');
  const decodedString = Buffer.from(cookie, 'base64').toString('ascii');
  const [, , jwtAccessToken] = decodedString.split('#');
  const headers = { authorization: jwtAccessToken };
  try {
    dispatch(filterTDSSectionQueue());
    Axios.get(`${API.corebaseUrl}${API.filterTDSSectionQueue}?${payload}`, {
      headers: headers,
    }).then((response) => {
      if (response.data.code === 200) {
        dispatch(filterTDSSectionQueueSuccess(response.data));
        dispatch(setNotLoading());
      } else {
        dispatch(filterTDSSectionQueueFailed(response.data));
        const toastMessage = 'Search TDS Section Queue request Failed';
        if (!toast.isActive(toastMessage.toUpperCase())) {
          toast.error(toastMessage.toUpperCase(), { toastId: toastMessage });
        }
        dispatch(setNotLoading());
      }
    });
  } catch (error) {
    dispatch(filterTDSSectionQueueFailed());
    const toastMessage = 'Search TDS Section request Failed';
    if (!toast.isActive(toastMessage.toUpperCase())) {
      toast.error(toastMessage.toUpperCase(), { toastId: toastMessage });
    }
    dispatch(setNotLoading());
  }
};
export const CreateTDSSectionMaster = (payload) => async (dispatch, getState, api) => {
  try {
    dispatch(setIsLoading());
    let cookie = Cookies.get('SOMANI');
    const decodedString = Buffer.from(cookie, 'base64').toString('ascii');
    let [, , jwtAccessToken] = decodedString.split('#');
    let headers = { authorization: jwtAccessToken, Cache: 'no-cache' };
    let response = await Axios.post(`${API.corebaseUrl}${API.createTDSSectionMaster}`, payload, {
      headers: headers,
    });
    if (response.data.code === 200) {
      dispatch(createTDSSectionMasterSuccess(response.data.data));
      let toastMessage = 'TDS_SECTION ADDED SUCCESSFULLY';
      if (!toast.isActive(toastMessage.toUpperCase())) {
        toast.success(toastMessage.toUpperCase(), { toastId: toastMessage });
      }
      dispatch(setNotLoading());
    } else {
      dispatch(createTDSSectionMasterFailed(response.data.data));
      let toastMessage = 'COULD NOT PROCESS YOUR REQUEST AT THIS TIME';
      if (!toast.isActive(toastMessage.toUpperCase())) {
        toast.error(toastMessage.toUpperCase(), { toastId: toastMessage });
      }
      dispatch(setNotLoading());
    }
  } catch (error) {
    dispatch(createTDSSectionMasterFailed());
    let toastMessage = 'COULD NOT ADD TDS_SECTION DETAILS';
    if (!toast.isActive(toastMessage.toUpperCase())) {
      toast.error(toastMessage.toUpperCase(), { toastId: toastMessage });
    }
    dispatch(setNotLoading());
  }
};
// Handler for TDS-Section-master End ---->


// Handler for IIAGLedger-master Start ---->
export const GetMasterIIAGLedgerQueueRecords = (payload) => async (dispatch, getState, api) => {
  dispatch(setIsLoading());

  const cookie = Cookies.get('SOMANI');
  const decodedString = Buffer.from(cookie, 'base64').toString('ascii');

  const [, , jwtAccessToken] = decodedString.split('#');
  const headers = {
    authorization: jwtAccessToken,
    Cache: 'no-cache',
    'Access-Control-Allow-Origin': '*',
  };
  try {
    Axios.get(`${API.corebaseUrl}${API.getMasterIIAGLedgerQueueRecords}${payload}`, {
      headers: headers,
    }).then((response) => {
      if (response.data.code === 200) {
        dispatch(getMasterIIAGLedgerQueueRecordsSuccess(response?.data?.data));

        dispatch(setNotLoading());
      } else {
        dispatch(getMasterIIAGLedgerQueueRecordsFailed(response.data.data));
        const toastMessage = 'Could not fetch IIAGLedger Records';
        if (!toast.isActive(toastMessage.toUpperCase())) {
          toast.error(toastMessage.toUpperCase(), { toastId: toastMessage });
        }
        dispatch(setNotLoading());
      }
    });
  } catch (error) {
    dispatch(getMasterIIAGLedgerQueueRecordsFailed());
    dispatch(setNotLoading());
  }
};

export const FilterIIAGLedgerQueue = (payload) => async (dispatch, getState, api) => {
  dispatch(setIsLoading());
  const cookie = Cookies.get('SOMANI');
  const decodedString = Buffer.from(cookie, 'base64').toString('ascii');

  const [, , jwtAccessToken] = decodedString.split('#');
  const headers = { authorization: jwtAccessToken };
  try {
    dispatch(filterIIAGLedgerQueue());
    Axios.get(`${API.corebaseUrl}${API.filterIIAGLedgerQueue}?${payload}`, {
      headers: headers,
    }).then((response) => {
      if (response.data.code === 200) {
        dispatch(filterIIAGLedgerQueueSuccess(response.data));
        dispatch(setNotLoading());
      } else {
        dispatch(filterIIAGLedgerQueueFailed(response.data));
        const toastMessage = 'Search IIAGLedger Queue request Failed';
        if (!toast.isActive(toastMessage.toUpperCase())) {
          toast.error(toastMessage.toUpperCase(), { toastId: toastMessage });
        }
        dispatch(setNotLoading());
      }
    });
  } catch (error) {
    dispatch(filterIIAGLedgerQueueFailed());
    const toastMessage = 'Search IIAGLedger request Failed';
    if (!toast.isActive(toastMessage.toUpperCase())) {
      toast.error(toastMessage.toUpperCase(), { toastId: toastMessage });
    }
    dispatch(setNotLoading());
  }
};

export const CreateIIAGLedgerMaster = (payload) => async (dispatch, getState, api) => {
  try {
    dispatch(setIsLoading());
    let cookie = Cookies.get('SOMANI');
    const decodedString = Buffer.from(cookie, 'base64').toString('ascii');

    let [, , jwtAccessToken] = decodedString.split('#');
    let headers = { authorization: jwtAccessToken, Cache: 'no-cache' };

    let response = await Axios.post(`${API.corebaseUrl}${API.createIIAGLedgerMaster}`, payload, {
      headers: headers,
    });
    if (response.data.code === 200) {
      dispatch(createIIAGLedgerMasterSuccess(response.data.data));
      let toastMessage = 'IIAG_LEDGER ADDED SUCCESSFULLY';
      if (!toast.isActive(toastMessage.toUpperCase())) {
        toast.success(toastMessage.toUpperCase(), { toastId: toastMessage });
      }
      dispatch(setNotLoading());
    } else {
      dispatch(createIIAGLedgerMasterFailed(response.data.data));
      let toastMessage = 'COULD NOT PROCESS YOUR REQUEST AT THIS TIME';
      if (!toast.isActive(toastMessage.toUpperCase())) {
        toast.error(toastMessage.toUpperCase(), { toastId: toastMessage });
      }
      dispatch(setNotLoading());
    }
  } catch (error) {
    dispatch(createIIAGLedgerMasterFailed());

    let toastMessage = 'COULD NOT ADD IIAG_LEDGER DETAILS';
    if (!toast.isActive(toastMessage.toUpperCase())) {
      toast.error(toastMessage.toUpperCase(), { toastId: toastMessage });
    }
    dispatch(setNotLoading());
  }
};
// Handler for IIAGLedger-master End ---->



// Handler for IIAGLedger-master End ---->

// Handler for Go-no-go-master Start ---->
export const GetMasterGoNoGoQueueRecords = (payload) => async (dispatch, getState, api) => {
  dispatch(setIsLoading());

  const cookie = Cookies.get('SOMANI');
  const decodedString = Buffer.from(cookie, 'base64').toString('ascii');

  const [, , jwtAccessToken] = decodedString.split('#');
  const headers = {
    authorization: jwtAccessToken,
    Cache: 'no-cache',
    'Access-Control-Allow-Origin': '*',
  };
  try {
    Axios.get(`${API.corebaseUrl}${API.getMasterGoNoGoQueueRecords}${payload}`, {
      headers: headers,
    }).then((response) => {
      if (response.data.code === 200) {
        dispatch(getMasterGoNoGoQueueRecordsSuccess(response?.data?.data));

        dispatch(setNotLoading());
      } else {
        dispatch(getMasterGoNoGoQueueRecordsFailed(response.data.data));
        const toastMessage = 'Could not fetch GoNoGo Records';
        if (!toast.isActive(toastMessage.toUpperCase())) {
          toast.error(toastMessage.toUpperCase(), { toastId: toastMessage });
        }
        dispatch(setNotLoading());
      }
    });
  } catch (error) {
    dispatch(getMasterGoNoGoQueueRecordsFailed());
    dispatch(setNotLoading());
  }
};

export const GetMasterGoNoGoSingleRecord = (payload) => async (dispatch, getState, api) => {
  dispatch(setIsLoading());

  const cookie = Cookies.get('SOMANI');
  const decodedString = Buffer.from(cookie, 'base64').toString('ascii');

  const [, , jwtAccessToken] = decodedString.split('#');
  const headers = {
    authorization: jwtAccessToken,
    Cache: 'no-cache',
    'Access-Control-Allow-Origin': '*',
  };
  try {
    Axios.get(`${API.corebaseUrl}${API.getMasterGoNoGoSingleRecord}${payload}`, {
      headers: headers,
    }).then((response) => {
      if (response.data.code === 200) {
        dispatch(getMasterGoNoGoSingleRecordSuccess(response?.data?.data));

        dispatch(setNotLoading());
      } else {
        dispatch(getMasterGoNoGoSingleRecordFailed(response.data.data));
        const toastMessage = 'Could not fetch GoNoGo Record';
        if (!toast.isActive(toastMessage.toUpperCase())) {
          toast.error(toastMessage.toUpperCase(), { toastId: toastMessage });
        }
        dispatch(setNotLoading());
      }
    });
  } catch (error) {
    dispatch(getMasterGoNoGoSingleRecordFailed());
    dispatch(setNotLoading());
  }
};

export const CreateGoNoGoMaster = (payload) => async (dispatch, getState, api) => {
  try {
    dispatch(setIsLoading());
    let cookie = Cookies.get('SOMANI');
    const decodedString = Buffer.from(cookie, 'base64').toString('ascii');

    let [, , jwtAccessToken] = decodedString.split('#');
    let headers = { authorization: jwtAccessToken, Cache: 'no-cache' };

    let response = await Axios.post(`${API.corebaseUrl}${API.createGoNoGoMaster}`, payload, {
      headers: headers,
    });
    if (response.data.code === 200) {
      dispatch(createGoNoGoMasterSuccess(response.data.data));
      let toastMessage = 'GONOGO UPDATED SUCCESSFULLY';
      if (!toast.isActive(toastMessage.toUpperCase())) {
        toast.success(toastMessage.toUpperCase(), { toastId: toastMessage });
      }
      dispatch(setNotLoading());
    } else {
      dispatch(createGoNoGoMasterFailed(response.data.data));
      let toastMessage = 'COULD NOT PROCESS YOUR REQUEST AT THIS TIME';
      if (!toast.isActive(toastMessage.toUpperCase())) {
        toast.error(toastMessage.toUpperCase(), { toastId: toastMessage });
      }
      dispatch(setNotLoading());
    }
  } catch (error) {
    dispatch(createGoNoGoMasterFailed());

    let toastMessage = 'COULD NOT ADD UPDATE GONOGO DETAILS';
    if (!toast.isActive(toastMessage.toUpperCase())) {
      toast.error(toastMessage.toUpperCase(), { toastId: toastMessage });
    }
    dispatch(setNotLoading());
  }
};
// Handler for Go-no-go-master End ---->

// Handler for InternalCompanies-master Start ---->
export const GetMasterInternalCompaniesQueueRecords = (payload) => async (dispatch, getState, api) => {
  dispatch(setIsLoading());

  const cookie = Cookies.get('SOMANI');
  const decodedString = Buffer.from(cookie, 'base64').toString('ascii');

  const [, , jwtAccessToken] = decodedString.split('#');
  const headers = {
    authorization: jwtAccessToken,
    Cache: 'no-cache',
    'Access-Control-Allow-Origin': '*',
  };
  try {
    Axios.get(`${API.corebaseUrl}${API.getMasterInternalCompaniesQueueRecords}${payload}`, {
      headers: headers,
    }).then((response) => {
      if (response.data.code === 200) {
        dispatch(getMasterInternalCompaniesQueueRecordsSuccess(response?.data?.data));

        dispatch(setNotLoading());
      } else {
        dispatch(getMasterInternalCompaniesQueueRecordsFailed(response.data.data));
        const toastMessage = 'Could not fetch InternalCompanies Records';
        if (!toast.isActive(toastMessage.toUpperCase())) {
          toast.error(toastMessage.toUpperCase(), { toastId: toastMessage });
        }
        dispatch(setNotLoading());
      }
    });
  } catch (error) {
    dispatch(getMasterInternalCompaniesQueueRecordsFailed());
    dispatch(setNotLoading());
  }
};

export const FilterInternalCompaniesQueue = (payload) => async (dispatch, getState, api) => {
  dispatch(setIsLoading());
  const cookie = Cookies.get('SOMANI');
  const decodedString = Buffer.from(cookie, 'base64').toString('ascii');

  const [, , jwtAccessToken] = decodedString.split('#');
  const headers = { authorization: jwtAccessToken };
  try {
    dispatch(filterInternalCompaniesQueue());
    Axios.get(`${API.corebaseUrl}${API.filterInternalCompaniesQueue}?${payload}`, {
      headers: headers,
    }).then((response) => {
      if (response.data.code === 200) {
        dispatch(filterInternalCompaniesQueueSuccess(response.data));
        dispatch(setNotLoading());
      } else {
        dispatch(filterInternalCompaniesQueueFailed(response.data));
        const toastMessage = 'Search InternalCompanies Queue request Failed';
        if (!toast.isActive(toastMessage.toUpperCase())) {
          toast.error(toastMessage.toUpperCase(), { toastId: toastMessage });
        }
        dispatch(setNotLoading());
      }
    });
  } catch (error) {
    dispatch(filterInternalCompaniesQueueFailed());
    const toastMessage = 'Search InternalCompanies request Failed';
    if (!toast.isActive(toastMessage.toUpperCase())) {
      toast.error(toastMessage.toUpperCase(), { toastId: toastMessage });
    }
    dispatch(setNotLoading());
  }
};

export const CreateInternalCompaniesMaster = (payload) => async (dispatch, getState, api) => {
  try {
    dispatch(setIsLoading());
    let cookie = Cookies.get('SOMANI');
    const decodedString = Buffer.from(cookie, 'base64').toString('ascii');

    let [, , jwtAccessToken] = decodedString.split('#');
    let headers = { authorization: jwtAccessToken, Cache: 'no-cache' };

    let response = await Axios.post(`${API.corebaseUrl}${API.createInternalCompaniesMaster}`, payload, {
      headers: headers,
    });
    if (response.data.code === 200) {
      dispatch(createInternalCompaniesMasterSuccess(response.data.data));
      let toastMessage = 'INTERNAL_COMPANIES ADDED SUCCESSFULLY';
      if (!toast.isActive(toastMessage.toUpperCase())) {
        toast.success(toastMessage.toUpperCase(), { toastId: toastMessage });
      }
      dispatch(setNotLoading());
    } else {
      dispatch(createInternalCompaniesMasterFailed(response.data.data));
      let toastMessage = 'COULD NOT PROCESS YOUR REQUEST AT THIS TIME';
      if (!toast.isActive(toastMessage.toUpperCase())) {
        toast.error(toastMessage.toUpperCase(), { toastId: toastMessage });
      }
      dispatch(setNotLoading());
    }
  } catch (error) {
    dispatch(createInternalCompaniesMasterFailed());

    let toastMessage = 'COULD NOT ADD INTERNAL_COMPANIES DETAILS';
    if (!toast.isActive(toastMessage.toUpperCase())) {
      toast.error(toastMessage.toUpperCase(), { toastId: toastMessage });
    }
    dispatch(setNotLoading());
  }
};
// Handler for InternalCompanies-master End ---->
