import * as types from './actionType'
import Axios from 'axios'
import { toast } from 'react-toastify'
import API from '../../utils/endpoints'
import Cookies from 'js-cookie'
import { setIsLoading, setNotLoading } from '../Loaders/action'

function viewingDocument () {
  return {
    type: types.VEIW_DOCUMENT,
  }
}

function viewingDocumentSuccess (payload) {
  return {
    type: types.VEIW_DOCUMENT_SUCCESS,
    payload,
  }
}

function viewingDocumentFailed () {
  return {
    type: types.VEIW_DOCUMENT_FAILED,
  }
}

export const ViewDocument = (payload) => async (dispatch, getState, api) => {
  dispatch(setIsLoading())
  let cookie = Cookies.get('SOMANI')
  const decodedString = Buffer.from(cookie, 'base64').toString('ascii')

  let [userId, refreshToken, jwtAccessToken] = decodedString.split('#')
  let headers = {
    authorization: jwtAccessToken,
    Cache: 'no-cache',
    'Access-Control-Allow-Origin': '*',
  }
  try {
    Axios.post(`${API.corebaseUrl}${API.viewDoc}`, payload, {
      headers: headers,
    }).then((response) => {
      if (response.data.code === 200) {
        dispatch(viewingDocumentSuccess(response.data.data))

        dispatch(setNotLoading())
        window.open(
          response.data.data.signedUrl,
          '_blank',
          'noopener,noreferrer',
        )
      } else {
        dispatch(viewingDocumentFailed(response.data.data))
        let toastMessage = 'COULD NOT PROCESS YOUR REQUEST'
        if (!toast.isActive(toastMessage.toUpperCase())) {
          toast.error(toastMessage.toUpperCase(), { toastId: toastMessage })
        }
        dispatch(setNotLoading())
      }
    })
  } catch (error) {
    dispatch(viewingDocumentFailed())

    let toastMessage = 'COULD NOT GET DATA AT THIS TIME'
    if (!toast.isActive(toastMessage.toUpperCase())) {
      toast.error(toastMessage.toUpperCase(), { toastId: toastMessage })
    }
    dispatch(setNotLoading())
  }
}
export const previewDocument = (payload) => async (dispatch, getState, api) => {
  dispatch(setIsLoading())
  let cookie = Cookies.get('SOMANI')
  const decodedString = Buffer.from(cookie, 'base64').toString('ascii')

  let [userId, refreshToken, jwtAccessToken] = decodedString.split('#')
  let headers = {
    authorization: jwtAccessToken,
    Cache: 'no-cache',
    'Access-Control-Allow-Origin': '*',
  }
  try {
    let response = await Axios.post(
      `${API.corebaseUrl}${API.preview}`,
      payload,
      {
        headers: headers,
      },
    )
    if (response.data.code === 200) {
      dispatch(viewingDocumentSuccess(response.data.data))

      dispatch(setNotLoading())
      window.open(
        response.data.data.signedUrl,
        '_blank',
        'noopener,noreferrer',
      )
    } else {
      dispatch(viewingDocumentFailed(response.data.data))
      let toastMessage = 'COULD NOT PROCESS YOUR REQUEST'
      if (!toast.isActive(toastMessage.toUpperCase())) {
        toast.error(toastMessage.toUpperCase(), { toastId: toastMessage })
      }
      dispatch(setNotLoading())
    }
  } catch (error) {
    dispatch(viewingDocumentFailed())

    let toastMessage = 'COULD NOT GET DATA AT THIS TIME'
    if (!toast.isActive(toastMessage.toUpperCase())) {
      toast.error(toastMessage.toUpperCase(), { toastId: toastMessage })
    }
    dispatch(setNotLoading())
  }
}
