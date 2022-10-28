import Cookies from 'js-cookie';
import Axios from 'axios';
import API from '../../utils/endpoints';
import * as types from './actionType';
import Router from 'next/router';
import { toast } from 'react-toastify';
import { setIsLoading, setNotLoading } from '../Loaders/action';
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




export const UpdateCam =
  (payload, message) => async (dispatch, getState, api) => {
    dispatch(setIsLoading());
    console.log(payload.status, 'payload');
    let cookie = Cookies.get('SOMANI');
    const decodedString = Buffer.from(cookie, 'base64').toString('ascii');

    let [userId, refreshToken, jwtAccessToken] = decodedString.split('#');
    var headers = { authorization: jwtAccessToken, Cache: 'no-cache' };
    try {
      let response = await Axios.put(
        `${API.corebaseUrl}${API.updateCam}`,
        payload,
        {
          headers: headers,
        },
      );
      console.log(response.data.code, 'response');
      if (response.data.code === 200) {
        dispatch(updatingCamSuccess(response.data.data));
        console.log(response.data.code, 'response.data.data.order');
        sessionStorage.setItem('termsheetId', response.data.data.order._id);
        sessionStorage.setItem(
          'termID',
          response.data.data.order.termsheet._id,
        );
        sessionStorage.setItem('termOrdID', response.data.data.order._id);
        let toastMessage = message;

        if (!toast.isActive(toastMessage.toUpperCase())) {
          toast.success(toastMessage.toUpperCase(), { toastId: toastMessage });
        }
        dispatch(setNotLoading());
        return response.data.code;
      } else {
        dispatch(updatingCamFailed(response.data.data));
        let toastMessage = response.data.message;
        if (!toast.isActive(toastMessage.toUpperCase())) {
          toast.error(toastMessage.toUpperCase(), { toastId: toastMessage });
        }
        dispatch(setNotLoading());
      }
    } catch (error) {
      dispatch(updatingCamFailed());
      let toastMessage = 'COULD NOT PROCESS YOUR REQUEST';
      if (!toast.isActive(toastMessage.toUpperCase())) {
        toast.error(toastMessage.toUpperCase(), { toastId: toastMessage });
      }
      dispatch(setNotLoading());
    }
  };

export const GetDocuments = (payload) => async (dispatch, getState, api) => {
  try {
    dispatch(setIsLoading());
    let cookie = Cookies.get('SOMANI');
    const decodedString = Buffer.from(cookie, 'base64').toString('ascii');
    console.log('here in getDocuments');
    let [userId, refreshToken, jwtAccessToken] = decodedString.split('#');
    let headers = {
      authorization: jwtAccessToken,
      Cache: 'no-cache',
      'Access-Control-Allow-Origin': '*',
    };
    Axios.get(
      `${API.corebaseUrl}${API.getDocuments}${payload}`,
      {
        headers: headers,
      },
      payload,
    ).then((response) => {
      if (response.data.code === 200) {
        dispatch(gettingDocumentsSuccess(response.data.data));
        dispatch(setNotLoading());
      } else {
        dispatch(gettingDocumentsFailed(response.data.data));
        dispatch(setNotLoading());
      }
    });
  } catch (error) {
    dispatch(gettingDocumentsFailed());
    let toastMessage = 'COULD NOT PROCESS YOUR REQUEST';
    if (!toast.isActive(toastMessage.toUpperCase())) {
      toast.error(toastMessage.toUpperCase(), { toastId: toastMessage });
    }
    dispatch(setNotLoading());
  }
};

