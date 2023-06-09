import * as types from './actionType';
import Axios from 'axios';
import { toast } from 'react-toastify';
import API from '../../utils/endpoints';
import Cookies from 'js-cookie';
import { setIsLoading, setNotLoading } from '../Loaders/action';

function getVessel() {
  return {
    type: types.GET_VESSEL,
  };
}

function getVesselSuccess(payload) {
  return {
    type: types.GET_VESSEL_SUCCESS,
    payload,
  };
}

function getVesselFailed() {
  return {
    type: types.GET_VESSEL_FAILED,
  };
}

function getAllVessel() {
  return {
    type: types.GET_ALL_VESSEL,
  };
}

function getAllVesselSuccess(payload) {
  return {
    type: types.GET_ALL_VESSEL_SUCCESS,
    payload,
  };
}

function getAllVesselFailed() {
  return {
    type: types.GET_ALL_VESSEL_FAILED,
  };
}

function updateVessel() {
  return {
    type: types.UPDATE_VESSEL,
  };
}

function updateVesselSuccess(payload) {
  return {
    type: types.UPDATE_VESSEL_SUCCESS,
    payload,
  };
}

function updateVesselFailed() {
  return {
    type: types.UPDATE_VESSEL_FAILED,
  };
}

function uploadDocVessel() {
  return {
    type: types.UPLOAD_DOC_VESSEL,
  };
}

function uploadDocVesselSuccess(payload) {
  return {
    type: types.UPLOAD_DOC_VESSEL_SUCCESS,
    payload,
  };
}

function uploadDocVesselFailed() {
  return {
    type: types.UPLOAD_DOC_VESSEL_FAILED,
  };
}

export const GetAllVessel = (payload) => async (dispatch, getState, api) => {
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
    await Axios.get(`${API.corebaseUrl}${API.getVessel}${payload || ''}`, {
      headers: headers,
    }).then((response) => {
      if (response.data.code === 200) {
        dispatch(getAllVesselSuccess(response.data.data));
        dispatch(setNotLoading());
      } else {
        dispatch(getAllVesselFailed());
        const toastMessage = 'COULD NOT PROCESS YOUR REQUEST';
        if (!toast.isActive(toastMessage.toUpperCase())) {
          toast.error(toastMessage.toUpperCase(), { toastId: toastMessage });
        }
        dispatch(setNotLoading());
      }
    });
  } catch (error) {
    dispatch(getAllVesselFailed());

    const toastMessage = 'COULD NOT GET Vessel Data AT THIS TIME';
    if (!toast.isActive(toastMessage.toUpperCase())) {
      toast.error(toastMessage.toUpperCase(), { toastId: toastMessage });
    }
    dispatch(setNotLoading());
  }
};

export const GetVessel = (payload) => async (dispatch, getState, api) => {
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
    const response = await Axios.get(`${API.corebaseUrl}${API.getVessel}${payload}`, {
      headers: headers,
    });
    if (response.data.code === 200) {
      dispatch(setNotLoading());
      return response.data.data;
    } else {
      dispatch(getVesselFailed());
      const toastMessage = 'COULD NOT PROCESS YOUR REQUEST';
      if (!toast.isActive(toastMessage.toUpperCase())) {
        toast.error(toastMessage.toUpperCase(), { toastId: toastMessage });
      }
      dispatch(setNotLoading());
    }
  } catch (error) {
    dispatch(getVesselFailed());

    const toastMessage = 'COULD NOT GET Vessel Data AT THIS TIME';
    if (!toast.isActive(toastMessage.toUpperCase())) {
      toast.error(toastMessage.toUpperCase(), { toastId: toastMessage });
    }
    dispatch(setNotLoading());
  }
};

export const UpdateVessel = (payload) => async (dispatch, getState, api) => {
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
    const response = await Axios.put(`${API.corebaseUrl}${API.getVessel}`, payload, {
      headers: headers,
    });
    if (response.data.code === 200) {
      sessionStorage.setItem('quotationId', response.data.data.order.insurance);
      dispatch(updateVesselSuccess(response.data.data));
      dispatch(setNotLoading());
      return response.data.code;
    } else {
      dispatch(updateVesselFailed());
      const toastMessage = 'COULD NOT PROCESS YOUR REQUEST';
      if (!toast.isActive(toastMessage.toUpperCase())) {
        toast.error(toastMessage.toUpperCase(), { toastId: toastMessage });
      }
      dispatch(setNotLoading());
    }
  } catch (error) {
    dispatch(updateVesselFailed());

    const toastMessage = 'COULD NOT GET Vessel Data AT THIS TIME';
    if (!toast.isActive(toastMessage.toUpperCase())) {
      toast.error(toastMessage.toUpperCase(), { toastId: toastMessage });
    }
    dispatch(setNotLoading());
  }
};

export const UploadDocVessel = (payload) => async (dispatch, getState, api) => {
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
   await Axios.post(`${API.corebaseUrl}${API.getVessel}`, payload, {
      headers: headers,
    }).then((response) => {
      if (response.data.code === 200) {
        dispatch(uploadDocVesselSuccess(response.data.data));
        const toastMessage = 'DOCUMENT UPLOADED SUCCESSFULL';
        if (!toast.isActive(toastMessage.toUpperCase())) {
          toast.error(toastMessage.toUpperCase(), { toastId: toastMessage });
        }
        dispatch(setNotLoading());
      } else {
        dispatch(uploadDocVesselFailed());
        const toastMessage = 'COULD NOT PROCESS YOUR REQUEST';
        if (!toast.isActive(toastMessage.toUpperCase())) {
          toast.error(toastMessage.toUpperCase(), { toastId: toastMessage });
        }
        dispatch(setNotLoading());
      }
    });
  } catch (error) {
    dispatch(uploadDocVesselFailed());

    const toastMessage = 'COULD NOT UPLOAD Vessel Data AT THIS TIME';
    if (!toast.isActive(toastMessage.toUpperCase())) {
      toast.error(toastMessage.toUpperCase(), { toastId: toastMessage });
    }
    dispatch(setNotLoading());
  }
};
