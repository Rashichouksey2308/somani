import Axios from 'axios';
import API from '../../utils/endpoints';
import Cookies from 'js-cookie';
import * as types from './actionType';
import { setIsLoading, setNotLoading } from '../Loaders/action';
import { handleErrorToast, handleSuccessToast } from '@/utils/helpers/global';

function getCommoditySuccess(payload) {
  return {
    type: types.GET_COMMODITY_SUCCESS,
    payload,
  };
}

function getCommodityFailed() {
  return {
    type: types.GET_COMMODITY_FAILED,
  };
}

function getAllCommoditySuccess(payload) {
  return {
    type: types.GET_ALL_COMMODITY_SUCCESS,
    payload,
  };
}

function getAllCommodityFailed() {
  return {
    type: types.GET_ALL_COMMODITY_FAILED,
  };
}

function updateCommoditySuccess(payload) {
  return {
    type: types.UPDATE_COMMODITY_SUCCESS,
    payload,
  };
}

function updateCommodityFailed() {
  return {
    type: types.UPDATE_COMMODITY_FAILED,
  };
}
function createCommoditySuccess(payload) {
  return {
    type: types.CREATE_COMMODITY_SUCCESS,
    payload,
  };
}

function createCommodityFailed() {
  return {
    type: types.CREATE_COMMODITY_FAILED,
  };
}

export const GetAllCommodity = (payload) => async (dispatch, getState, api) => {
  dispatch(setIsLoading());
  const cookie = Cookies.get('SOMANI');
  const decodedString = Buffer.from(cookie, 'base64').toString('ascii');
  const [userId, refreshToken, jwtAccessToken] = decodedString.split('#')
  const headers = {
    authorization: jwtAccessToken,
    Cache: 'no-cache',
    'Access-Control-Allow-Origin': '*',
  };
  try {
    await Axios.get(`${API.corebaseUrl}${API.getCommodity}${payload || ''}`, {
      headers: headers,
    }).then((response) => {
      if (response.data.code === 200) {
        dispatch(getAllCommoditySuccess(response.data.data));
        dispatch(setNotLoading());
      } else {
        dispatch(getAllCommodityFailed());
        handleErrorToast('COULD NOT PROCESS YOUR REQUEST');
        dispatch(setNotLoading());
      }
    });
  } catch (error) {
    dispatch(getAllCommodityFailed());
    handleErrorToast('COULD NOT GET COMMODITIES AT THIS TIME');
    dispatch(setNotLoading());
  }
};

export const GetCommodity = (payload) => async (dispatch, getState, api) => {
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
    await Axios.get(`${API.corebaseUrl}${API.getCommodity}${payload || ''}`, {
      headers: headers,
    }).then((response) => {
      if (response.data.code === 200) {
        dispatch(getCommoditySuccess(response.data.data));
        dispatch(setNotLoading());
      } else {
        dispatch(getCommodityFailed());
        handleErrorToast('COULD NOT PROCESS YOUR REQUEST');
        dispatch(setNotLoading());
      }
    });
  } catch (error) {
    dispatch(getCommodityFailed());
    handleErrorToast('COULD NOT GET COMMODITIES AT THIS TIME');
    dispatch(setNotLoading());
  }
};

export const CreateCommodity = (payload) => async (dispatch, getState, api) => {
  dispatch(setIsLoading());
  const cookie = Cookies.get('SOMANI');
  const decodedString = Buffer.from(cookie, 'base64').toString('ascii');

  const [jwtAccessToken] = decodedString.split('#');
  const headers = {
    authorization: jwtAccessToken,
    Cache: 'no-cache',
    'Access-Control-Allow-Origin': '*',
  };
  try {
    await Axios.post(`${API.corebaseUrl}${API.getCommodity}`, payload, {
      headers: headers,
    }).then((response) => {
      if (response.data.code === 200) {
        dispatch(createCommoditySuccess(response.data.data));
        handleSuccessToast('created  SUCCESSFULLY');
        dispatch(setNotLoading());
      } else {
        dispatch(createCommodityFailed());
        handleErrorToast('COULD NOT PROCESS YOUR REQUEST');
        dispatch(setNotLoading());
      }
    });
  } catch (error) {
    dispatch(createCommodityFailed());
    handleErrorToast('COULD NOT PROCESS YOUR REQUEST AT THIS TIME');
    dispatch(setNotLoading());
  }
};

export const UpdateCommodity = (payload) => async (dispatch, getState, api) => {
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
    await Axios.put(`${API.corebaseUrl}${API.getCommodity}`, payload, {
      headers: headers,
    }).then((response) => {
      if (response.data.code === 200) {
        dispatch(updateCommoditySuccess(response.data.data));
        handleSuccessToast('updated  SUCCESSFULLY');
        dispatch(setNotLoading());
      } else {
        dispatch(updateCommodityFailed());
        handleErrorToast('COULD NOT PROCESS YOUR REQUEST');
        dispatch(setNotLoading());
      }
    });
  } catch (error) {
    dispatch(updateCommodityFailed());
    handleErrorToast('COULD NOT UPDATE COMMODITY AT THIS TIME');
    dispatch(setNotLoading());
  }
};
