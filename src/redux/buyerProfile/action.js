import * as types from './actionType'
import API from '../../utils/endpoints'
import Axios from 'axios'
import Cookies from 'js-cookie'
import { toast } from 'react-toastify'
import { GetAllOrders } from 'redux/registerBuyer/action'
import { GetCompanyDetails } from 'redux/companyDetail/action'
import { setIsLoading, setNotLoading } from '../Loaders/action'
import Router from 'next/router'

function updateCredit () {
  return {
    type: types.UPDATE_CREDIT
  }
}

function updateCreditSuccess () {
  return {
    type: types.UPDATE_CREDIT_SUCCESSFULL
  }
}

function updateCreditFailed () {
  return {
    type: types.UPDATE_CREDIT_FAILED
  }
}

function updateCreditCal () {
  return {
    type: types.UPDATE_CREDIT_CALCULATE
  }
}

function updateCreditCalSuccess (payload) {
  return {
    type: types.UPDATE_CREDIT_CALCULATE_SUCCESSFULL,
    payload
  }
}

function updateCreditCalFailed () {
  return {
    type: types.UPDATE_CREDIT_CALCULATE_FAILED
  }
}

function updateOrder () {
  return {
    type: types.UPDATE_ORDER
  }
}

function updateOrderSuccess () {
  return {
    type: types.UPDATE_ORDER_SUCCESSFULL
  }
}

function updateOrderFailed () {
  return {
    type: types.UPDATE_ORDER_FAILED
  }
}

// ******** Search leads  ***********/////

function searchLeads () {
  return {
    type: types.SEARCH_LEADS
  }
}

function searchLeadsSuccess (payload) {
  return {
    type: types.SEARCH_LEADS_SUCCESSFULL,
    payload
  }
}

function searchLeadsFailed () {
  return {
    type: types.SEARCH_LEADS_FAILED
  }
}

// ******** get Termsheet ***********/////

function gettermsheet () {
  return {
    type: types.GET_TERMSHEET
  }
}

function gettermsheetsuccess (payload) {
  return {
    type: types.GET_TERMSHEET_SUCCESSFULL,
    payload
  }
}

function gettermsheetfailed () {
  return {
    type: types.GET_TERMSHEET_FAILED
  }
}

//* *********get All Termsheets */////

function getALLTermsheet () {
  return {
    type: types.GET_ALL_TERMSHEET
  }
}

function getALLTermsheetsuccess (payload) {
  return {
    type: types.GET_ALL_TERMSHEET_SUCCESSFULL,
    payload
  }
}

function getALLTermsheetfailed () {
  return {
    type: types.GET_ALL_TERMSHEET_FAILED
  }
}

// ******** update Termsheet ***********/////

function updatetermsheet () {
  return {
    type: types.UPDATE_TERMSHEET
  }
}

function updatetermsheetsuccess (payload) {
  return {
    type: types.UPDATE_TERMSHEET_SUCCESSFULL,
    payload
  }
}

function updatetermsheetfailed () {
  return {
    type: types.UPDATE_TERMSHEET_FAILED
  }
}

function shareTermsheetEmail () {
  return {
    type: types.UPDATE_TERMSHEET
  }
}

function shareTermsheetEmailsuccess (payload) {
  return {
    type: types.UPDATE_TERMSHEET_SUCCESSFULL,
    payload
  }
}

function shareTermsheetEmailfailed () {
  return {
    type: types.UPDATE_TERMSHEET_FAILED
  }
}

export const SearchLeads = (payload) => async (dispatch, getState, api) => {
  dispatch(setIsLoading())
  const cookie = Cookies.get('SOMANI')
  const decodedString = Buffer.from(cookie, 'base64').toString('ascii')

  const [userId, refreshToken, jwtAccessToken] = decodedString.split('#')
  const headers = { authorization: jwtAccessToken }
  try {
    dispatch(searchLeads())
    Axios.get(`${API.corebaseUrl}${API.search}${payload}`, {
      headers: headers
    }).then((response) => {
      if (response.data.code === 200) {
        dispatch(searchLeadsSuccess(response.data))
        dispatch(setNotLoading())
      } else {
        dispatch(searchLeadsFailed(response.data))
        const toastMessage = 'Search Leads request Failed'
        if (!toast.isActive(toastMessage.toUpperCase())) {
          toast.error(toastMessage.toUpperCase(), { toastId: toastMessage })
        }
        dispatch(setNotLoading())
      }
    })
  } catch (error) {
    dispatch(searchLeadsFailed())
    const toastMessage = 'Search Leads request Failed'
    if (!toast.isActive(toastMessage.toUpperCase())) {
      toast.error(toastMessage.toUpperCase(), { toastId: toastMessage })
    }
    dispatch(setNotLoading())
  }
}

