import * as types from './actionType'
import Axios from 'axios'
import { toast } from 'react-toastify'
import API from '../../utils/endpoints'
import Cookies from 'js-cookie'
import router from 'next/router'

function getForwardHedging() {
  return {
    type: types.GET_FORWARDHEDGING,
  }
}
function getForwardHedgingSuccess(payload) {
  return {
    type: types.GET_FORWARDHEDGING_SUCCESS,
    payload,
  }
}
function getForwardHedgingFailed() {
  return {
    type: types.GET_FORWARDHEDGING_FAILED,
  }
}
function getAllForwardHedging() {
  return {
    type: types.GET_ALL_FORWARDHEDGING,
  }
}
function getAllForwardHedgingSuccess(payload) {
  return {
    type: types.GET_ALL_FORWARDHEDGING_SUCCESS,
    payload,
  }
}
function getAllForwardHedgingFailed() {
  return {
    type: types.GET_ALL_FORWARDHEDGING_FAILED,
  }
}

function updateForwardHedging() {
  return {
    type: types.UPDATE_FORWARDHEDGING,
  }
}
function updateForwardHedgingSuccess(payload) {
  return {
    type: types.UPDATE_FORWARDHEDGING_SUCCESS,
    payload,
  }
}
function updateForwardHedgingFailed() {
  return {
    type: types.UPDATE_FORWARDHEDGING_FAILED,
  }
}

export const GetAllForwardHedging =
  (payload) => async (dispatch, getState, api) => {
    let cookie = Cookies.get('SOMANI')
    const decodedString = Buffer.from(cookie, 'base64').toString('ascii')
    let [userId, refreshToken, jwtAccessToken] = decodedString.split('#')
    var headers = { authorization: jwtAccessToken, Cache: 'no-cache' }
    try {
      Axios.get(
        `${API.corebaseUrl}${API.getForwardHedging}${payload ? payload : ''}`,
        {
          headers: headers,
        },
      
      ).then((response) => {
        if (response.data.code === 200) {
          dispatch(getAllForwardHedgingSuccess(response.data.data))
          let toastMessage = 'SAVED SUCCESSFULLY'
          if (!toast.isActive(toastMessage)) {
            toast.success(toastMessage, { toastId: toastMessage })
          }
        } else {
          dispatch(getAllForwardHedgingFailed(response.data.data))
          let toastMessage = 'COULD NOT PROCESS YOUR REQUEST'
          if (!toast.isActive(toastMessage)) {
            toast.error(toastMessage, { toastId: toastMessage })
          }
        }
      })
    } catch (error) {
      dispatch(getAllForwardHedgingFailed())

      let toastMessage = 'COULD NOT GET FORWARD HEDGING AT THIS TIME'
      if (!toast.isActive(toastMessage)) {
        toast.error(toastMessage, { toastId: toastMessage })
      }
    }
  }

export const GetForwardHedging =
  (payload) => async (dispatch, getState, api) => {
    let cookie = Cookies.get('SOMANI')
    const decodedString = Buffer.from(cookie, 'base64').toString('ascii')

    let [userId, refreshToken, jwtAccessToken] = decodedString.split('#')
    var headers = { authorization: jwtAccessToken, Cache: 'no-cache' }
    try {
      Axios.get(`${API.corebaseUrl}${API.getForwardHedging}${payload}`, {
        headers: headers,
      }).then((response) => {
        if (response.data.code === 200) {
          dispatch(getForwardHedgingSuccess(response.data.data))
        } else {
          dispatch(getForwardHedgingFailed(response.data.data))
          let toastMessage = 'COULD NOT PROCESS YOUR REQUEST'
          if (!toast.isActive(toastMessage)) {
            toast.error(toastMessage, { toastId: toastMessage })
          }
        }
      })
    } catch (error) {
      dispatch(getForwardHedgingFailed())

      let toastMessage = 'COULD NOT GET   FORWARD HEDGING AT THIS TIME'
      if (!toast.isActive(toastMessage)) {
        toast.error(toastMessage, { toastId: toastMessage })
      }
    }
  }

export const UpdateForwardHedging =
  (payload) => async (dispatch, getState, api) => {
    let cookie = Cookies.get('SOMANI')
    const decodedString = Buffer.from(cookie, 'base64').toString('ascii')

    let [userId, refreshToken, jwtAccessToken] = decodedString.split('#')
    var headers = { authorization: jwtAccessToken, Cache: 'no-cache' }
    try {
      Axios.put(`${API.corebaseUrl}${API.updateForwardHedging}`, payload, {
        headers: headers,
      }).then((response) => {
        if (response.data.code === 200) {
          dispatch(updateForwardHedgingSuccess(response.data.data))
        } else {
          dispatch(updateForwardHedgingFailed(response.data.data))
          let toastMessage = 'COULD NOT PROCESS YOUR REQUEST'
          if (!toast.isActive(toastMessage)) {
            toast.error(toastMessage, { toastId: toastMessage })
          }
        }
      })
    } catch (error) {
      dispatch(updateForwardHedgingFailed())

      let toastMessage = 'COULD NOT UPDATE FORWARDHEDGING AT THIS TIME'
      if (!toast.isActive(toastMessage)) {
        toast.error(toastMessage, { toastId: toastMessage })
      }
    }
  }
