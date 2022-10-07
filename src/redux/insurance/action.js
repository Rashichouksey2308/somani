import * as types from './actionType'
import Axios from 'axios'
import { toast } from 'react-toastify'
import API from '../../utils/endpoints'
import Cookies from 'js-cookie'
import router from 'next/router'

function getAllInsurance() {
  return {
    type: types.GET_ALL_INSURANCE,
  }
}
function getAllInsuranceSuccess(payload) {
  return {
    type: types.GET_ALL_INSURANCE_SUCCESSFULL,
    payload,
  }
}
function getAllInsuranceFailed() {
  return {
    type: types.GET_ALL_INSURANCE_FAILED,
  }
}

function createInsurance() {
  return {
    type: types.CREATE_INSURANCE,
  }
}
function createInsuranceSuccess(payload) {
  return {
    type: types.CREATE_INSURANCE_SUCCESSFULL,
    payload,
  }
}
function createInsuranceFailed() {
  return {
    type: types.CREATE_INSURANCE_FAILED,
  }
}

function updatingInsurance() {
  return {
    type: types.UPDATE_INSURANCE,
  }
}
function updateInsuranceSuccess(payload) {
  return {
    type: types.UPDATE_INSURANCE_SUCCESSFULL,
    payload,
  }
}
function updateInsuranceFailed() {
  return {
    type: types.UPDATE_INSURANCE_FAILED,
  }
}

function renewingInsurance() {
  return {
    type: types.RENEW_INSURANCE,
  }
}
function renewInsuranceSuccess(payload) {
  return {
    type: types.RENEW_INSURANCE_SUCCESSFULL,
    payload,
  }
}
function renewInsuranceFailed() {
  return {
    type: types.RENEW_INSURANCE_FAILED,
  }
}

function updateQuotation() {
  return {
    type: types.UPDATE_QUOTATION,
  }
}

function updateQuotationSuccess(payload) {
  return {
    type: types.UPDATE_QUOTATION_SUCCESSFULL,
    payload,
  }
}

function updateQuotationFailed() {
  return {
    type: types.UPDATE_QUOTATION_FAILED,
  }
}

export const GettingAllInsurance =
  (payload) => async (dispatch, getState, api) => {
    try {
      let cookie = Cookies.get('SOMANI')
      const decodedString = Buffer.from(cookie, 'base64').toString('ascii')

      let [userId, refreshToken, jwtAccessToken] = decodedString.split('#')
      var headers = { authorization: jwtAccessToken, Cache: 'no-cache' }
      Axios.get(
        `${API.corebaseUrl}${API.getInsurance}${payload ? payload : ''}`,
        {
          headers: headers,
        },
      ).then((response) => {
        if (response.data.code === 200) {
          dispatch(getAllInsuranceSuccess(response.data.data))
        } else {
          dispatch(getAllInsuranceFailed(response.data.data))
          let toastMessage = 'COULD NOT PROCESS YOUR REQUEST'
          if (!toast.isActive(toastMessage.toUpperCase())) {
            toast.error(toastMessage.toUpperCase(), { toastId: toastMessage })
          }
        }
      })
    } catch (error) {
      dispatch(getAllInsuranceFailed())

      let toastMessage = 'GET INSURANCE API FAILED'
      if (!toast.isActive(toastMessage.toUpperCase())) {
        toast.error(toastMessage.toUpperCase(), { toastId: toastMessage })
      }
    }
  }

export const CreateInsurance = (payload) => async (dispatch, getState, api) => {
  let cookie = Cookies.get('SOMANI')
  const decodedString = Buffer.from(cookie, 'base64').toString('ascii')

  let [userId, refreshToken, jwtAccessToken] = decodedString.split('#')
  var headers = { authorization: jwtAccessToken, Cache: 'no-cache' }
  try {
    Axios.get(`${API.corebaseUrl}${API.getInsurance}`, payload, {
      headers: headers,
    }).then((response) => {
      if (response.data.code === 200) {
        dispatch(createInsuranceSuccess(response.data.data))
        let toastMessage = 'INSURANC CREATED'
        if (!toast.isActive(toastMessage.toUpperCase())) {
          toast.success(toastMessage.toUpperCase(), { toastId: toastMessage })
        }
      } else {
        dispatch(createInsuranceFailed(response.data.data))
        let toastMessage = 'COULD NOT PROCESS YOUR REQUEST'
        if (!toast.isActive(toastMessage.toUpperCase())) {
          toast.error(toastMessage.toUpperCase(), { toastId: toastMessage })
        }
      }
    })
  } catch (error) {
    dispatch(createInsuranceFailed())

    let toastMessage = 'COULD NOT CREATE INSURANCE AT THIS TIME'
    if (!toast.isActive(toastMessage.toUpperCase())) {
      toast.error(toastMessage.toUpperCase(), { toastId: toastMessage })
    }
  }
}

