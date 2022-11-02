import * as types from './actionType'
import Axios from 'axios'
import { toast } from 'react-toastify'
import API from '../../utils/endpoints'
import Cookies from 'js-cookie'
import { setIsLoading, setNotLoading } from '../Loaders/action'

function getCustomClearance () {
  return {
    type: types.GET_CUSTOM_CLEARANCE
  }
}

function getCustomClearanceSuccess (payload) {
  return {
    type: types.GET_CUSTOM_CLEARANCE_SUCCESS,
    payload
  }
}

function getCustomClearanceFailed () {
  return {
    type: types.GET_CUSTOM_CLEARANCE_FAILED
  }
}

function getAllCustomClearance () {
  return {
    type: types.GET_ALL_CUSTOM_CLEARANCE
  }
}

function getAllCustomClearanceSuccess (payload) {
  return {
    type: types.GET_ALL_CUSTOM_CLEARANCE_SUCCESS,
    payload
  }
}

function getAllCustomClearanceFailed () {
  return {
    type: types.GET_ALL_CUSTOM_CLEARANCE_FAILED
  }
}

function updateCustomClearance () {
  return {
    type: types.UPDATE_CUSTOM_CLEARANCE
  }
}

function updateCustomClearanceSuccess (payload) {
  return {
    type: types.UPDATE_CUSTOM_CLEARANCE_SUCCESS,
    payload
  }
}

function updateCustomClearanceFailed () {
  return {
    type: types.UPDATE_CUSTOM_CLEARANCE_FAILED
  }
}

export const GetAllCustomClearance =
  (payload) => async (dispatch, getState, api) => {
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
      const response = await Axios.get(
        `${API.corebaseUrl}${API.customClearance}${payload || ''}`,
        {
          headers: headers
        }
      )
      if (response.data.code === 200) {
        dispatch(getAllCustomClearanceSuccess(response.data.data))
        dispatch(setNotLoading())
        return response.data.code
      } else {
        dispatch(getAllCustomClearanceFailed(response.data.data))
        const toastMessage = 'COULD NOT PROCESS YOUR REQUEST'
        if (!toast.isActive(toastMessage.toUpperCase())) {
          toast.error(toastMessage.toUpperCase(), { toastId: toastMessage })
        }
        dispatch(setNotLoading())
      }
    } catch (error) {
      dispatch(getAllCustomClearanceFailed())

      const toastMessage = 'COULD NOT PROCESS YOUR REQUEST AT THIS TIME'
      if (!toast.isActive(toastMessage.toUpperCase())) {
        toast.error(toastMessage.toUpperCase(), { toastId: toastMessage })
      }
      dispatch(setNotLoading())
    }
  }

export const GetCustomClearance =
  (payload) => async (dispatch, getState, api) => {
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
      Axios.get(`${API.corebaseUrl}${API.customClearance}${payload}`, {
        headers: headers
      }).then((response) => {
        if (response.data.code === 200) {
          dispatch(getCustomClearanceSuccess(response.data.data))
          dispatch(setNotLoading())
        } else {
          dispatch(getCustomClearanceFailed(response.data.data))
          const toastMessage = 'COULD NOT PROCESS YOUR REQUEST'
          if (!toast.isActive(toastMessage.toUpperCase())) {
            toast.error(toastMessage.toUpperCase(), { toastId: toastMessage })
          }
          dispatch(setNotLoading())
        }
      })
    } catch (error) {
      dispatch(getCustomClearanceFailed())

      const toastMessage = 'COULD NOT PROCESS YOUR REQUEST AT THIS TIME'
      if (!toast.isActive(toastMessage.toUpperCase())) {
        toast.error(toastMessage.toUpperCase(), { toastId: toastMessage })
      }
      dispatch(setNotLoading())
    }
  }

export const UpdateCustomClearance =
  (payload) => async (dispatch, getState, api) => {
    dispatch(setIsLoading())
    // let CustomId = sessionStorage.getItem('customId')
    const cookie = Cookies.get('SOMANI')
    const decodedString = Buffer.from(cookie, 'base64').toString('ascii')

    const [userId, refreshToken, jwtAccessToken] = decodedString.split('#')
    const headers = {
      authorization: jwtAccessToken,
      Cache: 'no-cache',
      'Access-Control-Allow-Origin': '*'
    }
    try {
      const response = await Axios.put(
        `${API.corebaseUrl}${API.customClearance}`,
        payload.fd,
        {
          headers: headers
        }
      )
      if (response.data.code === 200) {
        // dispatch(GetAllCustomClearance(`?customClearanceId=${CustomId}`))
        const id = sessionStorage.getItem('customId')
        dispatch(GetAllCustomClearance(`?customClearanceId=${id}`))
        dispatch(updateCustomClearanceSuccess(response.data.data))

        let toastMessage = 'updated  SUCCESSFULLY'
        if (payload.task === 'save') {
          toastMessage = 'SAVED SUCCESSFULLY'
        }
        if (!toast.isActive(toastMessage.toUpperCase())) {
          toast.success(toastMessage.toUpperCase(), { toastId: toastMessage })
        }
        dispatch(setNotLoading())
        return response.data.code
      } else {
        dispatch(updateCustomClearanceFailed(response.data.data))
        const toastMessage = 'COULD NOT PROCESS YOUR REQUEST'
        if (!toast.isActive(toastMessage.toUpperCase())) {
          toast.error(toastMessage.toUpperCase(), { toastId: toastMessage })
        }
        dispatch(setNotLoading())
      }
    } catch (error) {
      dispatch(updateCustomClearanceFailed())

      const toastMessage = 'COULD NOT SUBMIT YOUR REQUEST'
      if (!toast.isActive(toastMessage.toUpperCase())) {
        toast.error(toastMessage.toUpperCase(), { toastId: toastMessage })
      }
      dispatch(setNotLoading())
    }
  }

export const UploadCustomDoc = (payload) => async (dispatch, getState, api) => {
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
    Axios.post(`${API.corebaseUrl}${API.customClearanceDoc}`, payload, {
      headers: headers
    }).then((response) => {
      if (response.data.code === 200) {
        dispatch(getCustomClearanceSuccess(response.data.data))
        const toastMessage = 'DOCUMENT UPDATED'
        if (!toast.isActive(toastMessage.toUpperCase())) {
          toast.error(toastMessage.toUpperCase(), { toastId: toastMessage })
        }
        dispatch(setNotLoading())
      } else {
        dispatch(getCustomClearanceFailed(response.data.data))
        const toastMessage = 'COULD NOT PROCESS YOUR REQUEST'
        if (!toast.isActive(toastMessage.toUpperCase())) {
          toast.error(toastMessage.toUpperCase(), { toastId: toastMessage })
        }
        dispatch(setNotLoading())
      }
    })
  } catch (error) {
    dispatch(getCustomClearanceFailed())

    const toastMessage = 'COULD NOT PROCESS YOUR REQUEST AT THIS TIME'
    if (!toast.isActive(toastMessage.toUpperCase())) {
      toast.error(toastMessage.toUpperCase(), { toastId: toastMessage })
    }
    dispatch(setNotLoading())
  }
}
