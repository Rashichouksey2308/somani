import * as types from './actionType'
import API from '../../utils/endpoints'
import Axios from 'axios'
import Router from 'next/router'
import Cookies from 'js-cookie'
import { toast } from 'react-toastify'
import { setIsLoading, setNotLoading } from '../Loaders/action'
function getPanGst() {
  return {
    type: types.GET_COMPANY_PAN,
  }
}

function getPanGstSuccess(payload) {
  return {
    type: types.GET_COMPANY_PAN_SUCCESSFULL,
    payload,
  }
}

function getPanGstFailed() {
  return {
    type: types.GET_COMPANY_PAN_FAILED,
  }
}

export const GetPanGst = (payload) => async (dispatch, getState, api) => {
  dispatch(setIsLoading())
  //   dispatch(getPanGst())
  let cookie = Cookies.get('SOMANI')

  const decodedString = Buffer.from(cookie, 'base64').toString('ascii')

  let [userId, refreshToken, jwtAccessToken] = decodedString.split('#')
  let headers = { authorization: jwtAccessToken, Cache: 'no-cache', 'Access-Control-Allow-Origin': '*' }
  try {
    Axios.post(
      `${API.baseUrl}${API.getPanGst}`,
      { name: payload.query },
      {
        headers: headers,
      },
    ).then((response) => {
      if (response.data.code === 200) {
        dispatch(getPanGstSuccess(response.data.data))
        dispatch(setNotLoading())
      } else {
        dispatch(getPanGstFailed(response.data.data))
        let toastMessage = 'FAILED TO GET COMPANY PAN'
        if (!toast.isActive(toastMessage.toUpperCase())) {
          toast.error(toastMessage.toUpperCase(), { toastId: toastMessage })
        }
        dispatch(setNotLoading())
      }
    })
  } catch (error) {
    dispatch(getPanGstFailed())
    let toastMessage = error.message
    if (!toast.isActive(toastMessage.toUpperCase())) {
      toast.error(toastMessage.toUpperCase(), { toastId: toastMessage })
    }
    dispatch(setNotLoading())
  }
}
