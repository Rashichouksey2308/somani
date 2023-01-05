import * as types from './actionType';
import Axios from 'axios';
import { toast } from 'react-toastify';
import API from '../../utils/endpoints';
import Cookies from 'js-cookie';
import { setIsLoading, setNotLoading } from '../Loaders/action';
import { handleErrorToast } from '@/utils/helpers/global'

function getTransitDetails() {
  return {
    type: types.GET_TRANSITDETAILS,
  };
}

function getTransitDetailsSuccess(payload) {
  return {
    type: types.GET_TRANSITDETAILS_SUCCESS,
    payload,
  };
}

function getTransitDetailsFailed() {
  return {
    type: types.GET_TRANSITDETAILS_FAILED,
  };
}

function getAllTransitDetails() {
  return {
    type: types.GET_ALL_TRANSITDETAILS,
  };
}

function getAllTransitDetailsSuccess(payload) {
  return {
    type: types.GET_ALL_TRANSITDETAILS_SUCCESS,
    payload,
  };
}

function getAllTransitDetailsFailed() {
  return {
    type: types.GET_ALL_TRANSITDETAILS_FAILED,
  };
}

function updateTransitDetails() {
  return {
    type: types.UPDATE_TRANSITDETAILS,
  };
}

function updateTransitDetailsSuccess(payload) {
  return {
    type: types.UPDATE_TRANSITDETAILS_SUCCESS,
    payload,
  };
}

function updateTransitDetailsFailed() {
  return {
    type: types.UPDATE_TRANSITDETAILS_FAILED,
  };
}

function getAdditionalData() {
  return {
    type: types.GET_ADDITTIONAL_DATA,
  };
}

function getAdditionalDataSuccess(payload) {
  return {
    type: types.GET_ADDITTIONAL_DATA_SUCCESS,
    payload,
  };
}

function getAdditionalDataFailed() {
  return {
    type: types.GET_ADDITTIONAL_DATA_FAILED,
  };
}

export const GetAllTransitDetails = (payload) => async (dispatch, getState, api) => {
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
   await Axios.get(`${API.corebaseUrl}${API.getTransitDetails}${payload || ''}`, {
      headers: headers,
    }).then((response) => {
      if (response.data.code === 200) {
        dispatch(getAllTransitDetailsSuccess(response.data.data));
        dispatch(setNotLoading());
      } else {
        dispatch(getAllTransitDetailsFailed());
        handleErrorToast('COULD NOT PROCESS YOUR REQUEST')
        dispatch(setNotLoading());
      }
    });
  } catch (error) {
    dispatch(getAllTransitDetailsFailed());
    handleErrorToast('COULD NOT GET TRANSIT DETAILS AT THIS TIME')
    dispatch(setNotLoading());
  }
};

export const GetTransitDetails = (payload) => async (dispatch, getState, api) => {
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
    const response = await Axios.get(`${API.corebaseUrl}${API.getTransitDetails}${payload}`, {
      headers: headers,
    });
    if (response.data.code === 200) {
      dispatch(setNotLoading());
      return response.data.data;
    } else {
      dispatch(getTransitDetailsFailed());
      handleErrorToast('COULD NOT PROCESS YOUR REQUEST')
      dispatch(setNotLoading());
    }
  } catch (error) {
    dispatch(getTransitDetailsFailed());
    handleErrorToast('COULD NOT GET TRANSIT DATA AT THIS TIME')
    dispatch(setNotLoading());
  }
};

export const UpdateTransitDetails = (payload) => async (dispatch, getState, api) => {
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
    const response = await Axios.put(`${API.corebaseUrl}${API.updateTransitDetails}`, payload.fd, {
      headers: headers,
    });
    if (response.data.code === 200) {
      dispatch(updateTransitDetailsSuccess(response.data.data));
      let toastMessage = 'UPDATE SUCCESSFULLY';

      if (payload.task === 'save') {
        toastMessage = 'Saved successfully';
      } else {
        sessionStorage.setItem('headgingId', response.data.data.order.forwardHedging);
      }

      if (!toast.isActive(toastMessage.toUpperCase())) {
        toast.success(toastMessage.toUpperCase(), { toastId: toastMessage });
      }
      dispatch(setNotLoading());
      return true;
    } else {
      dispatch(updateTransitDetailsFailed());
      handleErrorToast('COULD NOT PROCESS YOUR REQUEST')
      dispatch(setNotLoading());
    }
  } catch (error) {
    dispatch(updateTransitDetailsFailed());
    handleErrorToast('COULD NOT UPDATE TRANSIT DATA AT THIS TIME')
    dispatch(setNotLoading());
  }
};

export const GetAdditionalData = (payload) => async (dispatch, getState, api) => {
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
   await Axios.get(
      `${API.corebaseUrl}${API.fetchAdditionalData}${payload}`,
      {
        headers: headers,
      },
      payload,
    ).then((response) => {
      if (response.data.code === 200) {
        dispatch(getAdditionalDataSuccess(response.data.data));
        dispatch(setNotLoading());
      } else {
        dispatch(getAdditionalDataFailed());
        handleErrorToast('COULD NOT PROCESS YOUR REQUEST')
        dispatch(setNotLoading());
      }
    });
  } catch (error) {
    dispatch(getAdditionalDataFailed());
    handleErrorToast('COULD NOT GET TRANSIT DETAILS AT THIS TIME')
    dispatch(setNotLoading());
  }
};
