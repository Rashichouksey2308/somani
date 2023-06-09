import * as types from './actionType';
import Axios from 'axios';
import API from '../../utils/endpoints';
import Cookies from 'js-cookie';
import { setIsLoading, setNotLoading } from '../Loaders/action';
import { handleErrorToast } from '@/utils/helpers/global'

function viewingDocument() {
  return {
    type: types.VEIW_DOCUMENT,
  };
}

function viewingDocumentSuccess(payload) {
  return {
    type: types.VEIW_DOCUMENT_SUCCESS,
    payload,
  };
}

function viewingDocumentFailed() {
  return {
    type: types.VEIW_DOCUMENT_FAILED,
  };
}

export const ViewDocument = (payload) => async (dispatch, getState, api) => {
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
   await Axios.post(`${API.corebaseUrl}${API.viewDoc}`, payload, {
      headers: headers,
    }).then((response) => {
      if (response.data.code === 200) {
        dispatch(viewingDocumentSuccess(response.data.data));

        dispatch(setNotLoading());
        window.open(response.data.data.signedUrl, '_blank', 'noopener,noreferrer');
      } else {
        dispatch(viewingDocumentFailed());
        handleErrorToast('COULD NOT PROCESS YOUR REQUEST')
        dispatch(setNotLoading());
      }
    });
  } catch (error) {
    dispatch(viewingDocumentFailed());
    handleErrorToast('COULD NOT GET DATA AT THIS TIME')
    dispatch(setNotLoading());
  }
};
export const previewDocument = (payload) => async (dispatch, getState, api) => {
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
    const response = await Axios.post(`${API.corebaseUrl}${API.preview}`, payload, {
      headers: headers,
    });
    if (response.data.code === 200) {
      dispatch(viewingDocumentSuccess(response.data.data));

      dispatch(setNotLoading());
      window.open(response.data.data.signedUrl, '_blank', 'noopener,noreferrer');
    } else {
      dispatch(viewingDocumentFailed());
      handleErrorToast('COULD NOT PROCESS YOUR REQUEST')
      dispatch(setNotLoading());
    }
  } catch (error) {
    dispatch(viewingDocumentFailed());
    handleErrorToast('COULD NOT GET DATA AT THIS TIME')
    dispatch(setNotLoading());
  }
};
