import * as types from './actionType'
import API from '../../utils/endpoints'
import Axios from 'axios'
import Cookies from 'js-cookie'
import { toast } from 'react-toastify'

function updateCredit() {
  return {
    type: types.UPDATE_CREDIT,
  }
}

function updateCreditSuccess() {
  return {
    type: types.UPDATE_CREDIT_SUCCESSFULL,
  }
}

function updateCreditFailed() {
  return {
    type: types.UPDATE_CREDIT_FAILED,
  }
}

function updateOrder() {
  return {
    type: types.UPDATE_ORDER,
  }
}

function updateOrderSuccess() {
  return {
    type: types.UPDATE_ORDER_SUCCESSFULL,
  }
}

function updateOrderFailed() {
  return {
    type: types.UPDATE_ORDER_FAILED,
  }
}


// ******** Search leads  ***********/////

function searchLeads() {
  return {
    type : types.SEARCH_LEADS
  }
}
function searchLeadsSuccess(payload) {
  return {
    type : types.SEARCH_LEADS_SUCCESSFULL,
    payload,
  }
}
function searchLeadsFailed() {
  return {
    type : types.SEARCH_LEADS_FAILED
  }
}

// ******** get Termsheet ***********/////

function gettermsheet() {
  return {
    type : types.GET_TERMSHEET
  }
}
function gettermsheetsuccess(payload) {
  return {
    type : types.GET_TERMSHEET_SUCCESSFULL,
    payload,
  }
}
function gettermsheetfailed() {
  return {
    type : types.GET_TERMSHEET_FAILED
  }
}

//**********get All Termsheets */////



function getALLTermsheet() {
  return {
    type : types.GET_ALL_TERMSHEET
  }
}
function getALLTermsheetsuccess(payload) {
  return {
    type : types.GET_ALL_TERMSHEET_SUCCESSFULL,
    payload,
  }
}
function getALLTermsheetfailed() {
  return {
    type : types.GET_ALL_TERMSHEET_FAILED
  }
}

// ******** update Termsheet ***********/////

function updatetermsheet() {
  return {
    type : types.UPDATE_TERMSHEET
  }
}
function updatetermsheetsuccess(payload) {
  return {
    type : types.UPDATE_TERMSHEET_SUCCESSFULL,
    payload,
  }
}
function updatetermsheetfailed() {
  return {
    type : types.UPDATE_TERMSHEET_FAILED
  }
}





export const SearchLeads = (payload) => async (dispatch, getState, api) => {
  
  let cookie = Cookies.get('SOMANI')
  const decodedString = Buffer.from(cookie, 'base64').toString('ascii')

  let [userId, refreshToken, jwtAccessToken] = decodedString.split('#')
  var headers = { authorization: jwtAccessToken }
  try {
    dispatch(searchLeads())
    Axios.get(`${API.corebaseUrl}${API.search}${payload}`, {
      headers: headers,
    }).then((response) => {
      if (response.data.code === 200) {
        dispatch(searchLeadsSuccess(response.data))
      } else {
        dispatch(searchLeadsFailed(response.data))
        const toastMessage = 'Search Leads request Failed'
        if(!toast.isActive(toastMessage)){
            toast.error(toastMessage, {toastId: toastMessage})
        }
      }
    })
  } catch (error) {
    dispatch(searchLeadsFailed())
    const toastMessage = 'Search Leads request Failed'
    if(!toast.isActive(toastMessage)){
        toast.error(toastMessage, {toastId: toastMessage})
    }
  }
}



export const UpdateCredit = (payload) => async (dispatch, getState, api) => {
  // dispatch(updateCredit()
  let cookie = Cookies.get('SOMANI')
  const decodedString = Buffer.from(cookie, 'base64').toString('ascii')

  let [userId, refreshToken, jwtAccessToken] = decodedString.split('#')
  var headers = { authorization: jwtAccessToken, Cache: 'no-cache' }
  try {
    Axios.post(`${API.corebaseUrl}${API.updateCredit}`, payload, {
      headers: headers,
    }).then((response) => {
      if (response.data.code === 200) {
        dispatch(updateCreditSuccess(response.data))
      } else {
        dispatch(updateCreditFailed(response.data))
        const toastMessage = 'UPDATE REQUEST FAILED'
        if(!toast.isActive(toastMessage)){
            toast.error(toastMessage, {toastId: toastMessage})
        }
      }
    })
  } catch (error) {
    dispatch(updateCreditFailed())
    const toastMessage = 'UPDATE CREDIT REQUEST FAILED'
    if(!toast.isActive(toastMessage)){
        toast.error(toastMessage, {toastId: toastMessage})
    }
  }
}