export const VerifyGstKarza = (payload) => async (dispatch, getState, api) => {
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

    // Axios.post(`${API.corebaseUrl}${API.getConsolidatedGst}`, payload, {
    Axios.post(`${API.corebaseUrl}${API.getGstKarza}`, payload, {
      headers: headers,
    }).then((response) => {
      if (response.data.code === 200) {
        dispatch(VerifyingGstSuccess(response.data.data));
        dispatch(setNotLoading());
      } else {
        dispatch(VerifyingGstFailed(response.data.data));
        let toastMessage = response.data.message;
        if (!toast.isActive(toastMessage.toUpperCase())) {
          toast.error(toastMessage.toUpperCase(), { toastId: toastMessage });
        }
        dispatch(setNotLoading());
      }
    });
  } catch (error) {
    dispatch(VerifyingGstFailed());
    let toastMessage = 'COULD NOT PROCESS YOUR REQUEST';
    if (!toast.isActive(toastMessage.toUpperCase())) {
      toast.error(toastMessage.toUpperCase(), { toastId: toastMessage });
    }
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

    Axios.post(`${API.corebaseUrl}${API.getGst}`, payload, {
      headers: headers,
    }).then((response) => {
      if (response.data.code === 200) {
        dispatch(VerifyingGstSuccess(response.data.data));
        dispatch(setNotLoading());
        let toastMessage = 'request sent successfully';
        if (!toast.isActive(toastMessage.toUpperCase())) {
          toast.error(toastMessage.toUpperCase(), { toastId: toastMessage });
        }
      } else {
        dispatch(VerifyingGstFailed(response.data.data));
        let toastMessage = response.data.message;
        if (!toast.isActive(toastMessage.toUpperCase())) {
          toast.error(toastMessage.toUpperCase(), { toastId: toastMessage });
        }
        dispatch(setNotLoading());
      }
    });
  } catch (error) {
    dispatch(VerifyingGstFailed());
    let toastMessage = 'COULD NOT PROCESS YOUR REQUEST';
    if (!toast.isActive(toastMessage.toUpperCase())) {
      toast.error(toastMessage.toUpperCase(), { toastId: toastMessage });
    }
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

    Axios.post(`${API.corebaseUrl}${API.getConsolidatedGst}`, payload, {
      headers: headers,
    }).then((response) => {
      if (response.data.code === 200) {
        dispatch(VerifyingConsolidatedGstSuccess(response.data.data));
        dispatch(setNotLoading());
      } else {
        dispatch(VerifyingConsolidatedGstFailed(response.data.data));
        let toastMessage = response.data.message;
        if (!toast.isActive(toastMessage.toUpperCase())) {
          toast.error(toastMessage.toUpperCase(), { toastId: toastMessage });
        }
        dispatch(setNotLoading());
      }
    });
  } catch (error) {
    dispatch(VerifyingConsolidatedGstFailed());
    let toastMessage = 'COULD NOT PROCESS YOUR REQUEST';
    if (!toast.isActive(toastMessage.toUpperCase())) {
      toast.error(toastMessage.toUpperCase(), { toastId: toastMessage });
    }
    dispatch(setNotLoading());
  }
};

export const AddingDocument = (payload) => async (dispatch, getState, api) => {
  dispatch(setIsLoading());
  let cookie = Cookies.get('SOMANI');
  const decodedString = Buffer.from(cookie, 'base64').toString('ascii');
  const id = sessionStorage.getItem('docFetchID');

  let [userId, refreshToken, jwtAccessToken] = decodedString.split('#');
  let headers = {
    authorization: jwtAccessToken,
    // Cache: 'no-cache',
    'Content-Type': 'multipart/form-data',
  };

  try {
    Axios.post(`${API.corebaseUrl}${API.addDocuments}`, payload, {
      headers: headers,
    }).then((response) => {
      console.log(response, 'response add docu');
      if (response.data.code === 200) {
        dispatch(addingDocumentsSuccess(response.data.data));
        dispatch(GetDocuments(`?order=${id}`));
        let toastMessage = 'Document Successfully Added';
        if (!toast.isActive(toastMessage.toUpperCase())) {
          toast.success(toastMessage.toUpperCase(), { toastId: toastMessage });
        }
        dispatch(setNotLoading());
      } else {
        dispatch(addingDocumentsFailed(response.data.data));
        let toastMessage = 'COULD NOT PROCESS YOUR REQUEST AT THIS TIME';
        if (!toast.isActive(toastMessage.toUpperCase())) {
          toast.error(toastMessage.toUpperCase(), { toastId: toastMessage });
        }
        dispatch(setNotLoading());
      }
    });
  } catch (error) {
    dispatch(addingDocumentsFailed());
    let toastMessage = 'COULD NOT PROCESS YOUR REQUEST';
    if (!toast.isActive(toastMessage.toUpperCase())) {
      toast.error(toastMessage.toUpperCase(), { toastId: toastMessage });
    }
    dispatch(setNotLoading());
  }
};