export const UpdateInsurance = (payload) => async (dispatch, getState, api) => {
  let cookie = Cookies.get('SOMANI')
  const decodedString = Buffer.from(cookie, 'base64').toString('ascii')

  let [userId, refreshToken, jwtAccessToken] = decodedString.split('#')
  var headers = { authorization: jwtAccessToken, Cache: 'no-cache' }
  try {
    Axios.put(`${API.corebaseUrl}${API.getInsurance}`, payload, {
      headers: headers,
    }).then((response) => {
      if (response.data.code === 200) {
        dispatch(updateInsuranceSuccess(response.data))
        let toastMessage = 'SAVED SUCCESSFULLY'
        if (!toast.isActive(toastMessage.toUpperCase())) {
          toast.success(toastMessage.toUpperCase(), { toastId: toastMessage })
        }
        //   router.push('/margin-money')
      } else {
        dispatch(updateInsuranceFailed(response.data))
        let toastMessage = 'UPDATE REQUEST FAILED'
        if (!toast.isActive(toastMessage.toUpperCase())) {
          toast.error(toastMessage.toUpperCase(), { toastId: toastMessage })
        }
      }
    })
  } catch (error) {
    dispatch(updateInsuranceFailed())
    let toastMessage = 'UPDATE INSURANCE REQUEST FAILED'
    if (!toast.isActive(toastMessage.toUpperCase())) {
      toast.error(toastMessage.toUpperCase(), { toastId: toastMessage })
    }
  }
}

export const RenewInsurance = (payload) => async (dispatch, getState, api) => {
  let cookie = Cookies.get('SOMANI')
  const decodedString = Buffer.from(cookie, 'base64').toString('ascii')

  let [userId, refreshToken, jwtAccessToken] = decodedString.split('#')
  var headers = { authorization: jwtAccessToken, Cache: 'no-cache' }
  try {
    Axios.put(`${API.corebaseUrl}${API.renewInsurance}`, payload, {
      headers: headers,
    }).then((response) => {
      if (response.data.code === 200) {
        dispatch(renewInsuranceSuccess(response.data.data))
        let toastMessage = 'REQUEST SENT SUCCESSFULLY'
        if (!toast.isActive(toastMessage.toUpperCase())) {
          toast.success(toastMessage.toUpperCase(), { toastId: toastMessage })
        }
        //   router.push('/margin-money')
      } else {
        dispatch(renewInsuranceFailed(response.data.data))
        let toastMessage = 'RENEW REQUEST FAILED'
        if (!toast.isActive(toastMessage.toUpperCase())) {
          toast.error(toastMessage.toUpperCase(), { toastId: toastMessage })
        }
      }
    })
  } catch (error) {
    dispatch(renewInsuranceFailed())
    let toastMessage = 'RENEW INSURANCE REQUEST FAILED'
    if (!toast.isActive(toastMessage.toUpperCase())) {
      toast.error(toastMessage.toUpperCase(), { toastId: toastMessage })
    }
  }
}
export const UpdateQuotation = (payload) => async (dispatch, getState, api) => {
  let cookie = Cookies.get('SOMANI')
  const decodedString = Buffer.from(cookie, 'base64').toString('ascii')

  let [userId, refreshToken, jwtAccessToken] = decodedString.split('#')
  var headers = { authorization: jwtAccessToken, Cache: 'no-cache' }
  try {
    let response = await Axios.put(
      `${API.corebaseUrl}${API.updateQuotation}`,
      payload,
      {
        headers: headers,
      },
    )
    if (response.data.code === 200) {
      dispatch(updateQuotationSuccess(response.data))
      let toastMessage = 'SAVED SUCCESSFULLY'
      if (!toast.isActive(toastMessage.toUpperCase())) {
        toast.success(toastMessage.toUpperCase(), { toastId: toastMessage })
      }
      return response.data.code
      //   router.push('/margin-money')
    } else {
      dispatch(updateQuotationFailed(response.data))
      let toastMessage = 'UPDATE REQUEST FAILED'
      if (!toast.isActive(toastMessage.toUpperCase())) {
        toast.error(toastMessage.toUpperCase(), { toastId: toastMessage })
      }
    }
  } catch (error) {
    dispatch(updateQuotationFailed())
    let toastMessage = 'UPDATE QUOTATION REQUEST FAILED'
    if (!toast.isActive(toastMessage.toUpperCase())) {
      toast.error(toastMessage.toUpperCase(), { toastId: toastMessage })
    }
  }
}
