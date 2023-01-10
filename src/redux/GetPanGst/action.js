import * as types from './actionType'
import API from '../../utils/endpoints'
import Axios from 'axios'
import Cookies from 'js-cookie'
import { setIsLoading, setNotLoading } from '../Loaders/action'
import { handleErrorToast } from '@/utils/helpers/global'

function getPanGst () {
  return {
    type: types.GET_COMPANY_PAN
  }
}

function getPanGstSuccess (payload) {
  return {
    type: types.GET_COMPANY_PAN_SUCCESSFULL,
    payload
  }
}

function getPanGstFailed () {
  return {
    type: types.GET_COMPANY_PAN_FAILED
  }
}

export const GetPanGst = (payload) => async (dispatch, getState, api) => {
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
   await Axios.post(
      `${API.userbaseUrl}${API.getPanGst}`,
      { name: payload.query },
      {
        headers: headers
      }
    ).then((response) => {
      if (response.data.code === 200) {
        dispatch(getPanGstSuccess(response.data.data))
        dispatch(setNotLoading())
      } else {
        dispatch(getPanGstFailed())
        handleErrorToast('FAILED TO GET COMPANY PAN')
        dispatch(setNotLoading())
      }
    })
  } catch (error) {
    dispatch(getPanGstFailed())
    handleErrorToast(error.message)
    dispatch(setNotLoading())
  }
}
