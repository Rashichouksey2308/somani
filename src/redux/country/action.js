import Axios from 'axios';
import API from '../../utils/endpoints';
import Cookies from 'js-cookie';
import * as types from './actionType';
import { toast } from 'react-toastify'
import  Router  from 'next/router';
import { setIsLoading, setNotLoading } from '../Loaders/action';
import { handleErrorToast, handleSuccessToast } from '@/utils/helpers/global';

function getCountry() {
  return {
    type: types.GET_COUNTRY,
  };
}

function getCountrySuccess(payload) {
  return {
    type: types.GET_COUNTRY_SUCCESS,
    payload,
  };
}

function getCountryFailed() {
  return {
    type: types.GET_COUNTRY_FAILED,
  };
}

function getAllCountry() {
  return {
    type: types.GET_ALL_COUNTRY,
  };
}

function getAllCountrySuccess(payload) {
  return {
    type: types.GET_ALL_COUNTRY_SUCCESS,
    payload,
  };
}

function getAllCountryFailed() {
  return {
    type: types.GET_ALL_COUNTRY_FAILED,
  };
}

function updateCountry() {
  return {
    type: types.UPDATE_COUNTRY,
  };
}

function updateCountrySuccess(payload) {
  return {
    type: types.UPDATE_COUNTRY_SUCCESS,
    payload,
  };
}

function updateCountryFailed() {
  return {
    type: types.UPDATE_COUNTRY_FAILED,
  };
}

function createCountry() {
  return {
    type: types.CREATE_COUNTRY,
  };
}

function createCountrySuccess(payload) {
  return {
    type: types.CREATE_COUNTRY_SUCCESS,
    payload,
  };
}

function createCountryFailed() {
  return {
    type: types.CREATE_COUNTRY_FAILED,
  };
}

// ******** Country Master Edit ******** //

function editCountryMasterSuccess(payload) {
  return {
    type: types.EDIT_COUNTRY_TABLE_DATA_MASTER_SUCCESS,
    payload,
  };
}

function editCountryMasterFailed(payload = {}) {
  return {
    type: types.EDIT_COUNTRY_TABLE_DATA_MASTER_FAILED,
    payload,
  };
}



export const GetAllCountry = (payload) => async (dispatch, getState, api) => {
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
    await Axios.get(`${API.corebaseUrl}${API.getCountry}${payload || ''}`, {
      headers: headers,
    })
      .then((response) => {
        if (response.data.code === 200) {
          dispatch(getAllCountrySuccess(response.data.data));
          dispatch(setNotLoading());
        } else {
          dispatch(getAllCountryFailed());
          handleErrorToast('COULD NOT PROCESS YOUR REQUEST');
          dispatch(setNotLoading());
        }
      })
  } catch (error) {
    dispatch(getAllCountryFailed());
    handleErrorToast('COULD NOT GET COUNTRY AT THIS TIME');
    dispatch(setNotLoading());
  }
};

export const GetCountry = (payload) => async (dispatch, getState, api) => {
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
    await Axios.get(`${API.corebaseUrl}${API.getCountry}${payload || ''}`, {
      headers: headers,
    })
      .then((response) => {
        if (response.data.code === 200) {
          dispatch(getCountrySuccess(response.data.data));
          dispatch(setNotLoading());
        } else {
          dispatch(getCountryFailed());
          handleErrorToast('COULD NOT PROCESS YOUR REQUEST');
          dispatch(setNotLoading());
        }
      })
  } catch (error) {
    dispatch(getCountryFailed());
    handleErrorToast('COULD NOT GET COUNTRY AT THIS TIME');
    dispatch(setNotLoading());
  }
};

export const CreateCountry = (payload) => async (dispatch, getState, api) => {
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
    await Axios.post(`${API.corebaseUrl}${API.getCountry}`, payload, {
      headers: headers,
    }).then((response) => {
      if (response.data.code === 200) {
        dispatch(createCountrySuccess(response.data.data));
        handleSuccessToast('created  SUCCESSFULLY');
        dispatch(setNotLoading());
      } else {
        dispatch(createCountryFailed());
        handleErrorToast('COULD NOT PROCESS YOUR REQUEST');
        dispatch(setNotLoading());
      }
    });
  } catch (error) {
    dispatch(createCountryFailed());
    handleErrorToast('COULD NOT PROCESS YOUR REQUEST AT THIS TIME');
    dispatch(setNotLoading());
  }
};

export const UpdateCountry = (payload) => async (dispatch, getState, api) => {
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
    await Axios.put(`${API.corebaseUrl}${API.getCountry}`, payload, {
      headers: headers,
    }).then((response) => {
      if (response.data.code === 200) {
        dispatch(updateCountrySuccess(response.data.data));
        handleSuccessToast('updated  SUCCESSFULLY');
        //   sessionStorage.removeItem('internalCompanyId')
        dispatch(setNotLoading());
      } else {
        dispatch(updateCountryFailed());
        handleErrorToast('COULD NOT PROCESS YOUR REQUEST');
        dispatch(setNotLoading());
      }
    });
  } catch (error) {
    dispatch(updateCountryFailed());
    handleErrorToast('COULD NOT UPDATE COUNTRY AT THIS TIME');
    dispatch(setNotLoading());
  }
};



//Country edit
export const editCountryMaster = (payload) => async (dispatch, getState, api) => {
  try {
    dispatch(setIsLoading());
    let cookie = Cookies.get('SOMANI');
    const decodedString = Buffer.from(cookie, 'base64').toString('ascii');

    let [, , jwtAccessToken] = decodedString.split('#');
    let headers = { authorization: jwtAccessToken, Cache: 'no-cache' };

    let response = await Axios.put(`${API.corebaseUrl}${API.editCountryMaster}`, payload, {
      headers: headers,
    });
    if (response.data.code === 200) {
      dispatch(editCountryMasterSuccess(response.data.data));
      let toastMessage = 'PORT EDITED SUCCESSFULLY';
      if (!toast.isActive(toastMessage.toUpperCase())) {
        toast.success(toastMessage.toUpperCase(), { toastId: toastMessage });
      }
      Router.reload();
      dispatch(setNotLoading());
    } else {
      dispatch(editCountryMasterFailed(response.data.data));
      let toastMessage = 'COULD NOT PROCESS YOUR REQUEST AT THIS TIME';
      if (!toast.isActive(toastMessage.toUpperCase())) {
        toast.error(toastMessage.toUpperCase(), { toastId: toastMessage });
      }
      dispatch(setNotLoading());
    }
  } catch (error) {
    dispatch(editCountryMasterFailed());

    let toastMessage = 'COULD NOT EDIT PORT DETAILS';
    if (!toast.isActive(toastMessage.toUpperCase())) {
      toast.error(toastMessage.toUpperCase(), { toastId: toastMessage });
    }
    dispatch(setNotLoading());
  }
};