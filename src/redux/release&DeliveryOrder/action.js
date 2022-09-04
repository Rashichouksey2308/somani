import * as types from './actionType'
import Axios from 'axios'
import { toast } from 'react-toastify'
import API from '../../utils/endpoints'
import Cookies from 'js-cookie'
import router from 'next/router'

function getDelivery() {
  return {
    type: types.GET_DELIVERY,
  }
}
function getDeliverySuccess(payload) {
  return {
    type: types.GET_DELIVERY_SUCCESS,
    payload,
  }
}
function getDeliveryFailed() {
  return {
    type: types.GET_DELIVERY_FAILED,
  }
}
function getAllDelivery() {
  return {
    type: types.GET_ALL_DELIVERY,
  }
}
function getAllDeliverySuccess(payload) {
  return {
    type: types.GET_ALL_DELIVERY_SUCCESS,
    payload,
  }
}
function getAllDeliveryFailed() {
  return {
    type: types.GET_ALL_DELIVERY_FAILED,
  }
}

function updateDelivery() {
  return {
    type: types.UPDATE_DELIVERY,
  }
}
function updateDeliverySuccess(payload) {
  return {
    type: types.UPDATE_DELIVERY_SUCCESS,
    payload,
  }
}
function updateDeliveryFailed() {
  return {
    type: types.UPDATE_DELIVERY_FAILED,
  }
}

export const GetAllDelivery = (payload) => async (dispatch, getState, api) => {
    let cookie = Cookies.get('SOMANI')
    const decodedString = Buffer.from(cookie, 'base64').toString('ascii')
    let [userId, refreshToken, jwtAccessToken] = decodedString.split('#')
    let headers = { authorization: jwtAccessToken, Cache: 'no-cache', 'Access-Control-Allow-Origin': '*' }
    try {
      Axios.get(
        `${API.corebaseUrl}${API.delivery}${payload ? payload : ''}`,
        {
          headers: headers,
        },

      ).then((response) => {
        if (response.data.code === 200) {
          dispatch(getAllDeliverySuccess(response.data.data))
        } else {
          dispatch(getAllDeliveryFailed(response.data.data))
          let toastMessage = 'COULD NOT PROCESS YOUR REQUEST'
          if (!toast.isActive(toastMessage.toUpperCase())) {
            toast.error(toastMessage.toUpperCase(), { toastId: toastMessage })   }
        }
      })
    } catch (error) {
      dispatch(getAllDeliveryFailed())

      let toastMessage = 'COULD NOT PROCESS YOUR REQUEST AT THIS TIME'
      if (!toast.isActive(toastMessage.toUpperCase())) {
        toast.error(toastMessage.toUpperCase(), { toastId: toastMessage })
      }
    }
  }

export const GetDelivery =
  (payload) => async (dispatch, getState, api) => {
    let cookie = Cookies.get('SOMANI')
    const decodedString = Buffer.from(cookie, 'base64').toString('ascii')

    let [userId, refreshToken, jwtAccessToken] = decodedString.split('#')
    let headers = { authorization: jwtAccessToken, Cache: 'no-cache', 'Access-Control-Allow-Origin': '*' }
    try {
      Axios.get(`${API.corebaseUrl}${API.delivery}${payload}`, {
        headers: headers,
      }).then((response) => {
        if (response.data.code === 200) {
          dispatch(getDeliverySuccess(response.data.data))
        } else {
          dispatch(getDeliveryFailed(response.data.data))
          let toastMessage = 'COULD NOT PROCESS YOUR REQUEST'
          if (!toast.isActive(toastMessage.toUpperCase())) {
            toast.error(toastMessage.toUpperCase(), { toastId: toastMessage })   }
        }
      })
    } catch (error) {
      dispatch(getDeliveryFailed())

      let toastMessage = 'COULD NOT PROCESS YOUR REQUEST AT THIS TIME'
      if (!toast.isActive(toastMessage.toUpperCase())) {
        toast.error(toastMessage.toUpperCase(), { toastId: toastMessage })
      }
    }
  }

export const UpdateDelivery =
  (payload) => async (dispatch, getState, api) => {
    let cookie = Cookies.get('SOMANI')
    const decodedString = Buffer.from(cookie, 'base64').toString('ascii')

    let [userId, refreshToken, jwtAccessToken] = decodedString.split('#')
    let headers = { authorization: jwtAccessToken, Cache: 'no-cache', 'Access-Control-Allow-Origin': '*' }
    try {
      Axios.put(`${API.corebaseUrl}${API.delivery}`, payload, {
        headers: headers,
      }).then((response) => {
        if (response.data.code === 200) {
          dispatch(updateDeliverySuccess(response.data.data))
          let id = sessionStorage.getItem('ROrderID')
          dispatch(GetDelivery(`?deliveryId=${id}`))

          let toastMessage = 'SAVED SUCCESSFULLY'
          if (!toast.isActive(toastMessage.toUpperCase())) {
            toast.success(toastMessage.toUpperCase(), { toastId: toastMessage })   }
        } else {
          dispatch(updateDeliveryFailed(response.data.data))
          let toastMessage = 'COULD NOT PROCESS YOUR REQUEST'
          if (!toast.isActive(toastMessage.toUpperCase())) {
            toast.error(toastMessage.toUpperCase(), { toastId: toastMessage })   }
        }
      })
    } catch (error) {
      dispatch(updateDeliveryFailed())

      let toastMessage = 'COULD NOT SUBMIT YOUR REQUEST'
      if (!toast.isActive(toastMessage.toUpperCase())) {
        toast.error(toastMessage.toUpperCase(), { toastId: toastMessage })
      }
    }
  }

export const UploadCustomDoc =
  (payload) => async (dispatch, getState, api) => {
    let cookie = Cookies.get('SOMANI')
    const decodedString = Buffer.from(cookie, 'base64').toString('ascii')

    let [userId, refreshToken, jwtAccessToken] = decodedString.split('#')
    let headers = { authorization: jwtAccessToken, Cache: 'no-cache', 'Access-Control-Allow-Origin': '*' }
    try {
      Axios.post(`${API.corebaseUrl}${API.delivery}`, payload, {
        headers: headers,
      }).then((response) => {
        if (response.data.code === 200) {
          dispatch(getDeliverySuccess(response.data.data))
        } else {
          dispatch(getDeliveryFailed(response.data.data))
          let toastMessage = 'COULD NOT PROCESS YOUR REQUEST'
          if (!toast.isActive(toastMessage.toUpperCase())) {
            toast.error(toastMessage.toUpperCase(), { toastId: toastMessage })   }
        }
      })
    } catch (error) {
      dispatch(getDeliveryFailed())

      let toastMessage = 'COULD NOT PROCESS YOUR REQUEST AT THIS TIME'
      if (!toast.isActive(toastMessage.toUpperCase())) {
        toast.error(toastMessage.toUpperCase(), { toastId: toastMessage })
      }
    }
  }
