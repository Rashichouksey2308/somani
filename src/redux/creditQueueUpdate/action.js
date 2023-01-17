import Cookies from 'js-cookie';
import Axios from 'axios';
import API from '../../utils/endpoints';
import * as types from './actionType';

import { setIsLoading, setNotLoading } from '../Loaders/action';
import { handleErrorToast, handleSuccessToast } from '@/utils/helpers/global';

const errorMessage = {
  status: 400,
  message: 'Something went wrong',
};

function updatingCam() {
  return {
    type: types.UPDATE_CAM,
  };
}

function updatingCamSuccess() {
  return {
    type: types.UPDATE_CAM_SUCCESS,
  };
}

function updatingCamFailed() {
  return {
    type: types.UPDATE_CAM_FAILED,
  };
}

function gettingDocuments() {
  return {
    type: types.GET_DOCUMENT,
  };
}

function gettingDocumentsSuccess(payload) {
  return {
    type: types.GET_DOCUMENT_SUCCESS,
    payload,
  };
}

function gettingDocumentsFailed() {
  return {
    type: types.GET_DOCUMENT_FAILED,
  };
}

function addingDocuments() {
  return {
    type: types.ADD_DOCUMENT,
  };
}

function addingDocumentsSuccess(payload) {
  return {
    type: types.ADD_DOCUMENT_SUCCESS,
    payload,
  };
}

function addingDocumentsFailed() {
  return {
    type: types.ADD_DOCUMENT_FAILED,
  };
}

function deleteDocuments() {
  return {
    type: types.DELETE_DOCUMENT,
  };
}

function deleteDocumentsSuccess(payload) {
  return {
    type: types.DELETE_DOCUMENT_SUCCESS,
    payload,
  };
}

function deleteDocumentsFailed() {
  return {
    type: types.DELETE_DOCUMENT_FAILED,
  };
}

function changeModuleDocuments() {
  return {
    type: types.MOVE_DOCUMENT,
  };
}

function changeModuleDocumentsSuccess(payload) {
  return {
    type: types.MOVE_DOCUMENT_SUCCESS,
    payload,
  };
}

function changeModuleDocumentsFailed() {
  return {
    type: types.MOVE_DOCUMENT_FAILED,
  };
}

function VerifyingGst() {
  return {
    type: types.GET_GST_KARZA,
  };
}

function VerifyingGstSuccess(payload) {
  return {
    type: types.GET_GST_KARZA_SUCCESS,
    payload,
  };
}

function VerifyingGstFailed() {
  return {
    type: types.GET_GST_KARZA_FAILED,
  };
}

function VerifyingConsolidatedGst() {
  return {
    type: types.GET_CONSOLIDATED_GST_KARZA,
  };
}

function VerifyingConsolidatedGstSuccess(payload) {
  return {
    type: types.GET_CONSOLIDATED_GST_KARZA_SUCCESS,
    payload,
  };
}
function VerifyingConsolidatedGstFailed() {
  return {
    type: types.GET_CONSOLIDATED_GST_KARZA_FAILED,
  };
}

export const UpdateCam = (payload, message) => async (dispatch, getState, api) => {
  dispatch(setIsLoading());

  let cookie = Cookies.get('SOMANI');
  const decodedString = Buffer.from(cookie, 'base64').toString('ascii');

  const [userId, refreshToken, jwtAccessToken] = decodedString.split('#');
  var headers = { authorization: jwtAccessToken, Cache: 'no-cache' };
  try {
    const response = await Axios.put(`${API.corebaseUrl}${API.updateCam}`, payload, {
      headers: headers,
    });

    if (response.data.code === 200) {
      dispatch(updatingCamSuccess());
      sessionStorage.setItem('termsheetId', response.data.data.order._id);
      sessionStorage.setItem('termID', response.data.data.order.termsheet._id);
      sessionStorage.setItem('termOrdID', response.data.data.order._id);
      handleSuccessToast(message);
      dispatch(setNotLoading());
      return response.data.code;
    } else {
      dispatch(updatingCamFailed());
      handleErrorToast(response.data.message);
      dispatch(setNotLoading());
    }
  } catch (error) {
    dispatch(updatingCamFailed());
    handleErrorToast('COULD NOT PROCESS YOUR REQUEST');
    dispatch(setNotLoading());
  }
};

export const GetDocuments = (payload) => async (dispatch, getState, api) => {
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
    const response = await Axios.get(
      `${API.corebaseUrl}${API.getDocuments}${payload}`,
      {
        headers: headers,
      },
      payload,
    );
    if (response.data.code === 200) {
      dispatch(gettingDocumentsSuccess(response.data.data));
      dispatch(setNotLoading());
    } else {
      dispatch(gettingDocumentsFailed());
      dispatch(setNotLoading());
    }
  } catch (error) {
    dispatch(gettingDocumentsFailed());
    handleErrorToast('COULD NOT PROCESS YOUR REQUEST');
    dispatch(setNotLoading());
  }
};

export const VerifyGstKarza = (payload) => async (dispatch, getState, api) => {
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
    dispatch(VerifyingGst());

    // await Axios.post(`${API.corebaseUrl}${API.getConsolidatedGst}`, payload, {
      const response =  await Axios.post(`${API.corebaseUrl}${API.getGstKarza}`, payload, {
      headers: headers,
    });
    if (response.data.code === 200) {
      dispatch(VerifyingGstSuccess(response.data.data));
      dispatch(setNotLoading());
    } else {
      dispatch(VerifyingGstFailed());
      handleErrorToast(response.data.message);
      dispatch(setNotLoading());
    }
  } catch (error) {
    dispatch(VerifyingGstFailed());
    handleErrorToast('COULD NOT PROCESS YOUR REQUEST');
    dispatch(setNotLoading());
  }
};

