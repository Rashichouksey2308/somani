import * as types from './actionType';
import Axios from 'axios';
import API from '../../utils/endpoints';
import Cookies from 'js-cookie';
import { setIsLoading, setNotLoading } from '../Loaders/action';
import Router from 'next/router';
import { handleErrorToast, handleSuccessToast } from '@/utils/helpers/global';
function getAllInsurance() {
  return {
    type: types.GET_ALL_INSURANCE,
  };
}

function getAllInsuranceSuccess(payload) {
  return {
    type: types.GET_ALL_INSURANCE_SUCCESSFULL,
    payload,
  };
}

function getAllInsuranceFailed() {
  return {
    type: types.GET_ALL_INSURANCE_FAILED,
  };
}

function createInsurance() {
  return {
    type: types.CREATE_INSURANCE,
  };
}

function createInsuranceSuccess(payload) {
  return {
    type: types.CREATE_INSURANCE_SUCCESSFULL,
    payload,
  };
}

function createInsuranceFailed() {
  return {
    type: types.CREATE_INSURANCE_FAILED,
  };
}

function updatingInsurance() {
  return {
    type: types.UPDATE_INSURANCE,
  };
}

function updateInsuranceSuccess(payload) {
  return {
    type: types.UPDATE_INSURANCE_SUCCESSFULL,
    payload,
  };
}

function updateInsuranceFailed() {
  return {
    type: types.UPDATE_INSURANCE_FAILED,
  };
}

function renewingInsurance() {
  return {
    type: types.RENEW_INSURANCE,
  };
}

function renewInsuranceSuccess(payload) {
  return {
    type: types.RENEW_INSURANCE_SUCCESSFULL,
    payload,
  };
}

function renewInsuranceFailed() {
  return {
    type: types.RENEW_INSURANCE_FAILED,
  };
}

function updateQuotation() {
  return {
    type: types.UPDATE_QUOTATION,
  };
}

function updateQuotationSuccess(payload) {
  return {
    type: types.UPDATE_QUOTATION_SUCCESSFULL,
    payload,
  };
}

function updateQuotationFailed() {
  return {
    type: types.UPDATE_QUOTATION_FAILED,
  };
}

export const GettingAllInsurance = (payload) => async (dispatch, getState, api) => {
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
    await Axios.get(`${API.corebaseUrl}${API.getInsurance}${payload || ''}`, {
      headers: headers,
    }).then((response) => {
      if (response.data.code === 200) {
        dispatch(getAllInsuranceSuccess(response.data.data));
        dispatch(setNotLoading());
      } else {
        dispatch(getAllInsuranceFailed());
        handleErrorToast('COULD NOT PROCESS YOUR REQUEST');
        dispatch(setNotLoading());
      }
    });
  } catch (error) {
    dispatch(getAllInsuranceFailed());
    handleErrorToast('GET INSURANCE API FAILED');
    dispatch(setNotLoading());
  }
};

export const CreateInsurance = (payload) => async (dispatch, getState, api) => {
  dispatch(setIsLoading());
  const cookie = Cookies.get('SOMANI');
  const decodedString = Buffer.from(cookie, 'base64').toString('ascii');

  const [userId, refreshToken, jwtAccessToken] = decodedString.split('#');
  const headers = {
    authorization: jwtAccessToken,
    Cache: 'no-cache',
    'Access-Control-Allow-Origin': '*',
  };
  try {
    await Axios.get(`${API.corebaseUrl}${API.getInsurance}`, payload, {
      headers: headers,
    }).then((response) => {
      if (response.data.code === 200) {
        dispatch(createInsuranceSuccess(response.data.data));
        handleSuccessToast('INSURANCE CREATED');
        dispatch(setNotLoading());
      } else {
        dispatch(createInsuranceFailed());
        handleErrorToast('COULD NOT PROCESS YOUR REQUEST');
        dispatch(setNotLoading());
      }
    });
  } catch (error) {
    dispatch(createInsuranceFailed());
    handleErrorToast('COULD NOT CREATE INSURANCE AT THIS TIME');
    dispatch(setNotLoading());
  }
};

export const UpdateInsurance = (payload) => async (dispatch, getState, api) => {
  dispatch(setIsLoading());
  const cookie = Cookies.get('SOMANI');
  const decodedString = Buffer.from(cookie, 'base64').toString('ascii');

  const [userId, refreshToken, jwtAccessToken] = decodedString.split('#');
  var headers = { authorization: jwtAccessToken, Cache: 'no-cache' };
  try {
    const response = await Axios.put(`${API.corebaseUrl}${API.getInsurance}`, payload, {
      headers: headers,
    });
    if (response.data.code === 200) {
      dispatch(updateInsuranceSuccess(response.data));
      handleSuccessToast('SAVED SUCCESSFULLY')
      dispatch(setNotLoading());
      return response.data.code;
    } else {
      dispatch(updateInsuranceFailed(response.data));
      handleErrorToast('UPDATE REQUEST FAILED')
      dispatch(setNotLoading());
    }
  } catch (error) {
    dispatch(updateInsuranceFailed());
  handleErrorToast('UPDATE INSURANCE REQUEST FAILED')
    dispatch(setNotLoading());
  }
};

export const RenewInsurance = (payload) => async (dispatch, getState, api) => {
  dispatch(setIsLoading());
  const cookie = Cookies.get('SOMANI');
  const decodedString = Buffer.from(cookie, 'base64').toString('ascii');

  const [userId, refreshToken, jwtAccessToken] = decodedString.split('#');
  var headers = { authorization: jwtAccessToken, Cache: 'no-cache' };
  try {
  await Axios.put(`${API.corebaseUrl}${API.renewInsurance}`, payload, {
      headers: headers,
    }).then((response) => {
      if (response.data.code === 200) {
        dispatch(renewInsuranceSuccess(response.data.data));
        handleSuccessToast('REQUEST SENT SUCCESSFULLY')
        dispatch(setNotLoading());
        Router.push('/insurance');
      } else {
        dispatch(renewInsuranceFailed());
       handleErrorToast('RENEW REQUEST FAILED')
        dispatch(setNotLoading());
      }
    });
  } catch (error) {
    dispatch(renewInsuranceFailed());
    handleErrorToast('RENEW INSURANCE REQUEST FAILED')
    dispatch(setNotLoading());
  }
};
export const UpdateQuotation = (payload) => async (dispatch, getState, api) => {
  dispatch(setIsLoading());
  const cookie = Cookies.get('SOMANI');
  const decodedString = Buffer.from(cookie, 'base64').toString('ascii');

  const [userId, refreshToken, jwtAccessToken] = decodedString.split('#');
  var headers = { authorization: jwtAccessToken, Cache: 'no-cache' };
  try {
    const response = await Axios.put(`${API.corebaseUrl}${API.updateQuotation}`, payload, {
      headers: headers,
    });
    if (response.data.code === 200) {
      dispatch(updateQuotationSuccess(response.data));
      handleSuccessToast('SAVED SUCCESSFULLY')
      dispatch(setNotLoading());
      return response.data.code;
    } else {
      dispatch(updateQuotationFailed(response.data));
     handleErrorToast('UPDATE REQUEST FAILED')
      dispatch(setNotLoading());
    }
  } catch (error) {
    dispatch(updateQuotationFailed());
    handleErrorToast('UPDATE QUOTATION REQUEST FAILED')
    dispatch(setNotLoading());
  }
};
