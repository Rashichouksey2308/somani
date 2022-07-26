import Axios from 'axios'
import Router from 'next/router'
import API from '../../utils/endpoints'
import * as types from './actionsType'
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
    var headers = { authorization: jwtAccessToken, Cache: 'no-cache' }
    try {
      Axios.put(`${API.corebaseUrl}${API.updateGeneric}`, payload, {
        headers: headers,
      }).then((response) => {
        if (response.data.code === 200) {
          dispatch(submitGenericSuccess(response.data))
        } else {
          dispatch(submitGenericFailed(response.data.data))
          let toastMessage = 'COULD NOT PROCESS YOUR REQUEST'
          if (!toast.isActive(toastMessage)) {
            toast.error(toastMessage, { toastId: toastMessage })
          }
        }
      })
    } catch (error) {
      dispatch(submitGenericFailed())

      let toastMessage = 'PUT GENERIC API FAILED'
      if (!toast.isActive(toastMessage)) {
        toast.error(toastMessage, { toastId: toastMessage })
      }
    }
  }
