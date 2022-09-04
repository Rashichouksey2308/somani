import * as types from './actionType'
import { toast } from 'react-toastify'
import Axios from 'axios'
import API from '../../utils/endpoints'
import Cookies from 'js-cookie'

function getComanyDetails() {
  return {
    type: types.GET_COMPANY_DETAIL,
  }
}

function getComanyDetailsSuccess(payload) {
  return {
    type: types.GET_COMPANY_DETAIL_SUCCESS,
    payload,
  }
}

function getComanyDetailsFailed() {
  return {
    type: types.GET_COMPANY_DETAIL_FAILED,
  }
}

function getCreditDetails() {
  return {
    type: types.GET_CREDIT_DETAIL,
  }
}

function getCreditDetailsSuccess(payload) {
  return {
    type: types.GET_CREDIT_DETAIL_SUCCESS,
    payload,
  }
}

function getCreditDetailsFailed() {
  return {
    type: types.GET_CREDIT_DETAIL_FAILED,
  }
}

function updateCompanyDetails() {
  return {
    type: types.UPDATE_COMPANY_DETAIL,
  }
}

function updateCompanyDetailsSuccess(payload) {
  return {
    type: types.UPDATE_COMPANY_DETAIL_SUCCESS,
    payload,
  }
}

function updateCompanyDetailsFailed() {
  return {
    type: types.UPDATE_COMPANY_DETAIL_FAILED,
  }
}

function refetchCombineKarza() {
  return {
    type: types.REFETCH_COMBINE_KARZA,
  }
}

function refetchCombineKarzaSuccess(payload) {
  return {
    type: types.REFETCH_COMBINE_KARZA_SUCCESS,
    payload,
  }
}

function refetchCombineKarzaFailed() {
  return {
    type: types.REFETCH_COMBINE_KARZA_FAILED,
  }
}

function getCaseDetails() {
  return {
    type: types.GET_CASE_DETAILS,
  }
}

function getCaseDetailsSuccess(payload) {
  return {
    type: types.GET_CASE_DETAILS_SUCCESS,
    payload,
  }
}

function getCaseDetailsFailed() {
  return {
    type: types.GET_CASE_DETAILS_FAILED,
  }
}

export const GetCompanyDetails = (payload) => (dispatch, getState, api) => {
  let cookie = Cookies.get('SOMANI')
  const decodedString = Buffer.from(cookie, 'base64').toString('ascii')
  console.log(payload.company, 'getDetails payload2')
  let [userId, refreshToken, jwtAccessToken] = decodedString.split('#')
  let headers = { authorization: jwtAccessToken, Cache: 'no-cache', 'Access-Control-Allow-Origin': '*' }

  try {
    Axios.post(`${API.corebaseUrl}${API.getCompanyDetails}`, payload, {
      headers: headers,
    }).then((response) => {
      if (response.data.code === 200) {
        dispatch(getComanyDetailsSuccess(response.data.data))
      } else {
        dispatch(getComanyDetailsFailed(response.data.data))
        let toastMessage = 'COULD NOT PROCESS YOUR REQUEST AT THIS TIME'
        if (!toast.isActive(toastMessage.toUpperCase())) {
          toast.error(toastMessage.toUpperCase(), { toastId: toastMessage })
        }
      }
    })
  } catch (error) {
    dispatch(getComanyDetailsFailed())

    let toastMessage = 'COULD NOT FETCH COMPANY DETAILS'
    if (!toast.isActive(toastMessage.toUpperCase())) {
      toast.error(toastMessage.toUpperCase(), { toastId: toastMessage })
    }
  }
}

export const GetCreditLimit = (payload) => (dispatch, getState, api) => {
  let cookie = Cookies.get('SOMANI')
  const decodedString = Buffer.from(cookie, 'base64').toString('ascii')

  let [userId, refreshToken, jwtAccessToken] = decodedString.split('#')
  let headers = { authorization: jwtAccessToken, Cache: 'no-cache', 'Access-Control-Allow-Origin': '*' }

  try {
    Axios.get(
      `${API.corebaseUrl}${API.creditLimit}?company=${payload.companyId}`,
      {
        headers: headers,
      },
    ).then((response) => {
      if (response.data.code === 200) {
        dispatch(getCreditDetailsSuccess(response.data.data))
      } else {
        dispatch(getCreditDetailsFailed(response.data.data))

        let toastMessage = 'COULD NOT FETCH CREDIT LIMIT'
        if (!toast.isActive(toastMessage.toUpperCase())) {
          toast.error(toastMessage.toUpperCase(), { toastId: toastMessage })
        }
      }
    })
  } catch (error) {
    dispatch(getCreditDetailsFailed())

    let toastMessage = 'COULD NOT PROCESS YOUR REQUEST AT THIS TIME'
    if (!toast.isActive(toastMessage.toUpperCase())) {
      toast.error(toastMessage.toUpperCase(), { toastId: toastMessage })
    }
  }
}

