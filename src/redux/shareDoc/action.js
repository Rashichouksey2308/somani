import * as types from './actionType'
import Axios from 'axios'
import { toast } from 'react-toastify'
import API from '../../utils/endpoints'
import Cookies from 'js-cookie'
import { setIsLoading, setNotLoading } from '../Loaders/action'
import { handleErrorToast, handleSuccessToast } from '@/utils/helpers/global'

function shareDocument () {
  return {
    type: types.SHARE_DOCUMENT
  }
}

function shareDocumentSuccess (payload) {
  return {
    type: types.SHARE_DOCUMENT_SUCCESS,
    payload
  }
}

function shareDocumentFailed () {
  return {
    type: types.SHARE_DOCUMENT_FAILED
  }
}

export const ShareDocument = (payload) => async (dispatch, getState, api) => {
  dispatch(setIsLoading())
  const cookie = Cookies.get('SOMANI')
  const decodedString = Buffer.from(cookie, 'base64').toString('ascii')

  const [userId, refreshToken, jwtAccessToken] = decodedString.split('#')
  var headers = { authorization: jwtAccessToken, Cache: 'no-cache' }
  try {
   await Axios.post(`${API.corebaseUrl}${API.viewDoc}`, payload, {
      headers: headers
    }).then((response) => {
      if (response.data.code === 200) {
        dispatch(shareDocumentSuccess(response.data.data))

        dispatch(setNotLoading())
        dispatch(shareDocumentFailed(response.data.data))
        handleSuccessToast('DOcument Shared Successfully')
        return response.data
      } else {
        dispatch(shareDocumentFailed())
        handleErrorToast('COULD NOT PROCESS YOUR REQUEST')
        dispatch(setNotLoading())
      }
    })
  } catch (error) {
    dispatch(shareDocumentFailed())
    handleErrorToast('COULD NOT PROCESS YOUR REQUEST')
    dispatch(setNotLoading())
  }
}
