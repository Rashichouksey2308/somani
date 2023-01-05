import Axios from 'axios';
import API from '../../utils/endpoints';
import Cookies from 'js-cookie';
import * as types from './actionType';
import { setIsLoading, setNotLoading } from '../Loaders/action';
import { handleErrorToast, handleSuccessToast } from '@/utils/helpers/global';

function getGoNoGo() {
  return {
    type: types.GET_GONOGO,
  };
}

function getGoNoGoSuccess(payload) {
  return {
    type: types.GET_GONOGO_SUCCESS,
    payload,
  };
}

function getGoNoGoFailed() {
  return {
    type: types.GET_GONOGO_FAILED,
  };
}

function getAllGoNoGo() {
  return {
    type: types.GET_ALL_GONOGO,
  };
}

function getAllGoNoGoSuccess(payload) {
  return {
    type: types.GET_ALL_GONOGO_SUCCESS,
    payload,
  };
}

function getAllGoNoGoFailed() {
  return {
    type: types.GET_ALL_GONOGO_FAILED,
  };
}

function updateGoNoGo() {
  return {
    type: types.UPDATE_GONOGO,
  };
}

function updateGoNoGoSuccess(payload) {
  return {
    type: types.UPDATE_GONOGO_SUCCESS,
    payload,
  };
}

function updateGoNoGoFailed() {
  return {
    type: types.UPDATE_GONOGO_FAILED,
  };
}

function createGoNoGo() {
  return {
    type: types.CREATE_GONOGO,
  };
}

function createGoNoGoSuccess(payload) {
  return {
    type: types.CREATE_GONOGO_SUCCESS,
    payload,
  };
}

function createGoNoGoFailed() {
  return {
    type: types.CREATE_GONOGO_FAILED,
  };
}

export const GetAllGoNoGo = (payload) => async (dispatch, getState, api) => {
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
    await Axios.get(`${API.corebaseUrl}${API.getGoNoGo}${payload || ''}`, {
      headers: headers,
    }).then((response) => {
      if (response.data.code === 200) {
        dispatch(getAllGoNoGoSuccess(response.data.data));
        dispatch(setNotLoading());
      } else {
        dispatch(getAllGoNoGoFailed());
        handleErrorToast('COULD NOT PROCESS YOUR REQUEST');
        dispatch(setNotLoading());
      }
    });
  } catch (error) {
    dispatch(getAllGoNoGoFailed());
    handleErrorToast('COULD NOT GET GONOGO AT THIS TIME');
    dispatch(setNotLoading());
  }
};

export const GetGoNoGo = (payload) => async (dispatch, getState, api) => {
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
    await Axios.get(`${API.corebaseUrl}${API.getGoNoGo}${payload || ''}`, {
      headers: headers,
    }).then((response) => {
      if (response.data.code === 200) {
        dispatch(getGoNoGoSuccess(response.data.data));
        dispatch(setNotLoading());
      } else {
        dispatch(getGoNoGoFailed());
        handleErrorToast('COULD NOT PROCESS YOUR REQUEST')
        dispatch(setNotLoading());
      }
    });
  } catch (error) {
    dispatch(getGoNoGoFailed());
    handleErrorToast('COULD NOT GET GONOGO AT THIS TIME');
    dispatch(setNotLoading());
  }
};

export const CreateGoNoGo = (payload) => async (dispatch, getState, api) => {
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
    await Axios.post(`${API.corebaseUrl}${API.getGoNoGo}`, payload, {
      headers: headers,
    }).then((response) => {
      if (response.data.code === 200) {
        dispatch(createGoNoGoSuccess(response.data.data));
        handleSuccessToast('created  SUCCESSFULLY');
        dispatch(setNotLoading());
      } else {
        dispatch(createGoNoGoFailed());
        handleErrorToast('COULD NOT PROCESS YOUR REQUEST');
        dispatch(setNotLoading());
      }
    });
  } catch (error) {
    dispatch(createGoNoGoFailed());
    handleErrorToast('COULD NOT PROCESS YOUR REQUEST AT THIS TIME');
    dispatch(setNotLoading());
  }
};

export const UpdateGoNoGo = (payload) => async (dispatch, getState, api) => {
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
    await Axios.put(`${API.corebaseUrl}${API.getGoNoGo}`, payload, {
      headers: headers,
    }).then((response) => {
      if (response.data.code === 200) {
        dispatch(updateGoNoGoSuccess(response.data.data));
        handleSuccessToast('updated  SUCCESSFULLY');
        dispatch(setNotLoading());
      } else {
        dispatch(updateGoNoGoFailed());
        handleErrorToast('COULD NOT PROCESS YOUR REQUEST');
        dispatch(setNotLoading());
      }
    });
  } catch (error) {
    dispatch(updateGoNoGoFailed());
    handleErrorToast('COULD NOT UPDATE GONOGO AT THIS TIME');
    dispatch(setNotLoading());
  }
};
