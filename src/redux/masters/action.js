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

export const getCountries = (payload) => async (dispatch, getState, api) => {
  const cookie = Cookies.get('SOMANI');
  const decodedString = Buffer.from(cookie, 'base64').toString('ascii');
  const [userId, refreshToken, jwtAccessToken] = decodedString.split('#');

  const headers = {
    authorization: jwtAccessToken,
    Cache: 'no-cache',
    'Access-Control-Allow-Origin': '*',
  };
  dispatch({
    type: types.GET_COUNTRIES_MASTERS,
  });
  try {
    await Axios.get(`${API.corebaseUrl}${API.countriesMaster}`, {
      headers: headers,
    }).then((response) => {
      if (response.status === 200) {
        dispatch({
          type: types.GET_COUNTRIES_MASTERS_SUCCESS,
          payload: response.data.data.data,
        });
      } else {
        dispatch({
          type: types.GET_COUNTRIES_MASTERS_FAILURE,
          payload: response.data.data.data,
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
