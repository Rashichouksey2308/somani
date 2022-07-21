import * as types from './actionType'
import API from '../../utils/endpoints'
import Axios from 'axios'
import Router from 'next/router'
import Cookies from 'js-cookie'
import { toast } from 'react-toastify'

function placeNewOrder() {
  return {
    type: types.PLACE_ORDER,
  }
}

function placeNewOrderSuccess(payload) {
  return {
    type: types.PLACE_ORDER_SUCCESSFULL,
    payload,
  }
}

function placeNewOrderFailed() {
  return {
    type: types.PLACE_ORDER_FAILED,
  }
}

export const PlaceNewOrder = (payload) => async (dispatch, getState, api) => {
  dispatch(placeNewOrder())
  let cookie = Cookies.get('SOMANI')
  const decodedString = Buffer.from(cookie, 'base64').toString('ascii')

  let [userId, refreshToken, jwtAccessToken] = decodedString.split('#')
  var headers = { authorization: jwtAccessToken, Cache: 'no-cache' }
  try {
    Axios.post(`${API.corebaseUrl}${API.newOrder}`, payload, {
      headers: headers,
    }).then((response) => {
      if (response.data.code === 200) {
        dispatch(placeNewOrderSuccess(response.data.data))

        let toastMessage = 'ORDER PLACED'
        if (!toast.isActive(toastMessage)) {
          toast.success(toastMessage, { toastId: toastMessage })
        }
        Router.push('/order-list')
      } else {
        dispatch(placeNewOrderFailed(response.data.data))
        let toastMessage = 'FAILED TO PLACE NEW ORDER'
        if (!toast.isActive(toastMessage)) {
          toast.error(toastMessage, { toastId: toastMessage })
        }
      }
    })
  } catch (error) {
    dispatch(placeNewOrderFailed())
    let toastMessage = error.message
    if (!toast.isActive(toastMessage)) {
      toast.error(toastMessage, { toastId: toastMessage })
    }
  }
}
