import * as types from './actionType'
import Axios from 'axios'
import API from '../../utils/endpoints'
import Cookies from 'js-cookie'
import Router from 'next/router'
import { setIsLoading, setNotLoading } from '../Loaders/action'
import { handleErrorToast, handleSuccessToast } from '@/utils/helpers/global'

function getLcModule () {
  return {
    type: types.GET_LC_MODULE
  }
}

function getLcModuleSuccess (payload) {
  return {
    type: types.GET_LC_MODULE_SUCCESS,
    payload
  }
}

function getLcModuleFailed () {
  return {
    type: types.GET_LC_MODULE_FAILED
  }
}

function updatingLcModule () {
  return {
    type: types.UPDATE_LC_MODULE
  }
}

function updateLcModuleSuccess (payload) {
  return {
    type: types.UPDATE_LC_MODULE_SUCCESS,
    payload
  }
}

function updateLcModuleFailed () {
  return {
    type: types.UPDATE_LC_MODULE_FAILED
  }
}

function updatingLcAmendment () {
  return {
    type: types.UPDATE_LC_AMENDMENT
  }
}

function updatingLcAmendmentSuccess (payload) {
  return {
    type: types.UPDATE_LC_AMENDMENT_SUCCESS,
    payload
  }
}

function updatingLcAmendmentFailed () {
  return {
    type: types.UPDATE_LC_AMENDMENT_FAILED
  }
}

function updatingAmendment () {
  return {
    type: types.UPDATE_LC_AMENDMENT_POST
  }
}

function updatingAmendmentSuccess (payload) {
  return {
    type: types.UPDATE_LC_AMENDMENT_POST_SUCCESS,
    payload
  }
}

function updatingAmendmentFailed () {
  return {
    type: types.UPDATE_LC_AMENDMENT_POST_FAILED
  }
}

export const GetLcModule = (payload) => async (dispatch, getState, api) => {
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
  await  Axios.get(`${API.corebaseUrl}${API.getLcModule}${payload || ''}`, {
      headers: headers
    }).then((response) => {
      if (response.data.code === 200) {
        dispatch(getLcModuleSuccess(response.data.data))
        dispatch(setNotLoading())
      } else {
        dispatch(getLcModuleFailed())
       handleErrorToast('COULD NOT PROCESS YOUR REQUEST')
        dispatch(setNotLoading())
      }
    })
  } catch (error) {
    dispatch(getLcModuleFailed())
   handleErrorToast('COULD NOT GET LC AT THIS TIME')
    dispatch(setNotLoading())
  }
}

export const UpdateLcModule = (payload) => async (dispatch, getState, api) => {
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
    const response = await Axios.put(`${API.corebaseUrl}${API.updateLcModule}`, payload.obj, {
      headers: headers
    })
    if (response.data.code === 200) {
      dispatch(updateLcModuleSuccess(response.data.data))
      if (payload.task === 'preview') {
        Router.push('/letter-table/letter-amend/id')
      }
      handleSuccessToast('Updated SUCCESSFULLY')
      dispatch(setNotLoading())
      return response.data.code
    } else {
      dispatch(updateLcModuleFailed())
      handleErrorToast('UPDATE REQUEST FAILED')
      dispatch(setNotLoading())
    }
  } catch (error) {
    dispatch(updateLcModuleFailed())
   handleErrorToast('COULD NOT UPDATE LC AT THIS TIME')
    dispatch(setNotLoading())
  }
}

export const UpdateLcAmendment = (payload) => async (dispatch, getState, api) => {
  dispatch(setIsLoading())
  const cookie = Cookies.get('SOMANI')
  const decodedString = Buffer.from(cookie, 'base64').toString('ascii')

  const [userId, refreshToken, jwtAccessToken] = decodedString.split('#')
  var headers = { authorization: jwtAccessToken, Cache: 'no-cache' }
  try {
   await Axios.put(`${API.corebaseUrl}${API.updateLcModuleAmendment}`, payload, {
      headers: headers
    }).then((response) => {
      if (response.data.code === 200) {
        dispatch(updatingLcAmendmentSuccess(response.data.data))
       handleSuccessToast('SAVED SUCCESSFULLY')
        dispatch(setNotLoading())
        Router.push('/lc-module')
      } else {
        dispatch(updatingLcAmendmentFailed())
      handleErrorToast('UPDATE REQUEST FAILED')
        dispatch(setNotLoading())
      }
    })
  } catch (error) {
    dispatch(updatingLcAmendmentFailed())
    handleErrorToast('COULD NOT UPDATE LC AT THIS TIME')
    dispatch(setNotLoading())
  }
}
export const UpdateAmendment = (payload) => async (dispatch, getState, api) => {
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
   await Axios.put(`${API.corebaseUrl}${API.updateLcAmendmentPost}`, payload.fd, {
      headers: headers
    }).then((response) => {
      if (response.data.code === 200) {
        dispatch(updatingAmendmentSuccess(response.data.data))
        handleSuccessToast('SAVED SUCCESSFULLY')
        dispatch(setNotLoading())
        !payload.task ? Router.push('/amend-letter') : Router.push('/letter-table')
      } else {
        dispatch(updatingAmendmentFailed())
        handleErrorToast('UPDATE REQUEST FAILED')
        dispatch(setNotLoading())
      }
    })
  } catch (error) {
    dispatch(updatingAmendmentFailed())
    handleErrorToast('COULD NOT UPDATE LC AT THIS TIME')
    dispatch(setNotLoading())
  }
}
