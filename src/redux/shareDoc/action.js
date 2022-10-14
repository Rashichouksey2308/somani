import * as types from './actionType'
import Axios from 'axios'
import { toast } from 'react-toastify'
import API from '../../utils/endpoints'
import Cookies from 'js-cookie'
import router from 'next/router'
import { setIsLoading, setNotLoading } from '../Loaders/action'
function shareDocument() {
  return {
    type: types.SHARE_DOCUMENT,
  }
}
function shareDocumentSuccess(payload) {
  return {
    type: types.SHARE_DOCUMENT_SUCCESS,
    payload,
  }
}
function shareDocumentFailed() {
  return {
    type: types.SHARE_DOCUMENT_FAILED,
  }
}

export const ShareDocument = (payload) => async (dispatch, getState, api) => {
  dispatch(setIsLoading())
  let cookie = Cookies.get('SOMANI')
  const decodedString = Buffer.from(cookie, 'base64').toString('ascii')
  console.log(
    `${API.corebaseUrl}${API.getVessel}`,
    `API.corebaseUrl{API.getVessel}`,
  )

  let [userId, refreshToken, jwtAccessToken] = decodedString.split('#')
  var headers = { authorization: jwtAccessToken, Cache: 'no-cache' }
  try {
    Axios.post(`${API.corebaseUrl}${API.viewDoc}`, payload, {
      headers: headers,
    }).then((response) => {
      if (response.data.code === 200) {
        dispatch(shareDocumentSuccess(response.data.data))
        console.log('ViewDocument')
        dispatch(setNotLoading())
        dispatch(shareDocumentFailed(response.data.data))
        let toastMessage = 'DOcument Shared Successfully'
        if (!toast.isActive(toastMessage.toUpperCase())) {
          toast.error(toastMessage.toUpperCase(), { toastId: toastMessage })
        }
      } else {
        dispatch(shareDocumentFailed(response.data.data))
        let toastMessage = 'COULD NOT PROCESS YOUR REQUEST'
        if (!toast.isActive(toastMessage.toUpperCase())) {
          toast.error(toastMessage.toUpperCase(), { toastId: toastMessage })
        }
        dispatch(setNotLoading())
      }
    })
  } catch (error) {
    dispatch(shareDocumentFailed())

    let toastMessage = 'COULD NOT PROCESS YOUR REQUEST'
    if (!toast.isActive(toastMessage.toUpperCase())) {
      toast.error(toastMessage.toUpperCase(), { toastId: toastMessage })
    }
    dispatch(setNotLoading())
  }
}
