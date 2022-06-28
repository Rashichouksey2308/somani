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
