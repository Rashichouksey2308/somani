import Cookies from 'js-cookie'
import Axios from 'axios'
import API from '../../utils/endpoints'
import * as types from './actionType'
import { toast } from 'react-toastify'
import { setIsLoading, setNotLoading } from '../Loaders/action'

const errorMessage = {
  status: 400,
  message: 'Something went wrong'
}

function updatingCam () {
  return {
    type: types.UPDATE_CAM
  }
}

function updatingCamSuccess () {
  return {
    type: types.UPDATE_CAM_SUCCESS
  }
}

function updatingCamFailed () {
  return {
    type: types.UPDATE_CAM_FAILED
  }
}

function gettingDocuments () {
  return {
    type: types.GET_DOCUMENT
  }
}

function gettingDocumentsSuccess (payload) {
  return {
    type: types.GET_DOCUMENT_SUCCESS,
    payload
  }
}

function gettingDocumentsFailed () {
  return {
    type: types.GET_DOCUMENT_FAILED
  }
}

function addingDocuments () {
  return {
    type: types.ADD_DOCUMENT
  }
}

function addingDocumentsSuccess (payload) {
  return {
    type: types.ADD_DOCUMENT_SUCCESS,
    payload
  }
}

function addingDocumentsFailed () {
  return {
    type: types.ADD_DOCUMENT_FAILED
  }
}

function deleteDocuments () {
  return {
    type: types.DELETE_DOCUMENT
  }
}

function deleteDocumentsSuccess (payload) {
  return {
    type: types.DELETE_DOCUMENT_SUCCESS,
    payload
  }
}

function deleteDocumentsFailed () {
  return {
    type: types.DELETE_DOCUMENT_FAILED
  }
}

function changeModuleDocuments () {
  return {
    type: types.MOVE_DOCUMENT
  }
}

function changeModuleDocumentsSuccess (payload) {
  return {
    type: types.MOVE_DOCUMENT_SUCCESS,
    payload
  }
}

function changeModuleDocumentsFailed () {
  return {
    type: types.MOVE_DOCUMENT_FAILED
  }
}

function VerifyingGst () {
  return {
    type: types.GET_GST_KARZA
  }
}

function VerifyingGstSuccess (payload) {
  return {
    type: types.GET_GST_KARZA_SUCCESS,
    payload
  }
}

function VerifyingGstFailed () {
  return {
    type: types.GET_GST_KARZA_FAILED
  }
}

export const UpdateCam = (payload, message) => async (dispatch, getState, api) => {
  dispatch(setIsLoading())

  const cookie = Cookies.get('SOMANI')
  const decodedString = Buffer.from(cookie, 'base64').toString('ascii')

  const [userId, refreshToken, jwtAccessToken] = decodedString.split('#')
  var headers = { authorization: jwtAccessToken, Cache: 'no-cache' }
  try {
    const response = await Axios.put(`${API.corebaseUrl}${API.updateCam}`, payload, {
      headers: headers
    })

    if (response.data.code === 200) {
      dispatch(updatingCamSuccess(response.data.data))

      sessionStorage.setItem('termsheetId', response.data.data.order._id)
      sessionStorage.setItem('termID', response.data.data.order.termsheet._id)
      sessionStorage.setItem('termOrdID', response.data.data.order._id)
      const toastMessage = message

      if (!toast.isActive(toastMessage.toUpperCase())) {
        toast.success(toastMessage.toUpperCase(), { toastId: toastMessage })
      }
      dispatch(setNotLoading())
      return response.data.code
    } else {
      dispatch(updatingCamFailed(response.data.data))
      const toastMessage = response.data.message
      if (!toast.isActive(toastMessage.toUpperCase())) {
        toast.error(toastMessage.toUpperCase(), { toastId: toastMessage })
      }
      dispatch(setNotLoading())
    }
  } catch (error) {
    dispatch(updatingCamFailed())
    const toastMessage = 'COULD NOT PROCESS YOUR REQUEST'
    if (!toast.isActive(toastMessage.toUpperCase())) {
      toast.error(toastMessage.toUpperCase(), { toastId: toastMessage })
    }
    dispatch(setNotLoading())
  }
}

export const GetDocuments = (payload) => async (dispatch, getState, api) => {
  try {
    dispatch(setIsLoading())
    const cookie = Cookies.get('SOMANI')
    const decodedString = Buffer.from(cookie, 'base64').toString('ascii')

    const [userId, refreshToken, jwtAccessToken] = decodedString.split('#')
    const headers = {
      authorization: jwtAccessToken,
      Cache: 'no-cache',
      'Access-Control-Allow-Origin': '*'
    }
    const response = await Axios.get(
      `${API.corebaseUrl}${API.getDocuments}${payload}`,
      {
        headers: headers
      },
      payload
    )
    if (response.data.code === 200) {
      dispatch(gettingDocumentsSuccess(response.data.data))
      dispatch(setNotLoading())
    } else {
      dispatch(gettingDocumentsFailed(response.data.data))
      dispatch(setNotLoading())
    }
  } catch (error) {
    dispatch(gettingDocumentsFailed())
    const toastMessage = 'COULD NOT PROCESS YOUR REQUEST'
    if (!toast.isActive(toastMessage.toUpperCase())) {
      toast.error(toastMessage.toUpperCase(), { toastId: toastMessage })
    }
    dispatch(setNotLoading())
  }
}