export const UpdateCredit = (payload) => async (dispatch, getState, api) => {
  // dispatch(updateCredit()
  dispatch(setIsLoading())
  const cookie = Cookies.get('SOMANI')
  const decodedString = Buffer.from(cookie, 'base64').toString('ascii')

  const [userId, refreshToken, jwtAccessToken] = decodedString.split('#')
  const headers = {
    authorization: jwtAccessToken,
    Cache: 'no-cache',
    'Access-Control-Allow-Origin': '*'
  }
  try {
    Axios.put(`${API.corebaseUrl}${API.updateCredit}`, payload, {
      headers: headers
    }).then((response) => {
      if (response.data.code === 200) {
        dispatch(updateCreditSuccess(response.data))
        const toastMessage = 'UPDATE REQUEST SENT'
        if (!toast.isActive(toastMessage.toUpperCase())) {
          toast.success(toastMessage.toUpperCase(), { toastId: toastMessage })
        }
        const id1 = sessionStorage.getItem('orderID')
        const id2 = sessionStorage.getItem('companyID')
        dispatch(GetAllOrders({ orderId: id1 }))
        dispatch(GetCompanyDetails({ company: id2 }))

        dispatch(setNotLoading())
      } else {
        dispatch(updateCreditFailed(response.data))
        const toastMessage = 'UPDATE REQUEST FAILED'
        if (!toast.isActive(toastMessage.toUpperCase())) {
          toast.error(toastMessage.toUpperCase(), { toastId: toastMessage })
        }
        dispatch(setNotLoading())
      }
    })
  } catch (error) {
    dispatch(updateCreditFailed())
    const toastMessage = 'UPDATE CREDIT REQUEST FAILED'
    if (!toast.isActive(toastMessage.toUpperCase())) {
      toast.error(toastMessage.toUpperCase(), { toastId: toastMessage })
    }
    dispatch(setNotLoading())
  }
}

export const UpdateCreditCalculate =
  (payload) => async (dispatch, getState, api) => {
    dispatch(setIsLoading())
    const cookie = Cookies.get('SOMANI')
    const decodedString = Buffer.from(cookie, 'base64').toString('ascii')

    const [userId, refreshToken, jwtAccessToken] = decodedString.split('#')
    var headers = { authorization: jwtAccessToken, Cache: 'no-cache' }
    try {
      Axios.post(`${API.corebaseUrl}${API.updateCreditCalculate}`, payload, {
        headers: headers
      }).then((response) => {
        if (response.data.code === 200) {
          dispatch(updateCreditCalSuccess(response.data.data))
          const toastMessage = 'UPDATE REQUEST SENT'
          if (!toast.isActive(toastMessage.toUpperCase())) {
            toast.success(toastMessage.toUpperCase(), {
              toastId: toastMessage
            })
          }
          const id1 = sessionStorage.getItem('orderID')
          const id2 = sessionStorage.getItem('companyID')
          dispatch(GetAllOrders({ orderId: id1 }))
          dispatch(GetCompanyDetails({ company: id2 }))
          dispatch(setNotLoading())
        } else {
          dispatch(updateCreditCalFailed(response.data.data))
          const toastMessage = 'UPDATE REQUEST FAILED'
          if (!toast.isActive(toastMessage.toUpperCase())) {
            toast.error(toastMessage.toUpperCase(), { toastId: toastMessage })
          }
          dispatch(setNotLoading())
        }
      })
    } catch (error) {
      dispatch(updateCreditCalFailed())
      const toastMessage = 'UPDATE CREDIT CALCULATE REQUEST FAILED'
      if (!toast.isActive(toastMessage.toUpperCase())) {
        toast.error(toastMessage.toUpperCase(), { toastId: toastMessage })
      }
      dispatch(setNotLoading())
    }
  }

