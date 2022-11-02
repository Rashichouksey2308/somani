import * as types from './actionType';
import Axios from 'axios';
import API from '../../utils/endpoints';
import Cookies from 'js-cookie';

export const getCountries = (payload) => async (dispatch, getState, api) => {
  let cookie = Cookies.get('SOMANI');
  const decodedString = Buffer.from(cookie, 'base64').toString('ascii');
  let [userId, refreshToken, jwtAccessToken] = decodedString.split('#');

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

export const getPorts = (payload) => async (dispatch, getState, api) => {
  let cookie = Cookies.get('SOMANI');
  const decodedString = Buffer.from(cookie, 'base64').toString('ascii');
  let [userId, refreshToken, jwtAccessToken] = decodedString.split('#');

  dispatch({
    type: types.GET_PORTS_MASTERS,
  });
  try {
    Axios.get(`${API.masterBaseUrl}${API.portsMaster}`).then((response) => {
      if (response.status === 200) {
        dispatch({
          type: types.GET_PORTS_MASTERS_SUCCESS,
          payload: response.data,
        });
      } else {
        dispatch({
          type: types.GET_PORTS_MASTERS_FAILURE,
          payload: response.data,
        });
      }
    });
  } catch (error) {
    console.log(error);
  }
};

export const getCommodities = (payload) => async (dispatch, getState, api) => {
  let cookie = Cookies.get('SOMANI');
  const decodedString = Buffer.from(cookie, 'base64').toString('ascii');
  let [userId, refreshToken, jwtAccessToken] = decodedString.split('#');

  dispatch({
    type: types.GET_COMMODITIES_MASTERS,
  });
  try {
    Axios.get(`${API.masterBaseUrl}${API.commoditiesMaster}`).then(
      (response) => {
        if (response.status === 200) {
          dispatch({
            type: types.GET_COMMODITIES_MASTERS_SUCCESS,
            payload: response.data,
          });
        } else {
          dispatch({
            type: types.GET_COMMODITIES_MASTERS_FAILURE,
            payload: response.data,
          });
        }
      },
    );
  } catch (error) {
    console.log(error);
  }
};

export const getDocuments = (payload) => async (dispatch, getState, api) => {
  let cookie = Cookies.get('SOMANI');
  const decodedString = Buffer.from(cookie, 'base64').toString('ascii');
  let [userId, refreshToken, jwtAccessToken] = decodedString.split('#');

  dispatch({
    type: types.GET_DOCUMENTS_MASTERS,
  });
  try {
    Axios.get(`${API.masterBaseUrl}${API.documentsMaster}`).then((response) => {
      if (response.status === 200) {
        dispatch({
          type: types.GET_DOCUMENTS_MASTERS_SUCCESS,
          payload: response.data,
        });
      } else {
        dispatch({
          type: types.GET_DOCUMENTS_MASTERS_FAILURE,
          payload: response.data,
        });
      }
    });
  } catch (error) {
    console.log(error);
  }
};

export const getCurrency = (payload) => async (dispatch, getState, api) => {
  let cookie = Cookies.get('SOMANI');
  const decodedString = Buffer.from(cookie, 'base64').toString('ascii');
  let [userId, refreshToken, jwtAccessToken] = decodedString.split('#');

  dispatch({
    type: types.GET_CURRENCY_MASTERS,
  });
  try {
    Axios.get(`${API.masterBaseUrl}${API.currencyMaster}`).then((response) => {
      if (response.status === 200) {
        dispatch({
          type: types.GET_CURRENCY_MASTERS_SUCCESS,
          payload: response.data,
        });
      } else {
        dispatch({
          type: types.GET_CURRENCY_MASTERS_FAILURE,
          payload: response.data,
        });
      }
    });
  } catch (error) {
    console.log(error);
  }
};

export const getInternalCompanies =
  (payload) => async (dispatch, getState, api) => {
    let cookie = Cookies.get('SOMANI');
    const decodedString = Buffer.from(cookie, 'base64').toString('ascii');
    let [userId, refreshToken, jwtAccessToken] = decodedString.split('#');

    dispatch({
      type: types.GET_INTERNAL_COMPANIES_MASTERS,
    });
    try {
      Axios.get(`${API.masterBaseUrl}${API.internalCompaniesMaster}`).then(
        (response) => {
          if (response.status === 200) {
            dispatch({
              type: types.GET_INTERNAL_COMPANIES_MASTERS_SUCCESS,
              payload: response.data,
            });
          } else {
            dispatch({
              type: types.GET_INTERNAL_COMPANIES_MASTERS_FAILURE,
              payload: response.data,
            });
          }
        },
      );
    } catch (error) {
      console.log(error);
    }
  };

export const getVendors = (payload) => async (dispatch, getState, api) => {
  let cookie = Cookies.get('SOMANI');
  const decodedString = Buffer.from(cookie, 'base64').toString('ascii');
  let [userId, refreshToken, jwtAccessToken] = decodedString.split('#');

  dispatch({
    type: types.GET_VENDORS_MASTERS,
  });
  try {
    Axios.get(`${API.masterBaseUrl}${API.vendorsMaster}`).then((response) => {
      if (response.status === 200) {
        dispatch({
          type: types.GET_VENDORS_MASTERS_SUCCESS,
          payload: response.data,
        });
      } else {
        dispatch({
          type: types.GET_VENDORS_MASTERS_FAILURE,
          payload: response.data,
        });
      }
    });
  } catch (error) {
    console.log(error);
  }
};

export const getBanks = (payload) => async (dispatch, getState, api) => {
  let cookie = Cookies.get('SOMANI');
  const decodedString = Buffer.from(cookie, 'base64').toString('ascii');
  let [userId, refreshToken, jwtAccessToken] = decodedString.split('#');

  dispatch({
    type: types.GET_BANKS_MASTERS,
  });
  try {
    Axios.get(`${API.masterBaseUrl}${API.banksMaster}`).then((response) => {
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
  let cookie = Cookies.get('SOMANI');
  const decodedString = Buffer.from(cookie, 'base64').toString('ascii');
  let [userId, refreshToken, jwtAccessToken] = decodedString.split('#');

  dispatch({
    type: types.GET_BANK_BRANCHES_MASTERS,
  });
  try {
    Axios.get(
      `${API.masterBaseUrl}${API.bankBranchesMaster}${payload}.json`,
    ).then((response) => {
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
  let cookie = Cookies.get('SOMANI');
  const decodedString = Buffer.from(cookie, 'base64').toString('ascii');
  let [userId, refreshToken, jwtAccessToken] = decodedString.split('#');

  dispatch({
    type: types.GET_PINCODES_MASTERS,
  });
  try {
    Axios.get(`${API.masterBaseUrl}${API.pincodesMaster}${payload}.json`).then(
      (response) => {
      
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
      },
    );
  } catch (error) {
    dispatch({
      type: types.GET_PINCODES_MASTERS_SUCCESS,
      payload: [],
    });
  }
};
