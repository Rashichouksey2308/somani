import * as types from './actionType'
import Axios from 'axios'
import { toast } from 'react-toastify'
import API from '../../utils/endpoints'
import Cookies from 'js-cookie'
import router from 'next/router'

function getCustomClearance() {
  return {
    type: types.GET_CUSTOM_CLEARANCE,
  }
}
function getCustomClearanceSuccess(payload) {
  return {
    type: types.GET_CUSTOM_CLEARANCE_SUCCESS,
    payload,
  }
}
function getCustomClearanceFailed() {
  return {
    type: types.GET_CUSTOM_CLEARANCE_FAILED,
  }
}
function getAllCustomClearance() {
  return {
    type: types.GET_ALL_CUSTOM_CLEARANCE,
  }
}
function getAllCustomClearanceSuccess(payload) {
  return {
    type: types.GET_ALL_CUSTOM_CLEARANCE_SUCCESS,
    payload,
  }
}
function getAllCustomClearanceFailed() {
  return {
    type: types.GET_ALL_CUSTOM_CLEARANCE_FAILED,
  }
}

function updateCustomClearance() {
  return {
    type: types.UPDATE_CUSTOM_CLEARANCE,
  }
}
function updateCustomClearanceSuccess(payload) {
  return {
    type: types.UPDATE_CUSTOM_CLEARANCE_SUCCESS,
    payload,
  }
}
function updateCustomClearanceFailed() {
  return {
    type: types.UPDATE_CUSTOM_CLEARANCE_FAILED,
  }
}

export const GetAllCustomClearance =
  (payload) => async (dispatch, getState, api) => {
    let cookie = Cookies.get('SOMANI')
    const decodedString = Buffer.from(cookie, 'base64').toString('ascii')
    let [userId, refreshToken, jwtAccessToken] = decodedString.split('#')
    var headers = { authorization: jwtAccessToken, Cache: 'no-cache' }
    try {
      Axios.get(
        `${API.corebaseUrl}${API.customClearance}${payload ? payload : ''}`,
        {
          headers: headers,
        },
      ).then((response) => {
        if (response.data.code === 200) {
          dispatch(getAllCustomClearanceSuccess(response.data.data))
        } else {
          dispatch(getAllCustomClearanceFailed(response.data.data))
          let toastMessage = 'COULD NOT PROCESS YOUR REQUEST'
          if (!toast.isActive(toastMessage)) {
            toast.error(toastMessage, { toastId: toastMessage })
          }
        }
      })
    } catch (error) {
      dispatch(getAllCustomClearanceFailed())

      let toastMessage = 'COULD NOT PROCESS YOUR REQUEST AT THIS TIME'
      if (!toast.isActive(toastMessage)) {
        toast.error(toastMessage, { toastId: toastMessage })
      }
    }
  }

export const GetCustomClearance =
  (payload) => async (dispatch, getState, api) => {
    let cookie = Cookies.get('SOMANI')
    const decodedString = Buffer.from(cookie, 'base64').toString('ascii')

    let [userId, refreshToken, jwtAccessToken] = decodedString.split('#')
    var headers = { authorization: jwtAccessToken, Cache: 'no-cache' }
    try {
      Axios.get(`${API.corebaseUrl}${API.customClearance}${payload}`, {
        headers: headers,
      }).then((response) => {
        if (response.data.code === 200) {
          dispatch(getCustomClearanceSuccess(response.data.data))
        } else {
          dispatch(getCustomClearanceFailed(response.data.data))
          let toastMessage = 'COULD NOT PROCESS YOUR REQUEST'
          if (!toast.isActive(toastMessage)) {
            toast.error(toastMessage, { toastId: toastMessage })
          }
        }
      })
    } catch (error) {
      dispatch(getCustomClearanceFailed())

      let toastMessage = 'COULD NOT PROCESS YOUR REQUEST AT THIS TIME'
      if (!toast.isActive(toastMessage)) {
        toast.error(toastMessage, { toastId: toastMessage })
      }
    }
  }

export const UpdateCustomClearance =
  (payload) => async (dispatch, getState, api) => {
    let cookie = Cookies.get('SOMANI')
    const decodedString = Buffer.from(cookie, 'base64').toString('ascii')

    let [userId, refreshToken, jwtAccessToken] = decodedString.split('#')
    var headers = { authorization: jwtAccessToken, Cache: 'no-cache' }
    try {
      Axios.put(`${API.corebaseUrl}${API.customClearance}`, payload, {
        headers: headers,
      }).then((response) => {
        if (response.data.code === 200) {
          dispatch(updateCustomClearanceSuccess(response.data.data))

          let toastMessage = 'SAVED SUCCESSFULLY'
          if (!toast.isActive(toastMessage)) {
            toast.success(toastMessage, { toastId: toastMessage })
          }
        } else {
          dispatch(updateCustomClearanceFailed(response.data.data))
          let toastMessage = 'COULD NOT PROCESS YOUR REQUEST'
          if (!toast.isActive(toastMessage)) {
            toast.error(toastMessage, { toastId: toastMessage })
          }
        }
      })
    } catch (error) {
      dispatch(updateCustomClearanceFailed())

      let toastMessage = 'COULD NOT SUBMIT YOUR REQUEST'
      if (!toast.isActive(toastMessage)) {
        toast.error(toastMessage, { toastId: toastMessage })
      }
    }
  }

export const UploadCustomDoc = (payload) => async (dispatch, getState, api) => {
  let cookie = Cookies.get('SOMANI')
  const decodedString = Buffer.from(cookie, 'base64').toString('ascii')

  let [userId, refreshToken, jwtAccessToken] = decodedString.split('#')
  var headers = { authorization: jwtAccessToken, Cache: 'no-cache' }
  try {
    Axios.post(`${API.corebaseUrl}${API.customClearanceDoc}`, payload, {
      headers: headers,
    }).then((response) => {
      if (response.data.code === 200) {
        dispatch(getCustomClearanceSuccess(response.data.data))
        let toastMessage = 'DOCUMENT UPDATED'
        if (!toast.isActive(toastMessage)) {
          toast.error(toastMessage, { toastId: toastMessage })
        }
      } else {
        dispatch(getCustomClearanceFailed(response.data.data))
        let toastMessage = 'COULD NOT PROCESS YOUR REQUEST'
        if (!toast.isActive(toastMessage)) {
          toast.error(toastMessage, { toastId: toastMessage })
        }
      }
    })
  } catch (error) {
    dispatch(getCustomClearanceFailed())

    let toastMessage = 'COULD NOT PROCESS YOUR REQUEST AT THIS TIME'
    if (!toast.isActive(toastMessage)) {
      toast.error(toastMessage, { toastId: toastMessage })
    }
  }
}