export const UpdateCompanyDetails = (payload) => (dispatch, getState, api) => {
  let cookie = Cookies.get('SOMANI')
  const decodedString = Buffer.from(cookie, 'base64').toString('ascii')

  let [userId, refreshToken, jwtAccessToken] = decodedString.split('#')
  let headers = { authorization: jwtAccessToken, Cache: 'no-cache', 'Access-Control-Allow-Origin': '*' }

  try {
    Axios.post(`${API.corebaseUrl}${API.updateCompanyDetails}`, payload, {
      headers: headers,
    }).then((response) => {
      if (response.data.code === 200) {
        dispatch(updateCompanyDetailsSuccess(response.data.data))
        let toastMessage = 'Successfully updated company details'
        if (!toast.isActive(toastMessage.toUpperCase())) {
          toast.success(toastMessage.toUpperCase(), { toastId: toastMessage })
        }
      } else {
        dispatch(updateCompanyDetailsFailed(response.data.data))
        let toastMessage = 'COULD NOT PROCESS YOUR REQUEST AT THIS TIME'
        if (!toast.isActive(toastMessage.toUpperCase())) {
          toast.error(toastMessage.toUpperCase(), { toastId: toastMessage })
        }
      }
    })
  } catch (error) {
    dispatch(updateCompanyDetailsFailed())

    let toastMessage = 'COULD NOT UPDATE COMPANY DETAILS'
    if (!toast.isActive(toastMessage.toUpperCase())) {
      toast.error(toastMessage.toUpperCase(), { toastId: toastMessage })
    }
  }
}

export const RefetchCombineKarza = (payload) => (dispatch, getState, api) => {
  let cookie = Cookies.get('SOMANI')
  const decodedString = Buffer.from(cookie, 'base64').toString('ascii')

  let [userId, refreshToken, jwtAccessToken] = decodedString.split('#')
  let headers = { authorization: jwtAccessToken, Cache: 'no-cache', 'Access-Control-Allow-Origin': '*' }

  try {
    Axios.post(`${API.corebaseUrl}${API.refetchCombineKarza}`, payload, {
      headers: headers,
    }).then((response) => {
      if (response.data.code === 200) {
        dispatch(refetchCombineKarzaSuccess(response.data.data))
      } else {
        dispatch(refetchCombineKarzaFailed(response.data.data))
        let toastMessage = 'COULD NOT PROCESS YOUR REQUEST AT THIS TIME'
        if (!toast.isActive(toastMessage.toUpperCase())) {
          toast.error(toastMessage.toUpperCase(), { toastId: toastMessage })
        }
      }
    })
  } catch (error) {
    dispatch(refetchCombineKarzaFailed())

    let toastMessage = 'COULD NOT FETCH DATA FROM KARZA'
    if (!toast.isActive(toastMessage.toUpperCase())) {
      toast.error(toastMessage.toUpperCase(), { toastId: toastMessage })
    }
  }
}

export const GetCaseDetails = (payload) => (dispatch, getState, api) => {
  let cookie = Cookies.get('SOMANI')
  const decodedString = Buffer.from(cookie, 'base64').toString('ascii')

  let [userId, refreshToken, jwtAccessToken] = decodedString.split('#')
  let headers = { authorization: jwtAccessToken, Cache: 'no-cache', 'Access-Control-Allow-Origin': '*' }

  try {
    Axios.post(`${API.corebaseUrl}${API.getCaseDetails}`, payload, {
      headers: headers,
    }).then((response) => {
      if (response.data.code === 200) {
        dispatch(getCaseDetailsSuccess(response.data.data))
      } else {
        dispatch(getCaseDetailsFailed(response.data.data))
        let toastMessage = 'COULD NOT PROCESS YOUR REQUEST AT THIS TIME'
        if (!toast.isActive(toastMessage.toUpperCase())) {
          toast.error(toastMessage.toUpperCase(), { toastId: toastMessage })
        }
      }
    })
  } catch (error) {
    dispatch(getCaseDetailsFailed())

    let toastMessage = 'COULD NOT FETCH COMPANY DETAILS'
    if (!toast.isActive(toastMessage.toUpperCase())) {
      toast.error(toastMessage.toUpperCase(), { toastId: toastMessage })
    }
  }
}
