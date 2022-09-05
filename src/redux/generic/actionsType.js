import Axios from 'axios'
import Router from 'next/router'
import API from '../../utils/endpoints'
import * as types from './actions'
import { toast } from 'react-toastify'
// import history from '../../history'
import Cookies from 'js-cookie'
import { setAuthenticationCookie } from '../../utils/authentication'

export function submitGeneric() {
  return {
    type: types.SUBMIT_GENERIC,
  }
}

export function submitGenericSuccess(payload) {
  return {
    type: types.SUBMIT_GENERIC_SUCCESS,
    payload: payload,
  }
}

export function getGenericFailed(payload) {
  return {
    type: types.GET_GENERIC_FAILED,
  }
}
export function getGeneric() {
  return {
    type: types.GET_GENERIC,
  }
}

export function getGenericSuccess(payload) {
  console.log(payload, 987)
  return {
    type: types.GET_GENERIC_SUCCESS,
    payload: payload,
  }
}

export function submitGenericFailed(payload) {
  return {
    type: types.SUBMIT_GENERIC_FAILED,
  }
}

export const updateGenericData =
  (payload) => async (dispatch, getState, api) => {
    console.log(payload, 'updateGenericData')
    let cookie = Cookies.get('SOMANI')
    const decodedString = Buffer.from(cookie, 'base64').toString('ascii')

    let [userId, refreshToken, jwtAccessToken] = decodedString.split('#')
    let headers = { authorization: jwtAccessToken, Cache: 'no-cache', 'Access-Control-Allow-Origin': '*' }
    try {
      let response = await Axios.put(
        `${API.corebaseUrl}${API.updateGeneric}`,
        payload,
        {
          headers: headers,
        },
      )
      if (response.data.code === 200) {
        dispatch(submitGenericSuccess(response.data))
        let toastMessage = 'Submitted'
        if (!toast.isActive(toastMessage.toUpperCase())) {
          toast.success(toastMessage.toUpperCase(), { toastId: toastMessage })
        }
        console.log(response.data.timestamp, 'responsesdasd')
        return response.data.timestamp
      } else {
        dispatch(submitGenericFailed(response.data.data))
        let toastMessage = 'COULD NOT PROCESS YOUR REQUEST'
        if (!toast.isActive(toastMessage.toUpperCase())) {
          toast.error(toastMessage.toUpperCase(), { toastId: toastMessage })
        }
      }
    } catch (error) {
      dispatch(submitGenericFailed())

      let toastMessage = 'PUT GENERIC API FAILED'
      if (!toast.isActive(toastMessage.toUpperCase())) {
        toast.error(toastMessage.toUpperCase(), { toastId: toastMessage })
      }
    }
  }

export const getGenericData = (payload) => async (dispatch, getState, api) => {
  console.log(payload, 'updateGenericData')
  let cookie = Cookies.get('SOMANI')
  const decodedString = Buffer.from(cookie, 'base64').toString('ascii')

  let [userId, refreshToken, jwtAccessToken] = decodedString.split('#')
  let headers = { authorization: jwtAccessToken, Cache: 'no-cache', 'Access-Control-Allow-Origin': '*' }
  try {
    let response = await Axios.get(`${API.corebaseUrl}${API.updateGeneric}`, {
      headers: headers,
    })
    if (response.data.code === 200) {
      console.log(response.data.data.data, 'data')
      dispatch(getGenericSuccess(response.data.data.data))
      return response.data.data.data
    } else {
      dispatch(getGenericFailed(response.data.data))
      let toastMessage = 'COULD NOT PROCESS YOUR REQUEST'
      if (!toast.isActive(toastMessage.toUpperCase())) {
        toast.error(toastMessage.toUpperCase(), { toastId: toastMessage })
      }
    }
  } catch (error) {
    dispatch(getGenericFailed())

    let toastMessage = 'PUT GENERIC API FAILED'
    if (!toast.isActive(toastMessage.toUpperCase())) {
      toast.error(toastMessage.toUpperCase(), { toastId: toastMessage })
    }
  }
}