export const getGstData = (payload) => async (dispatch, getState, api) => {
  try {
    dispatch(setIsLoading());
    let cookie = Cookies.get('SOMANI');

    const decodedString = Buffer.from(cookie, 'base64').toString('ascii');

    let [userId, refreshToken, jwtAccessToken] = decodedString.split('#');
    let headers = {
      authorization: jwtAccessToken,
      Cache: 'no-cache',
      'Access-Control-Allow-Origin': '*',
    };
    dispatch(VerifyingGst());

    await Axios.post(`${API.corebaseUrl}${API.sendGst}`, payload, {
      headers: headers,
    }).then((response) => {
      if (response.data.code === 200) {
        dispatch(VerifyingGstSuccess(response.data.data));
        dispatch(setNotLoading());
        handleSuccessToast('request sent successfully');
      } else {
        dispatch(VerifyingGstFailed());
        handleErrorToast(response.data.message);
        dispatch(setNotLoading());
      }
    });
  } catch (error) {
    dispatch(VerifyingGstFailed());
    handleErrorToast('COULD NOT PROCESS YOUR REQUEST');
    dispatch(setNotLoading());
  }
};

export const getConsolidatedGstData = (payload) => async (dispatch, getState, api) => {
  try {
    dispatch(setIsLoading());
    let cookie = Cookies.get('SOMANI');

    const decodedString = Buffer.from(cookie, 'base64').toString('ascii');

    let [userId, refreshToken, jwtAccessToken] = decodedString.split('#');
    let headers = {
      authorization: jwtAccessToken,
      Cache: 'no-cache',
      'Access-Control-Allow-Origin': '*',
    };
    dispatch(VerifyingConsolidatedGst());

    await Axios.post(`${API.corebaseUrl}${API.getConsolidatedGst}`, payload, {
      headers: headers,
    }).then((response) => {
      if (response.data.code === 200) {
        dispatch(VerifyingConsolidatedGstSuccess(response.data.data));
        dispatch(setNotLoading());
      } else {
        dispatch(VerifyingConsolidatedGstFailed());
        handleErrorToast(response.data.message);
        dispatch(setNotLoading());
      }
    });
  } catch (error) {
    dispatch(VerifyingConsolidatedGstFailed());
    handleErrorToast('COULD NOT PROCESS YOUR REQUEST');
    dispatch(setNotLoading());
  }
};

export const AddingDocument = (payload) => async (dispatch, getState, api) => {
  dispatch(setIsLoading());
  const cookie = Cookies.get('SOMANI');
  const decodedString = Buffer.from(cookie, 'base64').toString('ascii');
  const id = sessionStorage.getItem('orderID');

  const [userId, refreshToken, jwtAccessToken] = decodedString.split('#');
  const headers = {
    authorization: jwtAccessToken,

    'Content-Type': 'multipart/form-data',
  };

  try {
    let response = await Axios.post(`${API.corebaseUrl}${API.addDocuments}`, payload, {
      headers: headers,
    });
    if (response.data.code === 200) {
      dispatch(addingDocumentsSuccess(response.data.data));
      handleSuccessToast('Document Successfully Added');
      dispatch(setNotLoading());
      return response.data.code;
    } else {
      dispatch(addingDocumentsFailed());
      handleErrorToast(response.data.message);
      dispatch(setNotLoading());
    }
  } catch (error) {
    dispatch(addingDocumentsFailed());
    handleErrorToast('COULD NOT PROCESS YOUR REQUEST');
    dispatch(setNotLoading());
  }
};

export const DeleteDocument = (payload) => async (dispatch, getState, api) => {
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
    let response = await Axios.put(`${API.corebaseUrl}${API.deleteDocument}`, payload, {
      headers: headers,
    });
    if (response.data.code === 200) {
      dispatch(deleteDocumentsSuccess(response.data.data));
      handleSuccessToast('Document Successfully DELETED');
      let orderid = sessionStorage.getItem('DocRefetchId');
      orderid && dispatch(GetDocuments(`?order=${orderid}`));
      dispatch(setNotLoading());
    } else {
      dispatch(deleteDocumentsFailed());
      handleErrorToast('COULD NOT PROCESS YOUR REQUEST AT THIS TIME')
      dispatch(setNotLoading());
    }
  } catch (error) {
    dispatch(deleteDocumentsFailed());
    handleErrorToast('COULD NOT PROCESS YOUR REQUEST')
    dispatch(setNotLoading());
  }
};
export const changeModuleDocument = (payload) => async (dispatch, getState, api) => {
  dispatch(setIsLoading());
  const cookie = Cookies.get('SOMANI');
  const decodedString = Buffer.from(cookie, 'base64').toString('ascii');

  const [userId, refreshToken, jwtAccessToken] = decodedString.split('#');
  var headers = { authorization: jwtAccessToken, Cache: 'no-cache' };
  try {
    const response = await Axios.post(`${API.corebaseUrl}${API.changeDocModule}`, payload, {
      headers: headers,
    });
    if (response.data.code === 200) {
      dispatch(changeModuleDocumentsSuccess(response.data.data));
      handleSuccessToast('Document Successfully MOVED');
      let orderid = sessionStorage.getItem('DocRefetchId');
      orderid && dispatch(GetDocuments(`?order=${orderid}`));

      dispatch(setNotLoading());
    } else {
      dispatch(changeModuleDocumentsFailed());
     handleErrorToast('COULD NOT PROCESS YOUR REQUEST AT THIS TIME')
      dispatch(setNotLoading());
    }
  } catch (error) {
    dispatch(changeModuleDocumentsFailed());
   handleErrorToast('COULD NOT PROCESS YOUR REQUEST')
    dispatch(setNotLoading());
  }
};
