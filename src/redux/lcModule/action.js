import * as types from './actionType'
import Axios from 'axios'
import { toast } from 'react-toastify'
import API from '../../utils/endpoints'
import Cookies from 'js-cookie'
import router from 'next/router'

function getLcModule() {
  return {
    type: types.GET_LC_MODULE,
  }
}
function getLcModuleSuccess(payload) {
  return {
    type: types.GET_LC_MODULE_SUCCESS,
    payload,
  }
}
function getLcModuleFailed() {
  return {
    type: types.GET_LC_MODULE_FAILED,
  }
}

function updatingLcModule() {
  return {
    type: types.UPDATE_LC_MODULE,
  }
}
function updateLcModuleSuccess(payload) {
  return {
    type: types.UPDATE_LC_MODULE_SUCCESS,
    payload,
  }
}
function updateLcModuleFailed() {
  return {
    type: types.UPDATE_LC_MODULE_FAILED,
  }
}

export const GetLcModule = (payload) => async (dispatch, getState, api) => {
  let cookie = Cookies.get('SOMANI')
  const decodedString = Buffer.from(cookie, 'base64').toString('ascii')

  let [userId, refreshToken, jwtAccessToken] = decodedString.split('#')
  var headers = { authorization: jwtAccessToken, Cache: 'no-cache' }
  try {
    Axios.get(`${API.corebaseUrl}${API.getLcModule}${payload ? payload : ''}`, {
      headers: headers,
    }).then((response) => {
      if (response.data.code === 200) {
        dispatch(getLcModuleSuccess(response.data.data))
      } else {
        dispatch(getLcModuleFailed(response.data.data))
        let toastMessage = 'COULD NOT PROCESS YOUR REQUEST'
        if (!toast.isActive(toastMessage)) {
          toast.error(toastMessage, { toastId: toastMessage })
        }
      }
    })
  } catch (error) {
    dispatch(getLcModuleFailed())

    let toastMessage = 'COULD NOT GET LC AT THIS TIME'
    if (!toast.isActive(toastMessage)) {
      toast.error(toastMessage, { toastId: toastMessage })
    }
  }
}

export const UpdateLcModule = (payload) => async (dispatch, getState, api) => {
  let cookie = Cookies.get('SOMANI')
  const decodedString = Buffer.from(cookie, 'base64').toString('ascii')

  let [userId, refreshToken, jwtAccessToken] = decodedString.split('#')
  var headers = { authorization: jwtAccessToken, Cache: 'no-cache' }
  try {
    Axios.put(`${API.corebaseUrl}${API.updateLcModule}`, payload, {
      headers: headers,
    }).then((response) => {
      if (response.data.code === 200) {
        dispatch(updateLcModuleSuccess(response.data.data))
        let toastMessage = 'SAVED SUCCESSFULLY'
        if (!toast.isActive(toastMessage)) {
          toast.success(toastMessage, { toastId: toastMessage })
        }
        // router.push('/margin-money')
      } else {
        dispatch(updateLcModuleFailed(response.data.data))
        let toastMessage = 'UPDATE REQUEST FAILED'
        if (!toast.isActive(toastMessage)) {
          toast.error(toastMessage, { toastId: toastMessage })
        }
      }
    })
  } catch (error) {
    dispatch(updateLcModuleFailed())
    let toastMessage = 'COULD NOT UPDATE LC AT THIS TIME'
    if (!toast.isActive(toastMessage)) {
      toast.error(toastMessage, { toastId: toastMessage })
    }
  }
}