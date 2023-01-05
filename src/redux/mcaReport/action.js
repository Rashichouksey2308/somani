import * as types from './actionType'
import API from '../../utils/endpoints'
import Axios from 'axios'
import Cookies from 'js-cookie'
import { setIsLoading, setNotLoading } from '../Loaders/action'
import { handleErrorToast, handleSuccessToast } from '@/utils/helpers/global'

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
   await Axios.post(`${API.corebaseUrl}${API.getMcaReport}`, payload, {
      headers: headers
    }).then((response) => {
      if (response.data.code === 200) {
        dispatch(mcaReportSuccess(response.data.data))
       handleSuccessToast('MCA report generate request submitted successfully')
        dispatch(setNotLoading())
      } else {
        dispatch(mcaReportFailed(response.data.data))
        handleErrorToast('could not process your request at the moment')
        dispatch(setNotLoading())
      }
    })
  } catch (error) {
    dispatch(mcaReportFailed())
   handleErrorToast(error.message)
    dispatch(setNotLoading())
  }
}
