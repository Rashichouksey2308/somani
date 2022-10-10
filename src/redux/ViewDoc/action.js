import * as types from './actionType'
import Axios from 'axios'
import { toast } from 'react-toastify'
import API from '../../utils/endpoints'
import Cookies from 'js-cookie'
import router from 'next/router'

function viewingDocument() {
  return {
    type: types.VEIW_DOCUMENT,
  }
}
function viewingDocumentSuccess(payload) {
  return {
    type: types.VEIW_DOCUMENT_SUCCESS,
    payload,
  }
}
function viewingDocumentFailed() {
  return {
    type: types.VEIW_DOCUMENT_FAILED,
  }
}

export const ViewDocument = (payload) => async (dispatch, getState, api) => {
  let cookie = Cookies.get('SOMANI')
  const decodedString = Buffer.from(cookie, 'base64').toString('ascii')
  console.log(
    `${API.corebaseUrl}${API.getVessel}`,
    `API.corebaseUrl{API.getVessel}`,
  )

  let [userId, refreshToken, jwtAccessToken] = decodedString.split('#')
  let headers = { authorization: jwtAccessToken, Cache: 'no-cache', 'Access-Control-Allow-Origin': '*' }
  try {
    Axios.post(`${API.corebaseUrl}${API.viewDoc}`, payload, {
      headers: headers,
    }).then((response) => {
      if (response.data.code === 200) {
        dispatch(viewingDocumentSuccess(response.data.data))
        console.log('ViewDocument')
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
      }
    })
  } catch (error) {
    dispatch(viewingDocumentFailed())

    let toastMessage = 'COULD NOT GET DATA AT THIS TIME'
    if (!toast.isActive(toastMessage.toUpperCase())) {
      toast.error(toastMessage.toUpperCase(), { toastId: toastMessage })
    }
  }
}