export const UpdateOrderShipment =
  (payload) => async (dispatch, getState, api) => {
    //   dispatch(updateOrder()

    dispatch(setIsLoading())
    const cookie = Cookies.get('SOMANI')
    const decodedString = Buffer.from(cookie, 'base64').toString('ascii')

    const [userId, refreshToken, jwtAccessToken] = decodedString.split('#')
    const headers = {
      authorization: jwtAccessToken,
      Cache: 'no-cache',
      'Access-Control-Allow-Origin': '*'
    }
    try {
      Axios.put(`${API.corebaseUrl}${API.orderDetailUpdate}`, payload, {
        headers: headers
      }).then((response) => {
        if (response.data.code === 200) {
          dispatch(updateOrderSuccess(response.data.data))
          const toastMessage = 'REQUEST SUBMITTED'
          if (!toast.isActive(toastMessage.toUpperCase())) {
            toast.success(toastMessage.toUpperCase(), {
              toastId: toastMessage
            })
          }
          const id1 = sessionStorage.getItem('orderID')
          const id2 = sessionStorage.getItem('companyID')
          dispatch(GetAllOrders({ orderId: id1 }))
          dispatch(GetCompanyDetails({ company: id2 }))
          dispatch(setNotLoading())
        } else {
          dispatch(updateOrderFailed(response.data.data))
          const toastMessage = 'UPDATE REQUEST FAILED'
          if (!toast.isActive(toastMessage.toUpperCase())) {
            toast.error(toastMessage.toUpperCase(), { toastId: toastMessage })
          }
          dispatch(setNotLoading())
        }
      })
    } catch (error) {
      dispatch(updateOrderFailed())
      const toastMessage = 'UPDATE ORDER REQUEST FAILED'
      if (!toast.isActive(toastMessage.toUpperCase())) {
        toast.error(toastMessage.toUpperCase(), { toastId: toastMessage })
      }
      dispatch(setNotLoading())
    }
  }

/// ///////********** termsheet *************/////////

export const GetTermsheet = (payload) => async (dispatch, getState, api) => {
  try {
    dispatch(setIsLoading())
    dispatch(gettermsheet())
    const cookie = Cookies.get('SOMANI')
    const decodedString = Buffer.from(cookie, 'base64').toString('ascii')

    const [userId, refreshToken, jwtAccessToken] = decodedString.split('#')
    var headers = { authorization: jwtAccessToken, Cache: 'no-cache' }
    const response = await Axios.get(
      `${API.corebaseUrl}${API.gettermsheet}${payload || ''}`,
      { headers: headers }
    )
    if (response.data.code === 200) {
      dispatch(gettermsheetsuccess(response.data.data))
      dispatch(setNotLoading())
    } else {
      dispatch(gettermsheetfailed(response.data.data))
      const toastMessage = 'Could not fetch Termsheet'
      if (!toast.isActive(toastMessage.toUpperCase())) {
        toast.error(toastMessage.toUpperCase(), { toastId: toastMessage })
      }
      dispatch(setNotLoading())
    }
  } catch (error) {
    dispatch(gettermsheetfailed())

    const toastMessage = 'Get Termsheet API Failed'
    if (!toast.isActive(toastMessage.toUpperCase())) {
      toast.error(toastMessage.toUpperCase(), { toastId: toastMessage })
    }
    dispatch(setNotLoading())
  }
}

export const getAllTermsheet = (payload) => async (dispatch, getState, api) => {
  try {
    dispatch(setIsLoading())
    dispatch(getALLTermsheet())
    const cookie = Cookies.get('SOMANI')
    const decodedString = Buffer.from(cookie, 'base64').toString('ascii')

    const [userId, refreshToken, jwtAccessToken] = decodedString.split('#')
    const headers = {
      authorization: jwtAccessToken,
      Cache: 'no-cache',
      'Access-Control-Allow-Origin': '*'
    }
    Axios.get(
      `${API.corebaseUrl}${API.gettermsheet}${payload || ''}`,
      {
        headers: headers
      }
    ).then((response) => {
      if (response.data.code === 200) {
        dispatch(getALLTermsheetsuccess(response.data.data))
        dispatch(setNotLoading())
      } else {
        dispatch(getALLTermsheetfailed(response.data.data))
        const toastMessage = 'Could not fetch Termsheet'
        if (!toast.isActive(toastMessage.toUpperCase())) {
          toast.error(toastMessage.toUpperCase(), { toastId: toastMessage })
        }
        dispatch(setNotLoading())
      }
    })
  } catch (error) {
    dispatch(gettermsheetfailed())
    const toastMessage = 'Get Termsheet API Failed'
    if (!toast.isActive(toastMessage.toUpperCase())) {
      toast.error(toastMessage.toUpperCase(), { toastId: toastMessage })
    }
    dispatch(setNotLoading())
  }
}

