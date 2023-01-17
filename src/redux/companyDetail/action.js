import * as types from './actionType';
import { toast } from 'react-toastify';
import Axios from 'axios';
import API from '../../utils/endpoints';
import Cookies from 'js-cookie';
import { setIsLoading, setNotLoading } from '../Loaders/action';
import { handleErrorToast, handleSuccessToast } from '@/utils/helpers/global';

function getComanyDetails() {
  return {
    type: types.GET_COMPANY_DETAIL,
  };
}
function getComanyDetailsSuccess(payload) {
  return {
    type: types.GET_COMPANY_DETAIL_SUCCESS,
    payload,
  };
}

function getComanyDetailsFailed() {
  return {
    type: types.GET_COMPANY_DETAIL_FAILED,
  };
}

function getCreditDetails() {
  return {
    type: types.GET_CREDIT_DETAIL,
  };
}

function getCreditDetailsSuccess(payload) {
  return {
    type: types.GET_CREDIT_DETAIL_SUCCESS,
    payload,
  };
}

function getCreditDetailsFailed() {
  return {
    type: types.GET_CREDIT_DETAIL_FAILED,
  };
}

function updateCompanyDetails() {
  return {
    type: types.UPDATE_COMPANY_DETAIL,
  };
}

function updateCompanyDetailsSuccess(payload) {
  return {
    type: types.UPDATE_COMPANY_DETAIL_SUCCESS,
    payload,
  };
}

function updateCompanyDetailsFailed() {
  return {
    type: types.UPDATE_COMPANY_DETAIL_FAILED,
  };
}

function refetchCombineKarza() {
  return {
    type: types.REFETCH_COMBINE_KARZA,
  };
}

function refetchCombineKarzaSuccess(payload) {
  return {
    type: types.REFETCH_COMBINE_KARZA_SUCCESS,
    payload,
  };
}

function refetchCombineKarzaFailed() {
  return {
    type: types.REFETCH_COMBINE_KARZA_FAILED,
  };
}

function getCaseDetails() {
  return {
    type: types.GET_CASE_DETAILS,
  };
}

function getCaseDetailsSuccess(payload) {
  return {
    type: types.GET_CASE_DETAILS_SUCCESS,
    payload,
  };
}

function getCaseDetailsFailed() {
  return {
    type: types.GET_CASE_DETAILS_FAILED,
  };
}

export const GetCompanyDetails = (payload, companyId) => async (dispatch, getState, api) => {
  try {
    dispatch(setIsLoading());
    dispatch(getComanyDetails());
    let cookie = Cookies.get('SOMANI');
    const decodedString = Buffer.from(cookie, 'base64').toString('ascii');

    let [userId, refreshToken, jwtAccessToken] = decodedString.split('#');
    let headers = { authorization: jwtAccessToken, Cache: 'no-cache' };
    if (companyId) {
      let response = await Axios.post(`${API.corebaseUrl}${API.getCamDetails}?company=${companyId}`, {
        headers: headers,
      });
    } else {
    }
    let response = await Axios.post(`${API.corebaseUrl}${API.getCompanyDetails}`, payload, {
      headers: headers,
    });
    if (response.data.code === 200) {
      dispatch(getComanyDetailsSuccess(response.data.data));
      dispatch(setNotLoading());
    } else {
      dispatch(getComanyDetailsFailed());
      handleErrorToast('COULD NOT PROCESS YOUR REQUEST AT THIS TIME');
      dispatch(setNotLoading());
    }
  } catch (error) {
    dispatch(getComanyDetailsFailed());
    handleErrorToast('COULD NOT FETCH COMPANY DETAILS');
    dispatch(setNotLoading());
  }
};

export const GetCreditLimit = (payload) => async (dispatch, getState, api) => {
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
    await Axios.get(`${API.corebaseUrl}${API.creditLimit}?company=${payload.companyId}`, {
      headers: headers,
    }).then((response) => {
      if (response.data.code === 200) {
        dispatch(getCreditDetailsSuccess(response.data.data));
        dispatch(setNotLoading());
      } else {
        dispatch(getCreditDetailsFailed());
        handleErrorToast('COULD NOT FETCH CREDIT LIMIT');
        dispatch(setNotLoading());
      }
    });
  } catch (error) {
    dispatch(getCreditDetailsFailed());
    handleErrorToast('COULD NOT PROCESS YOUR REQUEST AT THIS TIME');
    dispatch(setNotLoading());
  }
};

export const UpdateCompanyDetails = (payload) => async (dispatch, getState, api) => {
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
    await Axios.post(`${API.corebaseUrl}${API.updateCompanyDetails}`, payload, {
      headers: headers,
    }).then((response) => {
      if (response.data.code === 200) {
        dispatch(updateCompanyDetailsSuccess(response.data.data));
        handleSuccessToast('Successfully updated company details');
        dispatch(setNotLoading());
      } else {
        dispatch(updateCompanyDetailsFailed());
        handleErrorToast('COULD NOT PROCESS YOUR REQUEST AT THIS TIME');
        dispatch(setNotLoading());
      }
    });
  } catch (error) {
    dispatch(updateCompanyDetailsFailed());
    handleErrorToast('COULD NOT UPDATE COMPANY DETAILS');
    dispatch(setNotLoading());
  }
};

export const RefetchCombineKarza = (payload) => async (dispatch, getState, api) => {
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
    await Axios.post(`${API.corebaseUrl}${API.refetchCombineKarza}`, payload, {
      headers: headers,
    }).then((response) => {
      if (response.data.code === 200) {
        dispatch(refetchCombineKarzaSuccess(response.data.data));
        handleSuccessToast('The Company Data will Be Updated Shortly');
        dispatch(setNotLoading());
      } else {
        dispatch(refetchCombineKarzaFailed());
        handleErrorToast('COULD NOT PROCESS YOUR REQUEST AT THIS TIME');
        dispatch(setNotLoading());
      }
    });
  } catch (error) {
    dispatch(refetchCombineKarzaFailed());
    handleErrorToast('COULD NOT FETCH DATA FROM KARZA');
    dispatch(setNotLoading());
  }
};

export const GetCaseDetails = (payload) => async (dispatch, getState, api) => {
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
    await Axios.post(`${API.corebaseUrl}${API.getCaseDetails}`, payload, {
      headers: headers,
    }).then((response) => {
      if (response.data.code === 200) {
        dispatch(getCaseDetailsSuccess(response.data.data));
        dispatch(setNotLoading());
        if (
          response?.data.data.caseDetails.pdfDocumentsLink == null ||
          response?.data.data.caseDetails.pdfDocumentsLink == undefined
        )
          handleErrorToast('Document Not Available');
        if (response?.data.data.caseDetails.pdfDocumentsLink.length < 1) handleErrorToast('Document Not Available');
        else {
          window.open(response?.data.data.caseDetails.pdfDocumentsLink[0], '_blank', 'noopener,noreferrer');
        }
      } else {
        dispatch(getCaseDetailsFailed());
        handleErrorToast('COULD NOT PROCESS YOUR REQUEST AT THIS TIME');
        dispatch(setNotLoading());
      }
    });
  } catch (error) {
    dispatch(getCaseDetailsFailed());
    handleErrorToast('COULD NOT FETCH COMPANY DETAILS');
    dispatch(setNotLoading());
  }
};
