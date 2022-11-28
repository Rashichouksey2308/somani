import * as types from './actionType'
import API from '../../utils/endpoints'
import Axios from 'axios'
import Cookies from 'js-cookie'
import { toast } from 'react-toastify'
import { setIsLoading, setNotLoading } from '../Loaders/action'

function mcaReport () {
  return {
    type: types.GET_MCA_REPORT
  }
}

function mcaReportSuccess (payload) {
  return {
    type: types.GET_MCA_REPORT_SUCCESS,
    payload
  }
}

function mcaReportFailed () {
  return {
    type: types.GET_MCA_REPORT_FAILURE
  }
}

export const McaReportFetch = (payload) => async (dispatch, getState, api) => {
  dispatch(setIsLoading())
  dispatch(mcaReport())

  const cookie = Cookies.get('SOMANI')
  const decodedString = Buffer.from(cookie, 'base64').toString('ascii')

  const [userId, refreshToken, jwtAccessToken] = decodedString.split('#')
  const headers = {
    authorization: jwtAccessToken,
    Cache: 'no-cache',
    'Access-Control-Allow-Origin': '*'
  }
  try {
    Axios.post(`${API.corebaseUrl}${API.getMcaReport}`, payload, {
      headers: headers
    }).then((response) => {
      if (response.data.code === 200) {
        dispatch(mcaReportSuccess(response.data.data))
        const toastMessage = 'MCA report generate request submitted successfully'
        if (!toast.isActive(toastMessage.toUpperCase())) {
          toast.success(toastMessage.toUpperCase(), { toastId: toastMessage })
        }
        dispatch(setNotLoading())
      } else {
        dispatch(mcaReportFailed(response.data.data))
        const toastMessage = 'could not process your request at the moment'
        if (!toast.isActive(toastMessage.toUpperCase())) {
          toast.error(toastMessage.toUpperCase(), { toastId: toastMessage })
        }
        dispatch(setNotLoading())
      }
    })
  } catch (error) {
    dispatch(mcaReportFailed())
    const toastMessage = error.message
    if (!toast.isActive(toastMessage.toUpperCase())) {
      toast.error(toastMessage.toUpperCase(), { toastId: toastMessage })
    }
    dispatch(setNotLoading())
  }
}
