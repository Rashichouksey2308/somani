import * as types from './actionType'
import Axios from 'axios'
import { toast } from 'react-toastify'
import API from '../../utils/endpoints'
import Cookies from 'js-cookie'
import Router from 'next/router'

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

function updatingLcAmendment() {
  return {
    type: types.UPDATE_LC_AMENDMENT,
  }
}
function updatingLcAmendmentSuccess(payload) {
  return {
    type: types.UPDATE_LC_AMENDMENT_SUCCESS,
    payload,
  }
}
function updatingLcAmendmentFailed() {
  return {
    type: types.UPDATE_LC_AMENDMENT_FAILED,
  }
}

function updatingAmendment() {
  return {
    type: types.UPDATE_LC_AMENDMENT_POST,
  }
}
function updatingAmendmentSuccess(payload) {
  return {
    type: types.UPDATE_LC_AMENDMENT_POST_SUCCESS,
    payload,
  }
}
function updatingAmendmentFailed() {
  return {
    type: types.UPDATE_LC_AMENDMENT_POST_FAILED,
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
        if (!toast.isActive(toastMessage.toUpperCase())) {
          toast.error(toastMessage.toUpperCase(), { toastId: toastMessage })
        }
      }
    })
  } catch (error) {
    dispatch(getLcModuleFailed())

    let toastMessage = 'COULD NOT GET LC AT THIS TIME'
    if (!toast.isActive(toastMessage.toUpperCase())) {
      toast.error(toastMessage.toUpperCase(), { toastId: toastMessage })
    }
  }
}

export const UpdateLcModule = (payload) => async (dispatch, getState, api) => {
  let cookie = Cookies.get('SOMANI')
  const decodedString = Buffer.from(cookie, 'base64').toString('ascii')

  let [userId, refreshToken, jwtAccessToken] = decodedString.split('#')
  var headers = { authorization: jwtAccessToken, Cache: 'no-cache' }
  try {
    let response = await Axios.put(
      `${API.corebaseUrl}${API.updateLcModule}`,
      payload.obj,
      {
        headers: headers,
      },
    )
    if (response.data.code === 200) {
      dispatch(updateLcModuleSuccess(response.data.data))
      if (payload.task === 'preview') {
        Router.push('/letter-table/letter-amend/id')
      }
      let toastMessage = 'Updated SUCCESSFULLY'
      if (!toast.isActive(toastMessage.toUpperCase())) {
        toast.success(toastMessage.toUpperCase(), { toastId: toastMessage })
      }
      // router.push('/margin-money')
      return response.data.code
    } else {
      dispatch(updateLcModuleFailed(response.data.data))
      let toastMessage = 'UPDATE REQUEST FAILED'
      if (!toast.isActive(toastMessage.toUpperCase())) {
        toast.error(toastMessage.toUpperCase(), { toastId: toastMessage })
      }
    }
  } catch (error) {
    dispatch(updateLcModuleFailed())
    let toastMessage = 'COULD NOT UPDATE LC AT THIS TIME'
    if (!toast.isActive(toastMessage.toUpperCase())) {
      toast.error(toastMessage.toUpperCase(), { toastId: toastMessage })
    }
  }
}

export const UpdateLcAmendment =
  (payload) => async (dispatch, getState, api) => {
    let cookie = Cookies.get('SOMANI')
    const decodedString = Buffer.from(cookie, 'base64').toString('ascii')

    let [userId, refreshToken, jwtAccessToken] = decodedString.split('#')
    var headers = { authorization: jwtAccessToken, Cache: 'no-cache' }
    try {
      Axios.put(`${API.corebaseUrl}${API.updateLcModuleAmendment}`, payload, {
        headers: headers,
      }).then((response) => {
        if (response.data.code === 200) {
          dispatch(updatingLcAmendmentSuccess(response.data.data))
          let toastMessage = 'SAVED SUCCESSFULLY'
          if (!toast.isActive(toastMessage.toUpperCase())) {
            toast.success(toastMessage.toUpperCase(), { toastId: toastMessage })
          }
          Router.push('/lc-module')
        } else {
          dispatch(updatingLcAmendmentFailed(response.data.data))
          let toastMessage = 'UPDATE REQUEST FAILED'
          if (!toast.isActive(toastMessage.toUpperCase())) {
            toast.error(toastMessage.toUpperCase(), { toastId: toastMessage })
          }
        }
      })
    } catch (error) {
      dispatch(updatingLcAmendmentFailed())
      let toastMessage = 'COULD NOT UPDATE LC AT THIS TIME'
      if (!toast.isActive(toastMessage.toUpperCase())) {
        toast.error(toastMessage.toUpperCase(), { toastId: toastMessage })
      }
    }
  }
export const UpdateAmendment = (payload) => async (dispatch, getState, api) => {
  let cookie = Cookies.get('SOMANI')
  const decodedString = Buffer.from(cookie, 'base64').toString('ascii')

  let [userId, refreshToken, jwtAccessToken] = decodedString.split('#')
  var headers = { authorization: jwtAccessToken, Cache: 'no-cache' }
  try {
    Axios.put(`${API.corebaseUrl}${API.updateLcAmendmentPost}`, payload, {
      headers: headers,
    }).then((response) => {
      if (response.data.code === 200) {
        dispatch(updatingAmendmentSuccess(response.data.data))
        let toastMessage = 'SAVED SUCCESSFULLY'
        if (!toast.isActive(toastMessage.toUpperCase())) {
          toast.success(toastMessage.toUpperCase(), { toastId: toastMessage })
        }
        // router.push('/margin-money')
        Router.push('/amend-letter')
      } else {
        dispatch(updatingAmendmentFailed(response.data.data))
        let toastMessage = 'UPDATE REQUEST FAILED'
        if (!toast.isActive(toastMessage.toUpperCase())) {
          toast.error(toastMessage.toUpperCase(), { toastId: toastMessage })
        }
      }
    })
  } catch (error) {
    dispatch(updatingAmendmentFailed())
    let toastMessage = 'COULD NOT UPDATE LC AT THIS TIME'
    if (!toast.isActive(toastMessage.toUpperCase())) {
      toast.error(toastMessage.toUpperCase(), { toastId: toastMessage })
    }
  }
}
