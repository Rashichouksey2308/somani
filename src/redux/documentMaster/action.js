import Axios from 'axios';
import API from '../../utils/endpoints';
import { toast } from 'react-toastify'
import Cookies from 'js-cookie';
import * as types from './actionType';
import { setIsLoading, setNotLoading } from '../Loaders/action';
import  Router  from 'next/router';
import { handleErrorToast, handleSuccessToast } from '@/utils/helpers/global';

function getDocument() {
  return {
    type: types.GET_DOCUMENT,
  };
}

function getDocumentSuccess(payload) {
  return {
    type: types.GET_DOCUMENT_SUCCESS,
    payload,
  };
}

function getDocumentFailed() {
  return {
    type: types.GET_DOCUMENT_FAILED,
  };
}

function getAllDocument() {
  return {
    type: types.GET_ALL_DOCUMENT,
  };
}

function getAllDocumentSuccess(payload) {
  return {
    type: types.GET_ALL_DOCUMENT_SUCCESS,
    payload,
  };
}

function getAllDocumentFailed() {
  return {
    type: types.GET_ALL_DOCUMENT_FAILED,
  };
}

function updateDocument() {
  return {
    type: types.UPDATE_DOCUMENT,
  };
}

function updateDocumentSuccess(payload) {
  return {
    type: types.UPDATE_DOCUMENT_SUCCESS,
    payload,
  };
}

function updateDocumentFailed() {
  return {
    type: types.UPDATE_DOCUMENT_FAILED,
  };
}

function createDocument() {
  return {
    type: types.CREATE_DOCUMENT,
  };
}

function createDocumentSuccess(payload) {
  return {
    type: types.CREATE_DOCUMENT_SUCCESS,
    payload,
  };
}

function createDocumentFailed() {
  return {
    type: types.CREATE_DOCUMENT_FAILED,
  };
}

// ******** Document Master Edit ******** //

function editDocumentMasterSuccess(payload) {
  return {
    type: types.EDIT_DOCUMENT_TABLE_DATA_MASTER_SUCCESS,
    payload,
  };
}

function editDocumentMasterFailed(payload = {}) {
  return {
    type: types.EDIT_DOCUMENT_TABLE_DATA_MASTER_FAILED,
    payload,
  };
}

export const GetAllDocument = (payload) => async (dispatch, getState, api) => {
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
    await Axios.get(`${API.corebaseUrl}${API.getDocument}${payload || ''}`, {
      headers: headers,
    }).then((response) => {
      if (response.data.code === 200) {
        dispatch(getAllDocumentSuccess(response.data.data));
        dispatch(setNotLoading());
      } else {
        dispatch(getAllDocumentFailed());
        handleErrorToast('COULD NOT PROCESS YOUR REQUEST');
        dispatch(setNotLoading());
      }
    });
  } catch (error) {
    dispatch(getAllDocumentFailed());
    handleErrorToast('COULD NOT GET DOCUMENT AT THIS TIME');
    dispatch(setNotLoading());
  }
};

export const GetDocument = (payload) => async (dispatch, getState, api) => {
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
    await Axios.get(`${API.corebaseUrl}${API.getDocument}${payload || ''}`, {
      headers: headers,
    }).then((response) => {
      if (response.data.code === 200) {
        dispatch(getDocumentSuccess(response.data.data));
        dispatch(setNotLoading());
      } else {
        dispatch(getDocumentFailed());
        handleErrorToast('COULD NOT PROCESS YOUR REQUEST');
        dispatch(setNotLoading());
      }
    });
  } catch (error) {
    dispatch(getDocumentFailed());
    handleErrorToast('COULD NOT GET DOCUMENT AT THIS TIME');
    dispatch(setNotLoading());
  }
};

export const CreateDocument = (payload) => async (dispatch, getState, api) => {
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
    await Axios.post(`${API.corebaseUrl}${API.getDocument}`, payload, {
      headers: headers,
    }).then((response) => {
      if (response.data.code === 200) {
        dispatch(createDocumentSuccess(response.data.data));
        handleSuccessToast('created  SUCCESSFULLY');
        dispatch(setNotLoading());
      } else {
        dispatch(createDocumentFailed());
        handleErrorToast('COULD NOT PROCESS YOUR REQUEST');
        dispatch(setNotLoading());
      }
    });
  } catch (error) {
    dispatch(createDocumentFailed());
    handleErrorToast('COULD NOT PROCESS YOUR REQUEST AT THIS TIME');
    dispatch(setNotLoading());
  }
};

export const UpdateDocument = (payload) => async (dispatch, getState, api) => {
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
    await Axios.put(`${API.corebaseUrl}${API.getDocument}`, payload, {
      headers: headers,
    }).then((response) => {
      if (response.data.code === 200) {
        dispatch(updateDocumentSuccess(response.data.data));
        handleSuccessToast('updated  SUCCESSFULLY');
        sessionStorage.removeItem('documentMasterId');
        Router.push('/document-master');
        dispatch(setNotLoading());
      } else {
        dispatch(updateDocumentFailed());
        handleErrorToast('COULD NOT PROCESS YOUR REQUEST');
        dispatch(setNotLoading());
      }
    });
  } catch (error) {
    dispatch(updateDocumentFailed());
    handleErrorToast('COULD NOT UPDATE DOCUMENT AT THIS TIME');
    dispatch(setNotLoading());
  }
};

//Document edit
export const editDocumentMaster = (payload) => async (dispatch, getState, api) => {
  try {
    dispatch(setIsLoading());
    let cookie = Cookies.get('SOMANI');
    const decodedString = Buffer.from(cookie, 'base64').toString('ascii');

    let [, , jwtAccessToken] = decodedString.split('#');
    let headers = { authorization: jwtAccessToken, Cache: 'no-cache' };

    let response = await Axios.put(`${API.corebaseUrl}${API.editDocumentMaster}`, payload, {
      headers: headers,
    });
    if (response.data.code === 200) {
      dispatch(editDocumentMasterSuccess(response.data.data));
      let toastMessage = 'PORT EDITED SUCCESSFULLY';
      if (!toast.isActive(toastMessage.toUpperCase())) {
        toast.success(toastMessage.toUpperCase(), { toastId: toastMessage });
      }
      Router.reload();
      dispatch(setNotLoading());
    } else {
      dispatch(editDocumentMasterFailed(response.data.data));
      let toastMessage = 'COULD NOT PROCESS YOUR REQUEST AT THIS TIME';
      if (!toast.isActive(toastMessage.toUpperCase())) {
        toast.error(toastMessage.toUpperCase(), { toastId: toastMessage });
      }
      dispatch(setNotLoading());
    }
  } catch (error) {
    dispatch(editDocumentMasterFailed());

    let toastMessage = 'COULD NOT EDIT PORT DETAILS';
    if (!toast.isActive(toastMessage.toUpperCase())) {
      toast.error(toastMessage.toUpperCase(), { toastId: toastMessage });
    }
    dispatch(setNotLoading());
  }
};