export const VerifyGstKarza = (payload) => async (dispatch, getState, api) => {
  try {
    dispatch(setIsLoading())
    const cookie = Cookies.get('SOMANI')

    const decodedString = Buffer.from(cookie, 'base64').toString('ascii')

    const [userId, refreshToken, jwtAccessToken] = decodedString.split('#')
    const headers = {
      authorization: jwtAccessToken,
      Cache: 'no-cache',
      'Access-Control-Allow-Origin': '*'
    }
    dispatch(VerifyingGst())

    const response = await Axios.post(`${API.corebaseUrl}${API.getGstKarza}`, payload, {
      headers: headers
    })
    if (response.data.code === 200) {
      dispatch(VerifyingGstSuccess(response.data.data))
      dispatch(setNotLoading())
    } else {
      dispatch(VerifyingGstFailed(response.data.data))
      const toastMessage = response.data.message
      if (!toast.isActive(toastMessage.toUpperCase())) {
        toast.error(toastMessage.toUpperCase(), { toastId: toastMessage })
      }
      dispatch(setNotLoading())
    }
  } catch (error) {
    dispatch(VerifyingGstFailed())
    const toastMessage = 'COULD NOT PROCESS YOUR REQUEST'
    if (!toast.isActive(toastMessage.toUpperCase())) {
      toast.error(toastMessage.toUpperCase(), { toastId: toastMessage })
    }
    dispatch(setNotLoading())
  }
}

export const AddingDocument = (payload) => async (dispatch, getState, api) => {
  dispatch(setIsLoading())
  const cookie = Cookies.get('SOMANI')
  const decodedString = Buffer.from(cookie, 'base64').toString('ascii')
  const id = sessionStorage.getItem('docFetchID')

  const [userId, refreshToken, jwtAccessToken] = decodedString.split('#')
  const headers = {
    authorization: jwtAccessToken,

    'Content-Type': 'multipart/form-data'
  }

  try {
    Axios.post(`${API.corebaseUrl}${API.addDocuments}`, payload, {
      headers: headers
    }).then((response) => {
      if (response.data.code === 200) {
        dispatch(addingDocumentsSuccess(response.data.data))
        dispatch(GetDocuments(`?order=${id}`))
        const toastMessage = 'Document Successfully Added'
        if (!toast.isActive(toastMessage.toUpperCase())) {
          toast.success(toastMessage.toUpperCase(), { toastId: toastMessage })
        }
        dispatch(setNotLoading())
      } else {
        dispatch(addingDocumentsFailed(response.data.data))
        const toastMessage = response.data.message
        if (!toast.isActive(toastMessage.toUpperCase())) {
          toast.error(toastMessage.toUpperCase(), { toastId: toastMessage })
        }
        dispatch(setNotLoading())
      }
    })
  } catch (error) {
    dispatch(addingDocumentsFailed())
    const toastMessage = 'COULD NOT PROCESS YOUR REQUEST'
    if (!toast.isActive(toastMessage.toUpperCase())) {
      toast.error(toastMessage.toUpperCase(), { toastId: toastMessage })
    }
    dispatch(setNotLoading())
  }
}

export const DeleteDocument = (payload) => async (dispatch, getState, api) => {
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
    Axios.put(`${API.corebaseUrl}${API.deleteDocument}`, payload, {
      headers: headers
    }).then((response) => {
      if (response.data.code === 200) {
        dispatch(deleteDocumentsSuccess(response.data.data))
        const toastMessage = 'Document Successfully DELETED'
        if (!toast.isActive(toastMessage.toUpperCase())) {
          toast.success(toastMessage.toUpperCase(), { toastId: toastMessage })
        }
        dispatch(setNotLoading())
      } else {
        dispatch(deleteDocumentsFailed(response.data.data))
        const toastMessage = 'COULD NOT PROCESS YOUR REQUEST AT THIS TIME'
        if (!toast.isActive(toastMessage.toUpperCase())) {
          toast.error(toastMessage.toUpperCase(), { toastId: toastMessage })
        }
        dispatch(setNotLoading())
      }
    })
  } catch (error) {
    dispatch(deleteDocumentsFailed())
    const toastMessage = 'COULD NOT PROCESS YOUR REQUEST'
    if (!toast.isActive(toastMessage.toUpperCase())) {
      toast.error(toastMessage.toUpperCase(), { toastId: toastMessage })
    }
    dispatch(setNotLoading())
  }
}
export const changeModuleDocument = (payload) => async (dispatch, getState, api) => {
  dispatch(setIsLoading())
  const cookie = Cookies.get('SOMANI')
  const decodedString = Buffer.from(cookie, 'base64').toString('ascii')

  const [userId, refreshToken, jwtAccessToken] = decodedString.split('#')
  var headers = { authorization: jwtAccessToken, Cache: 'no-cache' }
  try {
    const response = await Axios.post(`${API.corebaseUrl}${API.changeDocModule}`, payload, {
      headers: headers
    })
    if (response.data.code === 200) {
      dispatch(changeModuleDocumentsSuccess(response.data.data))
      const toastMessage = 'Document Successfully MOVED'
      if (!toast.isActive(toastMessage.toUpperCase())) {
        toast.success(toastMessage.toUpperCase(), {
          toastId: toastMessage
        })
      }

      dispatch(setNotLoading())
    } else {
      dispatch(changeModuleDocumentsFailed(response.data.data))
      const toastMessage = 'COULD NOT PROCESS YOUR REQUEST AT THIS TIME'
      if (!toast.isActive(toastMessage.toUpperCase())) {
        toast.error(toastMessage.toUpperCase(), { toastId: toastMessage })
      }
      dispatch(setNotLoading())
    }
  } catch (error) {
    dispatch(changeModuleDocumentsFailed())
    const toastMessage = 'COULD NOT PROCESS YOUR REQUEST'
    if (!toast.isActive(toastMessage.toUpperCase())) {
      toast.error(toastMessage.toUpperCase(), { toastId: toastMessage })
    }
    dispatch(setNotLoading())
  }
}
