import * as types from './actionType'
import { toast } from 'react-toastify'
import Axios from 'axios'
import API from '../../utils/endpoints'
import Cookies from 'js-cookie'

function getComanyDetails() {
  return {
    type: types.GET_COMPANY_DETAIL,
  }
}

function getComanyDetailsSuccess(payload) {
  return {
    type: types.GET_COMPANY_DETAIL_SUCCESS,
    payload,
  }
}

function getComanyDetailsFailed() {
  return {
    type: types.GET_COMPANY_DETAIL_FAILED,
  }
}

export const GetCompanyDetails = (payload) => (dispatch, getState, api) => {
  let cookie = Cookies.get('SOMANI')
  const decodedString = Buffer.from(cookie, 'base64').toString('ascii')

  let [userId, refreshToken, jwtAccessToken] = decodedString.split('#')
  var headers = { authorization: jwtAccessToken, Cache: 'no-cache' }

  try {
    Axios.post(
      `${API.corebaseUrl}${API.getCompanyDetails}${payload ? payload : ''}`,
      {
        headers: headers,
      },
    ).then((response) => {
      if (response.data.code === 200) {
        dispatch(getComanyDetailsSuccess(response.data.data))
      } else {
        dispatch(getComanyDetailsFailed(response.data.data))
        let toastMessage = 'COULD NOT PROCESS YOUR REQUEST AT THIS TIME'
        if (!toast.isActive(toastMessage)) {
          toast.error(toastMessage, { toastId: toastMessage })
        }
      }
    })
  } catch (error) {
    dispatch(getComanyDetailsFailed())

    let toastMessage = 'COULD NOT FETCH COMPANY DETAILS'
    if (!toast.isActive(toastMessage)) {
      toast.error(toastMessage, { toastId: toastMessage })
    }
  }
}