/// //////******** Update Termsheet *******////////

export const updateTermsheet = (payload) => async (dispatch, getState, api) => {
  dispatch(setIsLoading())
  const cookie = Cookies.get('SOMANI')
  const decodedString = Buffer.from(cookie, 'base64').toString('ascii')

  const [userId, refreshToken, jwtAccessToken] = decodedString.split('#')
  const headers = {
    authorization: jwtAccessToken,
    Cache: 'no-cache',
    'Access-Control-Allow-Origin': '*'
  }
  try {
    const response = await Axios.put(
      `${API.corebaseUrl}${API.gettermsheet}`,
      payload.UpdatedTermsheet,
      {
        headers: headers
      }
    )
    if (response.data.code === 200) {
      dispatch(updatetermsheetsuccess(response.data))
      const toastMessage = 'TERMSHEET UPDATED SUCCESSFULL'
      if (!toast.isActive(toastMessage.toUpperCase())) {
        toast.success(toastMessage.toUpperCase(), { toastId: toastMessage })
      }
      if (payload.updateObj == 'Preview') {
        Router.push('/termsheet-preview')
      }
      dispatch(setNotLoading())
      return response.data.code
    } else {
      dispatch(updatetermsheetfailed(response.data))
      const toastMessage = response.data.message
      if (!toast.isActive(toastMessage.toUpperCase())) {
        toast.error(toastMessage.toUpperCase(), { toastId: toastMessage })
      }
      dispatch(setNotLoading())
    }
  } catch (error) {
    dispatch(updatetermsheetfailed())
    const toastMessage = 'UPDATE TERMSHEET REQUEST FAILED'
    if (!toast.isActive(toastMessage.toUpperCase())) {
      toast.error(toastMessage.toUpperCase(), { toastId: toastMessage })
    }
    dispatch(setNotLoading())
  }
}

export const sharingTermsheetEmail =
  (payload) => async (dispatch, getState, api) => {
    dispatch(setIsLoading())
    const cookie = Cookies.get('SOMANI')
    const decodedString = Buffer.from(cookie, 'base64').toString('ascii')

    const [userId, refreshToken, jwtAccessToken] = decodedString.split('#')
    var headers = { authorization: jwtAccessToken, Cache: 'no-cache' }
    try {
      const response = await Axios.put(
        `${API.corebaseUrl}${API.termsheetshareemial}`,
        payload,
        {
          headers: headers
        }
      )
      if (response.data.code === 200) {
        dispatch(shareTermsheetEmailsuccess(response.data))
        const toastMessage = 'TERMSHEET UPDATED SUCCESSFULL'
        if (!toast.isActive(toastMessage.toUpperCase())) {
          toast.success(toastMessage.toUpperCase(), { toastId: toastMessage })
        }
        dispatch(setNotLoading())
        return response.data.code
      } else {
        dispatch(shareTermsheetEmailfailed(response.data))
        const toastMessage = response.data.message
        if (!toast.isActive(toastMessage.toUpperCase())) {
          toast.error(toastMessage.toUpperCase(), { toastId: toastMessage })
        }
        dispatch(setNotLoading())
      }
    } catch (error) {
      dispatch(shareTermsheetEmailfailed())
      const toastMessage = 'UPDATE TERMSHEET REQUEST FAILED'
      if (!toast.isActive(toastMessage.toUpperCase())) {
        toast.error(toastMessage.toUpperCase(), { toastId: toastMessage })
      }
    }
    dispatch(setNotLoading())
  }