export const UpdateOrderShipment = (payload) => async (dispatch, getState, api) => {
//   dispatch(updateOrder()
console.log(payload, "update order shipment")
  let cookie = Cookies.get('SOMANI')
  const decodedString = Buffer.from(cookie, 'base64').toString('ascii')

  let [userId, refreshToken, jwtAccessToken] = decodedString.split('#')
  var headers = { authorization: jwtAccessToken, Cache: 'no-cache' }
  try {
    Axios.put(`${API.corebaseUrl}${API.orderDetailUpdate}`, payload, {
      headers: headers,
    }).then((response) => {
      if (response.data.code === 200) {
        dispatch(updateOrderSuccess(response.data.data))
        const toastMessage = 'REQUEST SUBMITTED'
        if(!toast.isActive(toastMessage)){
          toast.success(toastMessage, {toastId: toastMessage})
        }
      } else {
        dispatch(updateOrderFailed(response.data.data))
        const toastMessage = 'UPDATE REQUEST FAILED'
        if(!toast.isActive(toastMessage)){
            toast.error(toastMessage, {toastId: toastMessage})
        }
      }
    })
  } catch (error) {
    dispatch(updateOrderFailed())
    const toastMessage = 'UPDATE ORDER REQUEST FAILED'
    if(!toast.isActive(toastMessage)){
        toast.error(toastMessage, {toastId: toastMessage})
    }
  }
}

//////////********** termsheet *************/////////

export const getTermsheet = (payload) => async (dispatch, getState, api) => {
  try {
    dispatch(gettermsheet())
    let cookie = await Cookies.get('SOMANI')
    const decodedString = Buffer.from(cookie, 'base64').toString('ascii')
    console.log(payload, "payload")
    let [userId, refreshToken, jwtAccessToken] = decodedString.split('#')
    var headers = { authorization: jwtAccessToken, Cache: 'no-cache', }
    Axios.get(`${API.corebaseUrl}${API.gettermsheet}?company=${payload.companyId}`, { headers: headers }).then(
      (response) => {
        if (response.data.code === 200) {
          dispatch(gettermsheetsuccess(response.data.data))
        } else {
          dispatch(gettermsheetfailed(response.data.data))
          let toastMessage = 'Could not fetch Termsheet'
          if (!toast.isActive(toastMessage)) {
            toast.error(toastMessage, { toastId: toastMessage })
          }
        }
      },
    )
  } catch (error) {
    dispatch(gettermsheetfailed())
    console.log(error, 'Get Termsheet API Failed')
  }
}

export const getAllTermsheet = (payload) => async (dispatch, getState, api) => {
  try {
    let cookie = await Cookies.get('SOMANI')
    const decodedString = Buffer.from(cookie, 'base64').toString('ascii')
    console.log(payload, "payload")
    let [userId, refreshToken, jwtAccessToken] = decodedString.split('#')
    var headers = { authorization: jwtAccessToken, Cache: 'no-cache', }
    Axios.get(`${API.corebaseUrl}${API.gettermsheet}`, { headers: headers }).then(
      (response) => {
        if (response.data.code === 200) {
          dispatch(getALLTermsheetsuccess(response.data.data))
        } else {
          dispatch(getALLTermsheetfailed(response.data.data))
          let toastMessage = 'Could not fetch Termsheet'
          if (!toast.isActive(toastMessage)) {
            toast.error(toastMessage, { toastId: toastMessage })
          }
        }
      },
    )
  } catch (error) {
    dispatch(gettermsheetfailed())
    console.log(error, 'Get Termsheet API Failed')
  }
}

export const updateTermsheet = (payload) => async (dispatch, getState, api) => {
  
  let cookie = Cookies.get('SOMANI')
  const decodedString = Buffer.from(cookie, 'base64').toString('ascii')

  let [userId, refreshToken, jwtAccessToken] = decodedString.split('#')
  var headers = { authorization: jwtAccessToken, Cache: 'no-cache' }
  try {
    Axios.post(`${API.corebaseUrl}${API.updatetermsheet}`, payload, {
      headers: headers,
    }).then((response) => {
      if (response.data.code === 200) {
        dispatch(updatetermsheetsuccess(response.data))
      } else {
        dispatch(updatetermsheetfailed(response.data))
        const toastMessage = 'UPDATE REQUEST FAILED'
        if(!toast.isActive(toastMessage)){
            toast.error(toastMessage, {toastId: toastMessage})
        }
      }
    })
  } catch (error) {
    dispatch(updatetermsheetfailed())
    const toastMessage = 'UPDATE TERMSHEET REQUEST FAILED'
    if(!toast.isActive(toastMessage)){
        toast.error(toastMessage, {toastId: toastMessage})
    }
  }
}
