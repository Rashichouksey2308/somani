import * as types from './actionType'
import Axios from 'axios'
import { toast } from 'react-toastify'
import API from '../../utils/endpoints'
import Cookies from 'js-cookie'
import { setIsLoading, setNotLoading } from '../Loaders/action'

function getLifting () {
  return {
    type: types.GET_LIFTING_DATA
  }
}

function getLiftingSuccess (payload) {
  return {
    type: types.GET_LIFTING_DATA_SUCCESS,
    payload
  }
}

function getLiftingFailed () {
  return {
    type: types.GET_LIFTING_DATA_FAILED
  }
}

function getAllLifting () {
  return {
    type: types.GET_ALL_LIFTING_DATA
  }
}

function getAllLiftingSuccess (payload) {
  return {
    type: types.GET_ALL_LIFTING_DATA_SUCCESS,
    payload
  }
}

function getAllLiftingFailed () {
  return {
    type: types.GET_ALL_LIFTING_DATA_FAILED
  }
}

function updateLiftingData () {
  return {
    type: types.UPDATE_LIFTING_DATA
  }
}

function updateLiftingDataSuccess (payload) {
  return {
    type: types.UPDATE_LIFTING_DATA_SUCCESS,
    payload
  }
}

function updateLiftingDataFailed () {
  return {
    type: types.UPDATE_LIFTING_DATA_FAILED
  }
}

export const GetAllLifting = (payload) => async (dispatch, getState, api) => {
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
    Axios.get(`${API.corebaseUrl}${API.lifting}${payload || ''}`, {
      headers: headers
    }).then((response) => {
      if (response.data.code === 200) {
        dispatch(getAllLiftingSuccess(response.data.data))
        dispatch(setNotLoading())
      } else {
        dispatch(getAllLiftingFailed(response.data.data))
        const toastMessage = 'COULD NOT PROCESS YOUR REQUEST'
        if (!toast.isActive(toastMessage.toUpperCase())) {
          toast.error(toastMessage.toUpperCase(), { toastId: toastMessage })
        }
        dispatch(setNotLoading())
      }
    })
  } catch (error) {
    dispatch(getAllLiftingFailed())

    const toastMessage = 'COULD NOT GET INSPECTION DATA AT THIS TIME'
    if (!toast.isActive(toastMessage.toUpperCase())) {
      toast.error(toastMessage.toUpperCase(), { toastId: toastMessage })
    }
    dispatch(setNotLoading())
  }
}

export const GetLifting = (payload) => async (dispatch, getState, api) => {
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
    Axios.get(`${API.corebaseUrl}${API.getLifting}${payload}`, {
      headers: headers
    }).then((response) => {
      if (response.data.code === 200) {
        dispatch(getLiftingSuccess(response.data.data))
        dispatch(setNotLoading())
      } else {
        dispatch(getLiftingFailed(response.data.data))
        const toastMessage = 'COULD NOT PROCESS YOUR REQUEST'
        if (!toast.isActive(toastMessage.toUpperCase())) {
          toast.error(toastMessage.toUpperCase(), { toastId: toastMessage })
        }
        dispatch(setNotLoading())
      }
    })
  } catch (error) {
    dispatch(getLiftingFailed())

    const toastMessage = 'COULD NOT GET   INSPECTION DATA AT THIS TIME'
    if (!toast.isActive(toastMessage.toUpperCase())) {
      toast.error(toastMessage.toUpperCase(), { toastId: toastMessage })
    }
    dispatch(setNotLoading())
  }
}

export const UpdateLiftingData = (payload) => async (dispatch, getState, api) => {
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
    Axios.put(`${API.corebaseUrl}${API.lifting}`, payload, {
      headers: headers
    }).then((response) => {
      if (response.data.code === 200) {
        dispatch(updateLiftingDataSuccess(response.data.data))
        const toastMessage = 'UPDATED SUCCESSFULLY'
        if (!toast.isActive(toastMessage.toUpperCase())) {
          toast.success(toastMessage.toUpperCase(), {
            toastId: toastMessage
          })
        }
        dispatch(setNotLoading())
      } else {
        dispatch(updateLiftingDataFailed(response.data.data))
        const toastMessage = 'COULD NOT PROCESS YOUR REQUEST'
        if (!toast.isActive(toastMessage.toUpperCase())) {
          toast.error(toastMessage.toUpperCase(), { toastId: toastMessage })
        }
        dispatch(setNotLoading())
      }
    })
  } catch (error) {
    dispatch(updateLiftingDataFailed())

    const toastMessage = 'COULD NOT UPDATE INSPECTION DATA AT THIS TIME'
    if (!toast.isActive(toastMessage.toUpperCase())) {
      toast.error(toastMessage.toUpperCase(), { toastId: toastMessage })
    }
    dispatch(setNotLoading())
  }
}
