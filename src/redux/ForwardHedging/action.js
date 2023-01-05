import * as types from './actionType'
import Axios from 'axios'
import { toast } from 'react-toastify'
import API from '../../utils/endpoints'
import Cookies from 'js-cookie'
import { setIsLoading, setNotLoading } from '../Loaders/action'
import { handleErrorToast } from '@/utils/helpers/global'

function getForwardHedging () {
  return {
    type: types.GET_FORWARDHEDGING
  }
}

function getForwardHedgingSuccess (payload) {
  return {
    type: types.GET_FORWARDHEDGING_SUCCESS,
    payload
  }
}

function getForwardHedgingFailed () {
  return {
    type: types.GET_FORWARDHEDGING_FAILED
  }
}

function getAllForwardHedging () {
  return {
    type: types.GET_ALL_FORWARDHEDGING
  }
}

function getAllForwardHedgingSuccess (payload) {
  return {
    type: types.GET_ALL_FORWARDHEDGING_SUCCESS,
    payload
  }
}

function getAllForwardHedgingFailed () {
  return {
    type: types.GET_ALL_FORWARDHEDGING_FAILED
  }
}

function updateForwardHedging () {
  return {
    type: types.UPDATE_FORWARDHEDGING
  }
}

function updateForwardHedgingSuccess (payload) {
  return {
    type: types.UPDATE_FORWARDHEDGING_SUCCESS,
    payload
  }
}

function updateForwardHedgingFailed () {
  return {
    type: types.UPDATE_FORWARDHEDGING_FAILED
  }
}

export const GetAllForwardHedging = (payload) => async (dispatch, getState, api) => {
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
  await  Axios.get(`${API.corebaseUrl}${API.getForwardHedging}${payload || ''}`, {
      headers: headers
    }).then((response) => {
      if (response.data.code === 200) {
        dispatch(getAllForwardHedgingSuccess(response.data.data))
        dispatch(setNotLoading())
      } else {
        dispatch(getAllForwardHedgingFailed())
        handleErrorToast('COULD NOT PROCESS YOUR REQUEST')
        dispatch(setNotLoading())
      }
    })
  } catch (error) {
    dispatch(getAllForwardHedgingFailed())
    handleErrorToast('COULD NOT GET FORWARD HEDGING AT THIS TIME')
    dispatch(setNotLoading())
  }
}

export const GetForwardHedging = (payload) => async (dispatch, getState, api) => {
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
    await Axios.get(`${API.corebaseUrl}${API.getForwardHedging}${payload}`, {
      headers: headers
    }).then((response) => {
      if (response.data.code === 200) {
        dispatch(getForwardHedgingSuccess(response.data.data))
        dispatch(setNotLoading())
      } else {
        dispatch(getForwardHedgingFailed())
        handleErrorToast('COULD NOT PROCESS YOUR REQUEST')
        dispatch(setNotLoading())
      }
    })
  } catch (error) {
    dispatch(getForwardHedgingFailed())
    handleErrorToast('COULD NOT GET FORWARD HEDGING AT THIS TIME')
    dispatch(setNotLoading())
  }
}

export const UpdateForwardHedging = (payload) => async (dispatch, getState, api) => {
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
   await Axios.put(`${API.corebaseUrl}${API.updateForwardHedging}`, payload.obj, {
      headers: headers
    }).then((response) => {
      if (response.data.code === 200) {
        dispatch(updateForwardHedgingSuccess(response.data.data))

        let toastMessage = 'updated  SUCCESSFULLY'

        if (payload.task === 'save') {
          toastMessage = 'SAVED SUCCESSFULLY'
        }
        if (!toast.isActive(toastMessage.toUpperCase())) {
          toast.success(toastMessage.toUpperCase(), {
            toastId: toastMessage
          })
        }
        dispatch(setNotLoading())
      } else {
        dispatch(updateForwardHedgingFailed())
        handleErrorToast('COULD NOT PROCESS YOUR REQUEST')
        dispatch(setNotLoading())
      }
    })
  } catch (error) {
    dispatch(updateForwardHedgingFailed())
    handleErrorToast('COULD NOT UPDATE FORWARDHEDGING AT THIS TIME')
    dispatch(setNotLoading())
  }
}
