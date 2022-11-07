import Axios from 'axios';
import API from '../../utils/endpoints';
import * as types from './actions';
import { toast } from 'react-toastify';

import Cookies from 'js-cookie';
import { setIsLoading, setNotLoading } from '../Loaders/action';

export function submitGeneric() {
  return {
    type: types.SUBMIT_GENERIC,
  };
}

export function submitGenericSuccess(payload) {
  return {
    type: types.SUBMIT_GENERIC_SUCCESS,
    payload: payload,
  };
}

export function getGenericFailed(payload) {
  return {
    type: types.GET_GENERIC_FAILED,
  };
}

export function getGeneric() {
  return {
    type: types.GET_GENERIC,
  };
}

export function getGenericSuccess(payload) {
  return {
    type: types.GET_GENERIC_SUCCESS,
    payload: payload,
  };
}

export function submitGenericFailed(payload) {
  return {
    type: types.SUBMIT_GENERIC_FAILED,
  };
}

export const updateGenericData = (payload, message) => async (dispatch, getState, api) => {
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
    const response = await Axios.put(`${API.corebaseUrl}${API.updateGeneric}`, payload, {
      headers: headers,
    });
    if (response.data.code === 200) {
      dispatch(submitGenericSuccess(response.data));
      const toastMessage = message;
      if (!toast.isActive(toastMessage.toUpperCase())) {
        toast.success(toastMessage.toUpperCase(), { toastId: toastMessage });
      }

      dispatch(setNotLoading());
      return response.data.timestamp;
    } else {
      dispatch(submitGenericFailed(response.data.data));
      const toastMessage = 'COULD NOT PROCESS YOUR REQUEST';
      if (!toast.isActive(toastMessage.toUpperCase())) {
        toast.error(toastMessage.toUpperCase(), { toastId: toastMessage });
      }
      dispatch(setNotLoading());
      return 500;
    }
  } catch (error) {
    dispatch(submitGenericFailed());

    const toastMessage = 'PUT GENERIC API FAILED';
    if (!toast.isActive(toastMessage.toUpperCase())) {
      toast.error(toastMessage.toUpperCase(), { toastId: toastMessage });
    }
    dispatch(setNotLoading());
    return 500;
  }
};

export const getGenericData = (payload) => async (dispatch, getState, api) => {
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
    const response = await Axios.get(`${API.corebaseUrl}${API.updateGeneric}${payload || ''}`, {
      headers: headers,
    });
    if (response.data.code === 200) {
      dispatch(getGenericSuccess(response.data.data.data));
      dispatch(setNotLoading());
      return response.data.data;
    } else {
      dispatch(getGenericFailed(response.data.data));
      const toastMessage = 'No Data Available';
      dispatch(setNotLoading());
      if (!toast.isActive(toastMessage.toUpperCase())) {
        toast.error(toastMessage.toUpperCase(), { toastId: toastMessage });
      }
    }
  } catch (error) {
    dispatch(getGenericFailed());

    const toastMessage = 'PUT GENERIC API FAILED';
    if (!toast.isActive(toastMessage.toUpperCase())) {
      toast.error(toastMessage.toUpperCase(), { toastId: toastMessage });
    }
    dispatch(setNotLoading());
  }
};