export const DeleteDocument = (payload) => async (dispatch, getState, api) => {
  dispatch(setIsLoading());
  let cookie = Cookies.get('SOMANI');
  const decodedString = Buffer.from(cookie, 'base64').toString('ascii');

  let [userId, refreshToken, jwtAccessToken] = decodedString.split('#');
  let headers = {
    authorization: jwtAccessToken,
    Cache: 'no-cache',
    'Access-Control-Allow-Origin': '*',
  };
  try {
    Axios.put(`${API.corebaseUrl}${API.deleteDocument}`, payload, {
      headers: headers,
    }).then((response) => {
      if (response.data.code === 200) {
        dispatch(deleteDocumentsSuccess(response.data.data));
        let toastMessage = 'Document Successfully DELETED';
        if (!toast.isActive(toastMessage.toUpperCase())) {
          toast.success(toastMessage.toUpperCase(), { toastId: toastMessage });
        }
        dispatch(setNotLoading());
      } else {
        dispatch(deleteDocumentsFailed(response.data.data));
        let toastMessage = 'COULD NOT PROCESS YOUR REQUEST AT THIS TIME';
        if (!toast.isActive(toastMessage.toUpperCase())) {
          toast.error(toastMessage.toUpperCase(), { toastId: toastMessage });
        }
        dispatch(setNotLoading());
      }
    });
  } catch (error) {
    dispatch(deleteDocumentsFailed());
    let toastMessage = 'COULD NOT PROCESS YOUR REQUEST';
    if (!toast.isActive(toastMessage.toUpperCase())) {
      toast.error(toastMessage.toUpperCase(), { toastId: toastMessage });
    }
    dispatch(setNotLoading());
  }
};
export const changeModuleDocument =
  (payload) => async (dispatch, getState, api) => {
    dispatch(setIsLoading());
    let cookie = Cookies.get('SOMANI');
    const decodedString = Buffer.from(cookie, 'base64').toString('ascii');

    let [userId, refreshToken, jwtAccessToken] = decodedString.split('#');
    var headers = { authorization: jwtAccessToken, Cache: 'no-cache' };
    try {
      Axios.post(`${API.corebaseUrl}${API.changeDocModule}`, payload, {
        headers: headers,
      }).then((response) => {
        if (response.data.code === 200) {
          dispatch(changeModuleDocumentsSuccess(response.data.data));
          let toastMessage = 'Document Successfully MOVED';
          if (!toast.isActive(toastMessage.toUpperCase())) {
            toast.success(toastMessage.toUpperCase(), {
              toastId: toastMessage,
            });
          }
          dispatch(setNotLoading());
        } else {
          dispatch(changeModuleDocumentsFailed(response.data.data));
          let toastMessage = 'COULD NOT PROCESS YOUR REQUEST AT THIS TIME';
          if (!toast.isActive(toastMessage.toUpperCase())) {
            toast.error(toastMessage.toUpperCase(), { toastId: toastMessage });
          }
          dispatch(setNotLoading());
        }
      });
    } catch (error) {
      dispatch(changeModuleDocumentsFailed());
      let toastMessage = 'COULD NOT PROCESS YOUR REQUEST';
      if (!toast.isActive(toastMessage.toUpperCase())) {
        toast.error(toastMessage.toUpperCase(), { toastId: toastMessage });
      }
      dispatch(setNotLoading());
    }
  };
