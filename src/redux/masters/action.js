import * as types from './actionType';
import Axios from 'axios';
import API from '../../utils/endpoints';
import Cookies from 'js-cookie';
import { handleErrorToast } from '@/utils/helpers/global';

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
    Axios.get(`${API.corebaseUrl}${API.countriesMaster}`, {
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
    Axios.get(`${API.corebaseUrl}${API.getState}${payload || ''}`, {
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
    Axios.get(`${API.corebaseUrl}${API.portsMaster}`, {
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
    Axios.get(`${API.corebaseUrl}${API.commoditiesMaster}`, {
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
    Axios.get(`${API.corebaseUrl}${API.documentsMaster}`, {
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
    Axios.get(`${API.corebaseUrl}${API.currencyMaster}`, {
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
    Axios.get(`${API.corebaseUrl}${API.internalCompaniesMaster}`, {
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
    Axios.get(`${API.corebaseUrl}${API.vendorsMaster}`, {
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
    Axios.get(`${API.corebaseUrl}${API.banksMaster}`).then((response) => {
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
    Axios.get(`${API.corebaseUrl}${API.bankBranchesMaster}${payload}.json`).then((response) => {
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
    Axios.get(`${API.masterBaseUrl}${API.pincodesMaster}${payload}.json`).then((response) => {
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

export const getZipCode = (payload) => async (dispatch, getState, api) => {
  const cookie = Cookies.get('SOMANI');
  const decodedString = Buffer.from(cookie, 'base64').toString('ascii');
  const [userId, refreshToken, jwtAccessToken] = decodedString.split('#');

  const headers = {
    authorization: jwtAccessToken,
    Cache: 'no-cache',
    'Access-Control-Allow-Origin': '*',
  };

  dispatch({
    type: types.GET_ZIPCODES_MASTERS,
  });
  try {
    Axios.get(`${API.corebaseUrl}${API.zipCodeMaster}${payload}`, {
      headers: headers,
    })
      .then((response) => {
        if (response.status === 200) {
          dispatch({
            type: types.GET_ZIPCODES_MASTERS_SUCCESS,
            payload: response.data,
          });
        } else {
          dispatch({
            type: types.GET_ZIPCODES_MASTERS_FAILURE,
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
